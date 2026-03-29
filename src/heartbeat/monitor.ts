import type { SupabaseClient } from "@supabase/supabase-js";
import type { RelayClawConfig } from "../config.js";
import type { AgentConfig, Heartbeat } from "../types.js";
import type { OpenClawPluginApi, PluginLogger } from "../types/openclaw.js";

const MONITOR_POLL_INTERVAL_MS = 60_000;

// ---------------------------------------------------------------------------
// Module-level singleton state
// ---------------------------------------------------------------------------

let monitorIntervalId: ReturnType<typeof setInterval> | null = null;

// ---------------------------------------------------------------------------
// Dead heartbeat detection
// ---------------------------------------------------------------------------

async function pollDeadHeartbeats(params: {
  db: SupabaseClient;
  config: RelayClawConfig;
  api: OpenClawPluginApi;
  logger: PluginLogger;
}): Promise<void> {
  const { db, config, api, logger } = params;

  // Fetch all alive, non-superseded, non-promoted heartbeats.
  const { data: heartbeats, error: hbErr } = await db
    .from("heartbeats")
    .select("*")
    .eq("is_alive", true)
    .is("superseded_at", null)
    .is("promoted_to", null);

  if (hbErr) {
    logger.warn(`[relayclaw] Monitor: failed to fetch heartbeats: ${hbErr.message}`);
    return;
  }

  if (!heartbeats || heartbeats.length === 0) return;

  const rows = heartbeats as Heartbeat[];

  // Fetch agent configs for all involved agents in one round-trip.
  const agentIds = [...new Set(rows.map((h) => h.agent_id))];
  const { data: cfgRows, error: cfgErr } = await db
    .from("agent_config")
    .select("agent_id, heartbeat_dead_threshold_s, notify_target, notify_topic_id")
    .in("agent_id", agentIds);

  if (cfgErr) {
    logger.warn(`[relayclaw] Monitor: failed to fetch agent configs: ${cfgErr.message}`);
  }

  type ConfigRow = Pick<
    AgentConfig,
    "agent_id" | "heartbeat_dead_threshold_s" | "notify_target" | "notify_topic_id"
  >;

  const configByAgent = new Map<string, ConfigRow>();
  for (const row of (cfgRows ?? []) as ConfigRow[]) {
    configByAgent.set(row.agent_id, row);
  }

  const now = Date.now();

  for (const heartbeat of rows) {
    const createdMs = Date.parse(heartbeat.created_at);
    if (isNaN(createdMs)) continue;

    const agentCfg = configByAgent.get(heartbeat.agent_id);
    const thresholdMs =
      agentCfg && typeof agentCfg.heartbeat_dead_threshold_s === "number"
        ? agentCfg.heartbeat_dead_threshold_s * 1000
        : config.deadDropThresholdMs;

    if (now - createdMs <= thresholdMs) continue;

    logger.info(
      `[relayclaw] Monitor: dead heartbeat detected — agent=${heartbeat.agent_id} session=${heartbeat.session_key} age=${Math.floor((now - createdMs) / 1000)}s`,
    );

    const { data: handoffId, error: rpcErr } = await db.rpc("promote_heartbeat_to_handoff", {
      p_heartbeat_id: heartbeat.id,
    });

    if (rpcErr) {
      logger.warn(
        `[relayclaw] Monitor: promote_heartbeat_to_handoff failed for ${heartbeat.id}: ${rpcErr.message}`,
      );
      continue;
    }

    await sendDeadDropNotification({
      heartbeat,
      handoffId: handoffId as string | null,
      agentCfg: agentCfg ?? null,
      api,
      config,
      logger,
    });
  }
}

// ---------------------------------------------------------------------------
// Telegram notification
// ---------------------------------------------------------------------------

type ConfigRow = Pick<
  AgentConfig,
  "agent_id" | "heartbeat_dead_threshold_s" | "notify_target" | "notify_topic_id"
>;

async function sendDeadDropNotification(params: {
  heartbeat: Heartbeat;
  handoffId: string | null;
  agentCfg: ConfigRow | null;
  api: OpenClawPluginApi;
  config: RelayClawConfig;
  logger: PluginLogger;
}): Promise<void> {
  const { heartbeat, handoffId, agentCfg, api, config, logger } = params;

  const runtime = api.runtime as Record<string, unknown>;
  const channel = runtime?.channel as Record<string, unknown> | undefined;
  const telegram = channel?.telegram as Record<string, unknown> | undefined;
  const send = telegram?.sendMessageTelegram as
    | ((to: string, text: string, opts?: Record<string, unknown>) => Promise<void>)
    | undefined;

  if (!send) {
    logger.warn("[relayclaw] Monitor: Telegram runtime unavailable — skipping dead-drop notification");
    return;
  }

  const ageSec = Math.floor((Date.now() - Date.parse(heartbeat.created_at)) / 1000);
  const text = [
    "Dead-drop detected",
    `Agent: ${heartbeat.agent_id}`,
    `Session: ${heartbeat.session_key}`,
    heartbeat.task_summary ? `Task: ${heartbeat.task_summary}` : null,
    heartbeat.current_goal ? `Goal: ${heartbeat.current_goal}` : null,
    `Last heartbeat: ${ageSec}s ago`,
    handoffId ? `Recovery handoff: ${handoffId}` : "Handoff promotion failed — manual review needed",
  ]
    .filter(Boolean)
    .join("\n");

  // Use per-agent notify_target if available, fall back to plugin config.
  const notifyTarget =
    (typeof agentCfg?.notify_target === "string" && agentCfg.notify_target.trim()
      ? agentCfg.notify_target.trim()
      : null) ?? config.notifyTarget;

  const topicId =
    typeof agentCfg?.notify_topic_id === "number" ? agentCfg.notify_topic_id : undefined;

  try {
    await send(notifyTarget, text, topicId != null ? { messageThreadId: topicId } : {});
  } catch (err) {
    logger.warn(
      `[relayclaw] Monitor: failed to send dead-drop notification to ${notifyTarget}: ${String((err as Error)?.message ?? err)}`,
    );
  }
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export function startMonitor(params: {
  db: SupabaseClient;
  config: RelayClawConfig;
  api: OpenClawPluginApi;
  logger: PluginLogger;
}): void {
  if (monitorIntervalId !== null) return;

  const tick = () => {
    pollDeadHeartbeats(params).catch((err: unknown) => {
      params.logger.warn(
        `[relayclaw] Monitor: poll error: ${String((err as Error)?.message ?? err)}`,
      );
    });
  };

  // Run once immediately so we don't wait a full minute on gateway start.
  tick();

  monitorIntervalId = setInterval(tick, MONITOR_POLL_INTERVAL_MS);
  monitorIntervalId.unref?.();

  params.logger.info("[relayclaw] Dead-drop monitor started (poll interval: 60s)");
}

export function stopMonitor(logger?: PluginLogger): void {
  if (monitorIntervalId === null) return;
  clearInterval(monitorIntervalId);
  monitorIntervalId = null;
  logger?.info("[relayclaw] Dead-drop monitor stopped");
}
