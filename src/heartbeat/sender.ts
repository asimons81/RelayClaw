import type { SupabaseClient } from "@supabase/supabase-js";
import type { RelayClawConfig } from "../config.js";
import type { AgentConfig, HeartbeatSnapshot } from "../types.js";
import type { PluginLogger } from "../types/openclaw.js";
import { buildHeartbeatInsert } from "./snapshot.js";

// ---------------------------------------------------------------------------
// Per-session state
// ---------------------------------------------------------------------------

type SessionEntry = {
  agentId: string;
  sessionKey: string;
  intervalId: ReturnType<typeof setInterval>;
  lastHeartbeatId: string | null;
  snapshot: HeartbeatSnapshot;
  sessionStartMs: number;
  model: string;
};

const activeSessions = new Map<string, SessionEntry>();

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

async function fetchIntervalMs(params: {
  db: SupabaseClient;
  agentId: string;
  fallbackMs: number;
}): Promise<number> {
  try {
    const { data } = await params.db
      .from("agent_config")
      .select("heartbeat_interval_s")
      .eq("agent_id", params.agentId)
      .single();

    const row = data as Pick<AgentConfig, "heartbeat_interval_s"> | null;
    if (row && typeof row.heartbeat_interval_s === "number" && row.heartbeat_interval_s > 0) {
      return row.heartbeat_interval_s * 1000;
    }
  } catch {
    // fall through to fallback
  }
  return params.fallbackMs;
}

async function writeHeartbeat(params: {
  db: SupabaseClient;
  agentId: string;
  sessionKey: string;
  snapshot: HeartbeatSnapshot;
  isAlive: boolean;
  previousId: string | null;
  logger: PluginLogger;
}): Promise<string | null> {
  const { db, agentId, sessionKey, snapshot, isAlive, previousId, logger } = params;

  // Mark the previous heartbeat superseded before inserting the new one.
  if (previousId) {
    const { error: supErr } = await db
      .from("heartbeats")
      .update({ superseded_at: new Date().toISOString() })
      .eq("id", previousId)
      .is("superseded_at", null);

    if (supErr) {
      logger.warn(
        `[relayclaw] Failed to mark heartbeat ${previousId} as superseded: ${supErr.message}`,
      );
    }
  }

  const insert = buildHeartbeatInsert({ agentId, sessionKey, snapshot, isAlive });
  const { data, error } = await db.from("heartbeats").insert(insert).select("id").single();

  if (error) {
    logger.warn(
      `[relayclaw] Failed to write heartbeat for ${agentId}/${sessionKey}: ${error.message}`,
    );
    return null;
  }

  return (data as { id: string }).id;
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export async function startHeartbeat(params: {
  agentId: string;
  sessionKey: string;
  config: RelayClawConfig;
  db: SupabaseClient;
  logger: PluginLogger;
}): Promise<void> {
  const { agentId, sessionKey, config, db, logger } = params;

  if (activeSessions.has(sessionKey)) {
    logger.warn(`[relayclaw] Heartbeat already active for session ${sessionKey} — skipping start`);
    return;
  }

  const intervalMs = await fetchIntervalMs({
    db,
    agentId,
    fallbackMs: config.heartbeatIntervalMs,
  });

  // Placeholder entry while we write the first heartbeat, to prevent a race
  // if session_start fires twice in quick succession.
  const entry: SessionEntry = {
    agentId,
    sessionKey,
    intervalId: null as unknown as ReturnType<typeof setInterval>,
    lastHeartbeatId: null,
    snapshot: {},
    sessionStartMs: Date.now(),
    model: "",
  };
  activeSessions.set(sessionKey, entry);

  // Write initial heartbeat immediately.
  entry.lastHeartbeatId = await writeHeartbeat({
    db,
    agentId,
    sessionKey,
    snapshot: entry.snapshot,
    isAlive: true,
    previousId: null,
    logger,
  });

  entry.intervalId = setInterval(() => {
    const current = activeSessions.get(sessionKey);
    if (!current) return;

    writeHeartbeat({
      db,
      agentId: current.agentId,
      sessionKey: current.sessionKey,
      snapshot: current.snapshot,
      isAlive: true,
      previousId: current.lastHeartbeatId,
      logger,
    })
      .then((id) => {
        if (id && activeSessions.has(sessionKey)) {
          current.lastHeartbeatId = id;
        }
      })
      .catch((err: unknown) => {
        logger.warn(
          `[relayclaw] Heartbeat tick error for ${agentId}/${sessionKey}: ${String((err as Error)?.message ?? err)}`,
        );
      });
  }, intervalMs);

  entry.intervalId.unref?.();

  logger.info(
    `[relayclaw] Heartbeat started for ${agentId}/${sessionKey} (interval: ${intervalMs}ms)`,
  );
}

export async function stopHeartbeat(params: {
  sessionKey: string;
  db: SupabaseClient;
  logger: PluginLogger;
  cleanEnd?: boolean;
}): Promise<void> {
  const { sessionKey, db, logger, cleanEnd = true } = params;
  const entry = activeSessions.get(sessionKey);
  if (!entry) return;

  clearInterval(entry.intervalId);
  activeSessions.delete(sessionKey);

  // Write a final heartbeat with is_alive=false to signal a clean end.
  // The monitor will not promote rows where is_alive=false.
  await writeHeartbeat({
    db,
    agentId: entry.agentId,
    sessionKey: entry.sessionKey,
    snapshot: entry.snapshot,
    isAlive: false,
    previousId: entry.lastHeartbeatId,
    logger,
  }).catch((err: unknown) => {
    logger.warn(
      `[relayclaw] Failed to write final heartbeat for ${sessionKey}: ${String((err as Error)?.message ?? err)}`,
    );
  });

  logger.info(
    `[relayclaw] Heartbeat stopped for ${entry.agentId}/${sessionKey} (cleanEnd: ${cleanEnd})`,
  );
}

// Merge a partial snapshot into the in-memory state for the current session.
// Called by other hooks (e.g. llm_output) to keep the heartbeat data fresh.
export function updateHeartbeatSnapshot(params: {
  sessionKey: string;
  partial: Partial<HeartbeatSnapshot>;
}): void {
  const entry = activeSessions.get(params.sessionKey);
  if (entry) {
    Object.assign(entry.snapshot, params.partial);
  }
}

// Track the last seen model name for the session (updated by llm_output hook).
export function setSessionModel(sessionKey: string, model: string): void {
  const entry = activeSessions.get(sessionKey);
  if (entry && model) {
    entry.model = model;
  }
}

// Read accumulated cost data for flushing to the cost ledger.
export type SessionAccumulator = {
  agentId: string;
  sessionKey: string;
  model: string;
  tokensIn: number;
  tokensOut: number;
  estimatedUsd: number;
  sessionStartMs: number;
};

export function getSessionAccumulator(sessionKey: string): SessionAccumulator | null {
  const entry = activeSessions.get(sessionKey);
  if (!entry) return null;
  return {
    agentId: entry.agentId,
    sessionKey: entry.sessionKey,
    model: entry.model || "unknown",
    tokensIn: entry.snapshot.tokens_in ?? 0,
    tokensOut: entry.snapshot.tokens_out ?? 0,
    estimatedUsd: entry.snapshot.estimated_usd ?? 0,
    sessionStartMs: entry.sessionStartMs,
  };
}
