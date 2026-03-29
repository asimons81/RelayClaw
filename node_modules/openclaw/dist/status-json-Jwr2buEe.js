import "./redact-BDinS1q9.js";
import "./errors-BxyFnvP3.js";
import { Oo as writeRuntimeJson } from "./env-D1ktUnAV.js";
import { _ as resolveStateDir, o as resolveConfigPath } from "./paths-CjuwkA2v.js";
import "./safe-text-K2Nonoo3.js";
import "./tmp-openclaw-dir-DzRxfh9a.js";
import "./theme-BH5F9mlg.js";
import "./version-DGzLsBG-.js";
import "./zod-schema.agent-runtime-DNndkpI8.js";
import "./runtime-BF_KUcJM.js";
import "./registry-bOiEdffE.js";
import "./ip-ByO4-_4f.js";
import "./audit-fs-7IxnGQxG.js";
import "./resolve-DqJVzTVp.js";
import "./tailnet-BPCtbdja.js";
import "./net-1LAzWzJc.js";
import "./credentials-6hokf6e3.js";
import "./message-channel-ZzTqBBLH.js";
import "./paths-BEHCHyAI.js";
import "./delivery-context-oynQ_N5k.js";
import "./method-scopes-DhuXuLfv.js";
import "./call-DTKTDk3E.js";
import "./control-ui-shared-DC20jeM6.js";
import "./ports-lsof-qBGFcQvX.js";
import "./restart-stale-pids-ciXEfnyN.js";
import "./runtime-parse-DXvKIjPm.js";
import "./launchd-ljiqPV9i.js";
import "./service-mdsdTkvr.js";
import "./ports-DF41F7NN.js";
import "./systemd-62-fJtxm.js";
import "./probe-DxB8I4_M.js";
import "./probe-auth-hQYofmel.js";
import "./heartbeat-DqtPOAC0.js";
import "./system-events-D_U3rn_H.js";
import { n as hasPotentialConfiguredChannels } from "./config-presence-Bo4-9YVM.js";
import { g as resolveOsSummary, l as getDaemonStatusSummary, n as scanStatusJsonCore, s as resolveSharedMemoryStatusSnapshot, u as getNodeDaemonStatusSummary } from "./status.scan.json-core-Dq58GPqJ.js";
import "./heartbeat-summary-DvQBtBZ6.js";
import { g as resolveUpdateChannelDisplay, m as normalizeUpdateChannel } from "./update-check-Q-sEAMk_.js";
import "./node-service-C7W4Q2W0.js";
import "./status.update-CisYuD_n.js";
import { existsSync } from "node:fs";
import path from "node:path";
import os from "node:os";
//#region src/commands/status.scan.fast-json.ts
let configIoModulePromise;
let commandSecretTargetsModulePromise;
let commandSecretGatewayModulePromise;
let memorySearchModulePromise;
let statusScanDepsRuntimeModulePromise;
function loadConfigIoModule() {
	configIoModulePromise ??= import("./io-Ddcnnsbo.js");
	return configIoModulePromise;
}
function loadCommandSecretTargetsModule() {
	commandSecretTargetsModulePromise ??= import("./command-secret-targets-Bj1Pnp_U.js");
	return commandSecretTargetsModulePromise;
}
function loadCommandSecretGatewayModule() {
	commandSecretGatewayModulePromise ??= import("./command-secret-gateway-D47bedfa.js");
	return commandSecretGatewayModulePromise;
}
function loadMemorySearchModule() {
	memorySearchModulePromise ??= import("./memory-search-Cht71rk-.js");
	return memorySearchModulePromise;
}
function loadStatusScanDepsRuntimeModule() {
	statusScanDepsRuntimeModulePromise ??= import("./status.scan.deps.runtime-BtT1uc2E.js");
	return statusScanDepsRuntimeModulePromise;
}
function shouldSkipMissingConfigFastPath() {
	return process.env.VITEST === "true" || process.env.VITEST_POOL_ID !== void 0 || false;
}
function isMissingConfigColdStart() {
	return !shouldSkipMissingConfigFastPath() && !existsSync(resolveConfigPath(process.env));
}
function resolveDefaultMemoryStorePath(agentId) {
	return path.join(resolveStateDir(process.env, os.homedir), "memory", `${agentId}.sqlite`);
}
async function resolveMemoryStatusSnapshot(params) {
	const { resolveMemorySearchConfig } = await loadMemorySearchModule();
	const { getMemorySearchManager } = await loadStatusScanDepsRuntimeModule();
	return await resolveSharedMemoryStatusSnapshot({
		cfg: params.cfg,
		agentStatus: params.agentStatus,
		memoryPlugin: params.memoryPlugin,
		resolveMemoryConfig: resolveMemorySearchConfig,
		getMemorySearchManager,
		requireDefaultStore: resolveDefaultMemoryStorePath
	});
}
async function readStatusSourceConfig() {
	if (!shouldSkipMissingConfigFastPath() && !existsSync(resolveConfigPath(process.env))) return {};
	const { readBestEffortConfig } = await loadConfigIoModule();
	return await readBestEffortConfig();
}
async function resolveStatusConfig(params) {
	if (!shouldSkipMissingConfigFastPath() && !existsSync(resolveConfigPath(process.env))) return {
		resolvedConfig: params.sourceConfig,
		diagnostics: []
	};
	const [{ resolveCommandSecretRefsViaGateway }, { getStatusCommandSecretTargetIds }] = await Promise.all([loadCommandSecretGatewayModule(), loadCommandSecretTargetsModule()]);
	return await resolveCommandSecretRefsViaGateway({
		config: params.sourceConfig,
		commandName: params.commandName,
		targetIds: getStatusCommandSecretTargetIds(),
		mode: "read_only_status"
	});
}
async function scanStatusJsonFast(opts, runtime) {
	const coldStart = isMissingConfigColdStart();
	const loadedRaw = await readStatusSourceConfig();
	const { resolvedConfig: cfg, diagnostics: secretDiagnostics } = await resolveStatusConfig({
		sourceConfig: loadedRaw,
		commandName: "status --json"
	});
	return await scanStatusJsonCore({
		coldStart,
		cfg,
		sourceConfig: loadedRaw,
		secretDiagnostics,
		hasConfiguredChannels: hasPotentialConfiguredChannels(cfg),
		opts,
		resolveOsSummary,
		resolveMemory: async ({ cfg, agentStatus, memoryPlugin }) => opts.all ? await resolveMemoryStatusSnapshot({
			cfg,
			agentStatus,
			memoryPlugin
		}) : null,
		runtime
	});
}
//#endregion
//#region src/commands/status-json.ts
let providerUsagePromise;
let securityAuditModulePromise;
let gatewayCallModulePromise;
function loadProviderUsage() {
	providerUsagePromise ??= import("./provider-usage-DuzlEOLy.js");
	return providerUsagePromise;
}
function loadSecurityAuditModule() {
	securityAuditModulePromise ??= import("./audit.runtime-CM-Ksz0Y.js");
	return securityAuditModulePromise;
}
function loadGatewayCallModule() {
	gatewayCallModulePromise ??= import("./call-FXQVz5v6.js");
	return gatewayCallModulePromise;
}
async function statusJsonCommand(opts, runtime) {
	const scan = await scanStatusJsonFast({
		timeoutMs: opts.timeoutMs,
		all: opts.all
	}, runtime);
	const securityAudit = opts.all ? await loadSecurityAuditModule().then(({ runSecurityAudit }) => runSecurityAudit({
		config: scan.cfg,
		sourceConfig: scan.sourceConfig,
		deep: false,
		includeFilesystem: true,
		includeChannelSecurity: true
	})) : void 0;
	const usage = opts.usage ? await loadProviderUsage().then(({ loadProviderUsageSummary }) => loadProviderUsageSummary({ timeoutMs: opts.timeoutMs })) : void 0;
	const gatewayCall = opts.deep ? await loadGatewayCallModule().then((mod) => mod.callGateway) : null;
	const health = gatewayCall != null ? await gatewayCall({
		method: "health",
		params: { probe: true },
		timeoutMs: opts.timeoutMs,
		config: scan.cfg
	}).catch(() => void 0) : void 0;
	const lastHeartbeat = gatewayCall != null && scan.gatewayReachable ? await gatewayCall({
		method: "last-heartbeat",
		params: {},
		timeoutMs: opts.timeoutMs,
		config: scan.cfg
	}).catch(() => null) : null;
	const [daemon, nodeDaemon] = await Promise.all([getDaemonStatusSummary(), getNodeDaemonStatusSummary()]);
	const channelInfo = resolveUpdateChannelDisplay({
		configChannel: normalizeUpdateChannel(scan.cfg.update?.channel),
		installKind: scan.update.installKind,
		gitTag: scan.update.git?.tag ?? null,
		gitBranch: scan.update.git?.branch ?? null
	});
	writeRuntimeJson(runtime, {
		...scan.summary,
		os: scan.osSummary,
		update: scan.update,
		updateChannel: channelInfo.channel,
		updateChannelSource: channelInfo.source,
		memory: scan.memory,
		memoryPlugin: scan.memoryPlugin,
		gateway: {
			mode: scan.gatewayMode,
			url: scan.gatewayConnection.url,
			urlSource: scan.gatewayConnection.urlSource,
			misconfigured: scan.remoteUrlMissing,
			reachable: scan.gatewayReachable,
			connectLatencyMs: scan.gatewayProbe?.connectLatencyMs ?? null,
			self: scan.gatewaySelf,
			error: scan.gatewayProbe?.error ?? null,
			authWarning: scan.gatewayProbeAuthWarning ?? null
		},
		gatewayService: daemon,
		nodeService: nodeDaemon,
		agents: scan.agentStatus,
		secretDiagnostics: scan.secretDiagnostics,
		...securityAudit ? { securityAudit } : {},
		...health || usage || lastHeartbeat ? {
			health,
			usage,
			lastHeartbeat
		} : {}
	});
}
//#endregion
export { statusJsonCommand };
