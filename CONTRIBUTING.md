# Contributing to RelayClaw

Practical guide. No ceremony.

---

## Schema Migrations

RelayClaw uses timestamped SQL migration files applied to a Supabase project.

**Versioning rules:**
- Migration files are named `YYYYMMDDHHMMSS_description.sql` (UTC).
- Every migration that changes the handoff document shape (columns in `handoffs`, `heartbeats`, or `cost_ledger`) must also insert a new row in `schema_registry` with a bumped semver version and set `is_current = true` on the new row (and `is_current = false` on the old one).
- Schema version bumps follow semver: new optional field → patch, new required field → minor, breaking change → major.
- A migration that adds a `migration_script` to `schema_registry` must also create the corresponding plpgsql function that transforms a handoff document from the previous schema version to the new one.

**Migration file format:**
```sql
-- =============================================================================
-- RelayClaw vX.Y.Z — Short description
-- =============================================================================
-- What this migration does and why.
-- GOTCHAS: anything the operator needs to know before running this.
-- =============================================================================

-- Your DDL / DML here

-- Update schema_registry
UPDATE schema_registry SET is_current = false WHERE is_current = true;
INSERT INTO schema_registry (version, schema_json, migration_from, migration_script, description, is_current)
VALUES ('X.Y.Z', '{ ... }', 'A.B.C', 'migrate_handoff_abc_to_xyz', 'Description', true);
```

**To submit a migration PR:**
1. Create the migration file in `supabase/migrations/`.
2. Test it against a clean Supabase project.
3. Update `CHANGELOG.md` with the schema version bump under a new `[X.Y.Z]` entry.
4. PR description must include the verification queries (from the end of `20260328000000_relayclaw_init.sql` as a model) and their expected outputs.

---

## New CLI Commands

CLI commands live under `src/cli/`. Each command is a separate file exporting a `register(program)` function. Follow the pattern in existing commands. Register the command in `src/cli/index.ts`.

Every new command needs:
- A short `--help` description.
- At least one example in the help text.
- A test in `src/cli/__tests__/`.

---

## Skill Improvements (`skills/relayclaw/SKILL.md`)

The skill document is the primary interface between RelayClaw and agents. Changes to it have direct impact on agent behaviour across the entire crew.

Rules:
- Every new tool action or field must be documented in `SKILL.md` before or alongside the code change.
- The "When NOT to create a handoff" section is critical — keep it accurate and current.
- Tone is agent-facing: direct, precise, no ambiguity.
- Test skill changes by running a real handoff with an agent that has not seen the new behaviour before.

---

## Hermes Compatibility

RelayClaw is designed to be compatible with Hermes (the OpenClaw notification and messaging layer). If your change adds new notification events or changes the structure of Telegram payloads, verify that the Hermes message format is maintained. Specifically:
- Topic IDs in `agent_config.notify_topic_id` must be respected.
- Approval notifications must include `handoff_id` for deep-link routing.
- Do not change the notification payload shape without a minor version bump.

---

## General

- Run `npm test` before submitting a PR.
- Run `npm run typecheck` — no TypeScript errors.
- Keep PRs focused. One migration, one feature, one fix per PR.
- If your change touches `agent_config` seed data (the 12-agent crew), explain why in the PR description.
