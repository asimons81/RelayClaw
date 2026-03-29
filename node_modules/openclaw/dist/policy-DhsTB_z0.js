import { _ as normalizeAccountId } from "./session-key-CYZxn_Kd.js";
import { o as resolveMergedAccountConfig } from "./account-helpers-BWWnSyvz.js";
import { i as evaluateSenderGroupAccessForPolicy } from "./group-access-DOh5Oa0c.js";
import { i as normalizeFeishuTarget } from "./runtime-D_FsE3WK.js";
//#region extensions/feishu/src/policy.ts
function normalizeFeishuAllowEntry(raw) {
	const trimmed = raw.trim();
	if (!trimmed) return "";
	if (trimmed === "*") return "*";
	const withoutProviderPrefix = trimmed.replace(/^feishu:/i, "");
	return (normalizeFeishuTarget(withoutProviderPrefix) ?? withoutProviderPrefix).trim().toLowerCase();
}
function resolveFeishuAllowlistMatch(params) {
	const allowFrom = params.allowFrom.map((entry) => normalizeFeishuAllowEntry(String(entry))).filter(Boolean);
	if (allowFrom.length === 0) return { allowed: false };
	if (allowFrom.includes("*")) return {
		allowed: true,
		matchKey: "*",
		matchSource: "wildcard"
	};
	const senderCandidates = [params.senderId, ...params.senderIds ?? []].map((entry) => normalizeFeishuAllowEntry(String(entry ?? ""))).filter(Boolean);
	for (const senderId of senderCandidates) if (allowFrom.includes(senderId)) return {
		allowed: true,
		matchKey: senderId,
		matchSource: "id"
	};
	return { allowed: false };
}
function resolveFeishuGroupConfig(params) {
	const groups = params.cfg?.groups ?? {};
	const wildcard = groups["*"];
	const groupId = params.groupId?.trim();
	if (!groupId) return;
	const direct = groups[groupId];
	if (direct) return direct;
	const lowered = groupId.toLowerCase();
	const matchKey = Object.keys(groups).find((key) => key.toLowerCase() === lowered);
	if (matchKey) return groups[matchKey];
	return wildcard;
}
function resolveFeishuGroupToolPolicy(params) {
	const cfg = params.cfg.channels?.feishu;
	if (!cfg) return;
	return resolveFeishuGroupConfig({
		cfg,
		groupId: params.groupId
	})?.tools;
}
function isFeishuGroupAllowed(params) {
	return evaluateSenderGroupAccessForPolicy({
		groupPolicy: params.groupPolicy === "allowall" ? "open" : params.groupPolicy,
		groupAllowFrom: params.allowFrom.map((entry) => String(entry)),
		senderId: params.senderId,
		isSenderAllowed: () => resolveFeishuAllowlistMatch(params).allowed
	}).allowed;
}
function resolveFeishuReplyPolicy(params) {
	if (params.isDirectMessage) return { requireMention: false };
	const feishuCfg = params.cfg.channels?.feishu;
	const resolvedCfg = resolveMergedAccountConfig({
		channelConfig: feishuCfg,
		accounts: feishuCfg?.accounts,
		accountId: normalizeAccountId(params.accountId),
		normalizeAccountId,
		omitKeys: ["defaultAccount"]
	});
	const groupRequireMention = resolveFeishuGroupConfig({
		cfg: resolvedCfg,
		groupId: params.groupId
	})?.requireMention;
	return { requireMention: typeof groupRequireMention === "boolean" ? groupRequireMention : typeof resolvedCfg.requireMention === "boolean" ? resolvedCfg.requireMention : params.groupPolicy === "open" ? false : true };
}
//#endregion
export { resolveFeishuReplyPolicy as a, resolveFeishuGroupToolPolicy as i, resolveFeishuAllowlistMatch as n, resolveFeishuGroupConfig as r, isFeishuGroupAllowed as t };
