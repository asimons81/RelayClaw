import type { SupabaseClient } from "@supabase/supabase-js";
import type {
  AgentConfig,
  CreateHandoffParams,
  Handoff,
  HandoffStatus,
  MergeStrategy,
} from "../types.js";
import type { OpenClawPluginApi, PluginLogger } from "../types/openclaw.js";
import type { RelayClawConfig } from "../config.js";
import { checkSchemaVersion } from "./schema.js";
import { exportHandoffMd } from "./md-export.js";
import { flushLedger } from "../cost/ledger.js";
import { runApprovalGate } from "../approval/gate.js";

const CURRENT_SCHEMA_VERSION = "1.0.0";

// ---------------------------------------------------------------------------
// createHandoff — full orchestration
// ---------------------------------------------------------------------------

export type CreateHandoffResult = {
  handoffId: string;
  status: HandoffStatus;
  autoApproved: boolean;
  mdPath: string | null;
};

export async function createHandoff(params: {
  sourceAgentId: string;
  sessionKey: string;
  handoffParams: CreateHandoffParams;
  config: RelayClawConfig;
  db: SupabaseClient;
  api: OpenClawPluginApi;
  logger: PluginLogger;
}): Promise<CreateHandoffResult> {
  const { sourceAgentId, sessionKey, handoffParams, config, db, api, logger } = params;

  // ------------------------------------------------------------------
  // 1. Validate required inputs
  // ------------------------------------------------------------------
  const target = (handoffParams.target_agent_id ?? "").trim();
  if (!target) throw new Error("[relayclaw] create: target_agent_id is required");

  const goal = (handoffParams.goal ?? "").trim();
  if (!goal) throw new Error("[relayclaw] create: goal is required");

  const statusSummary = (handoffParams.status_summary ?? "").trim();
  if (!statusSummary) throw new Error("[relayclaw] create: status_summary is required");

  // ------------------------------------------------------------------
  // 2. Fetch source agent config (rate limiting, trust, merge strategy)
  // ------------------------------------------------------------------
  const { data: agentCfgData } = await db
    .from("agent_config")
    .select("*")
    .eq("agent_id", sourceAgentId)
    .single();

  const agentCfg = agentCfgData as AgentConfig | null;

  // ------------------------------------------------------------------
  // 3. Rate-limit check — min_create_interval_s
  // ------------------------------------------------------------------
  if (agentCfg && agentCfg.min_create_interval_s > 0) {
    const cutoff = new Date(Date.now() - agentCfg.min_create_interval_s * 1000).toISOString();
    const { data: recent } = await db
      .from("handoffs")
      .select("id, created_at")
      .eq("source_agent_id", sourceAgentId)
      .gte("created_at", cutoff)
      .limit(1);

    if (recent && (recent as unknown[]).length > 0) {
      const rec = (recent as Array<{ id: string; created_at: string }>)[0];
      const waitSec =
        agentCfg.min_create_interval_s -
        Math.floor((Date.now() - Date.parse(rec.created_at)) / 1000);
      throw new Error(
        `[relayclaw] Rate limit: ${sourceAgentId} must wait ${Math.max(0, waitSec)}s before creating another handoff ` +
          `(min_create_interval_s=${agentCfg.min_create_interval_s})`,
      );
    }
  }

  // ------------------------------------------------------------------
  // 4. Schema version check (uses a placeholder id; validated post-insert)
  // ------------------------------------------------------------------
  // We check against the version we're about to write, not a row in DB yet.
  // If registry is incompatible with CURRENT_SCHEMA_VERSION, throw early.
  await checkSchemaVersion(
    { id: "00000000-0000-0000-0000-000000000000", schema_version: CURRENT_SCHEMA_VERSION },
    db,
  );

  // ------------------------------------------------------------------
  // 5. Resolve merge strategy (param > agent default > db default)
  // ------------------------------------------------------------------
  const mergeStrategy: MergeStrategy =
    handoffParams.merge_strategy ??
    agentCfg?.default_merge_strategy ??
    "flag_conflict";

  // ------------------------------------------------------------------
  // 6. Insert handoff row
  // ------------------------------------------------------------------
  const insert = {
    schema_version: CURRENT_SCHEMA_VERSION,
    status: "pending" as const,
    source_agent_id: sourceAgentId,
    target_agent_id: target,
    source_session_key: sessionKey,
    goal,
    status_summary: statusSummary,
    decisions: handoffParams.decisions ?? [],
    artifacts: handoffParams.artifacts ?? [],
    blockers: handoffParams.blockers ?? [],
    next_steps: handoffParams.next_steps ?? [],
    confidence: handoffParams.confidence ?? null,
    notes: handoffParams.notes ?? null,
    merge_strategy: mergeStrategy,
    origin: "agent" as const,
    ...(handoffParams.chain_id ? { chain_id: handoffParams.chain_id } : {}),
  };

  const { data: insertData, error: insertErr } = await db
    .from("handoffs")
    .insert(insert)
    .select("*")
    .single();

  if (insertErr) {
    throw new Error(`[relayclaw] Failed to insert handoff: ${insertErr.message}`);
  }

  const handoff = insertData as Handoff;

  // ------------------------------------------------------------------
  // 7. Flush cost ledger
  // ------------------------------------------------------------------
  await flushLedger({
    sessionKey,
    handoffId: handoff.id,
    chainId: handoff.chain_id,
    db,
    logger,
  });

  // ------------------------------------------------------------------
  // 8. Export to markdown, update handoff row with path
  // ------------------------------------------------------------------
  let mdPath: string | null = null;
  try {
    mdPath = await exportHandoffMd({ handoff, exportDir: config.mdExportDir });
    await db.from("handoffs").update({ md_export_path: mdPath }).eq("id", handoff.id);
    handoff.md_export_path = mdPath;
  } catch (err) {
    logger.warn(
      `[relayclaw] Failed to export handoff .md for ${handoff.id}: ${String((err as Error)?.message ?? err)}`,
    );
  }

  // ------------------------------------------------------------------
  // 9. Run approval gate
  // ------------------------------------------------------------------
  const { autoApproved } = await runApprovalGate({
    handoff,
    agentCfg,
    config,
    db,
    api,
    logger,
  });

  const finalStatus: HandoffStatus = autoApproved ? "queued" : "pending";

  logger.info(
    `[relayclaw] Handoff created: id=${handoff.id} target=${target} status=${finalStatus} md=${mdPath ?? "none"}`,
  );

  return {
    handoffId: handoff.id,
    status: finalStatus,
    autoApproved,
    mdPath,
  };
}
