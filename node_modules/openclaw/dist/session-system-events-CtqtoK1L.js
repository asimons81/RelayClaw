import { i as resolveUserTimezone } from "./date-time-UIdKe9Ww.js";
import { t as drainSystemEventEntries } from "./system-events-D_U3rn_H.js";
import { n as formatZonedTimestamp, r as resolveTimezone, t as formatUtcTimestamp } from "./format-datetime-5Raved4q.js";
import { t as buildChannelSummary } from "./channel-summary-BI4Ows9P.js";
//#region src/auto-reply/reply/session-system-events.ts
/** Drain queued system events, format as `System:` lines, return the block (or undefined). */
async function drainFormattedSystemEvents(params) {
	const compactSystemEvent = (line) => {
		const trimmed = line.trim();
		if (!trimmed) return null;
		const lower = trimmed.toLowerCase();
		if (lower.includes("reason periodic")) return null;
		if (lower.startsWith("read heartbeat.md")) return null;
		if (lower.includes("heartbeat poll") || lower.includes("heartbeat wake")) return null;
		if (trimmed.startsWith("Node:")) return trimmed.replace(/ · last input [^·]+/i, "").trim();
		return trimmed;
	};
	const resolveSystemEventTimezone = (cfg) => {
		const raw = cfg.agents?.defaults?.envelopeTimezone?.trim();
		if (!raw) return { mode: "local" };
		const lowered = raw.toLowerCase();
		if (lowered === "utc" || lowered === "gmt") return { mode: "utc" };
		if (lowered === "local" || lowered === "host") return { mode: "local" };
		if (lowered === "user") return {
			mode: "iana",
			timeZone: resolveUserTimezone(cfg.agents?.defaults?.userTimezone)
		};
		const explicit = resolveTimezone(raw);
		return explicit ? {
			mode: "iana",
			timeZone: explicit
		} : { mode: "local" };
	};
	const formatSystemEventTimestamp = (ts, cfg) => {
		const date = new Date(ts);
		if (Number.isNaN(date.getTime())) return "unknown-time";
		const zone = resolveSystemEventTimezone(cfg);
		if (zone.mode === "utc") return formatUtcTimestamp(date, { displaySeconds: true });
		if (zone.mode === "local") return formatZonedTimestamp(date, { displaySeconds: true }) ?? "unknown-time";
		return formatZonedTimestamp(date, {
			timeZone: zone.timeZone,
			displaySeconds: true
		}) ?? "unknown-time";
	};
	const systemLines = [];
	const queued = drainSystemEventEntries(params.sessionKey);
	systemLines.push(...queued.map((event) => {
		const compacted = compactSystemEvent(event.text);
		if (!compacted) return null;
		return `[${formatSystemEventTimestamp(event.ts, params.cfg)}] ${compacted}`;
	}).filter((v) => Boolean(v)));
	if (params.isMainSession && params.isNewSession) {
		const summary = await buildChannelSummary(params.cfg);
		if (summary.length > 0) systemLines.unshift(...summary);
	}
	if (systemLines.length === 0) return;
	return systemLines.flatMap((line) => line.split("\n").map((subline) => `System: ${subline}`)).join("\n");
}
//#endregion
export { drainFormattedSystemEvents as t };
