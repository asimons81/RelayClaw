import type { SupabaseClient } from "@supabase/supabase-js";
import type { Handoff, MergeStrategy } from "../types.js";
import type { OpenClawPluginApi, PluginLogger } from "../types/openclaw.js";
import type { RelayClawConfig } from "../config.js";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type TelegramSend = (
  to: string,
  text: string,
  opts?: Record<string, unknown>,
) => Promise<void>;

function getTelegramSend(api: OpenClawPluginApi): TelegramSend | null {
  const runtime = api.runtime as Record<string, unknown>;
  const channel = runtime?.channel as Record<string, unknown> | undefined;
  const telegram = channel?.telegram as Record<string, unknown> | undefined;
  const send = telegram?.sendMessageTelegram;
  return typeof send === "function" ? (send as TelegramSend) : null;
}

// ---------------------------------------------------------------------------
// resolveConflict
//
// Applies the merge strategy from the incoming handoff against all existing
// pending handoffs for the same target agent. Called by enqueue.ts after
// detect_queue_conflicts() reveals > 1 pending items.
// ---------------------------------------------------------------------------

export async function resolveConflict(params: {
  incoming: Handoff;
  existing: Handoff[];
  strategy: MergeStrategy;
  db: SupabaseClient;
  api: OpenClawPluginApi;
  config: RelayClawConfig;
  logger: PluginLogger;
}): Promise<void> {
  const { incoming, existing, strategy, db, api, config, logger } = params;

  if (existing.length === 0) return;

  logger.info(
    `[relayclaw] Conflict resolution: strategy=${strategy} incoming=${incoming.id} ` +
      `existing=[${existing.map((h) => h.id).join(", ")}]`,
  );

  switch (strategy) {
    case "merge":
      await resolveMerge({ incoming, existing, db, logger });
      break;
    case "replace":
      await resolveReplace({ incoming, existing, db, logger });
      break;
    case "flag_conflict":
      await resolveFlagConflict({ incoming, existing, db, api, config, logger });
      break;
  }
}

// ---------------------------------------------------------------------------
// merge — combine documents from all conflicting handoffs into one new row
// ---------------------------------------------------------------------------

async function resolveMerge(params: {
  incoming: Handoff;
  existing: Handoff[];
  db: SupabaseClient;
  logger: PluginLogger;
}): Promise<void> {
  const { incoming, existing, db, logger } = params;

  const all = [incoming, ...existing];
  const sourceIds = all.map((h) => h.id).join(", ");

  // Combine arrays — deduplicate by JSON string representation.
  const dedupe = <T>(arrays: T[][]): T[] => {
    const seen = new Set<string>();
    const result: T[] = [];
    for (const arr of arrays) {
      for (const item of arr) {
        const key = JSON.stringify(item);
        if (!seen.has(key)) {
          seen.add(key);
          result.push(item);
        }
      }
    }
    return result;
  };

  // Use the most detailed goal/status_summary (longest).
  const goal = all.reduce((best, h) => (h.goal.length > best.length ? h.goal : best), "");
  const statusSummary = all.reduce(
    (best, h) => (h.status_summary.length > best.length ? h.status_summary : best),
    "",
  );

  const decisions = dedupe(all.map((h) => h.decisions));
  const artifacts = dedupe(all.map((h) => h.artifacts));
  const blockers = dedupe(all.map((h) => h.blockers));
  const nextSteps = dedupe(all.map((h) => h.next_steps));

  // Provenance note.
  const notes = [
    incoming.notes ?? "",
    `[merged_from: ${sourceIds}]`,
  ]
    .filter(Boolean)
    .join("\n");

  // Insert merged handoff.
  const insert = {
    schema_version: incoming.schema_version,
    status: "pending" as const,
    source_agent_id: incoming.source_agent_id,
    target_agent_id: incoming.target_agent_id,
    source_session_key: incoming.source_session_key,
    goal,
    status_summary: statusSummary,
    decisions,
    artifacts,
    blockers,
    next_steps: nextSteps,
    confidence: incoming.confidence,
    notes,
    merge_strategy: "merge" as const,
    origin: "agent" as const,
    ...(incoming.chain_id ? { chain_id: incoming.chain_id } : {}),
  };

  const { data: merged, error: insertErr } = await db
    .from("handoffs")
    .insert(insert)
    .select("id")
    .single();

  if (insertErr) {
    logger.warn(`[relayclaw] Conflict merge: failed to insert merged handoff: ${insertErr.message}`);
    return;
  }

  const mergedId = (merged as { id: string }).id;

  // Expire the originals and remove them from the queue.
  const expireIds = all.map((h) => h.id);
  const { error: expireErr } = await db
    .from("handoffs")
    .update({ status: "expired" })
    .in("id", expireIds);

  if (expireErr) {
    logger.warn(`[relayclaw] Conflict merge: failed to expire originals: ${expireErr.message}`);
  }

  // Mark queue items for originals as skipped.
  await db
    .from("agent_queues")
    .update({ status: "skipped" })
    .in("handoff_id", expireIds);

  // Auto-enqueue the merged handoff.
  const { error: enqErr } = await db.rpc("enqueue_handoff", {
    p_agent_id: incoming.target_agent_id,
    p_handoff_id: mergedId,
  });

  if (enqErr) {
    logger.warn(`[relayclaw] Conflict merge: failed to enqueue merged handoff: ${enqErr.message}`);
    return;
  }

  logger.info(
    `[relayclaw] Conflict resolved (merge): ${expireIds.length} handoffs → merged=${mergedId}`,
  );
}

// ---------------------------------------------------------------------------
// replace — expire all older handoffs, keep only the incoming one
// ---------------------------------------------------------------------------

async function resolveReplace(params: {
  incoming: Handoff;
  existing: Handoff[];
  db: SupabaseClient;
  logger: PluginLogger;
}): Promise<void> {
  const { incoming, existing, db, logger } = params;

  const expireIds = existing.map((h) => h.id);

  const { error: expireErr } = await db
    .from("handoffs")
    .update({ status: "expired" })
    .in("id", expireIds);

  if (expireErr) {
    logger.warn(`[relayclaw] Conflict replace: failed to expire older handoffs: ${expireErr.message}`);
    return;
  }

  // Mark their queue items as skipped.
  await db
    .from("agent_queues")
    .update({ status: "skipped" })
    .in("handoff_id", expireIds);

  logger.info(
    `[relayclaw] Conflict resolved (replace): expired=[${expireIds.join(", ")}] kept=${incoming.id}`,
  );
}

// ---------------------------------------------------------------------------
// flag_conflict — mark queue items as conflict, notify human
// ---------------------------------------------------------------------------

async function resolveFlagConflict(params: {
  incoming: Handoff;
  existing: Handoff[];
  db: SupabaseClient;
  api: OpenClawPluginApi;
  config: RelayClawConfig;
  logger: PluginLogger;
}): Promise<void> {
  const { incoming, existing, db, api, config, logger } = params;

  const allIds = [incoming.id, ...existing.map((h) => h.id)];

  // Mark all queue items as conflict status.
  await db
    .from("agent_queues")
    .update({ status: "conflict" })
    .in("handoff_id", allIds);

  // Build side-by-side notification.
  const send = getTelegramSend(api);
  if (!send) {
    logger.warn("[relayclaw] flag_conflict: Telegram unavailable for conflict notification");
    return;
  }

  const all = [incoming, ...existing];
  const lines: string[] = [
    `Queue conflict — agent ${incoming.target_agent_id} has ${all.length} pending handoffs`,
    "",
  ];

  for (const [i, h] of all.entries()) {
    const label = h.id === incoming.id ? " (incoming)" : ` (existing ${i})`;
    const goalPreview = h.goal.length > 80 ? `${h.goal.slice(0, 79)}…` : h.goal;
    lines.push(
      `[${i + 1}]${label}`,
      `  From: ${h.source_agent_id}`,
      `  Goal: ${goalPreview}`,
      `  Strategy: ${h.merge_strategy}`,
      `  ID: ${h.id}`,
      "",
    );
  }

  lines.push(
    "Resolve with:",
    `/approve <id>  — approve one, reject others`,
    `/reject <id>   — reject one`,
  );

  const text = lines.join("\n");

  try {
    await send(config.notifyTarget, text, {});
    // Also send to group if configured.
    if (config.notifyGroupId && config.notifyGroupId !== config.notifyTarget) {
      await send(config.notifyGroupId, text, {});
    }
  } catch (err) {
    logger.warn(
      `[relayclaw] flag_conflict: notification failed: ${String((err as Error)?.message ?? err)}`,
    );
  }

  logger.info(
    `[relayclaw] Conflict flagged for ${incoming.target_agent_id}: ` +
      `[${allIds.join(", ")}] — awaiting human resolution`,
  );
}
