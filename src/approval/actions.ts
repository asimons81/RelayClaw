import { promises as fs } from "node:fs";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { AgentConfig, ApprovalAction, Handoff } from "../types.js";
import type { OpenClawPluginApi, PluginLogger } from "../types/openclaw.js";
import type { RelayClawConfig } from "../config.js";
import { parseMdHandoff } from "../handoff/md-export.js";
import { enqueueHandoff } from "../queue/enqueue.js";
import { runApprovalGate } from "./gate.js";

// ---------------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------------

async function fetchHandoff(id: string, db: SupabaseClient): Promise<Handoff | null> {
  const { data, error } = await db.from("handoffs").select("*").eq("id", id).single();
  if (error || !data) return null;
  return data as Handoff;
}

async function logApprovalAction(params: {
  handoffId: string;
  action: ApprovalAction;
  actor: string;
  actorChannel?: string;
  reason?: string;
  diffSummary?: string;
  redirectTo?: string;
  db: SupabaseClient;
  logger: PluginLogger;
}): Promise<void> {
  const { handoffId, action, actor, actorChannel, reason, diffSummary, redirectTo, db, logger } =
    params;

  const { error } = await db.from("approval_actions").insert({
    handoff_id: handoffId,
    action,
    actor,
    actor_channel: actorChannel ?? null,
    reason: reason ?? null,
    diff_summary: diffSummary ?? null,
    redirect_to: redirectTo ?? null,
  });

  if (error) {
    logger.warn(`[relayclaw] Failed to log approval action for ${handoffId}: ${error.message}`);
  }
}

type TelegramSend = (to: string, text: string, opts?: Record<string, unknown>) => Promise<void>;

function getTelegramSend(api: OpenClawPluginApi): TelegramSend | null {
  const runtime = api.runtime as Record<string, unknown>;
  const channel = runtime?.channel as Record<string, unknown> | undefined;
  const telegram = channel?.telegram as Record<string, unknown> | undefined;
  const send = telegram?.sendMessageTelegram;
  return typeof send === "function" ? (send as TelegramSend) : null;
}

async function notifySourceAgent(params: {
  handoff: Handoff;
  text: string;
  db: SupabaseClient;
  api: OpenClawPluginApi;
  config: RelayClawConfig;
  logger: PluginLogger;
}): Promise<void> {
  const { handoff, text, db, api, config, logger } = params;

  const send = getTelegramSend(api);
  if (!send) return;

  const { data: cfgData } = await db
    .from("agent_config")
    .select("notify_target, notify_topic_id")
    .eq("agent_id", handoff.source_agent_id)
    .single();

  const cfg = cfgData as Pick<AgentConfig, "notify_target" | "notify_topic_id"> | null;
  const to =
    (cfg?.notify_target?.trim() || null) ??
    (config.notifyTarget || null) ??
    config.notifyGroupId;

  if (!to) return;

  const topicId =
    typeof cfg?.notify_topic_id === "number" ? cfg.notify_topic_id : undefined;

  try {
    await send(to, text, topicId != null ? { messageThreadId: topicId } : {});
  } catch (err) {
    logger.warn(
      `[relayclaw] actions: notification to ${to} failed: ${String((err as Error)?.message ?? err)}`,
    );
  }
}

// ---------------------------------------------------------------------------
// approveHandoff
//
// 1. Re-reads .md file and syncs any human edits back to the DB row.
// 2. Marks status=approved, sets approved_at.
// 3. Logs to approval_actions.
// 4. Calls enqueueHandoff (includes conflict detection).
// ---------------------------------------------------------------------------

export async function approveHandoff(params: {
  id: string;
  actor: string;
  channel?: string;
  db: SupabaseClient;
  api: OpenClawPluginApi;
  config: RelayClawConfig;
  logger: PluginLogger;
}): Promise<{ ok: boolean; error?: string }> {
  const { id, actor, channel, db, api, config, logger } = params;

  const handoff = await fetchHandoff(id, db);
  if (!handoff) return { ok: false, error: `Handoff ${id} not found` };

  if (handoff.status !== "pending") {
    return { ok: false, error: `Handoff ${id} is already ${handoff.status}` };
  }

  // Re-read .md to pick up any human edits made before approval.
  let mdEdits: Record<string, unknown> = {};
  if (handoff.md_export_path) {
    try {
      const content = await fs.readFile(handoff.md_export_path, "utf8");
      const parsed = parseMdHandoff(content);
      if (parsed.goal) mdEdits.goal = parsed.goal;
      if (parsed.status_summary) mdEdits.status_summary = parsed.status_summary;
      if (parsed.notes !== undefined) mdEdits.notes = parsed.notes;
      if (parsed.decisions?.length) mdEdits.decisions = parsed.decisions;
      if (parsed.artifacts?.length) mdEdits.artifacts = parsed.artifacts;
      if (parsed.blockers?.length) mdEdits.blockers = parsed.blockers;
      if (parsed.next_steps?.length) mdEdits.next_steps = parsed.next_steps;
    } catch {
      // File unreadable — proceed with DB version
    }
  }

  // Sync edits and mark approved atomically.
  const { error: updateErr } = await db
    .from("handoffs")
    .update({
      ...mdEdits,
      status: "approved",
      approved_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (updateErr) {
    return { ok: false, error: `Failed to update handoff: ${updateErr.message}` };
  }

  await logApprovalAction({
    handoffId: id,
    action: "approve",
    actor,
    actorChannel: channel,
    db,
    logger,
  });

  // Fetch fresh row after update for enqueue.
  const updated = await fetchHandoff(id, db);
  if (!updated) return { ok: false, error: "Handoff disappeared after approval update" };

  try {
    await enqueueHandoff({ handoff: updated, db, api, config, logger });
  } catch (err) {
    return {
      ok: false,
      error: `Approved but enqueue failed: ${String((err as Error)?.message ?? err)}`,
    };
  }

  await notifySourceAgent({
    handoff: updated,
    text: `Handoff approved by ${actor}\nID: ${id}\nQueued for: ${updated.target_agent_id}`,
    db,
    api,
    config,
    logger,
  });

  logger.info(`[relayclaw] Handoff ${id} approved by ${actor} and enqueued`);
  return { ok: true };
}

// ---------------------------------------------------------------------------
// rejectHandoff
// ---------------------------------------------------------------------------

export async function rejectHandoff(params: {
  id: string;
  actor: string;
  channel?: string;
  reason?: string;
  db: SupabaseClient;
  api: OpenClawPluginApi;
  config: RelayClawConfig;
  logger: PluginLogger;
}): Promise<{ ok: boolean; error?: string }> {
  const { id, actor, channel, reason, db, api, config, logger } = params;

  const handoff = await fetchHandoff(id, db);
  if (!handoff) return { ok: false, error: `Handoff ${id} not found` };

  const { error } = await db
    .from("handoffs")
    .update({ status: "rejected" })
    .eq("id", id);

  if (error) return { ok: false, error: error.message };

  await logApprovalAction({
    handoffId: id,
    action: "reject",
    actor,
    actorChannel: channel,
    reason,
    db,
    logger,
  });

  await notifySourceAgent({
    handoff,
    text: [
      `Handoff rejected by ${actor}`,
      `ID: ${id}`,
      reason ? `Reason: ${reason}` : null,
    ]
      .filter(Boolean)
      .join("\n"),
    db,
    api,
    config,
    logger,
  });

  logger.info(`[relayclaw] Handoff ${id} rejected by ${actor}`);
  return { ok: true };
}

// ---------------------------------------------------------------------------
// redirectHandoff
// ---------------------------------------------------------------------------

export async function redirectHandoff(params: {
  id: string;
  actor: string;
  channel?: string;
  newTargetAgentId: string;
  db: SupabaseClient;
  api: OpenClawPluginApi;
  config: RelayClawConfig;
  logger: PluginLogger;
}): Promise<{ ok: boolean; error?: string }> {
  const { id, actor, channel, newTargetAgentId, db, api, config, logger } = params;

  const handoff = await fetchHandoff(id, db);
  if (!handoff) return { ok: false, error: `Handoff ${id} not found` };

  if (["completed", "injected", "rejected"].includes(handoff.status)) {
    return { ok: false, error: `Cannot redirect a handoff with status=${handoff.status}` };
  }

  const oldTarget = handoff.target_agent_id;

  const { error: updateErr } = await db
    .from("handoffs")
    .update({ target_agent_id: newTargetAgentId, status: "pending" })
    .eq("id", id);

  if (updateErr) return { ok: false, error: updateErr.message };

  await logApprovalAction({
    handoffId: id,
    action: "redirect",
    actor,
    actorChannel: channel,
    redirectTo: newTargetAgentId,
    reason: `Redirected from ${oldTarget}`,
    db,
    logger,
  });

  // Re-run approval gate for the new target.
  const { data: newAgentCfgData } = await db
    .from("agent_config")
    .select("*")
    .eq("agent_id", newTargetAgentId)
    .single();

  const updated = await fetchHandoff(id, db);
  if (!updated) return { ok: false, error: "Handoff disappeared after redirect" };

  await runApprovalGate({
    handoff: updated,
    agentCfg: newAgentCfgData as AgentConfig | null,
    config,
    db,
    api,
    logger,
  });

  logger.info(`[relayclaw] Handoff ${id} redirected by ${actor}: ${oldTarget} → ${newTargetAgentId}`);
  return { ok: true };
}

// ---------------------------------------------------------------------------
// killHandoff
// ---------------------------------------------------------------------------

export async function killHandoff(params: {
  id: string;
  actor: string;
  channel?: string;
  reason?: string;
  db: SupabaseClient;
  api: OpenClawPluginApi;
  config: RelayClawConfig;
  logger: PluginLogger;
}): Promise<{ ok: boolean; error?: string }> {
  const { id, actor, channel, reason, db, api, config, logger } = params;

  const handoff = await fetchHandoff(id, db);
  if (!handoff) return { ok: false, error: `Handoff ${id} not found` };

  const { error } = await db
    .from("handoffs")
    .update({ status: "rejected" })
    .eq("id", id);

  if (error) return { ok: false, error: error.message };

  // Mark any queue items as skipped.
  await db
    .from("agent_queues")
    .update({ status: "skipped" })
    .eq("handoff_id", id)
    .in("status", ["pending", "processing", "conflict"]);

  await logApprovalAction({
    handoffId: id,
    action: "kill",
    actor,
    actorChannel: channel,
    reason,
    db,
    logger,
  });

  await notifySourceAgent({
    handoff,
    text: [
      `Handoff killed by ${actor}`,
      `ID: ${id}`,
      reason ? `Reason: ${reason}` : null,
      "Queue items have been cleared.",
    ]
      .filter(Boolean)
      .join("\n"),
    db,
    api,
    config,
    logger,
  });

  logger.info(`[relayclaw] Handoff ${id} killed by ${actor}`);
  return { ok: true };
}

// ---------------------------------------------------------------------------
// editHandoff
//
// Logs the edit action. Optionally re-reads the .md file and syncs edits
// back to the DB row so they are reflected before the next approval attempt.
// ---------------------------------------------------------------------------

export async function editHandoff(params: {
  id: string;
  actor: string;
  channel?: string;
  diff?: string;
  db: SupabaseClient;
  logger: PluginLogger;
}): Promise<{ ok: boolean; error?: string }> {
  const { id, actor, channel, diff, db, logger } = params;

  const handoff = await fetchHandoff(id, db);
  if (!handoff) return { ok: false, error: `Handoff ${id} not found` };

  // Sync any .md edits to DB.
  if (handoff.md_export_path) {
    try {
      const content = await fs.readFile(handoff.md_export_path, "utf8");
      const parsed = parseMdHandoff(content);

      const update: Record<string, unknown> = {};
      if (parsed.goal) update.goal = parsed.goal;
      if (parsed.status_summary) update.status_summary = parsed.status_summary;
      if (parsed.notes !== undefined) update.notes = parsed.notes;
      if (parsed.decisions?.length) update.decisions = parsed.decisions;
      if (parsed.artifacts?.length) update.artifacts = parsed.artifacts;
      if (parsed.blockers?.length) update.blockers = parsed.blockers;
      if (parsed.next_steps?.length) update.next_steps = parsed.next_steps;

      if (Object.keys(update).length > 0) {
        const { error: syncErr } = await db.from("handoffs").update(update).eq("id", id);
        if (syncErr) {
          logger.warn(`[relayclaw] editHandoff: failed to sync .md edits: ${syncErr.message}`);
        } else {
          logger.info(`[relayclaw] editHandoff: synced .md edits for ${id}`);
        }
      }
    } catch {
      // No file or unreadable — just log the audit entry
    }
  }

  await logApprovalAction({
    handoffId: id,
    action: "edit",
    actor,
    actorChannel: channel,
    diffSummary: diff,
    db,
    logger,
  });

  logger.info(`[relayclaw] Handoff ${id} edit logged by ${actor}`);
  return { ok: true };
}
