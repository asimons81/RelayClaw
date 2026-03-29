import type { SupabaseClient } from "@supabase/supabase-js";
import type { OpenClawPluginApi, PluginLogger } from "./types/openclaw.js";
import type { RelayClawConfig } from "./config.js";
import type { Heartbeat } from "./types.js";
import {
  approveHandoff,
  rejectHandoff,
  redirectHandoff,
  killHandoff,
  editHandoff,
} from "./approval/actions.js";

// Minimal Express-like request shape we can safely read from
type IncomingRequest = {
  body?: unknown;
  query?: Record<string, string>;
  method?: string;
};

type Res = {
  json: (body: unknown) => void;
  status: (code: number) => { json: (body: unknown) => void };
};

function bodyOf(req: unknown): Record<string, unknown> {
  const r = req as IncomingRequest;
  if (r.body && typeof r.body === "object" && !Array.isArray(r.body)) {
    return r.body as Record<string, unknown>;
  }
  return {};
}

// ---------------------------------------------------------------------------
// POST /plugins/relayclaw/heartbeat
//
// HTTP alternative to direct Supabase writes. Agents that cannot connect to
// Supabase directly can POST their heartbeat through the gateway.
//
// Body: { agent_id, session_key, task_summary?, current_goal?,
//         progress_pct?, tokens_in?, tokens_out?, estimated_usd?,
//         context_hash?, is_alive? }
// ---------------------------------------------------------------------------

export function makeHeartbeatHandler(
  db: SupabaseClient,
  logger: PluginLogger,
): (req: unknown, res: Res) => Promise<void> {
  return async (req, res) => {
    const body = bodyOf(req);

    const agentId = typeof body.agent_id === "string" ? body.agent_id.trim() : "";
    const sessionKey = typeof body.session_key === "string" ? body.session_key.trim() : "";

    if (!agentId || !sessionKey) {
      res.status(400).json({ ok: false, error: "agent_id and session_key are required" });
      return;
    }

    const isAlive = body.is_alive !== false; // default true

    // Mark previous alive heartbeat for this session as superseded.
    const { data: prev } = await db
      .from("heartbeats")
      .select("id")
      .eq("agent_id", agentId)
      .eq("session_key", sessionKey)
      .eq("is_alive", true)
      .is("superseded_at", null)
      .order("created_at", { ascending: false })
      .limit(1)
      .single();

    if (prev) {
      const prevRow = prev as { id: string };
      await db
        .from("heartbeats")
        .update({ superseded_at: new Date().toISOString() })
        .eq("id", prevRow.id)
        .is("superseded_at", null);
    }

    // Insert new heartbeat.
    const insert = {
      agent_id: agentId,
      session_key: sessionKey,
      task_summary: typeof body.task_summary === "string" ? body.task_summary : null,
      current_goal: typeof body.current_goal === "string" ? body.current_goal : null,
      progress_pct: typeof body.progress_pct === "number" ? body.progress_pct : null,
      decisions_so_far: Array.isArray(body.decisions_so_far) ? body.decisions_so_far : [],
      artifacts_so_far: Array.isArray(body.artifacts_so_far) ? body.artifacts_so_far : [],
      blockers: Array.isArray(body.blockers) ? body.blockers : [],
      context_hash: typeof body.context_hash === "string" ? body.context_hash : null,
      tokens_in: typeof body.tokens_in === "number" ? body.tokens_in : 0,
      tokens_out: typeof body.tokens_out === "number" ? body.tokens_out : 0,
      estimated_usd: typeof body.estimated_usd === "number" ? body.estimated_usd : 0,
      is_alive: isAlive,
    };

    const { data, error } = await db.from("heartbeats").insert(insert).select("id").single();

    if (error) {
      logger.warn(`[relayclaw] HTTP heartbeat insert failed for ${agentId}: ${error.message}`);
      res.status(500).json({ ok: false, error: error.message });
      return;
    }

    res.json({ ok: true, id: (data as { id: string }).id });
  };
}

// ---------------------------------------------------------------------------
// POST /plugins/relayclaw/approve
//
// Webhook for Telegram inline button callbacks and external integrations.
//
// Body: { action, handoff_id, actor, actor_channel?,
//         reason?, redirect_to?, diff? }
//
// action: "approve" | "reject" | "redirect" | "kill" | "edit"
// ---------------------------------------------------------------------------

export function makeApproveHandler(
  db: SupabaseClient,
  api: OpenClawPluginApi,
  config: RelayClawConfig,
  logger: PluginLogger,
): (req: unknown, res: Res) => Promise<void> {
  return async (req, res) => {
    const body = bodyOf(req);

    const action = typeof body.action === "string" ? body.action.trim() : "";
    const handoffId = typeof body.handoff_id === "string" ? body.handoff_id.trim() : "";
    const actor = typeof body.actor === "string" ? body.actor.trim() : "webhook";
    const actorChannel = typeof body.actor_channel === "string" ? body.actor_channel : "http";
    const reason = typeof body.reason === "string" ? body.reason : undefined;
    const redirectTo = typeof body.redirect_to === "string" ? body.redirect_to.trim() : "";
    const diff = typeof body.diff === "string" ? body.diff : undefined;

    if (!handoffId) {
      res.status(400).json({ ok: false, error: "handoff_id is required" });
      return;
    }

    let result: { ok: boolean; error?: string };

    switch (action) {
      case "approve":
        result = await approveHandoff({
          id: handoffId,
          actor,
          channel: actorChannel,
          db,
          api,
          config,
          logger,
        });
        break;

      case "reject":
        result = await rejectHandoff({
          id: handoffId,
          actor,
          channel: actorChannel,
          reason,
          db,
          api,
          config,
          logger,
        });
        break;

      case "redirect":
        if (!redirectTo) {
          res.status(400).json({ ok: false, error: "redirect_to is required for redirect action" });
          return;
        }
        result = await redirectHandoff({
          id: handoffId,
          actor,
          channel: actorChannel,
          newTargetAgentId: redirectTo,
          db,
          api,
          config,
          logger,
        });
        break;

      case "kill":
        result = await killHandoff({
          id: handoffId,
          actor,
          channel: actorChannel,
          reason,
          db,
          api,
          config,
          logger,
        });
        break;

      case "edit":
        result = await editHandoff({
          id: handoffId,
          actor,
          channel: actorChannel,
          diff,
          db,
          logger,
        });
        break;

      default:
        res.status(400).json({
          ok: false,
          error: `Unknown action "${action}". Valid: approve, reject, redirect, kill, edit`,
        });
        return;
    }

    if (!result.ok) {
      res.status(400).json(result);
      return;
    }

    res.json(result);
  };
}

// ---------------------------------------------------------------------------
// GET /plugins/relayclaw/status
//
// Returns queue depths per agent, active heartbeat count, pending approval
// count, and dead-drop alert count.
// ---------------------------------------------------------------------------

export function makeStatusHandler(
  db: SupabaseClient,
  config: RelayClawConfig,
  logger: PluginLogger,
): (req: unknown, res: Res) => Promise<void> {
  return async (_req, res) => {
    try {
      const [pendingResult, heartbeatResult, queueResult, alertResult] = await Promise.all([
        // Pending approvals
        db
          .from("handoffs")
          .select("*", { count: "exact", head: true })
          .eq("status", "pending"),

        // Active heartbeats (alive, not superseded)
        db
          .from("heartbeats")
          .select("*", { count: "exact", head: true })
          .eq("is_alive", true)
          .is("superseded_at", null),

        // Queue depths — fetch all pending items grouped by agent
        db.from("agent_queues").select("agent_id").eq("status", "pending"),

        // Dead-drop alerts — alive heartbeats older than default threshold
        db
          .from("heartbeats")
          .select("id, agent_id, session_key, created_at")
          .eq("is_alive", true)
          .is("superseded_at", null)
          .is("promoted_to", null)
          .lt(
            "created_at",
            new Date(Date.now() - config.deadDropThresholdMs).toISOString(),
          ),
      ]);

      // Group queue items by agent.
      const queueRows = (queueResult.data ?? []) as Array<{ agent_id: string }>;
      const queueDepths: Record<string, number> = {};
      for (const row of queueRows) {
        queueDepths[row.agent_id] = (queueDepths[row.agent_id] ?? 0) + 1;
      }

      const alertRows = (alertResult.data ?? []) as Pick<
        Heartbeat,
        "id" | "agent_id" | "session_key" | "created_at"
      >[];

      res.json({
        plugin: "relayclaw",
        version: "0.1.0",
        status: "ok",
        pending_approvals: pendingResult.count ?? 0,
        active_heartbeats: heartbeatResult.count ?? 0,
        queue_depths: queueDepths,
        dead_drop_alerts: alertRows.map((h) => ({
          heartbeat_id: h.id,
          agent_id: h.agent_id,
          session_key: h.session_key,
          age_s: Math.floor((Date.now() - Date.parse(h.created_at)) / 1000),
        })),
      });
    } catch (err) {
      logger.warn(`[relayclaw] status handler error: ${String((err as Error)?.message ?? err)}`);
      res.status(500).json({ ok: false, error: "Internal error" });
    }
  };
}
