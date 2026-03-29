import { Ba as normalizeE164, Z as SignalConfigSchema } from "./env-D1ktUnAV.js";
import { r as getChatChannelMeta } from "./registry-bOiEdffE.js";
import { If as listSignalAccountIds, Lf as resolveDefaultSignalAccountId, Pm as createRestrictSendersChannelSecurity, Rf as resolveSignalAccount, fx as adaptScopedAccountAccessor, gx as createScopedChannelConfigAdapter, ix as createChannelPluginBase } from "./pi-embedded-BaSvmUpW.js";
import { n as describeAccountSnapshot } from "./account-helpers-BWWnSyvz.js";
import { r as buildChannelConfigSchema } from "./config-schema-BoeEl_gh.js";
import { n as createSignalSetupWizardProxy } from "./setup-core-BvYG0wAq.js";
//#region extensions/signal/src/shared.ts
const SIGNAL_CHANNEL = "signal";
async function loadSignalChannelRuntime() {
	return await import("./channel.runtime-DLV-lPM-.js");
}
const signalSetupWizard = createSignalSetupWizardProxy(async () => (await loadSignalChannelRuntime()).signalSetupWizard);
const signalConfigAdapter = createScopedChannelConfigAdapter({
	sectionKey: SIGNAL_CHANNEL,
	listAccountIds: listSignalAccountIds,
	resolveAccount: adaptScopedAccountAccessor(resolveSignalAccount),
	defaultAccountId: resolveDefaultSignalAccountId,
	clearBaseFields: [
		"account",
		"httpUrl",
		"httpHost",
		"httpPort",
		"cliPath",
		"name"
	],
	resolveAllowFrom: (account) => account.config.allowFrom,
	formatAllowFrom: (allowFrom) => allowFrom.map((entry) => String(entry).trim()).filter(Boolean).map((entry) => entry === "*" ? "*" : normalizeE164(entry.replace(/^signal:/i, ""))).filter(Boolean),
	resolveDefaultTo: (account) => account.config.defaultTo
});
const signalSecurityAdapter = createRestrictSendersChannelSecurity({
	channelKey: SIGNAL_CHANNEL,
	resolveDmPolicy: (account) => account.config.dmPolicy,
	resolveDmAllowFrom: (account) => account.config.allowFrom,
	resolveGroupPolicy: (account) => account.config.groupPolicy,
	surface: "Signal groups",
	openScope: "any member",
	groupPolicyPath: "channels.signal.groupPolicy",
	groupAllowFromPath: "channels.signal.groupAllowFrom",
	mentionGated: false,
	policyPathSuffix: "dmPolicy",
	normalizeDmEntry: (raw) => normalizeE164(raw.replace(/^signal:/i, "").trim())
});
function createSignalPluginBase(params) {
	return createChannelPluginBase({
		id: SIGNAL_CHANNEL,
		meta: { ...getChatChannelMeta(SIGNAL_CHANNEL) },
		setupWizard: params.setupWizard,
		capabilities: {
			chatTypes: ["direct", "group"],
			media: true,
			reactions: true
		},
		streaming: { blockStreamingCoalesceDefaults: {
			minChars: 1500,
			idleMs: 1e3
		} },
		reload: { configPrefixes: ["channels.signal"] },
		configSchema: buildChannelConfigSchema(SignalConfigSchema),
		config: {
			...signalConfigAdapter,
			isConfigured: (account) => account.configured,
			describeAccount: (account) => describeAccountSnapshot({
				account,
				configured: account.configured,
				extra: { baseUrl: account.baseUrl }
			})
		},
		security: signalSecurityAdapter,
		setup: params.setup
	});
}
//#endregion
export { signalSetupWizard as i, signalConfigAdapter as n, signalSecurityAdapter as r, createSignalPluginBase as t };
