import { b as MarkdownConfigSchema, f as DmPolicySchema, h as GroupPolicySchema, o as ToolPolicySchema } from "./zod-schema.agent-runtime-DNndkpI8.js";
import { Gb as formatAllowFromLowercase, fx as adaptScopedAccountAccessor, gx as createScopedChannelConfigAdapter } from "./pi-embedded-BaSvmUpW.js";
import { n as describeAccountSnapshot } from "./account-helpers-BWWnSyvz.js";
import { n as buildCatchallMultiAccountChannelSchema, r as buildChannelConfigSchema, t as AllowFromListSchema } from "./config-schema-BoeEl_gh.js";
import { t as checkZaloAuthenticated } from "./zalo-js-C7VDmEUH.js";
import { a as listZalouserAccountIds, o as resolveDefaultZalouserAccountId, s as resolveZalouserAccountSync } from "./setup-surface-CWnsUFpp.js";
import { z } from "zod";
//#region extensions/zalouser/src/config-schema.ts
const groupConfigSchema = z.object({
	allow: z.boolean().optional(),
	enabled: z.boolean().optional(),
	requireMention: z.boolean().optional(),
	tools: ToolPolicySchema
});
const ZalouserConfigSchema = buildCatchallMultiAccountChannelSchema(z.object({
	name: z.string().optional(),
	enabled: z.boolean().optional(),
	markdown: MarkdownConfigSchema,
	profile: z.string().optional(),
	dangerouslyAllowNameMatching: z.boolean().optional(),
	dmPolicy: DmPolicySchema.optional(),
	allowFrom: AllowFromListSchema,
	historyLimit: z.number().int().min(0).optional(),
	groupAllowFrom: AllowFromListSchema,
	groupPolicy: GroupPolicySchema.optional().default("allowlist"),
	groups: z.object({}).catchall(groupConfigSchema).optional(),
	messagePrefix: z.string().optional(),
	responsePrefix: z.string().optional()
}));
//#endregion
//#region extensions/zalouser/src/shared.ts
const zalouserMeta = {
	id: "zalouser",
	label: "Zalo Personal",
	selectionLabel: "Zalo (Personal Account)",
	docsPath: "/channels/zalouser",
	docsLabel: "zalouser",
	blurb: "Zalo personal account via QR code login.",
	aliases: ["zlu"],
	order: 85,
	quickstartAllowFrom: false
};
const zalouserConfigAdapter = createScopedChannelConfigAdapter({
	sectionKey: "zalouser",
	listAccountIds: listZalouserAccountIds,
	resolveAccount: adaptScopedAccountAccessor(resolveZalouserAccountSync),
	defaultAccountId: resolveDefaultZalouserAccountId,
	clearBaseFields: [
		"profile",
		"name",
		"dmPolicy",
		"allowFrom",
		"historyLimit",
		"groupAllowFrom",
		"groupPolicy",
		"groups",
		"messagePrefix"
	],
	resolveAllowFrom: (account) => account.config.allowFrom,
	formatAllowFrom: (allowFrom) => formatAllowFromLowercase({
		allowFrom,
		stripPrefixRe: /^(zalouser|zlu):/i
	})
});
function createZalouserPluginBase(params) {
	return {
		id: "zalouser",
		meta: zalouserMeta,
		setupWizard: params.setupWizard,
		capabilities: {
			chatTypes: ["direct", "group"],
			media: true,
			reactions: true,
			threads: false,
			polls: false,
			nativeCommands: false,
			blockStreaming: true
		},
		reload: { configPrefixes: ["channels.zalouser"] },
		configSchema: buildChannelConfigSchema(ZalouserConfigSchema),
		config: {
			...zalouserConfigAdapter,
			isConfigured: async (account) => await checkZaloAuthenticated(account.profile),
			describeAccount: (account) => describeAccountSnapshot({ account })
		},
		setup: params.setup
	};
}
//#endregion
export { createZalouserPluginBase as t };
