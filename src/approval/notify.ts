import type { Handoff, AgentConfig } from "../types.js";
import type { OpenClawPluginApi, PluginLogger } from "../types/openclaw.js";
import type { RelayClawConfig } from "../config.js";

// ---------------------------------------------------------------------------
// Resolve the Telegram send function from the api runtime.
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
// sendPendingApprovalNotification
//
// Sends a Telegram message to the agent's configured notify_target (from
// agent_config) with a summary of the pending handoff and inline commands
// for the human to approve, reject, or redirect it.
// ---------------------------------------------------------------------------

export async function sendPendingApprovalNotification(params: {
  handoff: Handoff;
  agentCfg: AgentConfig | null;
  config: RelayClawConfig;
  api: OpenClawPluginApi;
  logger: PluginLogger;
}): Promise<void> {
  const { handoff, agentCfg, config, api, logger } = params;

  const send = getTelegramSend(api);
  if (!send) {
    logger.warn(
      "[relayclaw] Approval notification: Telegram runtime unavailable — notification skipped",
    );
    return;
  }

  // Prefer per-agent routing; fall back to plugin config.
  const notifyTarget =
    (typeof agentCfg?.notify_target === "string" && agentCfg.notify_target.trim()
      ? agentCfg.notify_target.trim()
      : null) ?? config.notifyTarget;

  const topicId =
    typeof agentCfg?.notify_topic_id === "number" ? agentCfg.notify_topic_id : undefined;

  const goalPreview =
    handoff.goal.length > 120 ? `${handoff.goal.slice(0, 119)}…` : handoff.goal;
  const summaryPreview =
    handoff.status_summary.length > 120
      ? `${handoff.status_summary.slice(0, 119)}…`
      : handoff.status_summary;

  const lines: string[] = [
    "Handoff pending approval",
    `From: ${handoff.source_agent_id}  →  To: ${handoff.target_agent_id}`,
    `Goal: ${goalPreview}`,
    `Status: ${summaryPreview}`,
  ];

  if (handoff.confidence !== null) {
    lines.push(`Confidence: ${(handoff.confidence * 100).toFixed(0)}%`);
  }
  if (handoff.blockers.length > 0) {
    lines.push(`Blockers: ${handoff.blockers.length}`);
  }
  if (handoff.chain_id) {
    lines.push(`Chain: ${handoff.chain_id}`);
  }
  if (handoff.md_export_path) {
    lines.push(`File: ${handoff.md_export_path}`);
  }

  lines.push(
    "",
    `/approve ${handoff.id}`,
    `/reject ${handoff.id}`,
    `/redirect ${handoff.id} <agent>`,
  );

  const text = lines.join("\n");

  try {
    await send(notifyTarget, text, topicId != null ? { messageThreadId: topicId } : {});
  } catch (err) {
    logger.warn(
      `[relayclaw] Approval notification: failed to send to ${notifyTarget}: ${String((err as Error)?.message ?? err)}`,
    );
  }
}
