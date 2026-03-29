import { a as listDirectoryGroupEntriesFromMapKeysAndAllowFrom, s as listDirectoryUserEntriesFromAllowFromAndMapKeys } from "./directory-runtime-D9Y42mW-.js";
import { p as resolveFeishuAccount } from "./setup-surface-B5WV-OPh.js";
import { i as normalizeFeishuTarget } from "./runtime-D_FsE3WK.js";
//#region extensions/feishu/src/directory.static.ts
function toFeishuDirectoryPeers(ids) {
	return ids.map((id) => ({
		kind: "user",
		id
	}));
}
function toFeishuDirectoryGroups(ids) {
	return ids.map((id) => ({
		kind: "group",
		id
	}));
}
async function listFeishuDirectoryPeers(params) {
	const account = resolveFeishuAccount({
		cfg: params.cfg,
		accountId: params.accountId
	});
	return toFeishuDirectoryPeers(listDirectoryUserEntriesFromAllowFromAndMapKeys({
		allowFrom: account.config.allowFrom,
		map: account.config.dms,
		query: params.query,
		limit: params.limit,
		normalizeAllowFromId: (entry) => normalizeFeishuTarget(entry) ?? entry,
		normalizeMapKeyId: (entry) => normalizeFeishuTarget(entry) ?? entry
	}).map((entry) => entry.id));
}
async function listFeishuDirectoryGroups(params) {
	const account = resolveFeishuAccount({
		cfg: params.cfg,
		accountId: params.accountId
	});
	return toFeishuDirectoryGroups(listDirectoryGroupEntriesFromMapKeysAndAllowFrom({
		groups: account.config.groups,
		allowFrom: account.config.groupAllowFrom,
		query: params.query,
		limit: params.limit
	}).map((entry) => entry.id));
}
//#endregion
export { listFeishuDirectoryPeers as n, listFeishuDirectoryGroups as t };
