import type {
  OpenClawPluginApi,
  PluginHookAgentContext,
  PluginHookSessionContext,
  PluginHookSessionStartEvent,
  PluginHookSessionEndEvent,
  PluginHookBeforePromptBuildEvent,
  PluginHookBeforePromptBuildResult,
  PluginHookLlmOutputEvent,
  PluginHookAgentEndEvent,
  PluginHookBeforeToolCallEvent,
  PluginHookBeforeToolCallResult,
  PluginHookToolContext,
  PluginHookGatewayContext,
  PluginHookGatewayStartEvent,
  PluginHookGatewayStopEvent,
} from "./src/types/openclaw.js";
import { resolveRelayClawConfig, type RelayClawConfig } from "./src/config.js";
import { getSupabaseClient } from "./src/supabase-client.js";
import { startHeartbeat, stopHeartbeat, setSessionModel, updateHeartbeatSnapshot } from "./src/heartbeat/sender.js";
import { startMonitor, stopMonitor } from "./src/heartbeat/monitor.js";
import { createHandoff } from "./src/handoff/create.js";
import { injectHandoff } from "./src/handoff/inject.js";
import { peekQueue } from "./src/queue/dequeue.js";
import { makeHeartbeatHandler, makeApproveHandler, makeStatusHandler } from "./src/http.js";
import { registerHandoffCli } from "./src/cli.js";
import { flushLedger } from "./src/cost/ledger.js";

// ---------------------------------------------------------------------------
// RelayClaw plugin entry
//
// Follows the third-party plugin pattern from:
//   /home/tony/.openclaw/extensions/byterover/index.ts
//
// Uses structural typing for OpenClawPluginApi (defined locally in
// src/types/openclaw.ts) so the plugin typechecks without openclaw being
// installed as a full package — openclaw is a peer dependency resolved at
// runtime by the gateway.
// ---------------------------------------------------------------------------

const relayClawPlugin = {
  id: "relayclaw",
  name: "RelayClaw",
  description:
    "Agent handoff and context bridge system — structured state transfer, dead-drop recovery, approval gates, cost ledger, and chain visibility across the OpenClaw agent crew.",

  register(api: OpenClawPluginApi) {
    // -------------------------------------------------------------------------
    // Config resolution — throws early if supabaseUrl/supabaseServiceKey absent
    // -------------------------------------------------------------------------
    let config: RelayClawConfig;
    try {
      config = resolveRelayClawConfig(api.pluginConfig);
    } catch (err) {
      api.logger.error(err instanceof Error ? err.message : String(err));
      api.logger.warn("[relayclaw] Plugin loaded with errors — some features will be unavailable");
      return;
    }

    // Lazy Supabase client — initialised on first tool/hook use, not at registration time
    const getDb = () => getSupabaseClient(config);

    // -------------------------------------------------------------------------
    // Tool: relay_handoff
    // Agent-facing multi-action tool for create / inject / list / inspect / complete
    // -------------------------------------------------------------------------
    api.registerTool({
      name: "relay_handoff",
      label: "Relay Handoff",
      description:
        "Create, inject, list, or inspect agent handoff documents for structured state transfer between agents. " +
        "Actions: create (serialize current state for another agent), inject (load a queued handoff into context), " +
        "list (browse available handoffs), inspect (full detail of a handoff), complete (mark an injected handoff done).",
      parameters: {
        type: "object",
        required: ["action"],
        properties: {
          action: {
            type: "string",
            enum: ["create", "inject", "list", "inspect", "complete"],
            description: "The operation to perform.",
          },
          // create params
          target_agent: { type: "string", description: "[create] Target agent ID (e.g. 'sabbath')" },
          goal: { type: "string", description: "[create] What the target agent should accomplish" },
          status_summary: { type: "string", description: "[create] What has been accomplished so far" },
          decisions: { type: "array", items: { type: "object" }, description: "[create] Key decisions made" },
          artifacts: { type: "array", items: { type: "object" }, description: "[create] Files/outputs produced" },
          blockers: { type: "array", items: { type: "object" }, description: "[create] Current blockers" },
          next_steps: { type: "array", items: { type: "object" }, description: "[create] Recommended next steps" },
          confidence: { type: "number", minimum: 0, maximum: 1, description: "[create] Confidence level 0-1" },
          notes: { type: "string", description: "[create] Additional notes" },
          chain_id: { type: "string", description: "[create] Existing chain ID to append to" },
          merge_strategy: {
            type: "string",
            enum: ["merge", "replace", "flag_conflict"],
            description: "[create] How to handle parallel handoffs targeting the same agent",
          },
          // inject params
          handoff_id: { type: "string", description: "[inject/inspect/complete] Handoff UUID" },
          from_queue: { type: "boolean", description: "[inject] Pop next item from my queue" },
          // list params
          filter: { type: "string", enum: ["pending", "queued", "all"], description: "[list] Status filter" },
          agent: { type: "string", description: "[list] Filter by agent ID" },
          // complete params
          result_summary: { type: "string", description: "[complete] Summary of what was accomplished" },
        },
      },
      async execute(toolCallId, params) {
        void toolCallId;
        const p = params as Record<string, unknown>;
        const json = (payload: unknown) => ({
          content: [{ type: "text" as const, text: JSON.stringify(payload, null, 2) }],
        });

        try {
          switch (p.action) {
            case "create": {
              // Agent identity comes from the before_tool_call hook context;
              // for now we read from the tool params (hook will overwrite with
              // trusted values once hooks.ts is implemented).
              const sourceAgentId =
                typeof p._source_agent_id === "string" ? p._source_agent_id : "unknown";
              const sessionKey =
                typeof p._session_key === "string" ? p._session_key : "";

              const result = await createHandoff({
                sourceAgentId,
                sessionKey,
                handoffParams: {
                  target_agent_id: typeof p.target_agent === "string" ? p.target_agent : "",
                  goal: typeof p.goal === "string" ? p.goal : "",
                  status_summary: typeof p.status_summary === "string" ? p.status_summary : "",
                  decisions: Array.isArray(p.decisions) ? p.decisions : undefined,
                  artifacts: Array.isArray(p.artifacts) ? p.artifacts : undefined,
                  blockers: Array.isArray(p.blockers) ? p.blockers : undefined,
                  next_steps: Array.isArray(p.next_steps) ? p.next_steps : undefined,
                  confidence: typeof p.confidence === "number" ? p.confidence : undefined,
                  notes: typeof p.notes === "string" ? p.notes : undefined,
                  chain_id: typeof p.chain_id === "string" ? p.chain_id : undefined,
                  merge_strategy: (p.merge_strategy as "merge" | "replace" | "flag_conflict") ?? undefined,
                },
                config,
                db: getDb(),
                api,
                logger: api.logger,
              });
              return json(result);
            }

            case "inject": {
              const agentId =
                typeof p._source_agent_id === "string" ? p._source_agent_id : "unknown";
              const sessionKey =
                typeof p._session_key === "string" ? p._session_key : "";
              const explicitId =
                typeof p.handoff_id === "string" ? p.handoff_id : undefined;
              // from_queue=true (default) dequeues; explicit handoff_id overrides
              const result = await injectHandoff({
                agentId,
                sessionKey,
                db: getDb(),
                logger: api.logger,
                handoffId: explicitId,
              });
              if (!result) return json({ injected: false, reason: "queue empty" });
              return json({ injected: true, handoffId: result.handoffId, context: result.context });
            }

            case "list": {
              const agentId =
                typeof p._source_agent_id === "string" ? p._source_agent_id : undefined;
              const filterArg = typeof p.filter === "string" ? p.filter : "pending";
              const agentFilter = typeof p.agent === "string" ? p.agent : agentId;

              let q = getDb()
                .from("handoffs")
                .select("id, status, source_agent_id, target_agent_id, goal, created_at, chain_id")
                .order("created_at", { ascending: false })
                .limit(20);

              if (filterArg !== "all") q = q.eq("status", filterArg);
              if (agentFilter) q = q.or(`source_agent_id.eq.${agentFilter},target_agent_id.eq.${agentFilter}`);

              const { data, error } = await q;
              if (error) return json({ error: error.message });
              return json({ handoffs: data ?? [] });
            }

            case "inspect": {
              const id = typeof p.handoff_id === "string" ? p.handoff_id : "";
              if (!id) return json({ error: "handoff_id required for inspect" });

              const { data, error } = await getDb()
                .from("handoffs")
                .select("*")
                .eq("id", id)
                .single();
              if (error) return json({ error: error.message });
              return json(data);
            }

            case "complete": {
              const id = typeof p.handoff_id === "string" ? p.handoff_id : "";
              const resultSummary =
                typeof p.result_summary === "string" ? p.result_summary : null;
              if (!id) return json({ error: "handoff_id required for complete" });

              const updatePayload: Record<string, unknown> = {
                status: "completed",
                completed_at: new Date().toISOString(),
              };
              if (resultSummary) updatePayload.notes = resultSummary;

              const { error } = await getDb()
                .from("handoffs")
                .update(updatePayload)
                .eq("id", id);

              if (error) return json({ error: error.message });

              // Mark the queue item completed.
              await getDb()
                .from("agent_queues")
                .update({ status: "completed" })
                .eq("handoff_id", id);

              return json({ completed: true, handoffId: id });
            }

            default:
              return json({ error: `action "${String(p.action)}" not yet implemented` });
          }
        } catch (err) {
          return json({ error: err instanceof Error ? err.message : String(err) });
        }
      },
    });

    // -------------------------------------------------------------------------
    // CLI: openclaw handoff <subcommand>
    // Human-facing commands for list / inspect / approve / reject / redirect / cost
    // -------------------------------------------------------------------------
    api.registerCli(
      ({ program }: { program: { command: (name: string) => unknown } }) => {
        registerHandoffCli({ program, db: getDb(), api, config, logger: api.logger });
      },
      {
        descriptors: [
          {
            name: "handoff",
            description: "Manage RelayClaw agent handoffs",
            hasSubcommands: true,
          },
        ],
      },
    );

    // -------------------------------------------------------------------------
    // HTTP routes
    // -------------------------------------------------------------------------

    // POST /plugins/relayclaw/heartbeat — HTTP alternative to direct Supabase heartbeat writes
    api.registerHttpRoute({
      path: "/plugins/relayclaw/heartbeat",
      auth: "plugin" as const,
      handler: makeHeartbeatHandler(getDb(), api.logger),
    });

    // POST /plugins/relayclaw/approve — approval webhook (Telegram callbacks / external)
    api.registerHttpRoute({
      path: "/plugins/relayclaw/approve",
      auth: "plugin" as const,
      handler: makeApproveHandler(getDb(), api, config, api.logger),
    });

    // GET /plugins/relayclaw/status — queue depths, heartbeat counts, dead-drop alerts
    api.registerHttpRoute({
      path: "/plugins/relayclaw/status",
      auth: "plugin" as const,
      handler: makeStatusHandler(getDb(), config, api.logger),
    });

    // -------------------------------------------------------------------------
    // Gateway methods — proven implementations ported from extension
    // -------------------------------------------------------------------------

    // relay_handoff tool — create
    api.registerGatewayMethod(
      "relayclaw.handoff.create",
      async ({ params, respond }: { params?: Record<string, unknown>; respond: (ok: boolean, payload?: unknown) => void }) => {
        try {
          const p = params ?? {};
          const result = await createHandoff({
            sourceAgentId: typeof p.source_agent_id === "string" ? p.source_agent_id : "unknown",
            sessionKey: typeof p.source_session_key === "string" ? p.source_session_key : "",
            handoffParams: {
              target_agent_id: typeof p.target_agent === "string" ? p.target_agent : "",
              goal: typeof p.goal === "string" ? p.goal : "",
              status_summary: typeof p.status_summary === "string" ? p.status_summary : "",
              decisions: Array.isArray(p.decisions) ? p.decisions : undefined,
              artifacts: Array.isArray(p.artifacts) ? p.artifacts : undefined,
              blockers: Array.isArray(p.blockers) ? p.blockers : undefined,
              next_steps: Array.isArray(p.next_steps) ? p.next_steps : undefined,
              confidence: typeof p.confidence === "number" ? p.confidence : undefined,
              notes: typeof p.notes === "string" ? p.notes : undefined,
              chain_id: typeof p.chain_id === "string" ? p.chain_id : undefined,
              merge_strategy: (p.merge_strategy as "merge" | "replace" | "flag_conflict") ?? undefined,
            },
            config,
            db: getDb(),
            api,
            logger: api.logger,
          });
          respond(true, result);
        } catch (err) {
          respond(false, { error: err instanceof Error ? err.message : String(err) });
        }
      },
    );

    // relay_handoff tool — inject
    api.registerGatewayMethod(
      "relayclaw.handoff.inject",
      async ({ params, respond }: { params?: Record<string, unknown>; respond: (ok: boolean, payload?: unknown) => void }) => {
        try {
          const p = params ?? {};
          const result = await injectHandoff({
            agentId: typeof p.source_agent_id === "string" ? p.source_agent_id : "unknown",
            sessionKey: typeof p.source_session_key === "string" ? p.source_session_key : "",
            db: getDb(),
            logger: api.logger,
            handoffId: typeof p.handoff_id === "string" ? p.handoff_id : undefined,
          });
          if (!result) { respond(false, { error: "no handoff in queue" }); return; }
          respond(true, result);
        } catch (err) {
          respond(false, { error: err instanceof Error ? err.message : String(err) });
        }
      },
    );

    // relay_handoff tool — complete
    api.registerGatewayMethod(
      "relayclaw.handoff.complete",
      async ({ params, respond }: { params?: Record<string, unknown>; respond: (ok: boolean, payload?: unknown) => void }) => {
        try {
          const handoffId = (params?.handoff_id as string) || "";
          if (!handoffId) { respond(false, { error: "handoff_id required" }); return; }

          const db = getDb();
          const { data: handoff, error: fetchErr } = await db
            .from("handoffs")
            .select("chain_id, target_agent_id")
            .eq("id", handoffId)
            .single();
          if (fetchErr) { respond(false, { error: fetchErr.message }); return; }

          const { error: updateErr } = await getDb()
            .from("handoffs")
            .update({ status: "completed", completed_at: new Date().toISOString() })
            .eq("id", handoffId);
          if (updateErr) { respond(false, { error: updateErr.message }); return; }
          await getDb().from("agent_queues").update({ status: "completed" }).eq("handoff_id", handoffId);
          const parsed = { ok: true, handoffId };

          // Write completing-leg cost to ledger
          const tokensIn = typeof params?.tokens_in === "number" ? params.tokens_in : 0;
          const tokensOut = typeof params?.tokens_out === "number" ? params.tokens_out : 0;
          const estimatedUsd = (tokensIn / 1000) * 0.01 + (tokensOut / 1000) * 0.03;

          await db.from("cost_ledger").insert({
            handoff_id: handoffId,
            chain_id: (handoff as Record<string, unknown>)?.chain_id ?? null,
            agent_id: (handoff as Record<string, unknown>)?.target_agent_id ?? "unknown",
            session_key: params?.session_key as string ?? null,
            model: (params?.model as string) ?? null,
            tokens_in: tokensIn,
            tokens_out: tokensOut,
            estimated_usd: estimatedUsd,
            wall_clock_s: typeof params?.wall_clock_s === "number" ? params.wall_clock_s : 0,
            leg_label: "completing",
            leg_sequence: 1,
          });

          respond(true, parsed);
        } catch (err) {
          respond(false, { error: err instanceof Error ? err.message : String(err) });
        }
      },
    );

    // Cost ledger — summary
    api.registerGatewayMethod(
      "relayclaw.cost.summary",
      async ({ params, respond }: { params?: Record<string, unknown>; respond: (ok: boolean, payload?: unknown) => void }) => {
        const handoffId = (params?.handoff_id as string) || "";
        const db = getDb();
        let query = db.from("cost_ledger").select("*");
        if (handoffId) query = query.eq("handoff_id", handoffId);
        const { data, error } = await query;
        if (error) { respond(false, { error: error.message }); return; }
        const entries = data ?? [];
        const summary = {
          total_tokens_in: entries.reduce((s: number, r: Record<string, unknown>) => s + ((r.tokens_in as number) || 0), 0),
          total_tokens_out: entries.reduce((s: number, r: Record<string, unknown>) => s + ((r.tokens_out as number) || 0), 0),
          total_cost_usd: entries.reduce((s: number, r: Record<string, unknown>) => s + ((r.estimated_usd as number) || 0), 0),
        };
        respond(true, { entries, summary });
      },
    );

    // relay_handoff tool — approve (stub — requires identity-gated source)
    api.registerGatewayMethod(
      "relayclaw.handoff.approve",
      async ({ params, respond }: { params?: Record<string, unknown>; respond: (ok: boolean, payload?: unknown) => void }) => {
        respond(false, { error: "approve not yet implemented via gateway" });
      },
    );

    // relay_handoff tool — reject (stub — requires identity-gated source)
    api.registerGatewayMethod(
      "relayclaw.handoff.reject",
      async ({ params, respond }: { params?: Record<string, unknown>; respond: (ok: boolean, payload?: unknown) => void }) => {
        respond(false, { error: "reject not yet implemented via gateway" });
      },
    );

    // relay_handoff tool — list (stub)
    api.registerGatewayMethod(
      "relayclaw.handoff.list",
      async ({ params, respond }: { params?: Record<string, unknown>; respond: (ok: boolean, payload?: unknown) => void }) => {
        respond(false, { error: "list not yet implemented via gateway" });
      },
    );

    // relay_handoff tool — inspect (stub)
    api.registerGatewayMethod(
      "relayclaw.handoff.inspect",
      async ({ params, respond }: { params?: Record<string, unknown>; respond: (ok: boolean, payload?: unknown) => void }) => {
        respond(false, { error: "inspect not yet implemented via gateway" });
      },
    );

    // relayclaw.queue.peek (stub)
    api.registerGatewayMethod(
      "relayclaw.queue.peek",
      async ({ params, respond }: { params?: Record<string, unknown>; respond: (ok: boolean, payload?: unknown) => void }) => {
        respond(false, { error: "queue.peek not yet implemented via gateway" });
      },
    );

    // relayclaw.heartbeat.status (stub)
    api.registerGatewayMethod(
      "relayclaw.heartbeat.status",
      async ({ params, respond }: { params?: Record<string, unknown>; respond: (ok: boolean, payload?: unknown) => void }) => {
        respond(false, { error: "heartbeat.status not yet implemented via gateway" });
      },
    );

    // -------------------------------------------------------------------------
    // Lifecycle hooks
    // -------------------------------------------------------------------------

    // session_start — start heartbeat timer, record session wall-clock start
    api.on(
      "session_start",
      async (event: PluginHookSessionStartEvent, ctx: PluginHookSessionContext) => {
        const agentId = ctx.agentId;
        const sessionKey = event.sessionKey ?? ctx.sessionKey;
        if (!agentId || !sessionKey) return;

        await startHeartbeat({
          agentId,
          sessionKey,
          config,
          db: getDb(),
          logger: api.logger,
        });
      },
    );

    // session_end — stop heartbeat timer, mark heartbeat ended cleanly
    api.on(
      "session_end",
      async (event: PluginHookSessionEndEvent, ctx: PluginHookSessionContext) => {
        const sessionKey = event.sessionKey ?? ctx.sessionKey;
        if (!sessionKey) return;

        await stopHeartbeat({
          sessionKey,
          db: getDb(),
          logger: api.logger,
          cleanEnd: true,
        });
      },
    );

    // before_prompt_build — auto-inject if agent has auto_inject=true and queue non-empty
    api.on(
      "before_prompt_build",
      async (
        event: PluginHookBeforePromptBuildEvent,
        ctx: PluginHookAgentContext,
      ): Promise<PluginHookBeforePromptBuildResult | void> => {
        void event;
        const agentId = ctx.agentId;
        const sessionKey = ctx.sessionKey;
        if (!agentId || !sessionKey) return undefined;

        // Check if auto_inject is enabled for this agent.
        const { data: cfgData } = await getDb()
          .from("agent_config")
          .select("auto_inject")
          .eq("agent_id", agentId)
          .single();

        const autoInject = cfgData ? (cfgData as { auto_inject: boolean }).auto_inject : false;
        if (!autoInject) return undefined;

        // Quick non-destructive peek before committing to a dequeue.
        const queued = await peekQueue({ agentId, db: getDb() });
        if (!queued) return undefined;

        const result = await injectHandoff({
          agentId,
          sessionKey,
          db: getDb(),
          logger: api.logger,
        });

        if (!result) return undefined;

        return { appendSystemContext: result.context };
      },
    );

    // llm_output — accumulate token usage for cost ledger
    api.on(
      "llm_output",
      async (event: PluginHookLlmOutputEvent, ctx: PluginHookAgentContext) => {
        const sessionKey = ctx.sessionKey;
        if (!sessionKey) return;

        if (event.model) setSessionModel(sessionKey, event.model);

        const usage = event.usage;
        if (usage) {
          updateHeartbeatSnapshot({
            sessionKey,
            partial: {
              tokens_in: usage.input ?? 0,
              tokens_out: usage.output ?? 0,
            },
          });
        }
      },
    );

    // agent_end — flush accumulated cost to cost_ledger, clean up heartbeat
    api.on(
      "agent_end",
      async (event: PluginHookAgentEndEvent, ctx: PluginHookAgentContext) => {
        const sessionKey = ctx.sessionKey || `session_${ctx.sessionId}`;
        try {
          await flushLedger({
            sessionKey,
            handoffId: "",
            chainId: null,
            db: getDb(),
            logger: api.logger,
          });
        } catch (err) {
          api.logger.warn(`[relayclaw] flushLedger error: ${err instanceof Error ? err.message : String(err)}`);
        }
      },
    );

    // before_tool_call — inject source_agent_id into relay_handoff create calls
    // (security: prevents agents from forging their own identity in handoff creation)
    api.on(
      "before_tool_call",
      async (
        event: PluginHookBeforeToolCallEvent,
        ctx: PluginHookToolContext,
      ): Promise<PluginHookBeforeToolCallResult | void> => {
        if (event.toolName !== "relay_handoff") return undefined;
        const params = event.params as Record<string, unknown>;
        if (params.action !== "create") return undefined;
        // Inject the trusted agent identity and session key to prevent agents forging their own source
        const patched = { ...params, source_agent_id: ctx.agentId || "unknown", source_session_key: ctx.sessionKey || null };
        return { params: patched };
      },
    );

    // gateway_start — start dead-drop monitor service
    api.on(
      "gateway_start",
      async (event: PluginHookGatewayStartEvent, ctx: PluginHookGatewayContext) => {
        void event; void ctx;
        startMonitor({ db: getDb(), config, api, logger: api.logger });
      },
    );

    // gateway_stop — stop dead-drop monitor and queue conflict scanner
    api.on(
      "gateway_stop",
      async (event: PluginHookGatewayStopEvent, ctx: PluginHookGatewayContext) => {
        void event; void ctx;
        stopMonitor(api.logger);
      },
    );

    // -------------------------------------------------------------------------
    // Background services
    // -------------------------------------------------------------------------

    // Dead-drop monitor — promotes stale heartbeats to interrupted handoffs
    api.registerService({
      id: "relayclaw-dead-drop-monitor",
      start: async () => {
        startMonitor({ db: getDb(), config, api, logger: api.logger });
      },
      stop: async () => {
        stopMonitor(api.logger);
      },
    });

    // Queue conflict scanner — detects agents with multiple pending handoffs
    let conflictScanInterval: ReturnType<typeof setInterval> | null = null;
    api.registerService({
      id: "relayclaw-queue-conflict-scanner",
      start: async () => {
        if (conflictScanInterval) return;
        const tick = async () => {
          // Find all agents with > 1 pending item that haven't been conflict-flagged yet.
          const { data } = await getDb()
            .from("agent_queues")
            .select("agent_id, handoff_id")
            .eq("status", "pending");

          if (!data) return;
          const rows = data as Array<{ agent_id: string; handoff_id: string }>;

          // Group by agent.
          const byAgent = new Map<string, string[]>();
          for (const r of rows) {
            const existing = byAgent.get(r.agent_id) ?? [];
            existing.push(r.handoff_id);
            byAgent.set(r.agent_id, existing);
          }

          // For each agent with > 1 pending, fetch handoffs and resolve.
          for (const [agentId, ids] of byAgent) {
            if (ids.length <= 1) continue;
            const { data: handoffData } = await getDb()
              .from("handoffs")
              .select("*")
              .in("id", ids);
            if (!handoffData || (handoffData as unknown[]).length <= 1) continue;

            const handoffs = handoffData as import("./src/types.js").Handoff[];
            // Sort by created_at; newest is "incoming".
            handoffs.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at));
            const [incoming, ...existing] = handoffs;

            await import("./src/queue/conflict.js").then(({ resolveConflict }) =>
              resolveConflict({
                incoming,
                existing,
                strategy: incoming.merge_strategy,
                db: getDb(),
                api,
                config,
                logger: api.logger,
              }),
            ).catch((err: unknown) => {
              api.logger.warn(
                `[relayclaw] conflict scanner: resolveConflict failed for ${agentId}: ${String((err as Error)?.message ?? err)}`,
              );
            });
          }
        };

        conflictScanInterval = setInterval(() => {
          tick().catch((err: unknown) => {
            api.logger.warn(
              `[relayclaw] conflict scanner error: ${String((err as Error)?.message ?? err)}`,
            );
          });
        }, 120_000);
        conflictScanInterval.unref?.();
        api.logger.info("[relayclaw] queue conflict scanner started (poll: 120s)");
      },
      stop: async () => {
        if (conflictScanInterval) {
          clearInterval(conflictScanInterval);
          conflictScanInterval = null;
        }
        api.logger.info("[relayclaw] queue conflict scanner stopped");
      },
    });

    api.logger.info("[relayclaw] Plugin loaded");
  },
};

export default relayClawPlugin;
