# RelayClaw — Migration System

## How Schema Versions Work

RelayClaw uses two independent but related versioning concepts:

1. **Migration files** — timestamped SQL files applied to the Supabase project in order. They are the ground truth for the database schema.
2. **Schema registry** — the `schema_registry` table tracks the current handoff *document* schema (the shape of the JSON payload inside `handoffs`). This version is semver and controls what fields agents may set on `goal`, `decisions`, `artifacts`, etc.

The `schema_registry` version does **not** bump on every migration. It only bumps when the handoff document payload shape changes. Infrastructure changes (new indexes, new tables, new stored functions) bump the migration file but not the schema registry.

The partial unique index `idx_schema_current` enforces exactly one `is_current = true` row at all times.

---

## Migration File Naming

```
YYYYMMDDHHMMSS_short_description.sql
```

Example: `20260401120000_add_handoff_tags.sql`

All times are UTC. Use the current timestamp at the time you write the file. Do not backdate.

---

## How to Write a Migration Script

Every migration file should follow this structure:

```sql
-- =============================================================================
-- RelayClaw vX.Y.Z — Short description of what this migration does
-- =============================================================================
-- Longer explanation of purpose, background, and any dependencies.
--
-- GOTCHAS:
--   - List anything the operator must know before running this migration.
--   - Note any manual steps required outside this file.
--   - Call out any FK or RLS implications.
-- =============================================================================

-- 1. DDL changes (CREATE TABLE, ALTER TABLE, CREATE INDEX, etc.)

-- 2. New stored functions (if any)

-- 3. Schema registry update (only if handoff document payload changed)
--    UPDATE schema_registry SET is_current = false WHERE is_current = true;
--    INSERT INTO schema_registry (version, schema_json, migration_from, migration_script, description, is_current)
--    VALUES ('X.Y.Z', '{ ... json schema ... }', 'previous_version', 'migration_function_name', 'Human description', true);

-- 4. Verification queries (commented out — for the operator to run manually)
-- SELECT ...;
```

**RLS:** Every new table must have RLS enabled and at minimum a `service_full_access` policy and an `authenticated_read` policy, matching the pattern in the initial migration.

**Stored functions:** If the migration adds a `migration_script` value to `schema_registry`, the corresponding plpgsql function must be created in the same file. The function must accept a `handoffs` row and return the document fields in the new schema shape.

---

## Submitting a Migration as a PR

1. Place the migration file in `supabase/migrations/`.
2. Apply it to a clean Supabase project and run the verification queries.
3. Paste the verification query output in your PR description.
4. If the handoff document schema changed, update `CHANGELOG.md` with a new semver entry.
5. If you added a new stored function, document it in `README.md` under the Architecture section.

PRs that include migrations without verification output will not be merged.

---

## Applied Migrations

| File | Applied | Notes |
|---|---|---|
| `20260328000000_relayclaw_init.sql` | 2026-03-28 | Initial schema. 8 tables, 5 stored functions, 12 agent seed rows, schema v1.0.0. |
