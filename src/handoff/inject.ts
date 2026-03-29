import { promises as fs } from "node:fs";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { Handoff } from "../types.js";
import type { PluginLogger } from "../types/openclaw.js";
import { checkSchemaVersion } from "./schema.js";
import { parseMdHandoff } from "./md-export.js";
import { dequeueHandoff } from "../queue/dequeue.js";

// ---------------------------------------------------------------------------
// injectHandoff
//
// Full inject flow:
//  1. Source: dequeue next from agent's queue OR load by explicit handoff_id
//  2. Schema version check + migration if needed
//  3. .md reconciliation — if file was edited after DB row, merge edits back
//  4. Build context string for system prompt injection
//  5. Mark status=injected, record target_session_key
//  6. Return context string
// ---------------------------------------------------------------------------

export type InjectResult = {
  handoffId: string;
  context: string;
  sourceAgentId: string;
  chainId: string | null;
};

export async function injectHandoff(params: {
  agentId: string;
  sessionKey: string;
  db: SupabaseClient;
  logger: PluginLogger;
  handoffId?: string; // explicit id; omit to dequeue from queue
}): Promise<InjectResult | null> {
  const { agentId, sessionKey, db, logger, handoffId } = params;

  // ------------------------------------------------------------------
  // 1. Load handoff
  // ------------------------------------------------------------------
  let handoff: Handoff | null;

  if (handoffId) {
    const { data, error } = await db
      .from("handoffs")
      .select("*")
      .eq("id", handoffId)
      .single();

    if (error || !data) {
      logger.warn(`[relayclaw] inject: handoff ${handoffId} not found: ${error?.message ?? "no data"}`);
      return null;
    }
    handoff = data as Handoff;

    // Mark as processing in the queue so concurrent agents don't grab it.
    await db
      .from("agent_queues")
      .update({ status: "processing", dequeued_at: new Date().toISOString() })
      .eq("handoff_id", handoffId)
      .eq("status", "pending");
  } else {
    handoff = await dequeueHandoff({ agentId, db, logger });
    if (!handoff) return null; // queue empty
  }

  // ------------------------------------------------------------------
  // 2. Schema version check + migration
  // ------------------------------------------------------------------
  try {
    await checkSchemaVersion({ id: handoff.id, schema_version: handoff.schema_version }, db);
  } catch (err) {
    logger.warn(
      `[relayclaw] inject: schema check failed for ${handoff.id}: ${String((err as Error)?.message ?? err)} — proceeding anyway`,
    );
  }

  // ------------------------------------------------------------------
  // 3. .md reconciliation — prefer edited file if newer than DB row
  // ------------------------------------------------------------------
  if (handoff.md_export_path) {
    handoff = await reconcileMdEdits({ handoff, db, logger });
  }

  // ------------------------------------------------------------------
  // 4. Build context string
  // ------------------------------------------------------------------
  const context = buildContextString(handoff);

  // ------------------------------------------------------------------
  // 5. Mark injected
  // ------------------------------------------------------------------
  const { error: updateErr } = await db
    .from("handoffs")
    .update({
      status: "injected",
      injected_at: new Date().toISOString(),
      target_session_key: sessionKey,
    })
    .eq("id", handoff.id);

  if (updateErr) {
    logger.warn(
      `[relayclaw] inject: failed to mark ${handoff.id} as injected: ${updateErr.message}`,
    );
  }

  logger.info(
    `[relayclaw] Handoff ${handoff.id} injected into session ${sessionKey} ` +
      `(from=${handoff.source_agent_id} chain=${handoff.chain_id ?? "none"})`,
  );

  return {
    handoffId: handoff.id,
    context,
    sourceAgentId: handoff.source_agent_id,
    chainId: handoff.chain_id,
  };
}

// ---------------------------------------------------------------------------
// reconcileMdEdits
//
// Compares the .md file's mtime against the handoff's last DB timestamp.
// If the file is newer (human edited it during approval), parses the edits
// and writes them back to the DB row before injection.
// ---------------------------------------------------------------------------

async function reconcileMdEdits(params: {
  handoff: Handoff;
  db: SupabaseClient;
  logger: PluginLogger;
}): Promise<Handoff> {
  const { handoff, db, logger } = params;
  if (!handoff.md_export_path) return handoff;

  let fileMtimeMs: number;
  let fileContent: string;
  try {
    const stat = await fs.stat(handoff.md_export_path);
    fileMtimeMs = stat.mtimeMs;
    fileContent = await fs.readFile(handoff.md_export_path, "utf8");
  } catch {
    return handoff; // file missing or unreadable — use DB version
  }

  // Use the most recent DB timestamp as the "last DB write" reference.
  const dbTimestamps = [
    handoff.approved_at,
    handoff.queued_at,
    handoff.created_at,
  ].filter(Boolean) as string[];

  const dbLastWriteMs = Math.max(...dbTimestamps.map((t) => Date.parse(t)));

  if (fileMtimeMs <= dbLastWriteMs) {
    return handoff; // DB is authoritative — no edits
  }

  // File is newer — parse and apply edits.
  const edits = parseMdHandoff(fileContent);
  const update: Record<string, unknown> = {};

  if (edits.goal) update.goal = edits.goal;
  if (edits.status_summary) update.status_summary = edits.status_summary;
  if (edits.notes !== undefined) update.notes = edits.notes;
  if (edits.decisions?.length) update.decisions = edits.decisions;
  if (edits.artifacts?.length) update.artifacts = edits.artifacts;
  if (edits.blockers?.length) update.blockers = edits.blockers;
  if (edits.next_steps?.length) update.next_steps = edits.next_steps;

  if (Object.keys(update).length === 0) return handoff;

  const { data: updated, error } = await db
    .from("handoffs")
    .update(update)
    .eq("id", handoff.id)
    .select("*")
    .single();

  if (error) {
    logger.warn(
      `[relayclaw] inject: failed to write .md edits back for ${handoff.id}: ${error.message}`,
    );
    return handoff;
  }

  logger.info(`[relayclaw] inject: applied .md edits for ${handoff.id} (file was newer than DB)`);
  return updated as Handoff;
}

// ---------------------------------------------------------------------------
// buildContextString — formats the handoff as a system context block
// ---------------------------------------------------------------------------

function buildContextString(h: Handoff): string {
  const lines: string[] = [
    "--- HANDOFF RECEIVED ---",
    `From: ${h.source_agent_id} → You (${h.target_agent_id})`,
    h.chain_id ? `Chain: ${h.chain_id} (seq ${h.chain_sequence})` : "",
    h.confidence !== null ? `Confidence: ${(h.confidence * 100).toFixed(0)}%` : "",
    "",
    "## Goal",
    h.goal,
    "",
    "## Status Summary",
    h.status_summary,
  ].filter((l, i) => i < 4 || l !== ""); // keep leading lines even if empty

  if (h.decisions.length > 0) {
    lines.push("", "## Decisions Made");
    for (const d of h.decisions) {
      lines.push(`• ${d.decision}: ${d.rationale}`);
    }
  }

  if (h.artifacts.length > 0) {
    lines.push("", "## Artifacts");
    for (const a of h.artifacts) {
      lines.push(`• ${a.path} (${a.type}): ${a.description}`);
    }
  }

  if (h.blockers.length > 0) {
    lines.push("", "## Active Blockers");
    for (const b of h.blockers) {
      const sev = b.severity ? ` [${b.severity}]` : "";
      lines.push(`• ${b.description}${sev}`);
      if (b.suggested_resolution) lines.push(`  → ${b.suggested_resolution}`);
    }
  }

  if (h.next_steps.length > 0) {
    lines.push("", "## Recommended Next Steps");
    for (const s of h.next_steps) {
      const pri = s.priority ? `[${s.priority}] ` : "";
      lines.push(`• ${pri}${s.step}`);
    }
  }

  if (h.notes) {
    lines.push("", "## Notes", h.notes);
  }

  lines.push("", "--- END HANDOFF ---");

  return lines.join("\n");
}
