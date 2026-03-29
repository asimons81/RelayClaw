# Changelog

All notable changes to RelayClaw are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
Versioning follows [Semantic Versioning](https://semver.org/).

---

## [1.0.0] — 2026-03-28

Initial public release.

### Added

**Core handoff system**
- `handoffs` table with full lifecycle: `pending` → `approved` → `queued` → `injected` → `completed` (also: `rejected`, `interrupted`, `expired`)
- `relay_handoff` agent tool with actions: `create`, `inject`, `list`, `inspect`, `complete`
- Structured handoff document schema: `goal`, `status_summary`, `decisions[]`, `artifacts[]`, `blockers[]`, `next_steps[]`, `confidence`, `notes`
- Markdown export of every handoff to `mdExportDir` on create

**Heartbeat / Dead-Drop**
- `heartbeats` table with rolling 30s state snapshots per agent session
- Dead-drop monitor: promotes stale heartbeats (default: 90s threshold) to `interrupted` handoffs via `promote_heartbeat_to_handoff()` stored function
- Context hash deduplication to skip redundant snapshots

**Approval Gate**
- Human approval required before any handoff enters the queue
- Telegram notification on handoff create (DM and topic-routed group support)
- `autoApproveHighTrust` flag bypasses gate for `trust_level='high'` agents
- `approval_actions` immutable audit log records every approve/reject/edit/redirect/kill with actor, channel, and timestamp

**FIFO Queue**
- `agent_queues` table with `UNIQUE(agent_id, position)` for ordering integrity
- `enqueue_handoff()` and `dequeue_handoff()` stored functions
- `dequeue_handoff` uses `FOR UPDATE SKIP LOCKED` — safe for concurrent callers
- `detect_queue_conflicts()` surfaces same-target queue state for merge strategy evaluation

**Conflict Resolution**
- Per-handoff `merge_strategy`: `merge` · `replace` · `flag_conflict`
- Per-agent default in `agent_config.default_merge_strategy`
- Conflict flagged in `agent_queues.status` and surfaced in approval notifications

**Schema Versioning**
- `schema_registry` table with semver versions and migration paths
- Partial unique index enforces exactly one `is_current = true` row
- Initial schema v1.0.0 seeded on migration

**Cost Ledger**
- `cost_ledger` table: per-leg tokens in/out, USD estimate, wall-clock time, model, leg label
- `handoff_chains` aggregate totals (denormalised for fast queries): `total_tokens_in`, `total_tokens_out`, `total_cost_usd`, `total_wall_clock_s`
- `update_chain_cost()` stored function recalculates chain aggregates after each leg

**Per-Agent Config**
- `agent_config` table: `trust_level`, `default_merge_strategy`, Telegram routing, `max_queue_depth`, `auto_inject`, heartbeat intervals, rate limits
- Seed data for 12-agent Rock Lobster crew: main, sharon, randy, geezer, sabbath, bark, blizzard, crowley, diary, ward, iommi, dio

**Infrastructure**
- Full RLS enabled on all 8 tables (`service_role` full access, `authenticated` read access)
- 24 indexes across all tables including composite and partial indexes
- TypeScript type definitions for all domain types (`src/types.ts`)
- OpenClaw plugin API structural types (`src/types/openclaw.ts`)
- Config resolver with validation and defaults (`src/config.ts`)
- Supabase JS client factory (`src/supabase-client.ts`)
- OpenClaw plugin manifest (`openclaw.plugin.json`)
- Agent skill document (`skills/relayclaw/SKILL.md`)
