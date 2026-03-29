// =============================================================================
// RelayClaw — Domain Types
// Derived from the Supabase schema in supabase/migrations/20260328000000_relayclaw_init.sql
// =============================================================================

// ---------------------------------------------------------------------------
// Enums / union literals
// ---------------------------------------------------------------------------

export type HandoffStatus =
  | "pending"
  | "approved"
  | "queued"
  | "injected"
  | "completed"
  | "rejected"
  | "interrupted"
  | "expired";

export type HandoffOrigin = "agent" | "dead_drop" | "human" | "cron";

export type MergeStrategy = "merge" | "replace" | "flag_conflict";

export type TrustLevel = "high" | "medium" | "low";

export type ChainStatus = "active" | "completed" | "failed" | "paused";

export type QueueItemStatus = "pending" | "processing" | "completed" | "skipped" | "conflict";

export type ApprovalAction = "approve" | "reject" | "edit" | "redirect" | "kill";

// ---------------------------------------------------------------------------
// handoff_chains
// ---------------------------------------------------------------------------

export type HandoffChain = {
  id: string;
  name: string | null;
  description: string | null;
  root_goal: string | null;
  status: ChainStatus;
  created_at: string;
  updated_at: string;
  completed_at: string | null;
  total_tokens_in: number;
  total_tokens_out: number;
  total_cost_usd: number;
  total_wall_clock_s: number;
};

export type CreateChainParams = Pick<HandoffChain, "name" | "description" | "root_goal">;

// ---------------------------------------------------------------------------
// handoffs
// ---------------------------------------------------------------------------

export type HandoffDecision = {
  decision: string;
  rationale: string;
  timestamp?: string;
};

export type HandoffArtifact = {
  path: string;
  type: string;
  description: string;
  hash?: string;
};

export type HandoffBlocker = {
  description: string;
  severity?: "low" | "medium" | "high" | "critical";
  suggested_resolution?: string;
};

export type HandoffNextStep = {
  step: string;
  priority?: "low" | "medium" | "high";
  estimated_effort?: string;
};

export type Handoff = {
  id: string;
  chain_id: string | null;
  schema_version: string;
  status: HandoffStatus;

  source_agent_id: string;
  target_agent_id: string;
  source_session_key: string | null;
  target_session_key: string | null;

  goal: string;
  status_summary: string;
  decisions: HandoffDecision[];
  artifacts: HandoffArtifact[];
  blockers: HandoffBlocker[];
  next_steps: HandoffNextStep[];
  confidence: number | null;
  notes: string | null;
  context_snapshot: string | null;

  merge_strategy: MergeStrategy;
  md_export_path: string | null;

  created_at: string;
  approved_at: string | null;
  queued_at: string | null;
  injected_at: string | null;
  completed_at: string | null;
  expires_at: string | null;

  origin: HandoffOrigin;
  heartbeat_id: string | null;
  chain_sequence: number;
};

export type CreateHandoffParams = {
  target_agent_id: string;
  goal: string;
  status_summary: string;
  decisions?: HandoffDecision[];
  artifacts?: HandoffArtifact[];
  blockers?: HandoffBlocker[];
  next_steps?: HandoffNextStep[];
  confidence?: number;
  notes?: string;
  merge_strategy?: MergeStrategy;
  chain_id?: string;
};

// ---------------------------------------------------------------------------
// heartbeats
// ---------------------------------------------------------------------------

export type Heartbeat = {
  id: string;
  agent_id: string;
  session_key: string;
  task_summary: string | null;
  current_goal: string | null;
  progress_pct: number | null;
  decisions_so_far: HandoffDecision[];
  artifacts_so_far: HandoffArtifact[];
  blockers: HandoffBlocker[];
  context_hash: string | null;
  tokens_in: number;
  tokens_out: number;
  estimated_usd: number;
  is_alive: boolean;
  promoted_to: string | null;
  created_at: string;
  superseded_at: string | null;
};

export type HeartbeatSnapshot = {
  task_summary?: string;
  current_goal?: string;
  progress_pct?: number;
  decisions_so_far?: HandoffDecision[];
  artifacts_so_far?: HandoffArtifact[];
  blockers?: HandoffBlocker[];
  context_hash?: string;
  tokens_in?: number;
  tokens_out?: number;
  estimated_usd?: number;
};

// ---------------------------------------------------------------------------
// agent_queues
// ---------------------------------------------------------------------------

export type AgentQueueItem = {
  id: string;
  agent_id: string;
  handoff_id: string;
  position: number;
  status: QueueItemStatus;
  conflict_with: string | null;
  enqueued_at: string;
  dequeued_at: string | null;
};

// ---------------------------------------------------------------------------
// approval_actions
// ---------------------------------------------------------------------------

export type ApprovalActionRecord = {
  id: string;
  handoff_id: string;
  action: ApprovalAction;
  actor: string;
  actor_channel: string | null;
  reason: string | null;
  diff_summary: string | null;
  redirect_to: string | null;
  created_at: string;
};

export type RecordApprovalParams = {
  handoff_id: string;
  action: ApprovalAction;
  actor: string;
  actor_channel?: string;
  reason?: string;
  diff_summary?: string;
  redirect_to?: string;
};

// ---------------------------------------------------------------------------
// schema_registry
// ---------------------------------------------------------------------------

export type SchemaRegistryEntry = {
  version: string;
  schema_json: Record<string, unknown>;
  migration_from: string | null;
  migration_script: string | null;
  description: string | null;
  created_at: string;
  is_current: boolean;
};

// ---------------------------------------------------------------------------
// cost_ledger
// ---------------------------------------------------------------------------

export type CostLedgerEntry = {
  id: string;
  handoff_id: string;
  chain_id: string | null;
  agent_id: string;
  session_key: string | null;
  model: string;
  tokens_in: number;
  tokens_out: number;
  estimated_usd: number;
  wall_clock_s: number;
  leg_label: string | null;
  leg_sequence: number;
  created_at: string;
};

export type RecordCostParams = {
  handoff_id: string;
  chain_id?: string;
  agent_id: string;
  session_key?: string;
  model: string;
  tokens_in: number;
  tokens_out: number;
  estimated_usd: number;
  wall_clock_s: number;
  leg_label?: string;
  leg_sequence?: number;
};

// In-memory cost accumulator per session
export type CostAccumulator = {
  agent_id: string;
  session_key: string;
  model: string;
  tokens_in: number;
  tokens_out: number;
  session_start_ms: number;
};

// ---------------------------------------------------------------------------
// agent_config
// ---------------------------------------------------------------------------

export type AgentConfig = {
  agent_id: string;
  display_name: string | null;
  trust_level: TrustLevel;
  default_merge_strategy: MergeStrategy;
  notify_channel: string | null;
  notify_target: string | null;
  notify_topic_id: number | null;
  max_queue_depth: number;
  auto_inject: boolean;
  heartbeat_interval_s: number;
  heartbeat_dead_threshold_s: number;
  min_create_interval_s: number;
  updated_at: string;
};
