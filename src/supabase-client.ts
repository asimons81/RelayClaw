import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { RelayClawConfig } from "./config.js";

// ---------------------------------------------------------------------------
// Lazy Supabase client
// Initialised on first call to getClient(). The plugin should call getClient()
// inside tool/hook handlers rather than at registration time so the gateway
// does not fail to start if Supabase is temporarily unreachable.
// ---------------------------------------------------------------------------

let _client: SupabaseClient | null = null;

export function getSupabaseClient(config: RelayClawConfig): SupabaseClient {
  if (!_client) {
    _client = createClient(config.supabaseUrl, config.supabaseServiceKey, {
      auth: {
        // Service-role operations do not need session persistence.
        persistSession: false,
        autoRefreshToken: false,
      },
    });
  }
  return _client;
}

// Exposed for testing — resets the cached client.
export function resetSupabaseClient(): void {
  _client = null;
}
