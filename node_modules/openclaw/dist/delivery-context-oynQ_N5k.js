import { v as normalizeOptionalAccountId } from "./session-key-CYZxn_Kd.js";
import { l as normalizeMessageChannel } from "./message-channel-ZzTqBBLH.js";
import crypto from "node:crypto";
//#region src/config/sessions/types.ts
function normalizeRuntimeField(value) {
	const trimmed = value?.trim();
	return trimmed ? trimmed : void 0;
}
function normalizeSessionRuntimeModelFields(entry) {
	const normalizedModel = normalizeRuntimeField(entry.model);
	const normalizedProvider = normalizeRuntimeField(entry.modelProvider);
	let next = entry;
	if (!normalizedModel) {
		if (entry.model !== void 0 || entry.modelProvider !== void 0) {
			next = { ...next };
			delete next.model;
			delete next.modelProvider;
		}
		return next;
	}
	if (entry.model !== normalizedModel) {
		if (next === entry) next = { ...next };
		next.model = normalizedModel;
	}
	if (!normalizedProvider) {
		if (entry.modelProvider !== void 0) {
			if (next === entry) next = { ...next };
			delete next.modelProvider;
		}
		return next;
	}
	if (entry.modelProvider !== normalizedProvider) {
		if (next === entry) next = { ...next };
		next.modelProvider = normalizedProvider;
	}
	return next;
}
function setSessionRuntimeModel(entry, runtime) {
	const provider = runtime.provider.trim();
	const model = runtime.model.trim();
	if (!provider || !model) return false;
	entry.modelProvider = provider;
	entry.model = model;
	return true;
}
function resolveMergedUpdatedAt(existing, patch, options) {
	if (options?.policy === "preserve-activity" && existing) return existing.updatedAt ?? patch.updatedAt ?? options.now ?? Date.now();
	return Math.max(existing?.updatedAt ?? 0, patch.updatedAt ?? 0, options?.now ?? Date.now());
}
function mergeSessionEntryWithPolicy(existing, patch, options) {
	const sessionId = patch.sessionId ?? existing?.sessionId ?? crypto.randomUUID();
	const updatedAt = resolveMergedUpdatedAt(existing, patch, options);
	if (!existing) return normalizeSessionRuntimeModelFields({
		...patch,
		sessionId,
		updatedAt
	});
	const next = {
		...existing,
		...patch,
		sessionId,
		updatedAt
	};
	if (Object.hasOwn(patch, "model") && !Object.hasOwn(patch, "modelProvider")) {
		const patchedModel = normalizeRuntimeField(patch.model);
		const existingModel = normalizeRuntimeField(existing.model);
		if (patchedModel && patchedModel !== existingModel) delete next.modelProvider;
	}
	return normalizeSessionRuntimeModelFields(next);
}
function mergeSessionEntry(existing, patch) {
	return mergeSessionEntryWithPolicy(existing, patch);
}
function mergeSessionEntryPreserveActivity(existing, patch) {
	return mergeSessionEntryWithPolicy(existing, patch, { policy: "preserve-activity" });
}
function resolveFreshSessionTotalTokens(entry) {
	const total = entry?.totalTokens;
	if (typeof total !== "number" || !Number.isFinite(total) || total < 0) return;
	if (entry?.totalTokensFresh === false) return;
	return total;
}
const DEFAULT_RESET_TRIGGERS = ["/new", "/reset"];
//#endregion
//#region src/utils/account-id.ts
function normalizeAccountId(value) {
	return normalizeOptionalAccountId(value);
}
//#endregion
//#region src/utils/delivery-context.ts
function normalizeDeliveryContext(context) {
	if (!context) return;
	const channel = typeof context.channel === "string" ? normalizeMessageChannel(context.channel) ?? context.channel.trim() : void 0;
	const to = typeof context.to === "string" ? context.to.trim() : void 0;
	const accountId = normalizeAccountId(context.accountId);
	const threadId = typeof context.threadId === "number" && Number.isFinite(context.threadId) ? Math.trunc(context.threadId) : typeof context.threadId === "string" ? context.threadId.trim() : void 0;
	const normalizedThreadId = typeof threadId === "string" ? threadId ? threadId : void 0 : threadId;
	if (!channel && !to && !accountId && normalizedThreadId == null) return;
	const normalized = {
		channel: channel || void 0,
		to: to || void 0,
		accountId
	};
	if (normalizedThreadId != null) normalized.threadId = normalizedThreadId;
	return normalized;
}
function formatConversationTarget(params) {
	const channel = typeof params.channel === "string" ? normalizeMessageChannel(params.channel) ?? params.channel.trim() : void 0;
	const conversationId = typeof params.conversationId === "number" && Number.isFinite(params.conversationId) ? String(Math.trunc(params.conversationId)) : typeof params.conversationId === "string" ? params.conversationId.trim() : void 0;
	if (!channel || !conversationId) return;
	if (channel === "matrix") {
		const parentConversationId = typeof params.parentConversationId === "number" && Number.isFinite(params.parentConversationId) ? String(Math.trunc(params.parentConversationId)) : typeof params.parentConversationId === "string" ? params.parentConversationId.trim() : void 0;
		return `room:${parentConversationId && parentConversationId !== conversationId ? parentConversationId : conversationId}`;
	}
	return `channel:${conversationId}`;
}
function resolveConversationDeliveryTarget(params) {
	const to = formatConversationTarget(params);
	const channel = typeof params.channel === "string" ? normalizeMessageChannel(params.channel) ?? params.channel.trim() : void 0;
	const conversationId = typeof params.conversationId === "number" && Number.isFinite(params.conversationId) ? String(Math.trunc(params.conversationId)) : typeof params.conversationId === "string" ? params.conversationId.trim() : void 0;
	const parentConversationId = typeof params.parentConversationId === "number" && Number.isFinite(params.parentConversationId) ? String(Math.trunc(params.parentConversationId)) : typeof params.parentConversationId === "string" ? params.parentConversationId.trim() : void 0;
	if (channel === "matrix" && to && conversationId && parentConversationId && parentConversationId !== conversationId) return {
		to,
		threadId: conversationId
	};
	return { to };
}
function normalizeSessionDeliveryFields(source) {
	if (!source) return {
		deliveryContext: void 0,
		lastChannel: void 0,
		lastTo: void 0,
		lastAccountId: void 0,
		lastThreadId: void 0
	};
	const merged = mergeDeliveryContext(normalizeDeliveryContext({
		channel: source.lastChannel ?? source.channel,
		to: source.lastTo,
		accountId: source.lastAccountId,
		threadId: source.lastThreadId
	}), normalizeDeliveryContext(source.deliveryContext));
	if (!merged) return {
		deliveryContext: void 0,
		lastChannel: void 0,
		lastTo: void 0,
		lastAccountId: void 0,
		lastThreadId: void 0
	};
	return {
		deliveryContext: merged,
		lastChannel: merged.channel,
		lastTo: merged.to,
		lastAccountId: merged.accountId,
		lastThreadId: merged.threadId
	};
}
function deliveryContextFromSession(entry) {
	if (!entry) return;
	return normalizeSessionDeliveryFields({
		channel: entry.channel,
		lastChannel: entry.lastChannel,
		lastTo: entry.lastTo,
		lastAccountId: entry.lastAccountId,
		lastThreadId: entry.lastThreadId ?? entry.deliveryContext?.threadId ?? entry.origin?.threadId,
		deliveryContext: entry.deliveryContext
	}).deliveryContext;
}
function mergeDeliveryContext(primary, fallback) {
	const normalizedPrimary = normalizeDeliveryContext(primary);
	const normalizedFallback = normalizeDeliveryContext(fallback);
	if (!normalizedPrimary && !normalizedFallback) return;
	const channelsConflict = normalizedPrimary?.channel && normalizedFallback?.channel && normalizedPrimary.channel !== normalizedFallback.channel;
	return normalizeDeliveryContext({
		channel: normalizedPrimary?.channel ?? normalizedFallback?.channel,
		to: channelsConflict ? normalizedPrimary?.to : normalizedPrimary?.to ?? normalizedFallback?.to,
		accountId: channelsConflict ? normalizedPrimary?.accountId : normalizedPrimary?.accountId ?? normalizedFallback?.accountId,
		threadId: channelsConflict ? normalizedPrimary?.threadId : normalizedPrimary?.threadId ?? normalizedFallback?.threadId
	});
}
function deliveryContextKey(context) {
	const normalized = normalizeDeliveryContext(context);
	if (!normalized?.channel || !normalized?.to) return;
	const threadId = normalized.threadId != null && normalized.threadId !== "" ? String(normalized.threadId) : "";
	return `${normalized.channel}|${normalized.to}|${normalized.accountId ?? ""}|${threadId}`;
}
//#endregion
export { normalizeDeliveryContext as a, normalizeAccountId as c, mergeSessionEntryPreserveActivity as d, normalizeSessionRuntimeModelFields as f, mergeDeliveryContext as i, DEFAULT_RESET_TRIGGERS as l, setSessionRuntimeModel as m, deliveryContextKey as n, normalizeSessionDeliveryFields as o, resolveFreshSessionTotalTokens as p, formatConversationTarget as r, resolveConversationDeliveryTarget as s, deliveryContextFromSession as t, mergeSessionEntry as u };
