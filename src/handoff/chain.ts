import type { SupabaseClient } from "@supabase/supabase-js";
import type { ChainStatus, CreateChainParams, HandoffChain } from "../types.js";
import type { PluginLogger } from "../types/openclaw.js";

// ---------------------------------------------------------------------------
// createChain
// ---------------------------------------------------------------------------

export async function createChain(params: {
  chainParams: CreateChainParams;
  db: SupabaseClient;
  logger: PluginLogger;
}): Promise<HandoffChain> {
  const { chainParams, db, logger } = params;

  const { data, error } = await db
    .from("handoff_chains")
    .insert({
      name: chainParams.name ?? null,
      description: chainParams.description ?? null,
      root_goal: chainParams.root_goal ?? null,
      status: "active",
    })
    .select("*")
    .single();

  if (error) {
    throw new Error(`[relayclaw] createChain failed: ${error.message}`);
  }

  const chain = data as HandoffChain;
  logger.info(`[relayclaw] Chain created: ${chain.id} "${chain.name ?? chain.root_goal ?? ""}"`);
  return chain;
}

// ---------------------------------------------------------------------------
// extendChain
//
// Associates a handoff with an existing chain and assigns the next
// chain_sequence number. Called by receiving agents when creating an
// outbound handoff that continues an in-progress chain.
// ---------------------------------------------------------------------------

export async function extendChain(params: {
  chainId: string;
  handoffId: string;
  db: SupabaseClient;
  logger: PluginLogger;
}): Promise<number> {
  const { chainId, handoffId, db, logger } = params;

  // Find the current max sequence in this chain.
  const { data: seqData } = await db
    .from("handoffs")
    .select("chain_sequence")
    .eq("chain_id", chainId)
    .order("chain_sequence", { ascending: false })
    .limit(1)
    .single();

  const maxSeq = seqData ? (seqData as { chain_sequence: number }).chain_sequence : 0;
  const nextSeq = maxSeq + 1;

  const { error } = await db
    .from("handoffs")
    .update({ chain_id: chainId, chain_sequence: nextSeq })
    .eq("id", handoffId);

  if (error) {
    throw new Error(
      `[relayclaw] extendChain failed for handoff ${handoffId} on chain ${chainId}: ${error.message}`,
    );
  }

  logger.info(`[relayclaw] Chain ${chainId} extended: handoff=${handoffId} seq=${nextSeq}`);
  return nextSeq;
}

// ---------------------------------------------------------------------------
// closeChain
// ---------------------------------------------------------------------------

export async function closeChain(params: {
  chainId: string;
  status: Extract<ChainStatus, "completed" | "failed" | "paused">;
  db: SupabaseClient;
  logger: PluginLogger;
}): Promise<void> {
  const { chainId, status, db, logger } = params;

  const { error } = await db
    .from("handoff_chains")
    .update({
      status,
      ...(status === "completed" ? { completed_at: new Date().toISOString() } : {}),
    })
    .eq("id", chainId);

  if (error) {
    throw new Error(`[relayclaw] closeChain failed for ${chainId}: ${error.message}`);
  }

  logger.info(`[relayclaw] Chain ${chainId} closed with status=${status}`);
}
