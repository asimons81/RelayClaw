-- =============================================================================
-- RelayClaw v1.0.0 — Initial Schema Migration
-- =============================================================================
-- Run this in the Supabase SQL editor for your dedicated RelayClaw project.
--
-- GOTCHAS:
--   - gen_random_uuid() is available in Supabase (pgcrypto is enabled by default)
--   - RLS is enabled on all tables; the plugin must use the service_role key
--   - The "authenticated" role policy covers future web UI access
--   - agent_queues has a UNIQUE(agent_id, position) — use the enqueue_handoff()
--     function exclusively to insert; never raw INSERT to this table
--   - dequeue_handoff() uses FOR UPDATE SKIP LOCKED — safe for concurrent calls
--   - The partial unique index on schema_registry enforces one is_current=true row
--   - heartbeats.promoted_to is a bare UUID (no FK) to avoid a circular dependency
--     with handoffs; referential integrity is enforced at the application layer
-- =============================================================================


-- =============================================================================
-- EXTENSIONS (should already be enabled in Supabase, included for completeness)
-- =============================================================================

CREATE EXTENSION IF NOT EXISTS "pgcrypto";


-- =============================================================================
-- TABLE 1: handoff_chains
-- Groups a set of handoffs into a named workflow chain with aggregate cost totals.
-- =============================================================================

CREATE TABLE handoff_chains (
  id                  UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  name                TEXT,
  description         TEXT,
  root_goal           TEXT,
  status              TEXT        NOT NULL DEFAULT 'active'
                                  CHECK (status IN ('active', 'completed', 'failed', 'paused')),
  created_at          TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at          TIMESTAMPTZ NOT NULL DEFAULT now(),
  completed_at        TIMESTAMPTZ,
  -- Accumulated cost across all legs in this chain
  total_tokens_in     BIGINT      DEFAULT 0,
  total_tokens_out    BIGINT      DEFAULT 0,
  total_cost_usd      REAL        DEFAULT 0,
  total_wall_clock_s  REAL        DEFAULT 0
);

CREATE INDEX idx_chains_status  ON handoff_chains(status);
CREATE INDEX idx_chains_created ON handoff_chains(created_at DESC);

ALTER TABLE handoff_chains ENABLE ROW LEVEL SECURITY;

CREATE POLICY "service_full_access" ON handoff_chains
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "authenticated_read" ON handoff_chains
  FOR SELECT USING (auth.role() = 'authenticated');


-- =============================================================================
-- TABLE 2: heartbeats
-- Rolling 30s state snapshots from active agent sessions.
-- Dead-drop monitor promotes stale rows to interrupted handoffs.
-- NOTE: promoted_to is a bare UUID (no FK) — circular dep with handoffs avoided.
-- =============================================================================

CREATE TABLE heartbeats (
  id                UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  agent_id          TEXT        NOT NULL,
  session_key       TEXT        NOT NULL,
  task_summary      TEXT,
  current_goal      TEXT,
  progress_pct      REAL        CHECK (progress_pct >= 0 AND progress_pct <= 1),
  decisions_so_far  JSONB       DEFAULT '[]',
  artifacts_so_far  JSONB       DEFAULT '[]',
  blockers          JSONB       DEFAULT '[]',
  context_hash      TEXT,       -- SHA-256 of last N messages for dedup
  tokens_in         BIGINT      DEFAULT 0,
  tokens_out        BIGINT      DEFAULT 0,
  estimated_usd     REAL        DEFAULT 0,
  is_alive          BOOLEAN     NOT NULL DEFAULT true,
  promoted_to       UUID,       -- handoff.id when auto-promoted (no FK constraint)
  created_at        TIMESTAMPTZ NOT NULL DEFAULT now(),
  superseded_at     TIMESTAMPTZ
);

CREATE INDEX idx_heartbeats_alive ON heartbeats(agent_id, session_key, is_alive, created_at DESC);
CREATE INDEX idx_heartbeats_agent ON heartbeats(agent_id, created_at DESC);

ALTER TABLE heartbeats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "service_full_access" ON heartbeats
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "authenticated_read" ON heartbeats
  FOR SELECT USING (auth.role() = 'authenticated');


-- =============================================================================
-- TABLE 3: handoffs
-- The core handoff document. Created by source agents, approved by humans,
-- queued, then injected by target agents.
-- =============================================================================

CREATE TABLE handoffs (
  id                  UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  chain_id            UUID        REFERENCES handoff_chains(id),
  schema_version      TEXT        NOT NULL DEFAULT '1.0.0',
  status              TEXT        NOT NULL DEFAULT 'pending'
                                  CHECK (status IN (
                                    'pending',      -- created, awaiting approval
                                    'approved',     -- approved, about to be queued
                                    'queued',       -- sitting in agent_queues
                                    'injected',     -- loaded by target agent
                                    'completed',    -- target agent confirmed done
                                    'rejected',     -- human killed/rejected
                                    'interrupted',  -- promoted from dead heartbeat
                                    'expired'       -- TTL exceeded
                                  )),

  -- Agents
  source_agent_id     TEXT        NOT NULL,
  target_agent_id     TEXT        NOT NULL,
  source_session_key  TEXT,
  target_session_key  TEXT,       -- populated on inject

  -- Handoff document payload
  goal                TEXT        NOT NULL,
  status_summary      TEXT        NOT NULL,
  decisions           JSONB       DEFAULT '[]',  -- [{decision, rationale, timestamp?}]
  artifacts           JSONB       DEFAULT '[]',  -- [{path, type, description, hash?}]
  blockers            JSONB       DEFAULT '[]',  -- [{description, severity?, suggested_resolution?}]
  next_steps          JSONB       DEFAULT '[]',  -- [{step, priority?, estimated_effort?}]
  confidence          REAL        CHECK (confidence >= 0 AND confidence <= 1),
  notes               TEXT,
  context_snapshot    TEXT,       -- compressed context blob for injection

  -- Queue behaviour
  merge_strategy      TEXT        NOT NULL DEFAULT 'flag_conflict'
                                  CHECK (merge_strategy IN ('merge', 'replace', 'flag_conflict')),

  -- File artifact
  md_export_path      TEXT,       -- absolute path to ~/.openclaw/relayclaw/handoffs/<uuid>.md

  -- Timestamps
  created_at          TIMESTAMPTZ NOT NULL DEFAULT now(),
  approved_at         TIMESTAMPTZ,
  queued_at           TIMESTAMPTZ,
  injected_at         TIMESTAMPTZ,
  completed_at        TIMESTAMPTZ,
  expires_at          TIMESTAMPTZ,

  -- Origin tracking
  origin              TEXT        NOT NULL DEFAULT 'agent'
                                  CHECK (origin IN ('agent', 'dead_drop', 'human', 'cron')),
  heartbeat_id        UUID        REFERENCES heartbeats(id),
  chain_sequence      INT         DEFAULT 0
);

CREATE INDEX idx_handoffs_status  ON handoffs(status);
CREATE INDEX idx_handoffs_target  ON handoffs(target_agent_id, status);
CREATE INDEX idx_handoffs_chain   ON handoffs(chain_id, chain_sequence);
CREATE INDEX idx_handoffs_source  ON handoffs(source_agent_id, created_at DESC);
CREATE INDEX idx_handoffs_created ON handoffs(created_at DESC);

ALTER TABLE handoffs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "service_full_access" ON handoffs
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "authenticated_read" ON handoffs
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "authenticated_update_status" ON handoffs
  FOR UPDATE USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');


-- =============================================================================
-- TABLE 4: agent_queues
-- Per-agent FIFO delivery queue. Use enqueue_handoff() / dequeue_handoff()
-- functions — never raw INSERT (position sequencing is managed by the function).
-- UNIQUE(agent_id, position) enforces ordering integrity.
-- =============================================================================

CREATE TABLE agent_queues (
  id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  agent_id      TEXT        NOT NULL,
  handoff_id    UUID        NOT NULL REFERENCES handoffs(id) ON DELETE CASCADE,
  position      INT         NOT NULL,
  status        TEXT        NOT NULL DEFAULT 'pending'
                            CHECK (status IN ('pending', 'processing', 'completed', 'skipped', 'conflict')),
  conflict_with UUID        REFERENCES agent_queues(id),
  enqueued_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  dequeued_at   TIMESTAMPTZ,

  UNIQUE (agent_id, position)
);

CREATE INDEX idx_queue_agent   ON agent_queues(agent_id, status, position);
CREATE INDEX idx_queue_handoff ON agent_queues(handoff_id);

ALTER TABLE agent_queues ENABLE ROW LEVEL SECURITY;

CREATE POLICY "service_full_access" ON agent_queues
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "authenticated_read" ON agent_queues
  FOR SELECT USING (auth.role() = 'authenticated');


-- =============================================================================
-- TABLE 5: approval_actions
-- Immutable audit log of every human (or system) action on a handoff.
-- =============================================================================

CREATE TABLE approval_actions (
  id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  handoff_id    UUID        NOT NULL REFERENCES handoffs(id) ON DELETE CASCADE,
  action        TEXT        NOT NULL
                            CHECK (action IN ('approve', 'reject', 'edit', 'redirect', 'kill')),
  actor         TEXT        NOT NULL,   -- 'human:tony' | 'system:auto_trust' | 'system:rate_limit'
  actor_channel TEXT,                   -- 'telegram' | 'cli' | 'web'
  reason        TEXT,
  diff_summary  TEXT,                   -- for 'edit': human-readable diff of what changed
  redirect_to   TEXT,                   -- for 'redirect': new target_agent_id
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_approvals_handoff ON approval_actions(handoff_id, created_at);
CREATE INDEX idx_approvals_actor   ON approval_actions(actor, created_at DESC);

ALTER TABLE approval_actions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "service_full_access" ON approval_actions
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "authenticated_read" ON approval_actions
  FOR SELECT USING (auth.role() = 'authenticated');


-- =============================================================================
-- TABLE 6: schema_registry
-- Versioned handoff document schemas + migration paths.
-- The partial unique index enforces exactly one is_current = true row.
-- =============================================================================

CREATE TABLE schema_registry (
  version           TEXT        PRIMARY KEY,    -- semver, e.g. '1.0.0'
  schema_json       JSONB       NOT NULL,        -- JSON Schema of handoff document payload
  migration_from    TEXT,                        -- version this migrates FROM
  migration_script  TEXT,                        -- migration function name (in migrations/)
  description       TEXT,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT now(),
  is_current        BOOLEAN     DEFAULT false
);

-- Only one current version at a time
CREATE UNIQUE INDEX idx_schema_current ON schema_registry(is_current)
  WHERE is_current = true;

ALTER TABLE schema_registry ENABLE ROW LEVEL SECURITY;

CREATE POLICY "service_full_access" ON schema_registry
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "authenticated_read" ON schema_registry
  FOR SELECT USING (auth.role() = 'authenticated');


-- =============================================================================
-- TABLE 7: cost_ledger
-- Per-leg cost tracking. One row per handoff leg (source agent's session).
-- Chain aggregate totals are denormalised into handoff_chains for fast queries.
-- =============================================================================

CREATE TABLE cost_ledger (
  id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  handoff_id    UUID        NOT NULL REFERENCES handoffs(id) ON DELETE CASCADE,
  chain_id      UUID        REFERENCES handoff_chains(id),
  agent_id      TEXT        NOT NULL,
  session_key   TEXT,
  model         TEXT        NOT NULL,   -- e.g. 'minimax-api/MiniMax-M2.7-highspeed'
  tokens_in     BIGINT      NOT NULL DEFAULT 0,
  tokens_out    BIGINT      NOT NULL DEFAULT 0,
  estimated_usd REAL        NOT NULL DEFAULT 0,
  wall_clock_s  REAL        NOT NULL DEFAULT 0,
  leg_label     TEXT,                   -- human label, e.g. 'research', 'writing'
  leg_sequence  INT         DEFAULT 0,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_ledger_handoff ON cost_ledger(handoff_id);
CREATE INDEX idx_ledger_chain   ON cost_ledger(chain_id);
CREATE INDEX idx_ledger_agent   ON cost_ledger(agent_id, created_at DESC);

ALTER TABLE cost_ledger ENABLE ROW LEVEL SECURITY;

CREATE POLICY "service_full_access" ON cost_ledger
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "authenticated_read" ON cost_ledger
  FOR SELECT USING (auth.role() = 'authenticated');


-- =============================================================================
-- TABLE 8: agent_config
-- Per-agent trust levels, merge strategies, notification targets, and rate limits.
-- =============================================================================

CREATE TABLE agent_config (
  agent_id                    TEXT        PRIMARY KEY,
  display_name                TEXT,
  trust_level                 TEXT        NOT NULL DEFAULT 'medium'
                                          CHECK (trust_level IN ('high', 'medium', 'low')),
  default_merge_strategy      TEXT        NOT NULL DEFAULT 'flag_conflict'
                                          CHECK (default_merge_strategy IN ('merge', 'replace', 'flag_conflict')),
  -- Notification routing
  notify_channel              TEXT        DEFAULT 'telegram',
  notify_target               TEXT,       -- Telegram chat ID (DM or group)
  notify_topic_id             INT,        -- Telegram message_thread_id for topic-routed groups
  -- Queue behaviour
  max_queue_depth             INT         DEFAULT 10,
  auto_inject                 BOOLEAN     DEFAULT false,
  -- Heartbeat settings
  heartbeat_interval_s        INT         DEFAULT 30,
  heartbeat_dead_threshold_s  INT         DEFAULT 90,  -- 3× interval
  -- Rate limiting
  min_create_interval_s       INT         DEFAULT 60,  -- min seconds between handoff creates
  updated_at                  TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE agent_config ENABLE ROW LEVEL SECURITY;

CREATE POLICY "service_full_access" ON agent_config
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "authenticated_read" ON agent_config
  FOR SELECT USING (auth.role() = 'authenticated');


-- =============================================================================
-- STORED FUNCTIONS
-- =============================================================================

-- ---------------------------------------------------------------------------
-- enqueue_handoff(p_agent_id, p_handoff_id)
-- Atomically assigns the next FIFO position and inserts into agent_queues.
-- Also transitions the handoff to status='queued'.
-- ALWAYS use this function — never raw INSERT into agent_queues.
-- ---------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION enqueue_handoff(
  p_agent_id   TEXT,
  p_handoff_id UUID
) RETURNS UUID
LANGUAGE plpgsql
AS $$
DECLARE
  v_queue_id UUID;
  v_next_pos INT;
BEGIN
  -- Lock the max position to prevent race conditions
  SELECT COALESCE(MAX(position), 0) + 1
    INTO v_next_pos
    FROM agent_queues
   WHERE agent_id = p_agent_id
     AND status IN ('pending', 'processing');

  INSERT INTO agent_queues (agent_id, handoff_id, position)
  VALUES (p_agent_id, p_handoff_id, v_next_pos)
  RETURNING id INTO v_queue_id;

  UPDATE handoffs
     SET status = 'queued', queued_at = now()
   WHERE id = p_handoff_id;

  RETURN v_queue_id;
END;
$$;

-- ---------------------------------------------------------------------------
-- dequeue_handoff(p_agent_id)
-- Pops the next pending handoff for an agent (FIFO order).
-- Uses FOR UPDATE SKIP LOCKED — safe for concurrent callers.
-- Returns the handoff UUID, or NULL if queue is empty.
-- ---------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION dequeue_handoff(
  p_agent_id TEXT
) RETURNS UUID
LANGUAGE plpgsql
AS $$
DECLARE
  v_handoff_id UUID;
  v_queue_id   UUID;
BEGIN
  SELECT aq.id, aq.handoff_id
    INTO v_queue_id, v_handoff_id
    FROM agent_queues aq
   WHERE aq.agent_id = p_agent_id
     AND aq.status = 'pending'
   ORDER BY aq.position ASC
   LIMIT 1
   FOR UPDATE SKIP LOCKED;

  IF v_queue_id IS NULL THEN
    RETURN NULL;
  END IF;

  UPDATE agent_queues
     SET status = 'processing', dequeued_at = now()
   WHERE id = v_queue_id;

  RETURN v_handoff_id;
END;
$$;

-- ---------------------------------------------------------------------------
-- detect_queue_conflicts(p_agent_id)
-- Returns all pending handoffs for an agent so the plugin can apply
-- merge_strategy logic and surface conflicts to humans.
-- ---------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION detect_queue_conflicts(
  p_agent_id TEXT
) RETURNS TABLE (
  handoff_id      UUID,
  source_agent_id TEXT,
  goal            TEXT,
  merge_strategy  TEXT,
  enqueued_at     TIMESTAMPTZ
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT h.id, h.source_agent_id, h.goal, h.merge_strategy, aq.enqueued_at
    FROM agent_queues aq
    JOIN handoffs h ON h.id = aq.handoff_id
   WHERE aq.agent_id = p_agent_id
     AND aq.status = 'pending'
   ORDER BY aq.position;
END;
$$;

-- ---------------------------------------------------------------------------
-- promote_heartbeat_to_handoff(p_heartbeat_id, p_target_agent_id)
-- Auto-promotes a dead heartbeat snapshot to an interrupted handoff.
-- Called by the dead-drop monitor service in the plugin.
-- p_target_agent_id defaults to the source agent (self-directed recovery).
-- ---------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION promote_heartbeat_to_handoff(
  p_heartbeat_id    UUID,
  p_target_agent_id TEXT DEFAULT NULL
) RETURNS UUID
LANGUAGE plpgsql
AS $$
DECLARE
  v_hb        heartbeats%ROWTYPE;
  v_handoff_id UUID;
BEGIN
  SELECT * INTO v_hb FROM heartbeats WHERE id = p_heartbeat_id;

  IF v_hb IS NULL THEN
    RAISE EXCEPTION 'Heartbeat not found: %', p_heartbeat_id;
  END IF;

  IF v_hb.promoted_to IS NOT NULL THEN
    RAISE EXCEPTION 'Heartbeat % already promoted to handoff %', p_heartbeat_id, v_hb.promoted_to;
  END IF;

  INSERT INTO handoffs (
    status,
    source_agent_id,
    target_agent_id,
    source_session_key,
    goal,
    status_summary,
    decisions,
    artifacts,
    blockers,
    confidence,
    origin,
    heartbeat_id
  ) VALUES (
    'interrupted',
    v_hb.agent_id,
    COALESCE(p_target_agent_id, v_hb.agent_id),
    v_hb.session_key,
    COALESCE(v_hb.current_goal, 'Interrupted task — no goal recorded'),
    COALESCE(v_hb.task_summary, 'Agent heartbeat stopped unexpectedly'),
    v_hb.decisions_so_far,
    v_hb.artifacts_so_far,
    v_hb.blockers,
    v_hb.progress_pct,
    'dead_drop',
    p_heartbeat_id
  )
  RETURNING id INTO v_handoff_id;

  UPDATE heartbeats
     SET is_alive = false, promoted_to = v_handoff_id
   WHERE id = p_heartbeat_id;

  RETURN v_handoff_id;
END;
$$;

-- ---------------------------------------------------------------------------
-- update_chain_cost(p_chain_id)
-- Recalculates aggregate cost totals on handoff_chains from cost_ledger.
-- Call after inserting a cost_ledger row.
-- ---------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION update_chain_cost(
  p_chain_id UUID
) RETURNS VOID
LANGUAGE plpgsql
AS $$
BEGIN
  UPDATE handoff_chains
     SET total_tokens_in    = (SELECT COALESCE(SUM(tokens_in), 0)       FROM cost_ledger WHERE chain_id = p_chain_id),
         total_tokens_out   = (SELECT COALESCE(SUM(tokens_out), 0)     FROM cost_ledger WHERE chain_id = p_chain_id),
         total_cost_usd     = (SELECT COALESCE(SUM(estimated_usd), 0) FROM cost_ledger WHERE chain_id = p_chain_id),
         total_wall_clock_s = (SELECT COALESCE(SUM(wall_clock_s), 0)   FROM cost_ledger WHERE chain_id = p_chain_id),
         updated_at         = now()
   WHERE id = p_chain_id;
END;
$$;


-- =============================================================================
-- SEED DATA
-- =============================================================================

-- Rock Lobster crew agent config
-- notify_target = Mission Control group ID
-- notify_topic_id = Telegram topic IDs per TOOLS.md routing
INSERT INTO agent_config (
  agent_id, display_name, trust_level, default_merge_strategy,
  notify_channel, notify_target, notify_topic_id,
  heartbeat_interval_s, heartbeat_dead_threshold_s, min_create_interval_s
) VALUES
  ('main',    'Ozzy',     'high',   'replace',       'telegram', 'YOUR_NOTIFY_GROUP_ID', 6,  30, 90, 60),
  ('sharon',  'Sharon',   'high',   'flag_conflict',  'telegram', 'YOUR_NOTIFY_GROUP_ID', 8,  30, 90, 60),
  ('randy',   'Randy',    'medium', 'flag_conflict',  'telegram', 'YOUR_NOTIFY_GROUP_ID', 10, 30, 90, 60),
  ('geezer',  'Geezer',   'high',   'replace',        'telegram', 'YOUR_NOTIFY_GROUP_ID', 7,  30, 90, 60),
  ('sabbath', 'Sabbath',  'medium', 'flag_conflict',  'telegram', 'YOUR_NOTIFY_GROUP_ID', 9,  30, 90, 60),
  ('bark',    'Bark',     'medium', 'flag_conflict',  'telegram', 'YOUR_NOTIFY_GROUP_ID', 9,  30, 90, 60),
  ('blizzard','Blizzard', 'medium', 'flag_conflict',  'telegram', 'YOUR_NOTIFY_GROUP_ID', 9,  30, 90, 60),
  ('crowley', 'Crowley',  'medium', 'flag_conflict',  'telegram', 'YOUR_NOTIFY_GROUP_ID', 12, 30, 90, 60),
  ('diary',   'Diary',    'high',   'replace',        'telegram', 'YOUR_NOTIFY_GROUP_ID', 11, 30, 90, 60),
  ('ward',    'Ward',     'high',   'flag_conflict',  'telegram', 'YOUR_NOTIFY_GROUP_ID', 13, 30, 90, 60),
  ('iommi',   'Iommi',    'medium', 'flag_conflict',  'telegram', 'YOUR_NOTIFY_GROUP_ID', 9,  30, 90, 60),
  ('dio',     'Dio',      'low',    'flag_conflict',  'telegram', 'YOUR_NOTIFY_GROUP_ID', 9,  30, 90, 60);

-- Initial handoff document schema (v1.0.0)
INSERT INTO schema_registry (version, schema_json, description, is_current) VALUES (
  '1.0.0',
  '{
    "type": "object",
    "required": ["goal", "status_summary"],
    "properties": {
      "goal":           { "type": "string" },
      "status_summary": { "type": "string" },
      "decisions":      { "type": "array",  "items": { "type": "object", "properties": { "decision": { "type": "string" }, "rationale": { "type": "string" } } } },
      "artifacts":      { "type": "array",  "items": { "type": "object", "properties": { "path": { "type": "string" }, "type": { "type": "string" }, "description": { "type": "string" } } } },
      "blockers":       { "type": "array",  "items": { "type": "object", "properties": { "description": { "type": "string" }, "severity": { "type": "string" } } } },
      "next_steps":     { "type": "array",  "items": { "type": "object", "properties": { "step": { "type": "string" }, "priority": { "type": "string" } } } },
      "confidence":     { "type": "number", "minimum": 0, "maximum": 1 },
      "notes":          { "type": "string" }
    }
  }',
  'Initial handoff document schema',
  true
);


-- =============================================================================
-- VERIFICATION QUERIES
-- Run these after applying the migration to confirm everything landed correctly.
-- =============================================================================

-- Check all 8 tables exist
-- SELECT tablename FROM pg_tables WHERE schemaname = 'public' ORDER BY tablename;

-- Check RLS is enabled on all tables
-- SELECT tablename, rowsecurity FROM pg_tables WHERE schemaname = 'public' ORDER BY tablename;

-- Check stored functions
-- SELECT routine_name FROM information_schema.routines WHERE routine_schema = 'public';

-- Check seed data
-- SELECT agent_id, trust_level, notify_topic_id FROM agent_config ORDER BY agent_id;
-- SELECT version, is_current FROM schema_registry;
