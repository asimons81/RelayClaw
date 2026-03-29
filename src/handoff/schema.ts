import type { SupabaseClient } from "@supabase/supabase-js";
import type { Handoff, SchemaRegistryEntry } from "../types.js";

// ---------------------------------------------------------------------------
// checkSchemaVersion
//
// Fetches the current schema from schema_registry. If the handoff's
// schema_version matches the current version, returns immediately.
// If a migration path exists (registry entry with migration_from =
// handoff.schema_version), calls the migration RPC and returns.
// Otherwise throws with a human-readable message listing available versions.
// ---------------------------------------------------------------------------

export async function checkSchemaVersion(
  handoff: Pick<Handoff, "id" | "schema_version">,
  db: SupabaseClient,
): Promise<void> {
  // Fetch the current schema version
  const { data: currentData, error: currentErr } = await db
    .from("schema_registry")
    .select("version")
    .eq("is_current", true)
    .single();

  if (currentErr) {
    // If we can't reach the registry, warn but allow through rather than
    // blocking all handoff creates.
    throw new Error(
      `[relayclaw] Schema registry unavailable: ${currentErr.message}. ` +
        `Cannot validate handoff schema version "${handoff.schema_version}".`,
    );
  }

  const current = currentData as Pick<SchemaRegistryEntry, "version">;

  // Same version — nothing to do.
  if (handoff.schema_version === current.version) return;

  // Look for a migration path from the handoff's version to the current version.
  const { data: migData } = await db
    .from("schema_registry")
    .select("version, migration_from, migration_script")
    .eq("migration_from", handoff.schema_version)
    .single();

  const migEntry = migData as Pick<
    SchemaRegistryEntry,
    "version" | "migration_from" | "migration_script"
  > | null;

  if (migEntry?.migration_script) {
    // Execute the migration stored function.
    // Convention: the function takes (p_handoff_id UUID) and mutates the row in place.
    const { error: rpcErr } = await db.rpc(migEntry.migration_script, {
      p_handoff_id: handoff.id,
    });
    if (rpcErr) {
      throw new Error(
        `[relayclaw] Schema migration "${migEntry.migration_script}" failed ` +
          `(${handoff.schema_version} → ${current.version}): ${rpcErr.message}`,
      );
    }
    return;
  }

  if (migEntry) {
    // Migration entry exists but has no script — version bump is compatible,
    // allow through with a warning (caller may log this).
    return;
  }

  // No migration path — fetch all known versions for the error message.
  const { data: allData } = await db
    .from("schema_registry")
    .select("version")
    .order("created_at", { ascending: false });

  const known = ((allData as Array<{ version: string }> | null) ?? [])
    .map((r) => r.version)
    .join(", ");

  throw new Error(
    `[relayclaw] Unsupported handoff schema version "${handoff.schema_version}". ` +
      `Current version is "${current.version}". ` +
      `No migration path found. Known versions: ${known || "none"}. ` +
      `Use schema_version: "${current.version}" when creating handoffs.`,
  );
}
