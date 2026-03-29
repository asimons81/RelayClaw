import type { SupabaseClient } from "@supabase/supabase-js";
import type { PluginLogger } from "../types/openclaw.js";
import { getSessionAccumulator } from "../heartbeat/sender.js";

// ---------------------------------------------------------------------------
// flushLedger
//
// Reads accumulated token counts from the sender's in-memory session map,
// writes a cost_ledger row, then calls update_chain_cost() to refresh the
// denormalized aggregate totals on the parent handoff_chain (if any).
// ---------------------------------------------------------------------------

export async function flushLedger(params: {
  sessionKey: string;
  handoffId: string;
  chainId: string | null;
  db: SupabaseClient;
  logger: PluginLogger;
}): Promise<void> {
  const { sessionKey, handoffId, chainId, db, logger } = params;

  const acc = getSessionAccumulator(sessionKey);
  if (!acc) {
    logger.warn(
      `[relayclaw] flushLedger: no active session found for key "${sessionKey}" — cost row skipped`,
    );
    return;
  }

  const wallClockS = (Date.now() - acc.sessionStartMs) / 1000;

  const insert = {
    handoff_id: handoffId,
    chain_id: chainId ?? undefined,
    agent_id: acc.agentId,
    session_key: acc.sessionKey,
    model: acc.model,
    tokens_in: acc.tokensIn,
    tokens_out: acc.tokensOut,
    estimated_usd: acc.estimatedUsd,
    wall_clock_s: wallClockS,
    leg_sequence: 0,
  };

  const { error: insertErr } = await db.from("cost_ledger").insert(insert);

  if (insertErr) {
    logger.warn(`[relayclaw] flushLedger: failed to write cost_ledger row: ${insertErr.message}`);
    return;
  }

  logger.info(
    `[relayclaw] Cost flushed for handoff ${handoffId}: ` +
      `in=${acc.tokensIn} out=${acc.tokensOut} usd=$${acc.estimatedUsd.toFixed(4)} ` +
      `wall=${wallClockS.toFixed(1)}s`,
  );

  // Update denormalized chain aggregate totals.
  if (chainId) {
    const { error: rpcErr } = await db.rpc("update_chain_cost", { p_chain_id: chainId });
    if (rpcErr) {
      logger.warn(
        `[relayclaw] flushLedger: update_chain_cost failed for chain ${chainId}: ${rpcErr.message}`,
      );
    }
  }
}
