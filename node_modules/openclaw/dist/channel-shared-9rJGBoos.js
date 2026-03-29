import { Iy as listLineAccountIds, Ry as resolveDefaultLineAccountId, Ta as hasLineCredentials, Ua as LineChannelConfigSchema, gx as createScopedChannelConfigAdapter, zy as resolveLineAccount } from "./pi-embedded-BaSvmUpW.js";
//#region extensions/line/src/config-adapter.ts
function normalizeLineAllowFrom(entry) {
	return entry.replace(/^line:(?:user:)?/i, "");
}
const lineChannelPluginCommon = {
	meta: {
		id: "line",
		label: "LINE",
		selectionLabel: "LINE (Messaging API)",
		detailLabel: "LINE Bot",
		docsPath: "/channels/line",
		docsLabel: "line",
		blurb: "LINE Messaging API bot for Japan/Taiwan/Thailand markets.",
		systemImage: "message.fill",
		quickstartAllowFrom: true
	},
	capabilities: {
		chatTypes: ["direct", "group"],
		reactions: false,
		threads: false,
		media: true,
		nativeCommands: false,
		blockStreaming: true
	},
	reload: { configPrefixes: ["channels.line"] },
	configSchema: LineChannelConfigSchema,
	config: {
		...createScopedChannelConfigAdapter({
			sectionKey: "line",
			listAccountIds: listLineAccountIds,
			resolveAccount: (cfg, accountId) => resolveLineAccount({
				cfg,
				accountId: accountId ?? void 0
			}),
			defaultAccountId: resolveDefaultLineAccountId,
			clearBaseFields: [
				"channelSecret",
				"tokenFile",
				"secretFile"
			],
			resolveAllowFrom: (account) => account.config.allowFrom,
			formatAllowFrom: (allowFrom) => allowFrom.map((entry) => String(entry).trim()).filter(Boolean).map(normalizeLineAllowFrom)
		}),
		isConfigured: (account) => hasLineCredentials(account),
		describeAccount: (account) => ({
			accountId: account.accountId,
			name: account.name,
			enabled: account.enabled,
			configured: hasLineCredentials(account),
			tokenSource: account.tokenSource ?? void 0
		})
	}
};
//#endregion
export { lineChannelPluginCommon as t };
