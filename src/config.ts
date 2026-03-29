import { homedir } from "node:os";
import { join } from "node:path";

// ---------------------------------------------------------------------------
// RelayClaw plugin config shape (matches openclaw.plugin.json configSchema)
// ---------------------------------------------------------------------------

export type RelayClawConfig = {
  supabaseUrl: string;
  supabaseServiceKey: string;
  heartbeatIntervalMs: number;
  deadDropThresholdMs: number;
  mdExportDir: string;
  notifyTarget: string;
  notifyGroupId: string;
  autoApproveHighTrust: boolean;
};

const DEFAULTS = {
  heartbeatIntervalMs: 30_000,
  deadDropThresholdMs: 90_000,
  mdExportDir: join(homedir(), ".openclaw", "relayclaw", "handoffs"),
  notifyTarget: "",
  notifyGroupId: "",
  autoApproveHighTrust: true,
} as const;

// ---------------------------------------------------------------------------
// resolveRelayClawConfig
// Reads from api.pluginConfig (Record<string, unknown>) and applies defaults.
// Throws if supabaseUrl or supabaseServiceKey are missing.
// ---------------------------------------------------------------------------

export function resolveRelayClawConfig(raw: Record<string, unknown> | undefined): RelayClawConfig {
  const cfg = raw ?? {};

  const supabaseUrl =
    typeof cfg.supabaseUrl === "string" && cfg.supabaseUrl.trim()
      ? cfg.supabaseUrl.trim()
      : "";

  const supabaseServiceKey =
    typeof cfg.supabaseServiceKey === "string" && cfg.supabaseServiceKey.trim()
      ? cfg.supabaseServiceKey.trim()
      : "";

  if (!supabaseUrl) {
    throw new Error(
      "[relayclaw] Missing required config: supabaseUrl. " +
        "Set it via: openclaw config set plugins.entries.relayclaw.config.supabaseUrl <url>",
    );
  }

  if (!supabaseServiceKey) {
    throw new Error(
      "[relayclaw] Missing required config: supabaseServiceKey. " +
        "Set it via: openclaw config set plugins.entries.relayclaw.config.supabaseServiceKey <key>",
    );
  }

  const heartbeatIntervalMs =
    typeof cfg.heartbeatIntervalMs === "number" && cfg.heartbeatIntervalMs > 0
      ? cfg.heartbeatIntervalMs
      : DEFAULTS.heartbeatIntervalMs;

  const deadDropThresholdMs =
    typeof cfg.deadDropThresholdMs === "number" && cfg.deadDropThresholdMs > 0
      ? cfg.deadDropThresholdMs
      : DEFAULTS.deadDropThresholdMs;

  const mdExportDir =
    typeof cfg.mdExportDir === "string" && cfg.mdExportDir.trim()
      ? cfg.mdExportDir.trim()
      : DEFAULTS.mdExportDir;

  const notifyTarget =
    typeof cfg.notifyTarget === "string" && cfg.notifyTarget.trim()
      ? cfg.notifyTarget.trim()
      : DEFAULTS.notifyTarget;

  const notifyGroupId =
    typeof cfg.notifyGroupId === "string" && cfg.notifyGroupId.trim()
      ? cfg.notifyGroupId.trim()
      : DEFAULTS.notifyGroupId;

  const autoApproveHighTrust =
    typeof cfg.autoApproveHighTrust === "boolean"
      ? cfg.autoApproveHighTrust
      : DEFAULTS.autoApproveHighTrust;

  return {
    supabaseUrl,
    supabaseServiceKey,
    heartbeatIntervalMs,
    deadDropThresholdMs,
    mdExportDir,
    notifyTarget,
    notifyGroupId,
    autoApproveHighTrust,
  };
}
