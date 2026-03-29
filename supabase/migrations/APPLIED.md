# RelayClaw Migration — Applied 2026-03-28

## Applied via
Supabase Management API (`api.supabase.com/v1/projects/vscmtxbjyovyazjpwcpo/database/query`)
Personal Access Token: saved to `~/.openclaw/credentials/supabase-relayclaw.token`

## Migration file
`/home/tony/.openclaw/workspace/relayclaw/supabase/migrations/20260328000000_relayclaw_init.sql`
Fixed version (jsonb_build_object): `/tmp/relayclaw_migration_fixed.sql`

## Verified objects

### 8 tables — ALL present
- agent_config
- agent_queues
- approval_actions
- cost_ledger
- handoff_chains
- handoffs
- heartbeats
- schema_registry

### 5 stored functions — ALL present
- dequeue_handoff
- detect_queue_conflicts
- enqueue_handoff
- promote_heartbeat_to_handoff
- update_chain_cost
- rls_auto_enable (Supabase built-in)

### Indexes — 24 total
- All PK indexes, FK indexes, and composite indexes present
- Partial unique index `idx_schema_current` confirmed

### RLS — ALL 8 tables enabled
Every table has `rowsecurity = true`

### Seed data — confirmed
- 12 agent_config rows (main, sharon, randy, geezer, sabbath, bark, blizzard, crowley, diary, ward, iommi, dio)
- schema_registry version 1.0.0 is_current = true

## Project reference
`vscmtxbjyovyazjpwcpo` (RelayClaw, AWS us-west-2, NANO)
