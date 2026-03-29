import type { SupabaseClient } from "@supabase/supabase-js";
import type { Handoff } from "../types.js";
import type { PluginLogger } from "../types/openclaw.js";

// ---------------------------------------------------------------------------
// dequeueHandoff
//
// Calls the dequeue_handoff() stored function for the given agent, which pops
// the next pending queue item (FIFO, FOR UPDATE SKIP LOCKED) and returns the
// handoff UUID. Returns null when the queue is empty.
// ---------------------------------------------------------------------------

export async function dequeueHandoff(params: {
  agentId: string;
  db: SupabaseClient;
  logger: PluginLogger;
}): Promise<Handoff | null> {
  const { agentId, db, logger } = params;

  const { data: handoffId, error: rpcErr } = await db.rpc("dequeue_handoff", {
    p_agent_id: agentId,
  });

  if (rpcErr) {
    logger.warn(`[relayclaw] dequeue_handoff RPC failed for ${agentId}: ${rpcErr.message}`);
    return null;
  }

  if (!handoffId) return null; // queue empty

  const { data, error: fetchErr } = await db
    .from("handoffs")
    .select("*")
    .eq("id", handoffId as string)
    .single();

  if (fetchErr) {
    logger.warn(
      `[relayclaw] Failed to fetch handoff ${String(handoffId)} after dequeue: ${fetchErr.message}`,
    );
    return null;
  }

  return data as Handoff;
}

// ---------------------------------------------------------------------------
// peekQueue
//
// Returns the next pending handoff for an agent WITHOUT dequeueing it.
// Used by the before_prompt_build hook to check if injection is needed.
// ---------------------------------------------------------------------------

export async function peekQueue(params: {
  agentId: string;
  db: SupabaseClient;
}): Promise<Handoff | null> {
  const { agentId, db } = params;

  const { data } = await db
    .from("agent_queues")
    .select("handoff_id")
    .eq("agent_id", agentId)
    .eq("status", "pending")
    .order("position", { ascending: true })
    .limit(1)
    .single();

  if (!data) return null;

  const queueRow = data as { handoff_id: string };

  const { data: handoffData } = await db
    .from("handoffs")
    .select("*")
    .eq("id", queueRow.handoff_id)
    .single();

  return handoffData ? (handoffData as Handoff) : null;
}
