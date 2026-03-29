import { Ba as normalizeE164, O as loadConfig, bi as resolveDefaultAgentId, ht as parseByteSize, li as listAgentIds, o as createSubsystemLogger } from "./env-D1ktUnAV.js";
import { C as resolveRequiredHomeDir, _ as resolveStateDir } from "./paths-CjuwkA2v.js";
import { c as normalizeAgentId, l as normalizeMainKey, r as buildAgentMainSessionKey, t as DEFAULT_AGENT_ID } from "./session-key-CYZxn_Kd.js";
import { n as normalizeHyphenSlug } from "./string-normalization-GMAyKyIj.js";
import { t as parseDurationMs } from "./parse-duration-J09geyeq.js";
import { c as listDeliverableMessageChannels, l as normalizeMessageChannel } from "./message-channel-ZzTqBBLH.js";
import { a as parseSessionArchiveTimestamp, n as isPrimarySessionTranscriptFileName, r as isSessionArchiveArtifactName, t as formatSessionArchiveTimestamp } from "./artifacts-DofHqQRD.js";
import { t as normalizeChatType } from "./chat-type-B7nj2prf.js";
import { t as resolveConversationLabel } from "./conversation-label-DOdGWj3E.js";
import { l as normalizeChannelId, s as getChannelPlugin } from "./plugins-h0t63KQW.js";
import { i as resolveMainSessionKey } from "./main-session-DF6UibWM.js";
import { a as resolveSessionTranscriptPath, i as resolveSessionFilePathOptions, l as resolveStorePath, n as resolveDefaultSessionStorePath, o as resolveSessionTranscriptPathInDir, r as resolveSessionFilePath, t as resolveAgentsDirFromSessionStorePath } from "./paths-BEHCHyAI.js";
import { a as normalizeDeliveryContext, d as mergeSessionEntryPreserveActivity, f as normalizeSessionRuntimeModelFields, i as mergeDeliveryContext, o as normalizeSessionDeliveryFields, t as deliveryContextFromSession, u as mergeSessionEntry } from "./delivery-context-oynQ_N5k.js";
import { t as normalizeExplicitDiscordSessionKey } from "./session-key-api-9G8Gz-m_.js";
import { t as acquireSessionWriteLock } from "./session-write-lock-B7nwE7de.js";
import { i as writeTextAtomic } from "./json-files-BF0_WtT5.js";
import { r as parseStrictNonNegativeInteger } from "./parse-finite-number-BI26rGfZ.js";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import fs$1 from "node:fs/promises";
import { CURRENT_SESSION_VERSION, SessionManager } from "@mariozechner/pi-coding-agent";
//#region src/config/sessions/group.ts
const getGroupSurfaces = () => new Set([...listDeliverableMessageChannels(), "webchat"]);
function normalizeGroupLabel(raw) {
	return normalizeHyphenSlug(raw);
}
function shortenGroupId(value) {
	const trimmed = value?.trim() ?? "";
	if (!trimmed) return "";
	if (trimmed.length <= 14) return trimmed;
	return `${trimmed.slice(0, 6)}...${trimmed.slice(-4)}`;
}
function buildGroupDisplayName(params) {
	const providerKey = (params.provider?.trim().toLowerCase() || "group").trim();
	const groupChannel = params.groupChannel?.trim();
	const space = params.space?.trim();
	const subject = params.subject?.trim();
	const detail = (groupChannel && space ? `${space}${groupChannel.startsWith("#") ? "" : "#"}${groupChannel}` : groupChannel || subject || space || "") || "";
	const fallbackId = params.id?.trim() || params.key;
	const rawLabel = detail || fallbackId;
	let token = normalizeGroupLabel(rawLabel);
	if (!token) token = normalizeGroupLabel(shortenGroupId(rawLabel));
	if (!params.groupChannel && token.startsWith("#")) token = token.replace(/^#+/, "");
	if (token && !/^[@#]/.test(token) && !token.startsWith("g-") && !token.includes("#")) token = `g-${token}`;
	return token ? `${providerKey}:${token}` : providerKey;
}
function resolveGroupSessionKey(ctx) {
	const from = typeof ctx.From === "string" ? ctx.From.trim() : "";
	const chatType = ctx.ChatType?.trim().toLowerCase();
	const normalizedChatType = chatType === "channel" ? "channel" : chatType === "group" ? "group" : void 0;
	const isWhatsAppGroupId = from.toLowerCase().endsWith("@g.us");
	if (!(normalizedChatType === "group" || normalizedChatType === "channel" || from.includes(":group:") || from.includes(":channel:") || isWhatsAppGroupId)) return null;
	const providerHint = ctx.Provider?.trim().toLowerCase();
	const parts = from.split(":").filter(Boolean);
	const head = parts[0]?.trim().toLowerCase() ?? "";
	const headIsSurface = head ? getGroupSurfaces().has(head) : false;
	const provider = headIsSurface ? head : providerHint ?? (isWhatsAppGroupId ? "whatsapp" : void 0);
	if (!provider) return null;
	const second = parts[1]?.trim().toLowerCase();
	const secondIsKind = second === "group" || second === "channel";
	const kind = secondIsKind ? second : from.includes(":channel:") || normalizedChatType === "channel" ? "channel" : "group";
	const finalId = (headIsSurface ? secondIsKind ? parts.slice(2).join(":") : parts.slice(1).join(":") : from).trim().toLowerCase();
	if (!finalId) return null;
	return {
		key: `${provider}:${kind}:${finalId}`,
		channel: provider,
		id: finalId,
		chatType: kind === "channel" ? "channel" : "group"
	};
}
//#endregion
//#region src/config/sessions/metadata.ts
const mergeOrigin = (existing, next) => {
	if (!existing && !next) return;
	const merged = existing ? { ...existing } : {};
	if (next?.label) merged.label = next.label;
	if (next?.provider) merged.provider = next.provider;
	if (next?.surface) merged.surface = next.surface;
	if (next?.chatType) merged.chatType = next.chatType;
	if (next?.from) merged.from = next.from;
	if (next?.to) merged.to = next.to;
	if (next?.accountId) merged.accountId = next.accountId;
	if (next?.threadId != null && next.threadId !== "") merged.threadId = next.threadId;
	return Object.keys(merged).length > 0 ? merged : void 0;
};
function deriveSessionOrigin(ctx) {
	const label = resolveConversationLabel(ctx)?.trim();
	const provider = normalizeMessageChannel(typeof ctx.OriginatingChannel === "string" && ctx.OriginatingChannel || ctx.Surface || ctx.Provider);
	const surface = ctx.Surface?.trim().toLowerCase();
	const chatType = normalizeChatType(ctx.ChatType) ?? void 0;
	const from = ctx.From?.trim();
	const to = (typeof ctx.OriginatingTo === "string" ? ctx.OriginatingTo : ctx.To)?.trim() ?? void 0;
	const accountId = ctx.AccountId?.trim();
	const threadId = ctx.MessageThreadId ?? void 0;
	const origin = {};
	if (label) origin.label = label;
	if (provider) origin.provider = provider;
	if (surface) origin.surface = surface;
	if (chatType) origin.chatType = chatType;
	if (from) origin.from = from;
	if (to) origin.to = to;
	if (accountId) origin.accountId = accountId;
	if (threadId != null && threadId !== "") origin.threadId = threadId;
	return Object.keys(origin).length > 0 ? origin : void 0;
}
function snapshotSessionOrigin(entry) {
	if (!entry?.origin) return;
	return { ...entry.origin };
}
function deriveGroupSessionPatch(params) {
	const resolution = params.groupResolution ?? resolveGroupSessionKey(params.ctx);
	if (!resolution?.channel) return null;
	const channel = resolution.channel;
	const subject = params.ctx.GroupSubject?.trim();
	const space = params.ctx.GroupSpace?.trim();
	const explicitChannel = params.ctx.GroupChannel?.trim();
	const normalizedChannel = normalizeChannelId(channel);
	const isChannelProvider = Boolean(normalizedChannel && getChannelPlugin(normalizedChannel)?.capabilities.chatTypes.includes("channel"));
	const nextGroupChannel = explicitChannel ?? ((resolution.chatType === "channel" || isChannelProvider) && subject && subject.startsWith("#") ? subject : void 0);
	const nextSubject = nextGroupChannel ? void 0 : subject;
	const patch = {
		chatType: resolution.chatType ?? "group",
		channel,
		groupId: resolution.id
	};
	if (nextSubject) patch.subject = nextSubject;
	if (nextGroupChannel) patch.groupChannel = nextGroupChannel;
	if (space) patch.space = space;
	const displayName = buildGroupDisplayName({
		provider: channel,
		subject: nextSubject ?? params.existing?.subject,
		groupChannel: nextGroupChannel ?? params.existing?.groupChannel,
		space: space ?? params.existing?.space,
		id: resolution.id,
		key: params.sessionKey
	});
	if (displayName) patch.displayName = displayName;
	return patch;
}
function deriveSessionMetaPatch(params) {
	const groupPatch = deriveGroupSessionPatch(params);
	const origin = deriveSessionOrigin(params.ctx);
	if (!groupPatch && !origin) return null;
	const patch = groupPatch ? { ...groupPatch } : {};
	const mergedOrigin = mergeOrigin(params.existing?.origin, origin);
	if (mergedOrigin) patch.origin = mergedOrigin;
	return Object.keys(patch).length > 0 ? patch : null;
}
//#endregion
//#region src/config/sessions/main-session.runtime.ts
function resolveMainSessionKeyFromConfig() {
	return resolveMainSessionKey(loadConfig());
}
const THREAD_SESSION_MARKERS = [":thread:", ":topic:"];
const GROUP_SESSION_MARKERS = [":group:", ":channel:"];
function isThreadSessionKey(sessionKey) {
	const normalized = (sessionKey ?? "").toLowerCase();
	if (!normalized) return false;
	return THREAD_SESSION_MARKERS.some((marker) => normalized.includes(marker));
}
function resolveSessionResetType(params) {
	if (params.isThread || isThreadSessionKey(params.sessionKey)) return "thread";
	if (params.isGroup) return "group";
	const normalized = (params.sessionKey ?? "").toLowerCase();
	if (GROUP_SESSION_MARKERS.some((marker) => normalized.includes(marker))) return "group";
	return "direct";
}
function resolveThreadFlag(params) {
	if (params.messageThreadId != null) return true;
	if (params.threadLabel?.trim()) return true;
	if (params.threadStarterBody?.trim()) return true;
	if (params.parentSessionKey?.trim()) return true;
	return isThreadSessionKey(params.sessionKey);
}
function resolveDailyResetAtMs(now, atHour) {
	const normalizedAtHour = normalizeResetAtHour(atHour);
	const resetAt = new Date(now);
	resetAt.setHours(normalizedAtHour, 0, 0, 0);
	if (now < resetAt.getTime()) resetAt.setDate(resetAt.getDate() - 1);
	return resetAt.getTime();
}
function resolveSessionResetPolicy(params) {
	const sessionCfg = params.sessionCfg;
	const baseReset = params.resetOverride ?? sessionCfg?.reset;
	const typeReset = params.resetOverride ? void 0 : sessionCfg?.resetByType?.[params.resetType] ?? (params.resetType === "direct" ? (sessionCfg?.resetByType)?.dm : void 0);
	const hasExplicitReset = Boolean(baseReset || sessionCfg?.resetByType);
	const legacyIdleMinutes = params.resetOverride ? void 0 : sessionCfg?.idleMinutes;
	const mode = typeReset?.mode ?? baseReset?.mode ?? (!hasExplicitReset && legacyIdleMinutes != null ? "idle" : "daily");
	const atHour = normalizeResetAtHour(typeReset?.atHour ?? baseReset?.atHour ?? 4);
	const idleMinutesRaw = typeReset?.idleMinutes ?? baseReset?.idleMinutes ?? legacyIdleMinutes;
	let idleMinutes;
	if (idleMinutesRaw != null) {
		const normalized = Math.floor(idleMinutesRaw);
		if (Number.isFinite(normalized)) idleMinutes = Math.max(normalized, 0);
	} else if (mode === "idle") idleMinutes = 0;
	return {
		mode,
		atHour,
		idleMinutes
	};
}
function resolveChannelResetConfig(params) {
	const resetByChannel = params.sessionCfg?.resetByChannel;
	if (!resetByChannel) return;
	const normalized = normalizeMessageChannel(params.channel);
	const fallback = params.channel?.trim().toLowerCase();
	const key = normalized ?? fallback;
	if (!key) return;
	return resetByChannel[key] ?? resetByChannel[key.toLowerCase()];
}
function evaluateSessionFreshness(params) {
	const dailyResetAt = params.policy.mode === "daily" ? resolveDailyResetAtMs(params.now, params.policy.atHour) : void 0;
	const idleExpiresAt = params.policy.idleMinutes != null && params.policy.idleMinutes > 0 ? params.updatedAt + params.policy.idleMinutes * 6e4 : void 0;
	const staleDaily = dailyResetAt != null && params.updatedAt < dailyResetAt;
	const staleIdle = idleExpiresAt != null && params.now > idleExpiresAt;
	return {
		fresh: !(staleDaily || staleIdle),
		dailyResetAt,
		idleExpiresAt
	};
}
function normalizeResetAtHour(value) {
	if (typeof value !== "number" || !Number.isFinite(value)) return 4;
	const normalized = Math.floor(value);
	if (!Number.isFinite(normalized)) return 4;
	if (normalized < 0) return 0;
	if (normalized > 23) return 23;
	return normalized;
}
//#endregion
//#region src/config/sessions/explicit-session-key-normalization.ts
const EXPLICIT_SESSION_KEY_NORMALIZERS = [{
	provider: "discord",
	normalize: normalizeExplicitDiscordSessionKey,
	matches: ({ sessionKey, provider, surface, from }) => surface === "discord" || provider === "discord" || from.startsWith("discord:") || sessionKey.startsWith("discord:") || sessionKey.includes(":discord:")
}];
function resolveExplicitSessionKeyNormalizer(sessionKey, ctx) {
	const normalizedProvider = ctx.Provider?.trim().toLowerCase();
	const normalizedSurface = ctx.Surface?.trim().toLowerCase();
	const normalizedFrom = (ctx.From ?? "").trim().toLowerCase();
	return EXPLICIT_SESSION_KEY_NORMALIZERS.find((entry) => entry.matches({
		sessionKey,
		provider: normalizedProvider,
		surface: normalizedSurface,
		from: normalizedFrom
	}))?.normalize;
}
function normalizeExplicitSessionKey(sessionKey, ctx) {
	const normalized = sessionKey.trim().toLowerCase();
	const normalize = resolveExplicitSessionKeyNormalizer(normalized, ctx);
	return normalize ? normalize(normalized, ctx) : normalized;
}
//#endregion
//#region src/config/sessions/session-key.ts
function deriveSessionKey(scope, ctx) {
	if (scope === "global") return "global";
	const resolvedGroup = resolveGroupSessionKey(ctx);
	if (resolvedGroup) return resolvedGroup.key;
	return (ctx.From ? normalizeE164(ctx.From) : "") || "unknown";
}
/**
* Resolve the session key with a canonical direct-chat bucket (default: "main").
* All non-group direct chats collapse to this bucket; groups stay isolated.
*/
function resolveSessionKey(scope, ctx, mainKey) {
	const explicit = ctx.SessionKey?.trim();
	if (explicit) return normalizeExplicitSessionKey(explicit, ctx);
	const raw = deriveSessionKey(scope, ctx);
	if (scope === "global") return raw;
	const canonical = buildAgentMainSessionKey({
		agentId: DEFAULT_AGENT_ID,
		mainKey: normalizeMainKey(mainKey)
	});
	if (!(raw.includes(":group:") || raw.includes(":channel:"))) return canonical;
	return `agent:${DEFAULT_AGENT_ID}:${raw}`;
}
//#endregion
//#region src/gateway/session-transcript-files.fs.ts
function classifySessionTranscriptCandidate(sessionId, sessionFile) {
	const transcriptSessionId = extractGeneratedTranscriptSessionId(sessionFile);
	if (!transcriptSessionId) return "custom";
	return transcriptSessionId === sessionId ? "current" : "stale";
}
function extractGeneratedTranscriptSessionId(sessionFile) {
	const trimmed = sessionFile?.trim();
	if (!trimmed) return;
	const base = path.basename(trimmed);
	if (!base.endsWith(".jsonl")) return;
	const withoutExt = base.slice(0, -6);
	const topicIndex = withoutExt.indexOf("-topic-");
	if (topicIndex > 0) {
		const topicSessionId = withoutExt.slice(0, topicIndex);
		return looksLikeGeneratedSessionId(topicSessionId) ? topicSessionId : void 0;
	}
	const forkMatch = withoutExt.match(/^(\d{4}-\d{2}-\d{2}T[\w-]+(?:Z|[+-]\d{2}(?:-\d{2})?)?)_(.+)$/);
	if (forkMatch?.[2]) return looksLikeGeneratedSessionId(forkMatch[2]) ? forkMatch[2] : void 0;
	return looksLikeGeneratedSessionId(withoutExt) ? withoutExt : void 0;
}
function looksLikeGeneratedSessionId(value) {
	return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}
function canonicalizePathForComparison$1(filePath) {
	const resolved = path.resolve(filePath);
	try {
		return fs.realpathSync(resolved);
	} catch {
		return resolved;
	}
}
function resolveSessionTranscriptCandidates(sessionId, storePath, sessionFile, agentId) {
	const candidates = [];
	const sessionFileState = classifySessionTranscriptCandidate(sessionId, sessionFile);
	const pushCandidate = (resolve) => {
		try {
			candidates.push(resolve());
		} catch {}
	};
	if (storePath) {
		const sessionsDir = path.dirname(storePath);
		if (sessionFile && sessionFileState !== "stale") pushCandidate(() => resolveSessionFilePath(sessionId, { sessionFile }, {
			sessionsDir,
			agentId
		}));
		pushCandidate(() => resolveSessionTranscriptPathInDir(sessionId, sessionsDir));
		if (sessionFile && sessionFileState === "stale") pushCandidate(() => resolveSessionFilePath(sessionId, { sessionFile }, {
			sessionsDir,
			agentId
		}));
	} else if (sessionFile) if (agentId) {
		if (sessionFileState !== "stale") pushCandidate(() => resolveSessionFilePath(sessionId, { sessionFile }, { agentId }));
	} else {
		const trimmed = sessionFile.trim();
		if (trimmed) candidates.push(path.resolve(trimmed));
	}
	if (agentId) {
		pushCandidate(() => resolveSessionTranscriptPath(sessionId, agentId));
		if (sessionFile && sessionFileState === "stale") pushCandidate(() => resolveSessionFilePath(sessionId, { sessionFile }, { agentId }));
	}
	const home = resolveRequiredHomeDir(process.env, os.homedir);
	const legacyDir = path.join(home, ".openclaw", "sessions");
	pushCandidate(() => resolveSessionTranscriptPathInDir(sessionId, legacyDir));
	return Array.from(new Set(candidates));
}
function archiveFileOnDisk(filePath, reason) {
	const archived = `${filePath}.${reason}.${formatSessionArchiveTimestamp()}`;
	fs.renameSync(filePath, archived);
	return archived;
}
function archiveSessionTranscripts(opts) {
	const archived = [];
	const storeDir = opts.restrictToStoreDir && opts.storePath ? canonicalizePathForComparison$1(path.dirname(opts.storePath)) : null;
	for (const candidate of resolveSessionTranscriptCandidates(opts.sessionId, opts.storePath, opts.sessionFile, opts.agentId)) {
		const candidatePath = canonicalizePathForComparison$1(candidate);
		if (storeDir) {
			const relative = path.relative(storeDir, candidatePath);
			if (!relative || relative.startsWith("..") || path.isAbsolute(relative)) continue;
		}
		if (!fs.existsSync(candidatePath)) continue;
		try {
			archived.push(archiveFileOnDisk(candidatePath, opts.reason));
		} catch {}
	}
	return archived;
}
async function cleanupArchivedSessionTranscripts(opts) {
	if (!Number.isFinite(opts.olderThanMs) || opts.olderThanMs < 0) return {
		removed: 0,
		scanned: 0
	};
	const now = opts.nowMs ?? Date.now();
	const reason = opts.reason ?? "deleted";
	const directories = Array.from(new Set(opts.directories.map((dir) => path.resolve(dir))));
	let removed = 0;
	let scanned = 0;
	for (const dir of directories) {
		const entries = await fs.promises.readdir(dir).catch(() => []);
		for (const entry of entries) {
			const timestamp = parseSessionArchiveTimestamp(entry, reason);
			if (timestamp == null) continue;
			scanned += 1;
			if (now - timestamp <= opts.olderThanMs) continue;
			const fullPath = path.join(dir, entry);
			if (!(await fs.promises.stat(fullPath).catch(() => null))?.isFile()) continue;
			await fs.promises.rm(fullPath).catch(() => void 0);
			removed += 1;
		}
	}
	return {
		removed,
		scanned
	};
}
//#endregion
//#region src/config/cache-utils.ts
function resolveCacheTtlMs(params) {
	const { envValue, defaultTtlMs } = params;
	if (envValue) {
		const parsed = parseStrictNonNegativeInteger(envValue);
		if (parsed !== void 0) return parsed;
	}
	return defaultTtlMs;
}
function isCacheEnabled(ttlMs) {
	return ttlMs > 0;
}
function resolveCacheNumeric(value) {
	return typeof value === "function" ? value() : value;
}
function resolvePruneIntervalMs(ttlMs, pruneIntervalMs) {
	if (typeof pruneIntervalMs === "function") return Math.max(0, Math.floor(pruneIntervalMs(ttlMs)));
	if (typeof pruneIntervalMs === "number") return Math.max(0, Math.floor(pruneIntervalMs));
	return ttlMs;
}
function isCacheEntryExpired(storedAt, now, ttlMs) {
	return now - storedAt > ttlMs;
}
function createExpiringMapCache(options) {
	const cache = /* @__PURE__ */ new Map();
	const now = options.clock ?? Date.now;
	let lastPruneAt = 0;
	function getTtlMs() {
		return Math.max(0, Math.floor(resolveCacheNumeric(options.ttlMs)));
	}
	function maybePruneExpiredEntries(nowMs, ttlMs) {
		if (!isCacheEnabled(ttlMs)) return;
		if (nowMs - lastPruneAt < resolvePruneIntervalMs(ttlMs, options.pruneIntervalMs)) return;
		for (const [key, entry] of cache.entries()) if (isCacheEntryExpired(entry.storedAt, nowMs, ttlMs)) cache.delete(key);
		lastPruneAt = nowMs;
	}
	return {
		get: (key) => {
			const ttlMs = getTtlMs();
			if (!isCacheEnabled(ttlMs)) return;
			const nowMs = now();
			maybePruneExpiredEntries(nowMs, ttlMs);
			const entry = cache.get(key);
			if (!entry) return;
			if (isCacheEntryExpired(entry.storedAt, nowMs, ttlMs)) {
				cache.delete(key);
				return;
			}
			return entry.value;
		},
		set: (key, value) => {
			const ttlMs = getTtlMs();
			if (!isCacheEnabled(ttlMs)) return;
			const nowMs = now();
			maybePruneExpiredEntries(nowMs, ttlMs);
			cache.set(key, {
				storedAt: nowMs,
				value
			});
		},
		delete: (key) => {
			cache.delete(key);
		},
		clear: () => {
			cache.clear();
			lastPruneAt = 0;
		},
		keys: () => [...cache.keys()],
		size: () => cache.size,
		pruneExpired: () => {
			const ttlMs = getTtlMs();
			if (!isCacheEnabled(ttlMs)) return;
			const nowMs = now();
			for (const [key, entry] of cache.entries()) if (isCacheEntryExpired(entry.storedAt, nowMs, ttlMs)) cache.delete(key);
			lastPruneAt = nowMs;
		}
	};
}
function getFileStatSnapshot(filePath) {
	try {
		const stats = fs.statSync(filePath);
		return {
			mtimeMs: stats.mtimeMs,
			sizeBytes: stats.size
		};
	} catch {
		return;
	}
}
//#endregion
//#region src/config/sessions/disk-budget.ts
const NOOP_LOGGER = {
	warn: () => {},
	info: () => {}
};
function canonicalizePathForComparison(filePath) {
	const resolved = path.resolve(filePath);
	try {
		return fs.realpathSync(resolved);
	} catch {
		return resolved;
	}
}
function measureStoreBytes(store) {
	return Buffer.byteLength(JSON.stringify(store, null, 2), "utf-8");
}
function measureStoreEntryChunkBytes(key, entry) {
	const singleEntryStore = JSON.stringify({ [key]: entry }, null, 2);
	if (!singleEntryStore.startsWith("{\n") || !singleEntryStore.endsWith("\n}")) return measureStoreBytes({ [key]: entry }) - 4;
	const chunk = singleEntryStore.slice(2, -2);
	return Buffer.byteLength(chunk, "utf-8");
}
function buildStoreEntryChunkSizeMap(store) {
	const out = /* @__PURE__ */ new Map();
	for (const [key, entry] of Object.entries(store)) out.set(key, measureStoreEntryChunkBytes(key, entry));
	return out;
}
function getEntryUpdatedAt$1(entry) {
	if (!entry) return 0;
	const updatedAt = entry.updatedAt;
	return Number.isFinite(updatedAt) ? updatedAt : 0;
}
function buildSessionIdRefCounts(store) {
	const counts = /* @__PURE__ */ new Map();
	for (const entry of Object.values(store)) {
		const sessionId = entry?.sessionId;
		if (!sessionId) continue;
		counts.set(sessionId, (counts.get(sessionId) ?? 0) + 1);
	}
	return counts;
}
function resolveSessionTranscriptPathForEntry(params) {
	if (!params.entry.sessionId) return null;
	try {
		const resolved = resolveSessionFilePath(params.entry.sessionId, params.entry, { sessionsDir: params.sessionsDir });
		const resolvedSessionsDir = canonicalizePathForComparison(params.sessionsDir);
		const resolvedPath = canonicalizePathForComparison(resolved);
		const relative = path.relative(resolvedSessionsDir, resolvedPath);
		if (!relative || relative.startsWith("..") || path.isAbsolute(relative)) return null;
		return resolvedPath;
	} catch {
		return null;
	}
}
function resolveReferencedSessionTranscriptPaths(params) {
	const referenced = /* @__PURE__ */ new Set();
	for (const entry of Object.values(params.store)) {
		const resolved = resolveSessionTranscriptPathForEntry({
			sessionsDir: params.sessionsDir,
			entry
		});
		if (resolved) referenced.add(canonicalizePathForComparison(resolved));
	}
	return referenced;
}
async function readSessionsDirFiles(sessionsDir) {
	const dirEntries = await fs.promises.readdir(sessionsDir, { withFileTypes: true }).catch(() => []);
	const files = [];
	for (const dirent of dirEntries) {
		if (!dirent.isFile()) continue;
		const filePath = path.join(sessionsDir, dirent.name);
		const stat = await fs.promises.stat(filePath).catch(() => null);
		if (!stat?.isFile()) continue;
		files.push({
			path: filePath,
			canonicalPath: canonicalizePathForComparison(filePath),
			name: dirent.name,
			size: stat.size,
			mtimeMs: stat.mtimeMs
		});
	}
	return files;
}
async function removeFileIfExists(filePath) {
	const stat = await fs.promises.stat(filePath).catch(() => null);
	if (!stat?.isFile()) return 0;
	await fs.promises.rm(filePath, { force: true }).catch(() => void 0);
	return stat.size;
}
async function removeFileForBudget(params) {
	const resolvedPath = path.resolve(params.filePath);
	const canonicalPath = params.canonicalPath ?? canonicalizePathForComparison(resolvedPath);
	if (params.dryRun) {
		if (params.simulatedRemovedPaths.has(canonicalPath)) return 0;
		const size = params.fileSizesByPath.get(canonicalPath) ?? 0;
		if (size <= 0) return 0;
		params.simulatedRemovedPaths.add(canonicalPath);
		return size;
	}
	return removeFileIfExists(resolvedPath);
}
async function enforceSessionDiskBudget(params) {
	const maxBytes = params.maintenance.maxDiskBytes;
	const highWaterBytes = params.maintenance.highWaterBytes;
	if (maxBytes == null || highWaterBytes == null) return null;
	const log = params.log ?? NOOP_LOGGER;
	const dryRun = params.dryRun === true;
	const sessionsDir = path.dirname(params.storePath);
	const files = await readSessionsDirFiles(sessionsDir);
	const fileSizesByPath = new Map(files.map((file) => [file.canonicalPath, file.size]));
	const simulatedRemovedPaths = /* @__PURE__ */ new Set();
	const resolvedStorePath = canonicalizePathForComparison(params.storePath);
	const storeFile = files.find((file) => file.canonicalPath === resolvedStorePath);
	let projectedStoreBytes = measureStoreBytes(params.store);
	let total = files.reduce((sum, file) => sum + file.size, 0) - (storeFile?.size ?? 0) + projectedStoreBytes;
	const totalBefore = total;
	if (total <= maxBytes) return {
		totalBytesBefore: totalBefore,
		totalBytesAfter: total,
		removedFiles: 0,
		removedEntries: 0,
		freedBytes: 0,
		maxBytes,
		highWaterBytes,
		overBudget: false
	};
	if (params.warnOnly) {
		log.warn("session disk budget exceeded (warn-only mode)", {
			sessionsDir,
			totalBytes: total,
			maxBytes,
			highWaterBytes
		});
		return {
			totalBytesBefore: totalBefore,
			totalBytesAfter: total,
			removedFiles: 0,
			removedEntries: 0,
			freedBytes: 0,
			maxBytes,
			highWaterBytes,
			overBudget: true
		};
	}
	let removedFiles = 0;
	let removedEntries = 0;
	let freedBytes = 0;
	const referencedPaths = resolveReferencedSessionTranscriptPaths({
		sessionsDir,
		store: params.store
	});
	const removableFileQueue = files.filter((file) => isSessionArchiveArtifactName(file.name) || isPrimarySessionTranscriptFileName(file.name) && !referencedPaths.has(file.canonicalPath)).toSorted((a, b) => a.mtimeMs - b.mtimeMs);
	for (const file of removableFileQueue) {
		if (total <= highWaterBytes) break;
		const deletedBytes = await removeFileForBudget({
			filePath: file.path,
			canonicalPath: file.canonicalPath,
			dryRun,
			fileSizesByPath,
			simulatedRemovedPaths
		});
		if (deletedBytes <= 0) continue;
		total -= deletedBytes;
		freedBytes += deletedBytes;
		removedFiles += 1;
	}
	if (total > highWaterBytes) {
		const activeSessionKey = params.activeSessionKey?.trim().toLowerCase();
		const sessionIdRefCounts = buildSessionIdRefCounts(params.store);
		const entryChunkBytesByKey = buildStoreEntryChunkSizeMap(params.store);
		const keys = Object.keys(params.store).toSorted((a, b) => {
			return getEntryUpdatedAt$1(params.store[a]) - getEntryUpdatedAt$1(params.store[b]);
		});
		for (const key of keys) {
			if (total <= highWaterBytes) break;
			if (activeSessionKey && key.trim().toLowerCase() === activeSessionKey) continue;
			const entry = params.store[key];
			if (!entry) continue;
			const previousProjectedBytes = projectedStoreBytes;
			delete params.store[key];
			const chunkBytes = entryChunkBytesByKey.get(key);
			entryChunkBytesByKey.delete(key);
			if (typeof chunkBytes === "number" && Number.isFinite(chunkBytes) && chunkBytes >= 0) projectedStoreBytes = Math.max(2, projectedStoreBytes - (chunkBytes + 2));
			else projectedStoreBytes = measureStoreBytes(params.store);
			total += projectedStoreBytes - previousProjectedBytes;
			removedEntries += 1;
			const sessionId = entry.sessionId;
			if (!sessionId) continue;
			const nextRefCount = (sessionIdRefCounts.get(sessionId) ?? 1) - 1;
			if (nextRefCount > 0) {
				sessionIdRefCounts.set(sessionId, nextRefCount);
				continue;
			}
			sessionIdRefCounts.delete(sessionId);
			const transcriptPath = resolveSessionTranscriptPathForEntry({
				sessionsDir,
				entry
			});
			if (!transcriptPath) continue;
			const deletedBytes = await removeFileForBudget({
				filePath: transcriptPath,
				dryRun,
				fileSizesByPath,
				simulatedRemovedPaths
			});
			if (deletedBytes <= 0) continue;
			total -= deletedBytes;
			freedBytes += deletedBytes;
			removedFiles += 1;
		}
	}
	if (!dryRun) {
		if (total > highWaterBytes) log.warn("session disk budget still above high-water target after cleanup", {
			sessionsDir,
			totalBytes: total,
			maxBytes,
			highWaterBytes,
			removedFiles,
			removedEntries
		});
		else if (removedFiles > 0 || removedEntries > 0) log.info("applied session disk budget cleanup", {
			sessionsDir,
			totalBytesBefore: totalBefore,
			totalBytesAfter: total,
			maxBytes,
			highWaterBytes,
			removedFiles,
			removedEntries
		});
	}
	return {
		totalBytesBefore: totalBefore,
		totalBytesAfter: total,
		removedFiles,
		removedEntries,
		freedBytes,
		maxBytes,
		highWaterBytes,
		overBudget: true
	};
}
//#endregion
//#region src/config/sessions/store-cache.ts
const DEFAULT_SESSION_STORE_TTL_MS = 45e3;
const SESSION_STORE_CACHE = createExpiringMapCache({ ttlMs: getSessionStoreTtl });
const SESSION_STORE_SERIALIZED_CACHE = /* @__PURE__ */ new Map();
function getSessionStoreTtl() {
	return resolveCacheTtlMs({
		envValue: process.env.OPENCLAW_SESSION_CACHE_TTL_MS,
		defaultTtlMs: DEFAULT_SESSION_STORE_TTL_MS
	});
}
function isSessionStoreCacheEnabled() {
	return isCacheEnabled(getSessionStoreTtl());
}
function invalidateSessionStoreCache(storePath) {
	SESSION_STORE_CACHE.delete(storePath);
	SESSION_STORE_SERIALIZED_CACHE.delete(storePath);
}
function getSerializedSessionStore(storePath) {
	return SESSION_STORE_SERIALIZED_CACHE.get(storePath);
}
function setSerializedSessionStore(storePath, serialized) {
	if (serialized === void 0) {
		SESSION_STORE_SERIALIZED_CACHE.delete(storePath);
		return;
	}
	SESSION_STORE_SERIALIZED_CACHE.set(storePath, serialized);
}
function dropSessionStoreObjectCache(storePath) {
	SESSION_STORE_CACHE.delete(storePath);
}
function readSessionStoreCache(params) {
	const cached = SESSION_STORE_CACHE.get(params.storePath);
	if (!cached) return null;
	if (params.mtimeMs !== cached.mtimeMs || params.sizeBytes !== cached.sizeBytes) {
		invalidateSessionStoreCache(params.storePath);
		return null;
	}
	return structuredClone(cached.store);
}
function writeSessionStoreCache(params) {
	SESSION_STORE_CACHE.set(params.storePath, {
		store: structuredClone(params.store),
		mtimeMs: params.mtimeMs,
		sizeBytes: params.sizeBytes,
		serialized: params.serialized
	});
	if (params.serialized !== void 0) SESSION_STORE_SERIALIZED_CACHE.set(params.storePath, params.serialized);
}
//#endregion
//#region src/config/sessions/store-maintenance.ts
const log$1 = createSubsystemLogger("sessions/store");
const DEFAULT_SESSION_PRUNE_AFTER_MS = 720 * 60 * 60 * 1e3;
const DEFAULT_SESSION_MAX_ENTRIES = 500;
const DEFAULT_SESSION_ROTATE_BYTES = 10485760;
const DEFAULT_SESSION_MAINTENANCE_MODE = "warn";
const DEFAULT_SESSION_DISK_BUDGET_HIGH_WATER_RATIO = .8;
function resolvePruneAfterMs(maintenance) {
	const raw = maintenance?.pruneAfter ?? maintenance?.pruneDays;
	if (raw === void 0 || raw === null || raw === "") return DEFAULT_SESSION_PRUNE_AFTER_MS;
	try {
		return parseDurationMs(String(raw).trim(), { defaultUnit: "d" });
	} catch {
		return DEFAULT_SESSION_PRUNE_AFTER_MS;
	}
}
function resolveRotateBytes(maintenance) {
	const raw = maintenance?.rotateBytes;
	if (raw === void 0 || raw === null || raw === "") return DEFAULT_SESSION_ROTATE_BYTES;
	try {
		return parseByteSize(String(raw).trim(), { defaultUnit: "b" });
	} catch {
		return DEFAULT_SESSION_ROTATE_BYTES;
	}
}
function resolveResetArchiveRetentionMs(maintenance, pruneAfterMs) {
	const raw = maintenance?.resetArchiveRetention;
	if (raw === false) return null;
	if (raw === void 0 || raw === null || raw === "") return pruneAfterMs;
	try {
		return parseDurationMs(String(raw).trim(), { defaultUnit: "d" });
	} catch {
		return pruneAfterMs;
	}
}
function resolveMaxDiskBytes(maintenance) {
	const raw = maintenance?.maxDiskBytes;
	if (raw === void 0 || raw === null || raw === "") return null;
	try {
		return parseByteSize(String(raw).trim(), { defaultUnit: "b" });
	} catch {
		return null;
	}
}
function resolveHighWaterBytes(maintenance, maxDiskBytes) {
	const computeDefault = () => {
		if (maxDiskBytes == null) return null;
		if (maxDiskBytes <= 0) return 0;
		return Math.max(1, Math.min(maxDiskBytes, Math.floor(maxDiskBytes * DEFAULT_SESSION_DISK_BUDGET_HIGH_WATER_RATIO)));
	};
	if (maxDiskBytes == null) return null;
	const raw = maintenance?.highWaterBytes;
	if (raw === void 0 || raw === null || raw === "") return computeDefault();
	try {
		const parsed = parseByteSize(String(raw).trim(), { defaultUnit: "b" });
		return Math.min(parsed, maxDiskBytes);
	} catch {
		return computeDefault();
	}
}
/**
* Resolve maintenance settings from openclaw.json (`session.maintenance`).
* Falls back to built-in defaults when config is missing or unset.
*/
function resolveMaintenanceConfig() {
	let maintenance;
	try {
		maintenance = loadConfig().session?.maintenance;
	} catch {}
	const pruneAfterMs = resolvePruneAfterMs(maintenance);
	const maxDiskBytes = resolveMaxDiskBytes(maintenance);
	return {
		mode: maintenance?.mode ?? DEFAULT_SESSION_MAINTENANCE_MODE,
		pruneAfterMs,
		maxEntries: maintenance?.maxEntries ?? DEFAULT_SESSION_MAX_ENTRIES,
		rotateBytes: resolveRotateBytes(maintenance),
		resetArchiveRetentionMs: resolveResetArchiveRetentionMs(maintenance, pruneAfterMs),
		maxDiskBytes,
		highWaterBytes: resolveHighWaterBytes(maintenance, maxDiskBytes)
	};
}
/**
* Remove entries whose `updatedAt` is older than the configured threshold.
* Entries without `updatedAt` are kept (cannot determine staleness).
* Mutates `store` in-place.
*/
function pruneStaleEntries(store, overrideMaxAgeMs, opts = {}) {
	const maxAgeMs = overrideMaxAgeMs ?? resolveMaintenanceConfig().pruneAfterMs;
	const cutoffMs = Date.now() - maxAgeMs;
	let pruned = 0;
	for (const [key, entry] of Object.entries(store)) if (entry?.updatedAt != null && entry.updatedAt < cutoffMs) {
		opts.onPruned?.({
			key,
			entry
		});
		delete store[key];
		pruned++;
	}
	if (pruned > 0 && opts.log !== false) log$1.info("pruned stale session entries", {
		pruned,
		maxAgeMs
	});
	return pruned;
}
function getEntryUpdatedAt(entry) {
	return entry?.updatedAt ?? Number.NEGATIVE_INFINITY;
}
function getActiveSessionMaintenanceWarning(params) {
	const activeSessionKey = params.activeSessionKey.trim();
	if (!activeSessionKey) return null;
	const activeEntry = params.store[activeSessionKey];
	if (!activeEntry) return null;
	const cutoffMs = (params.nowMs ?? Date.now()) - params.pruneAfterMs;
	const wouldPrune = activeEntry.updatedAt != null ? activeEntry.updatedAt < cutoffMs : false;
	const keys = Object.keys(params.store);
	const wouldCap = keys.length > params.maxEntries && keys.toSorted((a, b) => getEntryUpdatedAt(params.store[b]) - getEntryUpdatedAt(params.store[a])).slice(params.maxEntries).includes(activeSessionKey);
	if (!wouldPrune && !wouldCap) return null;
	return {
		activeSessionKey,
		activeUpdatedAt: activeEntry.updatedAt,
		totalEntries: keys.length,
		pruneAfterMs: params.pruneAfterMs,
		maxEntries: params.maxEntries,
		wouldPrune,
		wouldCap
	};
}
/**
* Cap the store to the N most recently updated entries.
* Entries without `updatedAt` are sorted last (removed first when over limit).
* Mutates `store` in-place.
*/
function capEntryCount(store, overrideMax, opts = {}) {
	const maxEntries = overrideMax ?? resolveMaintenanceConfig().maxEntries;
	const keys = Object.keys(store);
	if (keys.length <= maxEntries) return 0;
	const toRemove = keys.toSorted((a, b) => {
		const aTime = getEntryUpdatedAt(store[a]);
		return getEntryUpdatedAt(store[b]) - aTime;
	}).slice(maxEntries);
	for (const key of toRemove) {
		const entry = store[key];
		if (entry) opts.onCapped?.({
			key,
			entry
		});
		delete store[key];
	}
	if (opts.log !== false) log$1.info("capped session entry count", {
		removed: toRemove.length,
		maxEntries
	});
	return toRemove.length;
}
async function getSessionFileSize(storePath) {
	try {
		return (await fs.promises.stat(storePath)).size;
	} catch {
		return null;
	}
}
/**
* Rotate the sessions file if it exceeds the configured size threshold.
* Renames the current file to `sessions.json.bak.{timestamp}` and cleans up
* old rotation backups, keeping only the 3 most recent `.bak.*` files.
*/
async function rotateSessionFile(storePath, overrideBytes) {
	const maxBytes = overrideBytes ?? resolveMaintenanceConfig().rotateBytes;
	const fileSize = await getSessionFileSize(storePath);
	if (fileSize == null) return false;
	if (fileSize <= maxBytes) return false;
	const backupPath = `${storePath}.bak.${Date.now()}`;
	try {
		await fs.promises.rename(storePath, backupPath);
		log$1.info("rotated session store file", {
			backupPath: path.basename(backupPath),
			sizeBytes: fileSize
		});
	} catch {
		return false;
	}
	try {
		const dir = path.dirname(storePath);
		const baseName = path.basename(storePath);
		const backups = (await fs.promises.readdir(dir)).filter((f) => f.startsWith(`${baseName}.bak.`)).toSorted().toReversed();
		const maxBackups = 3;
		if (backups.length > maxBackups) {
			const toDelete = backups.slice(maxBackups);
			for (const old of toDelete) await fs.promises.unlink(path.join(dir, old)).catch(() => void 0);
			log$1.info("cleaned up old session store backups", { deleted: toDelete.length });
		}
	} catch {}
	return true;
}
//#endregion
//#region src/config/sessions/store-migrations.ts
function applySessionStoreMigrations(store) {
	for (const entry of Object.values(store)) {
		if (!entry || typeof entry !== "object") continue;
		const rec = entry;
		if (typeof rec.channel !== "string" && typeof rec.provider === "string") {
			rec.channel = rec.provider;
			delete rec.provider;
		}
		if (typeof rec.lastChannel !== "string" && typeof rec.lastProvider === "string") {
			rec.lastChannel = rec.lastProvider;
			delete rec.lastProvider;
		}
		if (typeof rec.groupChannel !== "string" && typeof rec.room === "string") {
			rec.groupChannel = rec.room;
			delete rec.room;
		} else if ("room" in rec) delete rec.room;
	}
}
//#endregion
//#region src/config/sessions/store.ts
const log = createSubsystemLogger("sessions/store");
function isSessionStoreRecord(value) {
	return !!value && typeof value === "object" && !Array.isArray(value);
}
function normalizeSessionEntryDelivery(entry) {
	const normalized = normalizeSessionDeliveryFields({
		channel: entry.channel,
		lastChannel: entry.lastChannel,
		lastTo: entry.lastTo,
		lastAccountId: entry.lastAccountId,
		lastThreadId: entry.lastThreadId ?? entry.deliveryContext?.threadId ?? entry.origin?.threadId,
		deliveryContext: entry.deliveryContext
	});
	const nextDelivery = normalized.deliveryContext;
	const sameDelivery = (entry.deliveryContext?.channel ?? void 0) === nextDelivery?.channel && (entry.deliveryContext?.to ?? void 0) === nextDelivery?.to && (entry.deliveryContext?.accountId ?? void 0) === nextDelivery?.accountId && (entry.deliveryContext?.threadId ?? void 0) === nextDelivery?.threadId;
	const sameLast = entry.lastChannel === normalized.lastChannel && entry.lastTo === normalized.lastTo && entry.lastAccountId === normalized.lastAccountId && entry.lastThreadId === normalized.lastThreadId;
	if (sameDelivery && sameLast) return entry;
	return {
		...entry,
		deliveryContext: nextDelivery,
		lastChannel: normalized.lastChannel,
		lastTo: normalized.lastTo,
		lastAccountId: normalized.lastAccountId,
		lastThreadId: normalized.lastThreadId
	};
}
function removeThreadFromDeliveryContext(context) {
	if (!context || context.threadId == null) return context;
	const next = { ...context };
	delete next.threadId;
	return next;
}
function normalizeStoreSessionKey(sessionKey) {
	return sessionKey.trim().toLowerCase();
}
function resolveSessionStoreEntry(params) {
	const trimmedKey = params.sessionKey.trim();
	const normalizedKey = normalizeStoreSessionKey(trimmedKey);
	const legacyKeySet = /* @__PURE__ */ new Set();
	if (trimmedKey !== normalizedKey && Object.prototype.hasOwnProperty.call(params.store, trimmedKey)) legacyKeySet.add(trimmedKey);
	let existing = params.store[normalizedKey] ?? (legacyKeySet.size > 0 ? params.store[trimmedKey] : void 0);
	let existingUpdatedAt = existing?.updatedAt ?? 0;
	for (const [candidateKey, candidateEntry] of Object.entries(params.store)) {
		if (candidateKey === normalizedKey) continue;
		if (candidateKey.toLowerCase() !== normalizedKey) continue;
		legacyKeySet.add(candidateKey);
		const candidateUpdatedAt = candidateEntry?.updatedAt ?? 0;
		if (!existing || candidateUpdatedAt > existingUpdatedAt) {
			existing = candidateEntry;
			existingUpdatedAt = candidateUpdatedAt;
		}
	}
	return {
		normalizedKey,
		existing,
		legacyKeys: [...legacyKeySet]
	};
}
function normalizeSessionStore(store) {
	for (const [key, entry] of Object.entries(store)) {
		if (!entry) continue;
		const normalized = normalizeSessionEntryDelivery(normalizeSessionRuntimeModelFields(entry));
		if (normalized !== entry) store[key] = normalized;
	}
}
function loadSessionStore(storePath, opts = {}) {
	if (!opts.skipCache && isSessionStoreCacheEnabled()) {
		const currentFileStat = getFileStatSnapshot(storePath);
		const cached = readSessionStoreCache({
			storePath,
			mtimeMs: currentFileStat?.mtimeMs,
			sizeBytes: currentFileStat?.sizeBytes
		});
		if (cached) return cached;
	}
	let store = {};
	let fileStat = getFileStatSnapshot(storePath);
	let mtimeMs = fileStat?.mtimeMs;
	let serializedFromDisk;
	const maxReadAttempts = process.platform === "win32" ? 3 : 1;
	const retryBuf = maxReadAttempts > 1 ? new Int32Array(new SharedArrayBuffer(4)) : void 0;
	for (let attempt = 0; attempt < maxReadAttempts; attempt++) try {
		const raw = fs.readFileSync(storePath, "utf-8");
		if (raw.length === 0 && attempt < maxReadAttempts - 1) {
			Atomics.wait(retryBuf, 0, 0, 50);
			continue;
		}
		const parsed = JSON.parse(raw);
		if (isSessionStoreRecord(parsed)) {
			store = parsed;
			serializedFromDisk = raw;
		}
		fileStat = getFileStatSnapshot(storePath) ?? fileStat;
		mtimeMs = fileStat?.mtimeMs;
		break;
	} catch {
		if (attempt < maxReadAttempts - 1) {
			Atomics.wait(retryBuf, 0, 0, 50);
			continue;
		}
	}
	if (serializedFromDisk !== void 0) setSerializedSessionStore(storePath, serializedFromDisk);
	else setSerializedSessionStore(storePath, void 0);
	applySessionStoreMigrations(store);
	if (!opts.skipCache && isSessionStoreCacheEnabled()) writeSessionStoreCache({
		storePath,
		store,
		mtimeMs,
		sizeBytes: fileStat?.sizeBytes,
		serialized: serializedFromDisk
	});
	return structuredClone(store);
}
function readSessionUpdatedAt(params) {
	try {
		return resolveSessionStoreEntry({
			store: loadSessionStore(params.storePath),
			sessionKey: params.sessionKey
		}).existing?.updatedAt;
	} catch {
		return;
	}
}
function updateSessionStoreWriteCaches(params) {
	const fileStat = getFileStatSnapshot(params.storePath);
	setSerializedSessionStore(params.storePath, params.serialized);
	if (!isSessionStoreCacheEnabled()) {
		dropSessionStoreObjectCache(params.storePath);
		return;
	}
	writeSessionStoreCache({
		storePath: params.storePath,
		store: params.store,
		mtimeMs: fileStat?.mtimeMs,
		sizeBytes: fileStat?.sizeBytes,
		serialized: params.serialized
	});
}
function resolveMutableSessionStoreKey(store, sessionKey) {
	const trimmed = sessionKey.trim();
	if (!trimmed) return;
	if (Object.prototype.hasOwnProperty.call(store, trimmed)) return trimmed;
	const normalized = normalizeStoreSessionKey(trimmed);
	if (Object.prototype.hasOwnProperty.call(store, normalized)) return normalized;
	return Object.keys(store).find((key) => normalizeStoreSessionKey(key) === normalized);
}
function collectAcpMetadataSnapshot(store) {
	const snapshot = /* @__PURE__ */ new Map();
	for (const [sessionKey, entry] of Object.entries(store)) if (entry?.acp) snapshot.set(sessionKey, entry.acp);
	return snapshot;
}
function preserveExistingAcpMetadata(params) {
	const allowDrop = new Set((params.allowDropSessionKeys ?? []).map((key) => normalizeStoreSessionKey(key)));
	for (const [previousKey, previousAcp] of params.previousAcpByKey.entries()) {
		const normalizedKey = normalizeStoreSessionKey(previousKey);
		if (allowDrop.has(normalizedKey)) continue;
		const nextKey = resolveMutableSessionStoreKey(params.nextStore, previousKey);
		if (!nextKey) continue;
		const nextEntry = params.nextStore[nextKey];
		if (!nextEntry || nextEntry.acp) continue;
		params.nextStore[nextKey] = {
			...nextEntry,
			acp: previousAcp
		};
	}
}
async function saveSessionStoreUnlocked(storePath, store, opts) {
	normalizeSessionStore(store);
	if (!opts?.skipMaintenance) {
		const maintenance = {
			...resolveMaintenanceConfig(),
			...opts?.maintenanceOverride
		};
		const shouldWarnOnly = maintenance.mode === "warn";
		const beforeCount = Object.keys(store).length;
		if (shouldWarnOnly) {
			const activeSessionKey = opts?.activeSessionKey?.trim();
			if (activeSessionKey) {
				const warning = getActiveSessionMaintenanceWarning({
					store,
					activeSessionKey,
					pruneAfterMs: maintenance.pruneAfterMs,
					maxEntries: maintenance.maxEntries
				});
				if (warning) {
					log.warn("session maintenance would evict active session; skipping enforcement", {
						activeSessionKey: warning.activeSessionKey,
						wouldPrune: warning.wouldPrune,
						wouldCap: warning.wouldCap,
						pruneAfterMs: warning.pruneAfterMs,
						maxEntries: warning.maxEntries
					});
					await opts?.onWarn?.(warning);
				}
			}
			const diskBudget = await enforceSessionDiskBudget({
				store,
				storePath,
				activeSessionKey: opts?.activeSessionKey,
				maintenance,
				warnOnly: true,
				log
			});
			await opts?.onMaintenanceApplied?.({
				mode: maintenance.mode,
				beforeCount,
				afterCount: Object.keys(store).length,
				pruned: 0,
				capped: 0,
				diskBudget
			});
		} else {
			const removedSessionFiles = /* @__PURE__ */ new Map();
			const pruned = pruneStaleEntries(store, maintenance.pruneAfterMs, { onPruned: ({ entry }) => {
				rememberRemovedSessionFile(removedSessionFiles, entry);
			} });
			const capped = capEntryCount(store, maintenance.maxEntries, { onCapped: ({ entry }) => {
				rememberRemovedSessionFile(removedSessionFiles, entry);
			} });
			const archivedDirs = /* @__PURE__ */ new Set();
			const archivedForDeletedSessions = archiveRemovedSessionTranscripts({
				removedSessionFiles,
				referencedSessionIds: new Set(Object.values(store).map((entry) => entry?.sessionId).filter((id) => Boolean(id))),
				storePath,
				reason: "deleted",
				restrictToStoreDir: true
			});
			for (const archivedDir of archivedForDeletedSessions) archivedDirs.add(archivedDir);
			if (archivedDirs.size > 0 || maintenance.resetArchiveRetentionMs != null) {
				const targetDirs = archivedDirs.size > 0 ? [...archivedDirs] : [path.dirname(path.resolve(storePath))];
				await cleanupArchivedSessionTranscripts({
					directories: targetDirs,
					olderThanMs: maintenance.pruneAfterMs,
					reason: "deleted"
				});
				if (maintenance.resetArchiveRetentionMs != null) await cleanupArchivedSessionTranscripts({
					directories: targetDirs,
					olderThanMs: maintenance.resetArchiveRetentionMs,
					reason: "reset"
				});
			}
			await rotateSessionFile(storePath, maintenance.rotateBytes);
			const diskBudget = await enforceSessionDiskBudget({
				store,
				storePath,
				activeSessionKey: opts?.activeSessionKey,
				maintenance,
				warnOnly: false,
				log
			});
			await opts?.onMaintenanceApplied?.({
				mode: maintenance.mode,
				beforeCount,
				afterCount: Object.keys(store).length,
				pruned,
				capped,
				diskBudget
			});
		}
	}
	await fs.promises.mkdir(path.dirname(storePath), { recursive: true });
	const json = JSON.stringify(store, null, 2);
	if (getSerializedSessionStore(storePath) === json) {
		updateSessionStoreWriteCaches({
			storePath,
			store,
			serialized: json
		});
		return;
	}
	if (process.platform === "win32") {
		for (let i = 0; i < 5; i++) try {
			await writeSessionStoreAtomic({
				storePath,
				store,
				serialized: json
			});
			return;
		} catch (err) {
			if (getErrorCode(err) === "ENOENT") return;
			if (i < 4) {
				await new Promise((r) => setTimeout(r, 50 * (i + 1)));
				continue;
			}
			log.warn(`atomic write failed after 5 attempts: ${storePath}`);
		}
		return;
	}
	try {
		await writeSessionStoreAtomic({
			storePath,
			store,
			serialized: json
		});
	} catch (err) {
		if (getErrorCode(err) === "ENOENT") {
			try {
				await writeSessionStoreAtomic({
					storePath,
					store,
					serialized: json
				});
			} catch (err2) {
				if (getErrorCode(err2) === "ENOENT") return;
				throw err2;
			}
			return;
		}
		throw err;
	}
}
async function saveSessionStore(storePath, store, opts) {
	await withSessionStoreLock(storePath, async () => {
		await saveSessionStoreUnlocked(storePath, store, opts);
	});
}
async function updateSessionStore(storePath, mutator, opts) {
	return await withSessionStoreLock(storePath, async () => {
		const store = loadSessionStore(storePath, { skipCache: true });
		const previousAcpByKey = collectAcpMetadataSnapshot(store);
		const result = await mutator(store);
		preserveExistingAcpMetadata({
			previousAcpByKey,
			nextStore: store,
			allowDropSessionKeys: opts?.allowDropAcpMetaSessionKeys
		});
		await saveSessionStoreUnlocked(storePath, store, opts);
		return result;
	});
}
const LOCK_QUEUES = /* @__PURE__ */ new Map();
function getErrorCode(error) {
	if (!error || typeof error !== "object" || !("code" in error)) return null;
	return String(error.code);
}
function rememberRemovedSessionFile(removedSessionFiles, entry) {
	if (!removedSessionFiles.has(entry.sessionId) || entry.sessionFile) removedSessionFiles.set(entry.sessionId, entry.sessionFile);
}
function archiveRemovedSessionTranscripts(params) {
	const archivedDirs = /* @__PURE__ */ new Set();
	for (const [sessionId, sessionFile] of params.removedSessionFiles) {
		if (params.referencedSessionIds.has(sessionId)) continue;
		const archived = archiveSessionTranscripts({
			sessionId,
			storePath: params.storePath,
			sessionFile,
			reason: params.reason,
			restrictToStoreDir: params.restrictToStoreDir
		});
		for (const archivedPath of archived) archivedDirs.add(path.dirname(archivedPath));
	}
	return archivedDirs;
}
async function writeSessionStoreAtomic(params) {
	await writeTextAtomic(params.storePath, params.serialized, { mode: 384 });
	updateSessionStoreWriteCaches({
		storePath: params.storePath,
		store: params.store,
		serialized: params.serialized
	});
}
async function persistResolvedSessionEntry(params) {
	params.store[params.resolved.normalizedKey] = params.next;
	for (const legacyKey of params.resolved.legacyKeys) delete params.store[legacyKey];
	await saveSessionStoreUnlocked(params.storePath, params.store, { activeSessionKey: params.resolved.normalizedKey });
	return params.next;
}
function lockTimeoutError(storePath) {
	return /* @__PURE__ */ new Error(`timeout waiting for session store lock: ${storePath}`);
}
function getOrCreateLockQueue(storePath) {
	const existing = LOCK_QUEUES.get(storePath);
	if (existing) return existing;
	const created = {
		running: false,
		pending: []
	};
	LOCK_QUEUES.set(storePath, created);
	return created;
}
async function drainSessionStoreLockQueue(storePath) {
	const queue = LOCK_QUEUES.get(storePath);
	if (!queue || queue.running) return;
	queue.running = true;
	try {
		while (queue.pending.length > 0) {
			const task = queue.pending.shift();
			if (!task) continue;
			const remainingTimeoutMs = task.timeoutMs ?? Number.POSITIVE_INFINITY;
			if (task.timeoutMs != null && remainingTimeoutMs <= 0) {
				task.reject(lockTimeoutError(storePath));
				continue;
			}
			let lock;
			let result;
			let failed;
			let hasFailure = false;
			try {
				lock = await acquireSessionWriteLock({
					sessionFile: storePath,
					timeoutMs: remainingTimeoutMs,
					staleMs: task.staleMs
				});
				result = await task.fn();
			} catch (err) {
				hasFailure = true;
				failed = err;
			} finally {
				await lock?.release().catch(() => void 0);
			}
			if (hasFailure) {
				task.reject(failed);
				continue;
			}
			task.resolve(result);
		}
	} finally {
		queue.running = false;
		if (queue.pending.length === 0) LOCK_QUEUES.delete(storePath);
		else queueMicrotask(() => {
			drainSessionStoreLockQueue(storePath);
		});
	}
}
async function withSessionStoreLock(storePath, fn, opts = {}) {
	if (!storePath || typeof storePath !== "string") throw new Error(`withSessionStoreLock: storePath must be a non-empty string, got ${JSON.stringify(storePath)}`);
	const timeoutMs = opts.timeoutMs ?? 1e4;
	const staleMs = opts.staleMs ?? 3e4;
	opts.pollIntervalMs;
	const hasTimeout = timeoutMs > 0 && Number.isFinite(timeoutMs);
	const queue = getOrCreateLockQueue(storePath);
	return await new Promise((resolve, reject) => {
		const task = {
			fn: async () => await fn(),
			resolve: (value) => resolve(value),
			reject,
			timeoutMs: hasTimeout ? timeoutMs : void 0,
			staleMs
		};
		queue.pending.push(task);
		drainSessionStoreLockQueue(storePath);
	});
}
async function updateSessionStoreEntry(params) {
	const { storePath, sessionKey, update } = params;
	return await withSessionStoreLock(storePath, async () => {
		const store = loadSessionStore(storePath, { skipCache: true });
		const resolved = resolveSessionStoreEntry({
			store,
			sessionKey
		});
		const existing = resolved.existing;
		if (!existing) return null;
		const patch = await update(existing);
		if (!patch) return existing;
		return await persistResolvedSessionEntry({
			storePath,
			store,
			resolved,
			next: mergeSessionEntry(existing, patch)
		});
	});
}
async function recordSessionMetaFromInbound(params) {
	const { storePath, sessionKey, ctx } = params;
	const createIfMissing = params.createIfMissing ?? true;
	return await updateSessionStore(storePath, (store) => {
		const resolved = resolveSessionStoreEntry({
			store,
			sessionKey
		});
		const existing = resolved.existing;
		const patch = deriveSessionMetaPatch({
			ctx,
			sessionKey: resolved.normalizedKey,
			existing,
			groupResolution: params.groupResolution
		});
		if (!patch) {
			if (existing && resolved.legacyKeys.length > 0) {
				store[resolved.normalizedKey] = existing;
				for (const legacyKey of resolved.legacyKeys) delete store[legacyKey];
			}
			return existing ?? null;
		}
		if (!existing && !createIfMissing) return null;
		const next = existing ? mergeSessionEntryPreserveActivity(existing, patch) : mergeSessionEntry(existing, patch);
		store[resolved.normalizedKey] = next;
		for (const legacyKey of resolved.legacyKeys) delete store[legacyKey];
		return next;
	}, { activeSessionKey: normalizeStoreSessionKey(sessionKey) });
}
async function updateLastRoute(params) {
	const { storePath, sessionKey, channel, to, accountId, threadId, ctx } = params;
	return await withSessionStoreLock(storePath, async () => {
		const store = loadSessionStore(storePath);
		const resolved = resolveSessionStoreEntry({
			store,
			sessionKey
		});
		const existing = resolved.existing;
		const now = Date.now();
		const explicitContext = normalizeDeliveryContext(params.deliveryContext);
		const inlineContext = normalizeDeliveryContext({
			channel,
			to,
			accountId,
			threadId
		});
		const mergedInput = mergeDeliveryContext(explicitContext, inlineContext);
		const explicitDeliveryContext = params.deliveryContext;
		const explicitThreadValue = (explicitDeliveryContext != null && Object.prototype.hasOwnProperty.call(explicitDeliveryContext, "threadId") ? explicitDeliveryContext.threadId : void 0) ?? (threadId != null && threadId !== "" ? threadId : void 0);
		const merged = mergeDeliveryContext(mergedInput, Boolean(explicitContext?.channel || explicitContext?.to || inlineContext?.channel || inlineContext?.to) && explicitThreadValue == null ? removeThreadFromDeliveryContext(deliveryContextFromSession(existing)) : deliveryContextFromSession(existing));
		const normalized = normalizeSessionDeliveryFields({ deliveryContext: {
			channel: merged?.channel,
			to: merged?.to,
			accountId: merged?.accountId,
			threadId: merged?.threadId
		} });
		const metaPatch = ctx ? deriveSessionMetaPatch({
			ctx,
			sessionKey: resolved.normalizedKey,
			existing,
			groupResolution: params.groupResolution
		}) : null;
		const basePatch = {
			updatedAt: Math.max(existing?.updatedAt ?? 0, now),
			deliveryContext: normalized.deliveryContext,
			lastChannel: normalized.lastChannel,
			lastTo: normalized.lastTo,
			lastAccountId: normalized.lastAccountId,
			lastThreadId: normalized.lastThreadId
		};
		return await persistResolvedSessionEntry({
			storePath,
			store,
			resolved,
			next: mergeSessionEntry(existing, metaPatch ? {
				...basePatch,
				...metaPatch
			} : basePatch)
		});
	});
}
//#endregion
//#region src/sessions/transcript-events.ts
const SESSION_TRANSCRIPT_LISTENERS = /* @__PURE__ */ new Set();
function onSessionTranscriptUpdate(listener) {
	SESSION_TRANSCRIPT_LISTENERS.add(listener);
	return () => {
		SESSION_TRANSCRIPT_LISTENERS.delete(listener);
	};
}
function emitSessionTranscriptUpdate(update) {
	const normalized = typeof update === "string" ? { sessionFile: update } : {
		sessionFile: update.sessionFile,
		sessionKey: update.sessionKey,
		message: update.message,
		messageId: update.messageId
	};
	const trimmed = normalized.sessionFile.trim();
	if (!trimmed) return;
	const nextUpdate = {
		sessionFile: trimmed,
		...typeof normalized.sessionKey === "string" && normalized.sessionKey.trim() ? { sessionKey: normalized.sessionKey.trim() } : {},
		...normalized.message !== void 0 ? { message: normalized.message } : {},
		...typeof normalized.messageId === "string" && normalized.messageId.trim() ? { messageId: normalized.messageId.trim() } : {}
	};
	for (const listener of SESSION_TRANSCRIPT_LISTENERS) try {
		listener(nextUpdate);
	} catch {}
}
//#endregion
//#region src/config/sessions/delivery-info.ts
/**
* Extract deliveryContext and threadId from a sessionKey.
* Supports both :thread: (most channels) and :topic: (Telegram).
*/
function parseSessionThreadInfo(sessionKey) {
	if (!sessionKey) return {
		baseSessionKey: void 0,
		threadId: void 0
	};
	const topicIndex = sessionKey.lastIndexOf(":topic:");
	const threadIndex = sessionKey.lastIndexOf(":thread:");
	const markerIndex = Math.max(topicIndex, threadIndex);
	const marker = topicIndex > threadIndex ? ":topic:" : ":thread:";
	return {
		baseSessionKey: markerIndex === -1 ? sessionKey : sessionKey.slice(0, markerIndex),
		threadId: (markerIndex === -1 ? void 0 : sessionKey.slice(markerIndex + marker.length))?.trim() || void 0
	};
}
function extractDeliveryInfo(sessionKey) {
	const { baseSessionKey, threadId } = parseSessionThreadInfo(sessionKey);
	if (!sessionKey || !baseSessionKey) return {
		deliveryContext: void 0,
		threadId
	};
	let deliveryContext;
	try {
		const store = loadSessionStore(resolveStorePath(loadConfig().session?.store));
		let entry = store[sessionKey];
		if (!entry?.deliveryContext && baseSessionKey !== sessionKey) entry = store[baseSessionKey];
		if (entry?.deliveryContext) deliveryContext = {
			channel: entry.deliveryContext.channel,
			to: entry.deliveryContext.to,
			accountId: entry.deliveryContext.accountId
		};
	} catch {}
	return {
		deliveryContext,
		threadId
	};
}
//#endregion
//#region src/config/sessions/session-file.ts
async function resolveAndPersistSessionFile(params) {
	const { sessionId, sessionKey, sessionStore, storePath } = params;
	const baseEntry = params.sessionEntry ?? sessionStore[sessionKey] ?? {
		sessionId,
		updatedAt: Date.now()
	};
	const fallbackSessionFile = params.fallbackSessionFile?.trim();
	const sessionFile = resolveSessionFilePath(sessionId, !baseEntry.sessionFile && fallbackSessionFile ? {
		...baseEntry,
		sessionFile: fallbackSessionFile
	} : baseEntry, {
		agentId: params.agentId,
		sessionsDir: params.sessionsDir
	});
	const persistedEntry = {
		...baseEntry,
		sessionId,
		updatedAt: Date.now(),
		sessionFile
	};
	if (baseEntry.sessionId !== sessionId || baseEntry.sessionFile !== sessionFile) {
		sessionStore[sessionKey] = persistedEntry;
		await updateSessionStore(storePath, (store) => {
			store[sessionKey] = {
				...store[sessionKey],
				...persistedEntry
			};
		}, params.activeSessionKey ? { activeSessionKey: params.activeSessionKey } : void 0);
		return {
			sessionFile,
			sessionEntry: persistedEntry
		};
	}
	sessionStore[sessionKey] = persistedEntry;
	return {
		sessionFile,
		sessionEntry: persistedEntry
	};
}
//#endregion
//#region src/config/sessions/transcript.ts
function stripQuery(value) {
	const noHash = value.split("#")[0] ?? value;
	return noHash.split("?")[0] ?? noHash;
}
function extractFileNameFromMediaUrl(value) {
	const trimmed = value.trim();
	if (!trimmed) return null;
	const cleaned = stripQuery(trimmed);
	try {
		const parsed = new URL(cleaned);
		const base = path.basename(parsed.pathname);
		if (!base) return null;
		try {
			return decodeURIComponent(base);
		} catch {
			return base;
		}
	} catch {
		const base = path.basename(cleaned);
		if (!base || base === "/" || base === ".") return null;
		return base;
	}
}
function resolveMirroredTranscriptText(params) {
	const mediaUrls = params.mediaUrls?.filter((url) => url && url.trim()) ?? [];
	if (mediaUrls.length > 0) {
		const names = mediaUrls.map((url) => extractFileNameFromMediaUrl(url)).filter((name) => Boolean(name && name.trim()));
		if (names.length > 0) return names.join(", ");
		return "media";
	}
	const trimmed = (params.text ?? "").trim();
	return trimmed ? trimmed : null;
}
async function ensureSessionHeader(params) {
	if (fs.existsSync(params.sessionFile)) return;
	await fs.promises.mkdir(path.dirname(params.sessionFile), { recursive: true });
	const header = {
		type: "session",
		version: CURRENT_SESSION_VERSION,
		id: params.sessionId,
		timestamp: (/* @__PURE__ */ new Date()).toISOString(),
		cwd: process.cwd()
	};
	await fs.promises.writeFile(params.sessionFile, `${JSON.stringify(header)}\n`, {
		encoding: "utf-8",
		mode: 384
	});
}
async function resolveSessionTranscriptFile(params) {
	const sessionPathOpts = resolveSessionFilePathOptions({
		agentId: params.agentId,
		storePath: params.storePath
	});
	let sessionFile = resolveSessionFilePath(params.sessionId, params.sessionEntry, sessionPathOpts);
	let sessionEntry = params.sessionEntry;
	if (params.sessionStore && params.storePath) {
		const threadIdFromSessionKey = parseSessionThreadInfo(params.sessionKey).threadId;
		const fallbackSessionFile = !sessionEntry?.sessionFile ? resolveSessionTranscriptPath(params.sessionId, params.agentId, params.threadId ?? threadIdFromSessionKey) : void 0;
		const resolvedSessionFile = await resolveAndPersistSessionFile({
			sessionId: params.sessionId,
			sessionKey: params.sessionKey,
			sessionStore: params.sessionStore,
			storePath: params.storePath,
			sessionEntry,
			agentId: sessionPathOpts?.agentId,
			sessionsDir: sessionPathOpts?.sessionsDir,
			fallbackSessionFile
		});
		sessionFile = resolvedSessionFile.sessionFile;
		sessionEntry = resolvedSessionFile.sessionEntry;
	}
	return {
		sessionFile,
		sessionEntry
	};
}
async function appendAssistantMessageToSessionTranscript(params) {
	const sessionKey = params.sessionKey.trim();
	if (!sessionKey) return {
		ok: false,
		reason: "missing sessionKey"
	};
	const mirrorText = resolveMirroredTranscriptText({
		text: params.text,
		mediaUrls: params.mediaUrls
	});
	if (!mirrorText) return {
		ok: false,
		reason: "empty text"
	};
	const storePath = params.storePath ?? resolveDefaultSessionStorePath(params.agentId);
	const store = loadSessionStore(storePath, { skipCache: true });
	const entry = store[normalizeStoreSessionKey(sessionKey)] ?? store[sessionKey];
	if (!entry?.sessionId) return {
		ok: false,
		reason: `unknown sessionKey: ${sessionKey}`
	};
	let sessionFile;
	try {
		sessionFile = (await resolveAndPersistSessionFile({
			sessionId: entry.sessionId,
			sessionKey,
			sessionStore: store,
			storePath,
			sessionEntry: entry,
			agentId: params.agentId,
			sessionsDir: path.dirname(storePath)
		})).sessionFile;
	} catch (err) {
		return {
			ok: false,
			reason: err instanceof Error ? err.message : String(err)
		};
	}
	await ensureSessionHeader({
		sessionFile,
		sessionId: entry.sessionId
	});
	const existingMessageId = params.idempotencyKey ? await transcriptHasIdempotencyKey(sessionFile, params.idempotencyKey) : void 0;
	if (existingMessageId) return {
		ok: true,
		sessionFile,
		messageId: existingMessageId
	};
	const message = {
		role: "assistant",
		content: [{
			type: "text",
			text: mirrorText
		}],
		api: "openai-responses",
		provider: "openclaw",
		model: "delivery-mirror",
		usage: {
			input: 0,
			output: 0,
			cacheRead: 0,
			cacheWrite: 0,
			totalTokens: 0,
			cost: {
				input: 0,
				output: 0,
				cacheRead: 0,
				cacheWrite: 0,
				total: 0
			}
		},
		stopReason: "stop",
		timestamp: Date.now(),
		...params.idempotencyKey ? { idempotencyKey: params.idempotencyKey } : {}
	};
	const messageId = SessionManager.open(sessionFile).appendMessage(message);
	emitSessionTranscriptUpdate({
		sessionFile,
		sessionKey,
		message,
		messageId
	});
	return {
		ok: true,
		sessionFile,
		messageId
	};
}
async function transcriptHasIdempotencyKey(transcriptPath, idempotencyKey) {
	try {
		const raw = await fs.promises.readFile(transcriptPath, "utf-8");
		for (const line of raw.split(/\r?\n/)) {
			if (!line.trim()) continue;
			try {
				const parsed = JSON.parse(line);
				if (parsed.message?.idempotencyKey === idempotencyKey && typeof parsed.id === "string" && parsed.id) return parsed.id;
			} catch {
				continue;
			}
		}
	} catch {
		return;
	}
}
//#endregion
//#region src/agents/session-dirs.ts
function mapAgentSessionDirs(agentsDir, entries) {
	return entries.filter((entry) => entry.isDirectory()).map((entry) => path.join(agentsDir, entry.name, "sessions")).toSorted((a, b) => a.localeCompare(b));
}
async function resolveAgentSessionDirsFromAgentsDir(agentsDir) {
	let entries = [];
	try {
		entries = await fs$1.readdir(agentsDir, { withFileTypes: true });
	} catch (err) {
		if (err.code === "ENOENT") return [];
		throw err;
	}
	return mapAgentSessionDirs(agentsDir, entries);
}
function resolveAgentSessionDirsFromAgentsDirSync(agentsDir) {
	let entries = [];
	try {
		entries = fs.readdirSync(agentsDir, { withFileTypes: true });
	} catch (err) {
		if (err.code === "ENOENT") return [];
		throw err;
	}
	return mapAgentSessionDirs(agentsDir, entries);
}
async function resolveAgentSessionDirs(stateDir) {
	return await resolveAgentSessionDirsFromAgentsDir(path.join(stateDir, "agents"));
}
//#endregion
//#region src/config/sessions/targets.ts
const NON_FATAL_DISCOVERY_ERROR_CODES = new Set([
	"EACCES",
	"ELOOP",
	"ENOENT",
	"ENOTDIR",
	"EPERM",
	"ESTALE"
]);
function dedupeTargetsByStorePath(targets) {
	const deduped = /* @__PURE__ */ new Map();
	for (const target of targets) if (!deduped.has(target.storePath)) deduped.set(target.storePath, target);
	return [...deduped.values()];
}
function shouldSkipDiscoveryError(err) {
	const code = err?.code;
	return typeof code === "string" && NON_FATAL_DISCOVERY_ERROR_CODES.has(code);
}
function isWithinRoot(realPath, realRoot) {
	return realPath === realRoot || realPath.startsWith(`${realRoot}${path.sep}`);
}
function shouldSkipDiscoveredAgentDirName(dirName, agentId) {
	return agentId === "main" && dirName.trim().toLowerCase() !== "main";
}
function resolveValidatedDiscoveredStorePathSync(params) {
	const storePath = path.join(params.sessionsDir, "sessions.json");
	try {
		const stat = fs.lstatSync(storePath);
		if (stat.isSymbolicLink() || !stat.isFile()) return;
		const realStorePath = fs.realpathSync.native(storePath);
		return isWithinRoot(realStorePath, params.realAgentsRoot ?? fs.realpathSync.native(params.agentsRoot)) ? realStorePath : void 0;
	} catch (err) {
		if (shouldSkipDiscoveryError(err)) return;
		throw err;
	}
}
async function resolveValidatedDiscoveredStorePath(params) {
	const storePath = path.join(params.sessionsDir, "sessions.json");
	try {
		const stat = await fs$1.lstat(storePath);
		if (stat.isSymbolicLink() || !stat.isFile()) return;
		const realStorePath = await fs$1.realpath(storePath);
		return isWithinRoot(realStorePath, params.realAgentsRoot ?? await fs$1.realpath(params.agentsRoot)) ? realStorePath : void 0;
	} catch (err) {
		if (shouldSkipDiscoveryError(err)) return;
		throw err;
	}
}
function resolveSessionStoreDiscoveryState(cfg, env) {
	const configuredTargets = resolveSessionStoreTargets(cfg, { allAgents: true }, { env });
	const agentsRoots = /* @__PURE__ */ new Set();
	for (const target of configuredTargets) {
		const agentsDir = resolveAgentsDirFromSessionStorePath(target.storePath);
		if (agentsDir) agentsRoots.add(agentsDir);
	}
	agentsRoots.add(path.join(resolveStateDir(env), "agents"));
	return {
		configuredTargets,
		agentsRoots: [...agentsRoots]
	};
}
function toDiscoveredSessionStoreTarget(sessionsDir, storePath) {
	const dirName = path.basename(path.dirname(sessionsDir));
	const agentId = normalizeAgentId(dirName);
	if (shouldSkipDiscoveredAgentDirName(dirName, agentId)) return;
	return {
		agentId,
		storePath
	};
}
function resolveAllAgentSessionStoreTargetsSync(cfg, params = {}) {
	const { configuredTargets, agentsRoots } = resolveSessionStoreDiscoveryState(cfg, params.env ?? process.env);
	const realAgentsRoots = /* @__PURE__ */ new Map();
	const getRealAgentsRoot = (agentsRoot) => {
		const cached = realAgentsRoots.get(agentsRoot);
		if (cached !== void 0) return cached;
		try {
			const realAgentsRoot = fs.realpathSync.native(agentsRoot);
			realAgentsRoots.set(agentsRoot, realAgentsRoot);
			return realAgentsRoot;
		} catch (err) {
			if (shouldSkipDiscoveryError(err)) return;
			throw err;
		}
	};
	const validatedConfiguredTargets = configuredTargets.flatMap((target) => {
		const agentsRoot = resolveAgentsDirFromSessionStorePath(target.storePath);
		if (!agentsRoot) return [target];
		const realAgentsRoot = getRealAgentsRoot(agentsRoot);
		if (!realAgentsRoot) return [];
		const validatedStorePath = resolveValidatedDiscoveredStorePathSync({
			sessionsDir: path.dirname(target.storePath),
			agentsRoot,
			realAgentsRoot
		});
		return validatedStorePath ? [{
			...target,
			storePath: validatedStorePath
		}] : [];
	});
	const discoveredTargets = agentsRoots.flatMap((agentsDir) => {
		try {
			const realAgentsRoot = getRealAgentsRoot(agentsDir);
			if (!realAgentsRoot) return [];
			return resolveAgentSessionDirsFromAgentsDirSync(agentsDir).flatMap((sessionsDir) => {
				const validatedStorePath = resolveValidatedDiscoveredStorePathSync({
					sessionsDir,
					agentsRoot: agentsDir,
					realAgentsRoot
				});
				const target = validatedStorePath ? toDiscoveredSessionStoreTarget(sessionsDir, validatedStorePath) : void 0;
				return target ? [target] : [];
			});
		} catch (err) {
			if (shouldSkipDiscoveryError(err)) return [];
			throw err;
		}
	});
	return dedupeTargetsByStorePath([...validatedConfiguredTargets, ...discoveredTargets]);
}
async function resolveAllAgentSessionStoreTargets(cfg, params = {}) {
	const { configuredTargets, agentsRoots } = resolveSessionStoreDiscoveryState(cfg, params.env ?? process.env);
	const realAgentsRoots = /* @__PURE__ */ new Map();
	const getRealAgentsRoot = async (agentsRoot) => {
		const cached = realAgentsRoots.get(agentsRoot);
		if (cached !== void 0) return cached;
		try {
			const realAgentsRoot = await fs$1.realpath(agentsRoot);
			realAgentsRoots.set(agentsRoot, realAgentsRoot);
			return realAgentsRoot;
		} catch (err) {
			if (shouldSkipDiscoveryError(err)) return;
			throw err;
		}
	};
	const validatedConfiguredTargets = (await Promise.all(configuredTargets.map(async (target) => {
		const agentsRoot = resolveAgentsDirFromSessionStorePath(target.storePath);
		if (!agentsRoot) return target;
		const realAgentsRoot = await getRealAgentsRoot(agentsRoot);
		if (!realAgentsRoot) return;
		const validatedStorePath = await resolveValidatedDiscoveredStorePath({
			sessionsDir: path.dirname(target.storePath),
			agentsRoot,
			realAgentsRoot
		});
		return validatedStorePath ? {
			...target,
			storePath: validatedStorePath
		} : void 0;
	}))).filter((target) => Boolean(target));
	const discoveredTargets = (await Promise.all(agentsRoots.map(async (agentsDir) => {
		try {
			const realAgentsRoot = await getRealAgentsRoot(agentsDir);
			if (!realAgentsRoot) return [];
			const sessionsDirs = await resolveAgentSessionDirsFromAgentsDir(agentsDir);
			return (await Promise.all(sessionsDirs.map(async (sessionsDir) => {
				const validatedStorePath = await resolveValidatedDiscoveredStorePath({
					sessionsDir,
					agentsRoot: agentsDir,
					realAgentsRoot
				});
				return validatedStorePath ? toDiscoveredSessionStoreTarget(sessionsDir, validatedStorePath) : void 0;
			}))).filter((target) => Boolean(target));
		} catch (err) {
			if (shouldSkipDiscoveryError(err)) return [];
			throw err;
		}
	}))).flat();
	return dedupeTargetsByStorePath([...validatedConfiguredTargets, ...discoveredTargets]);
}
function resolveSessionStoreTargets(cfg, opts, params = {}) {
	const env = params.env ?? process.env;
	const defaultAgentId = resolveDefaultAgentId(cfg);
	const hasAgent = Boolean(opts.agent?.trim());
	const allAgents = opts.allAgents === true;
	if (hasAgent && allAgents) throw new Error("--agent and --all-agents cannot be used together");
	if (opts.store && (hasAgent || allAgents)) throw new Error("--store cannot be combined with --agent or --all-agents");
	if (opts.store) return [{
		agentId: defaultAgentId,
		storePath: resolveStorePath(opts.store, {
			agentId: defaultAgentId,
			env
		})
	}];
	if (allAgents) return dedupeTargetsByStorePath(listAgentIds(cfg).map((agentId) => ({
		agentId,
		storePath: resolveStorePath(cfg.session?.store, {
			agentId,
			env
		})
	})));
	if (hasAgent) {
		const knownAgents = listAgentIds(cfg);
		const requested = normalizeAgentId(opts.agent ?? "");
		if (!knownAgents.includes(requested)) throw new Error(`Unknown agent id "${opts.agent}". Use "openclaw agents list" to see configured agents.`);
		return [{
			agentId: requested,
			storePath: resolveStorePath(cfg.session?.store, {
				agentId: requested,
				env
			})
		}];
	}
	return [{
		agentId: defaultAgentId,
		storePath: resolveStorePath(cfg.session?.store, {
			agentId: defaultAgentId,
			env
		})
	}];
}
//#endregion
export { archiveSessionTranscripts as A, resolveMainSessionKeyFromConfig as B, pruneStaleEntries as C, isCacheEnabled as D, createExpiringMapCache as E, evaluateSessionFreshness as F, snapshotSessionOrigin as H, resolveChannelResetConfig as I, resolveSessionResetPolicy as L, resolveSessionTranscriptCandidates as M, deriveSessionKey as N, resolveCacheTtlMs as O, resolveSessionKey as P, resolveSessionResetType as R, capEntryCount as S, enforceSessionDiskBudget as T, buildGroupDisplayName as U, deriveSessionMetaPatch as V, resolveGroupSessionKey as W, resolveSessionStoreEntry as _, appendAssistantMessageToSessionTranscript as a, updateSessionStore as b, resolveAndPersistSessionFile as c, emitSessionTranscriptUpdate as d, onSessionTranscriptUpdate as f, recordSessionMetaFromInbound as g, readSessionUpdatedAt as h, resolveAgentSessionDirs as i, cleanupArchivedSessionTranscripts as j, archiveFileOnDisk as k, extractDeliveryInfo as l, loadSessionStore as m, resolveAllAgentSessionStoreTargetsSync as n, resolveMirroredTranscriptText as o, archiveRemovedSessionTranscripts as p, resolveSessionStoreTargets as r, resolveSessionTranscriptFile as s, resolveAllAgentSessionStoreTargets as t, parseSessionThreadInfo as u, saveSessionStore as v, resolveMaintenanceConfig as w, updateSessionStoreEntry as x, updateLastRoute as y, resolveThreadFlag as z };
