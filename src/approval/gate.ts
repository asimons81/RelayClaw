import type { SupabaseClient } from "@supabase/supabase-js";
import type { AgentConfig, Handoff } from "../types.js";
import type { OpenClawPluginApi, PluginLogger } from "../types/openclaw.js";
import type { RelayClawConfig } from "../config.js";
import { sendPendingApprovalNotification } from "./notify.js";

// ---------------------------------------------------------------------------
// runApprovalGate
//
// Decides whether a freshly-created handoff is auto-approved or held pending.
//
// High trust + autoApproveHighTrust config:
//   → UPDATE status='approved', set approved_at
//   → call enqueue_handoff() RPC
//
// Medium / low trust (or autoApproveHighTrust disabled):
//   → status stays 'pending' (already inserted that way)
//   → send Telegram notification with approve/reject/redirect commands
// ---------------------------------------------------------------------------

export async function runApprovalGate(params: {
  handoff: Handoff;
  agentCfg: AgentConfig | null;
  config: RelayClawConfig;
  db: SupabaseClient;
  api: OpenClawPluginApi;
  logger: PluginLogger;
}): Promise<{ autoApproved: boolean }> {
  const { handoff, agentCfg, config, db, api, logger } = params;

  const trustLevel = agentCfg?.trust_level ?? "medium";
  const shouldAutoApprove = trustLevel === "high" && config.autoApproveHighTrust;

  if (shouldAutoApprove) {
    return autoApproveAndEnqueue({ handoff, agentCfg, db, logger });
  }

  // Hold for human review — notify immediately.
  await sendPendingApprovalNotification({ handoff, agentCfg, config, api, logger });
  logger.info(
    `[relayclaw] Handoff ${handoff.id} held for approval ` +
      `(trust=${trustLevel}, target=${handoff.target_agent_id})`,
  );
  return { autoApproved: false };
}

// ---------------------------------------------------------------------------
// Internal: auto-approve path
// ---------------------------------------------------------------------------

async function autoApproveAndEnqueue(params: {
  handoff: Handoff;
  agentCfg: AgentConfig | null;
  db: SupabaseClient;
  logger: PluginLogger;
}): Promise<{ autoApproved: boolean }> {
  const { handoff, db, logger } = params;

  const now = new Date().toISOString();

  // Mark approved in DB.
  const { error: updateErr } = await db
    .from("handoffs")
    .update({ status: "approved", approved_at: now })
    .eq("id", handoff.id);

  if (updateErr) {
    logger.warn(
      `[relayclaw] Auto-approve: failed to update handoff ${handoff.id}: ${updateErr.message}`,
    );
    return { autoApproved: false };
  }

  // Enqueue for the target agent.
  const { error: rpcErr } = await db.rpc("enqueue_handoff", {
    p_agent_id: handoff.target_agent_id,
    p_handoff_id: handoff.id,
  });

  if (rpcErr) {
    logger.warn(
      `[relayclaw] Auto-approve: enqueue_handoff failed for ${handoff.id}: ${rpcErr.message}`,
    );
    return { autoApproved: false };
  }

  logger.info(
    `[relayclaw] Handoff ${handoff.id} auto-approved and queued for ${handoff.target_agent_id}`,
  );
  return { autoApproved: true };
}
