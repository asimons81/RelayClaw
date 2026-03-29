import type { SupabaseClient } from "@supabase/supabase-js";
import type { Handoff } from "../types.js";
import type { OpenClawPluginApi, PluginLogger } from "../types/openclaw.js";
import type { RelayClawConfig } from "../config.js";
import { resolveConflict } from "./conflict.js";

// ---------------------------------------------------------------------------
// enqueueHandoff
//
// 1. Calls enqueue_handoff() RPC (atomically inserts into agent_queues and
//    transitions the handoff to status='queued').
// 2. Calls detect_queue_conflicts() RPC to check for competing pending items.
// 3. If conflicts exist, applies the incoming handoff's merge_strategy via
//    conflict.ts.
// ---------------------------------------------------------------------------

type ConflictRow = {
  handoff_id: string;
  source_agent_id: string;
  goal: string;
  merge_strategy: string;
  enqueued_at: string;
};

export async function enqueueHandoff(params: {
  handoff: Handoff;
  db: SupabaseClient;
  api: OpenClawPluginApi;
  config: RelayClawConfig;
  logger: PluginLogger;
}): Promise<void> {
  const { handoff, db, api, config, logger } = params;

  // Step 1: Enqueue via stored function.
  const { error: enqErr } = await db.rpc("enqueue_handoff", {
    p_agent_id: handoff.target_agent_id,
    p_handoff_id: handoff.id,
  });

  if (enqErr) {
    throw new Error(
      `[relayclaw] enqueue_handoff failed for ${handoff.id} → ${handoff.target_agent_id}: ${enqErr.message}`,
    );
  }

  logger.info(`[relayclaw] Handoff ${handoff.id} enqueued for ${handoff.target_agent_id}`);

  // Step 2: Detect conflicts — other pending items in the same agent's queue.
  const { data: conflictData, error: conflictErr } = await db.rpc("detect_queue_conflicts", {
    p_agent_id: handoff.target_agent_id,
  });

  if (conflictErr) {
    logger.warn(
      `[relayclaw] detect_queue_conflicts failed for ${handoff.target_agent_id}: ${conflictErr.message}`,
    );
    return;
  }

  const conflicts = (conflictData as ConflictRow[] | null) ?? [];

  // No conflict if the only item is the one we just enqueued.
  const otherIds = conflicts
    .map((r) => r.handoff_id)
    .filter((id) => id !== handoff.id);

  if (otherIds.length === 0) return;

  // Step 3: Fetch full rows for conflicting handoffs.
  const { data: existingData, error: fetchErr } = await db
    .from("handoffs")
    .select("*")
    .in("id", otherIds);

  if (fetchErr) {
    logger.warn(
      `[relayclaw] Failed to fetch conflicting handoffs [${otherIds.join(", ")}]: ${fetchErr.message}`,
    );
    return;
  }

  const existing = (existingData as Handoff[] | null) ?? [];

  // Step 4: Resolve using the incoming handoff's merge_strategy.
  await resolveConflict({
    incoming: handoff,
    existing,
    strategy: handoff.merge_strategy,
    db,
    api,
    config,
    logger,
  });
}
