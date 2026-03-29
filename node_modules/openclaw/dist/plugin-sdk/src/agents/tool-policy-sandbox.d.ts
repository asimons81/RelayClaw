import type { OpenClawConfig } from "../config/config.js";
import type { SandboxToolPolicy, SandboxToolPolicyResolved } from "./sandbox/types.js";
export declare function resolveEffectiveSandboxToolPolicyForAgent(cfg?: OpenClawConfig, agentId?: string): SandboxToolPolicyResolved;
export declare function isToolAllowedBySandboxToolPolicy(name: string, policy?: SandboxToolPolicy): boolean;
export declare function formatEffectiveSandboxToolPolicyBlockedMessage(params: {
    cfg?: OpenClawConfig;
    sessionKey?: string;
    toolName: string;
}): string | undefined;
