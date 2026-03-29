import type { SupabaseClient } from "@supabase/supabase-js";
import type { OpenClawPluginApi, PluginLogger } from "./types/openclaw.js";
import type { RelayClawConfig } from "./config.js";
import type {
  AgentConfig,
  Handoff,
  HandoffChain,
  CostLedgerEntry,
} from "./types.js";
import {
  approveHandoff,
  rejectHandoff,
  redirectHandoff,
  killHandoff,
} from "./approval/actions.js";

// ---------------------------------------------------------------------------
// Minimal Commander-like fluent type for the unknown program object
// ---------------------------------------------------------------------------

type Cmd = {
  command(name: string): Cmd;
  description(s: string): Cmd;
  option(flags: string, desc: string, defaultVal?: unknown): Cmd;
  argument(name: string, desc?: string): Cmd;
  action(fn: (...args: unknown[]) => Promise<void> | void): Cmd;
  alias(s: string): Cmd;
  addHelpText(position: "after", text: string): Cmd;
};

function cmd(program: { command: (name: string) => unknown }, name: string): Cmd {
  return program.command(name) as unknown as Cmd;
}

// ---------------------------------------------------------------------------
// Terminal table helper
// ---------------------------------------------------------------------------

function table(headers: string[], rows: string[][]): string {
  const cols = headers.length;
  const widths = headers.map((h, i) =>
    Math.max(h.length, ...rows.map((r) => (r[i] ?? "").length)),
  );

  const sep = widths.map((w) => "-".repeat(w)).join("  ");
  const head = headers.map((h, i) => h.padEnd(widths[i]!)).join("  ");
  const body = rows.map((r) =>
    Array.from({ length: cols }, (_, i) => (r[i] ?? "").padEnd(widths[i]!)).join("  "),
  );

  return [head, sep, ...body].join("\n");
}

function ago(iso: string | null): string {
  if (!iso) return "—";
  const secs = Math.floor((Date.now() - Date.parse(iso)) / 1000);
  if (secs < 60) return `${secs}s ago`;
  if (secs < 3600) return `${Math.floor(secs / 60)}m ago`;
  if (secs < 86400) return `${Math.floor(secs / 3600)}h ago`;
  return `${Math.floor(secs / 86400)}d ago`;
}

function trunc(s: string | null | undefined, max = 48): string {
  if (!s) return "—";
  return s.length <= max ? s : `${s.slice(0, max - 1)}…`;
}

function out(text: string): void {
  process.stdout.write(`${text}\n`);
}

function err(text: string): void {
  process.stderr.write(`[relayclaw] ${text}\n`);
}

// ---------------------------------------------------------------------------
// registerHandoffCli
//
// Registers all "handoff" subcommands onto the given Commander program object.
// Called from index.ts registerCli().
// ---------------------------------------------------------------------------

export function registerHandoffCli(params: {
  program: { command: (name: string) => unknown };
  db: SupabaseClient;
  api: OpenClawPluginApi;
  config: RelayClawConfig;
  logger: PluginLogger;
}): void {
  const { program, db, api, config, logger } = params;

  // ── handoff list ──────────────────────────────────────────────────────────

  cmd(program, "handoff list")
    .description("List handoffs")
    .option("-f, --filter <status>", "Filter by status (pending|queued|all)", "pending")
    .option("-a, --agent <id>", "Filter by agent id (source or target)")
    .option("-n, --limit <n>", "Max rows", "20")
    .action(async (...args) => {
      const opts = args[args.length - 1] as Record<string, string>;
      const filter = opts.filter ?? "pending";
      const agentFilter = opts.agent as string | undefined;
      const limit = Math.min(100, parseInt(String(opts.limit ?? "20"), 10) || 20);

      let q = db
        .from("handoffs")
        .select("id, status, source_agent_id, target_agent_id, goal, created_at, chain_id")
        .order("created_at", { ascending: false })
        .limit(limit);

      if (filter !== "all") q = q.eq("status", filter);
      if (agentFilter) {
        q = q.or(`source_agent_id.eq.${agentFilter},target_agent_id.eq.${agentFilter}`);
      }

      const { data, error: qErr } = await q;
      if (qErr) { err(qErr.message); process.exit(1); }

      const rows = (data ?? []) as Pick<
        Handoff,
        "id" | "status" | "source_agent_id" | "target_agent_id" | "goal" | "created_at" | "chain_id"
      >[];

      if (rows.length === 0) { out("No handoffs found."); return; }

      out(
        table(
          ["ID", "Status", "From", "To", "Goal", "Created"],
          rows.map((h) => [
            h.id.slice(0, 8),
            h.status,
            h.source_agent_id,
            h.target_agent_id,
            trunc(h.goal, 40),
            ago(h.created_at),
          ]),
        ),
      );
    });

  // ── handoff inspect ───────────────────────────────────────────────────────

  cmd(program, "handoff inspect")
    .description("Show full detail of a handoff")
    .argument("<id>", "Handoff UUID (or prefix)")
    .action(async (...args) => {
      const id = String(args[0]);
      const { data, error: qErr } = await db
        .from("handoffs")
        .select("*")
        .or(`id.eq.${id},id.like.${id}%`)
        .limit(1)
        .single();

      if (qErr || !data) { err(`Handoff not found: ${id}`); process.exit(1); }

      const h = data as Handoff;
      const fields: [string, string][] = [
        ["ID", h.id],
        ["Status", h.status],
        ["Schema", h.schema_version],
        ["Origin", h.origin],
        ["From", `${h.source_agent_id}  (session: ${h.source_session_key ?? "—"})`],
        ["To", `${h.target_agent_id}  (session: ${h.target_session_key ?? "—"})`],
        ["Chain", h.chain_id ? `${h.chain_id} (seq ${h.chain_sequence})` : "—"],
        ["Goal", h.goal],
        ["Status Summary", h.status_summary],
        ["Confidence", h.confidence !== null ? `${(h.confidence * 100).toFixed(0)}%` : "—"],
        ["Merge Strategy", h.merge_strategy],
        ["Created", h.created_at],
        ["Approved", h.approved_at ?? "—"],
        ["Queued", h.queued_at ?? "—"],
        ["Injected", h.injected_at ?? "—"],
        ["Completed", h.completed_at ?? "—"],
        ["Expires", h.expires_at ?? "—"],
        ["MD File", h.md_export_path ?? "—"],
      ];

      const labelWidth = Math.max(...fields.map(([k]) => k.length));
      for (const [k, v] of fields) {
        out(`${k.padEnd(labelWidth)}  ${v}`);
      }

      if (h.decisions.length > 0) {
        out("\nDecisions:");
        for (const d of h.decisions) out(`  • ${d.decision}: ${d.rationale}`);
      }
      if (h.artifacts.length > 0) {
        out("\nArtifacts:");
        for (const a of h.artifacts) out(`  • ${a.path} (${a.type})`);
      }
      if (h.blockers.length > 0) {
        out("\nBlockers:");
        for (const b of h.blockers) out(`  • [${b.severity ?? "?"}] ${b.description}`);
      }
      if (h.next_steps.length > 0) {
        out("\nNext Steps:");
        for (const s of h.next_steps) out(`  • [${s.priority ?? "?"}] ${s.step}`);
      }
      if (h.notes) { out("\nNotes:"); out(`  ${h.notes}`); }
    });

  // ── handoff approve ───────────────────────────────────────────────────────

  cmd(program, "handoff approve")
    .description("Approve a pending handoff and enqueue it")
    .argument("<id>", "Handoff UUID")
    .option("-r, --reason <text>", "Optional approval note")
    .action(async (...args) => {
      const id = String(args[0]);
      const opts = args[args.length - 1] as Record<string, string>;
      const result = await approveHandoff({
        id,
        actor: "human:cli",
        channel: "cli",
        db,
        api,
        config,
        logger,
      });
      if (!result.ok) { err(result.error ?? "Unknown error"); process.exit(1); }
      void opts;
      out(`Handoff ${id} approved and queued.`);
    });

  // ── handoff reject ────────────────────────────────────────────────────────

  cmd(program, "handoff reject")
    .description("Reject a pending handoff")
    .argument("<id>", "Handoff UUID")
    .option("-r, --reason <text>", "Rejection reason")
    .action(async (...args) => {
      const id = String(args[0]);
      const opts = args[args.length - 1] as Record<string, string>;
      const result = await rejectHandoff({
        id,
        actor: "human:cli",
        channel: "cli",
        reason: opts.reason,
        db,
        api,
        config,
        logger,
      });
      if (!result.ok) { err(result.error ?? "Unknown error"); process.exit(1); }
      out(`Handoff ${id} rejected.`);
    });

  // ── handoff redirect ──────────────────────────────────────────────────────

  cmd(program, "handoff redirect")
    .description("Redirect a handoff to a different agent")
    .argument("<id>", "Handoff UUID")
    .argument("<agent>", "New target agent id")
    .action(async (...args) => {
      const id = String(args[0]);
      const newAgent = String(args[1]);
      const result = await redirectHandoff({
        id,
        actor: "human:cli",
        channel: "cli",
        newTargetAgentId: newAgent,
        db,
        api,
        config,
        logger,
      });
      if (!result.ok) { err(result.error ?? "Unknown error"); process.exit(1); }
      out(`Handoff ${id} redirected to ${newAgent}.`);
    });

  // ── handoff kill ──────────────────────────────────────────────────────────

  cmd(program, "handoff kill")
    .description("Kill a handoff and clear its queue items")
    .argument("<id>", "Handoff UUID")
    .option("-r, --reason <text>", "Kill reason")
    .action(async (...args) => {
      const id = String(args[0]);
      const opts = args[args.length - 1] as Record<string, string>;
      const result = await killHandoff({
        id,
        actor: "human:cli",
        channel: "cli",
        reason: opts.reason,
        db,
        api,
        config,
        logger,
      });
      if (!result.ok) { err(result.error ?? "Unknown error"); process.exit(1); }
      out(`Handoff ${id} killed.`);
    });

  // ── handoff chain ─────────────────────────────────────────────────────────

  cmd(program, "handoff chain list")
    .description("List handoff chains")
    .option("-s, --status <status>", "Filter by status (active|completed|failed|paused)")
    .option("-n, --limit <n>", "Max rows", "20")
    .action(async (...args) => {
      const opts = args[args.length - 1] as Record<string, string>;
      const limit = Math.min(100, parseInt(String(opts.limit ?? "20"), 10) || 20);

      let q = db
        .from("handoff_chains")
        .select("id, name, status, root_goal, total_cost_usd, total_wall_clock_s, created_at")
        .order("created_at", { ascending: false })
        .limit(limit);

      if (opts.status) q = q.eq("status", opts.status);

      const { data, error: qErr } = await q;
      if (qErr) { err(qErr.message); process.exit(1); }

      const rows = (data ?? []) as Pick<
        HandoffChain,
        "id" | "name" | "status" | "root_goal" | "total_cost_usd" | "total_wall_clock_s" | "created_at"
      >[];

      if (rows.length === 0) { out("No chains found."); return; }

      out(
        table(
          ["ID", "Name", "Status", "Goal", "Cost USD", "Wall (s)", "Created"],
          rows.map((c) => [
            c.id.slice(0, 8),
            trunc(c.name, 20),
            c.status,
            trunc(c.root_goal, 32),
            `$${(c.total_cost_usd ?? 0).toFixed(4)}`,
            `${(c.total_wall_clock_s ?? 0).toFixed(1)}`,
            ago(c.created_at),
          ]),
        ),
      );
    });

  cmd(program, "handoff chain inspect")
    .description("Show a chain and its handoffs")
    .argument("<id>", "Chain UUID")
    .action(async (...args) => {
      const id = String(args[0]);

      const [chainRes, handoffsRes] = await Promise.all([
        db.from("handoff_chains").select("*").eq("id", id).single(),
        db
          .from("handoffs")
          .select("id, status, source_agent_id, target_agent_id, goal, chain_sequence, created_at")
          .eq("chain_id", id)
          .order("chain_sequence", { ascending: true }),
      ]);

      if (chainRes.error || !chainRes.data) {
        err(`Chain not found: ${id}`);
        process.exit(1);
      }

      const chain = chainRes.data as HandoffChain;
      out(`Chain: ${chain.id}`);
      out(`Name:  ${chain.name ?? "—"}`);
      out(`Goal:  ${chain.root_goal ?? "—"}`);
      out(`Status: ${chain.status}`);
      out(`Cost:  $${chain.total_cost_usd.toFixed(4)}  Tokens: ${chain.total_tokens_in}↑ ${chain.total_tokens_out}↓  Wall: ${chain.total_wall_clock_s.toFixed(1)}s`);

      const legs = (handoffsRes.data ?? []) as Pick<
        Handoff,
        "id" | "status" | "source_agent_id" | "target_agent_id" | "goal" | "chain_sequence" | "created_at"
      >[];

      if (legs.length > 0) {
        out("\nHandoffs:");
        out(
          table(
            ["Seq", "ID", "Status", "From", "To", "Goal"],
            legs.map((h) => [
              String(h.chain_sequence),
              h.id.slice(0, 8),
              h.status,
              h.source_agent_id,
              h.target_agent_id,
              trunc(h.goal, 36),
            ]),
          ),
        );
      }
    });

  // ── handoff queue ─────────────────────────────────────────────────────────

  cmd(program, "handoff queue")
    .description("Show agent queue status")
    .option("-a, --agent <id>", "Filter to one agent")
    .action(async (...args) => {
      const opts = args[args.length - 1] as Record<string, string>;

      let q = db
        .from("agent_queues")
        .select("agent_id, handoff_id, position, status, enqueued_at")
        .in("status", ["pending", "processing", "conflict"])
        .order("agent_id", { ascending: true })
        .order("position", { ascending: true });

      if (opts.agent) q = q.eq("agent_id", opts.agent);

      const { data, error: qErr } = await q;
      if (qErr) { err(qErr.message); process.exit(1); }

      const rows = (data ?? []) as Array<{
        agent_id: string;
        handoff_id: string;
        position: number;
        status: string;
        enqueued_at: string;
      }>;

      if (rows.length === 0) { out("All queues empty."); return; }

      out(
        table(
          ["Agent", "Pos", "Handoff", "Queue Status", "Enqueued"],
          rows.map((r) => [
            r.agent_id,
            String(r.position),
            r.handoff_id.slice(0, 8),
            r.status,
            ago(r.enqueued_at),
          ]),
        ),
      );
    });

  // ── handoff cost ──────────────────────────────────────────────────────────

  cmd(program, "handoff cost")
    .description("Show cost ledger entries")
    .option("-c, --chain <id>", "Filter by chain id")
    .option("-a, --agent <id>", "Filter by agent id")
    .option("-n, --limit <n>", "Max rows", "20")
    .action(async (...args) => {
      const opts = args[args.length - 1] as Record<string, string>;
      const limit = Math.min(100, parseInt(String(opts.limit ?? "20"), 10) || 20);

      let q = db
        .from("cost_ledger")
        .select("agent_id, model, tokens_in, tokens_out, estimated_usd, wall_clock_s, created_at, handoff_id")
        .order("created_at", { ascending: false })
        .limit(limit);

      if (opts.chain) q = q.eq("chain_id", opts.chain);
      if (opts.agent) q = q.eq("agent_id", opts.agent);

      const { data, error: qErr } = await q;
      if (qErr) { err(qErr.message); process.exit(1); }

      const rows = (data ?? []) as Pick<
        CostLedgerEntry,
        "agent_id" | "model" | "tokens_in" | "tokens_out" | "estimated_usd" | "wall_clock_s" | "created_at" | "handoff_id"
      >[];

      if (rows.length === 0) { out("No cost records found."); return; }

      const totalUsd = rows.reduce((s, r) => s + r.estimated_usd, 0);
      const totalIn = rows.reduce((s, r) => s + r.tokens_in, 0);
      const totalOut = rows.reduce((s, r) => s + r.tokens_out, 0);

      out(
        table(
          ["Agent", "Model", "Tokens↑", "Tokens↓", "USD", "Wall (s)", "Handoff", "When"],
          rows.map((r) => [
            r.agent_id,
            trunc(r.model, 24),
            String(r.tokens_in),
            String(r.tokens_out),
            `$${r.estimated_usd.toFixed(4)}`,
            `${r.wall_clock_s.toFixed(1)}`,
            r.handoff_id.slice(0, 8),
            ago(r.created_at),
          ]),
        ),
      );

      out(`\nTotal: ${rows.length} rows  tokens↑=${totalIn.toLocaleString()} tokens↓=${totalOut.toLocaleString()}  cost=$${totalUsd.toFixed(4)}`);
    });

  // ── handoff config ────────────────────────────────────────────────────────

  cmd(program, "handoff config")
    .description("Show agent configuration")
    .option("-a, --agent <id>", "Show config for one agent (omit for all)")
    .action(async (...args) => {
      const opts = args[args.length - 1] as Record<string, string>;

      let q = db
        .from("agent_config")
        .select("*")
        .order("agent_id", { ascending: true });

      if (opts.agent) q = q.eq("agent_id", opts.agent);

      const { data, error: qErr } = await q;
      if (qErr) { err(qErr.message); process.exit(1); }

      const rows = (data ?? []) as AgentConfig[];

      if (rows.length === 0) { out("No agent config found."); return; }

      out(
        table(
          ["Agent", "Display Name", "Trust", "Merge", "HB (s)", "Dead (s)", "Auto-inject", "Notify"],
          rows.map((r) => [
            r.agent_id,
            r.display_name ?? "—",
            r.trust_level,
            r.default_merge_strategy,
            String(r.heartbeat_interval_s),
            String(r.heartbeat_dead_threshold_s),
            r.auto_inject ? "yes" : "no",
            r.notify_target ? `${r.notify_target}${r.notify_topic_id != null ? `#${r.notify_topic_id}` : ""}` : "—",
          ]),
        ),
      );
    });
}
