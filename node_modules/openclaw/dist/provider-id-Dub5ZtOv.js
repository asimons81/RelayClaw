//#region src/auto-reply/thinking.shared.ts
const BASE_THINKING_LEVELS = [
	"off",
	"minimal",
	"low",
	"medium",
	"high",
	"adaptive"
];
const ANTHROPIC_CLAUDE_46_MODEL_RE = /^claude-(?:opus|sonnet)-4(?:\.|-)6(?:$|[-.])/i;
const AMAZON_BEDROCK_CLAUDE_46_MODEL_RE = /claude-(?:opus|sonnet)-4(?:\.|-)6(?:$|[-.])/i;
const OPENAI_XHIGH_MODEL_IDS = [
	"gpt-5.4",
	"gpt-5.4-pro",
	"gpt-5.4-mini",
	"gpt-5.4-nano",
	"gpt-5.2"
];
const OPENAI_CODEX_XHIGH_MODEL_IDS = [
	"gpt-5.4",
	"gpt-5.3-codex-spark",
	"gpt-5.2-codex",
	"gpt-5.1-codex"
];
const GITHUB_COPILOT_XHIGH_MODEL_IDS = ["gpt-5.2", "gpt-5.2-codex"];
function matchesExactOrPrefix(modelId, ids) {
	return ids.some((candidate) => modelId === candidate || modelId.startsWith(`${candidate}-`));
}
function normalizeProviderId$1(provider) {
	if (!provider) return "";
	const normalized = provider.trim().toLowerCase();
	if (normalized === "z.ai" || normalized === "z-ai") return "zai";
	if (normalized === "bedrock" || normalized === "aws-bedrock") return "amazon-bedrock";
	return normalized;
}
function isBinaryThinkingProvider(provider) {
	return normalizeProviderId$1(provider) === "zai";
}
function supportsBuiltInXHighThinking(provider, model) {
	const providerId = normalizeProviderId$1(provider);
	const modelId = model?.trim().toLowerCase();
	if (!providerId || !modelId) return false;
	if (providerId === "openai") return matchesExactOrPrefix(modelId, OPENAI_XHIGH_MODEL_IDS);
	if (providerId === "openai-codex") return matchesExactOrPrefix(modelId, OPENAI_CODEX_XHIGH_MODEL_IDS);
	if (providerId === "github-copilot") return GITHUB_COPILOT_XHIGH_MODEL_IDS.includes(modelId);
	return false;
}
function normalizeThinkLevel(raw) {
	if (!raw) return;
	const key = raw.trim().toLowerCase();
	const collapsed = key.replace(/[\s_-]+/g, "");
	if (collapsed === "adaptive" || collapsed === "auto") return "adaptive";
	if (collapsed === "xhigh" || collapsed === "extrahigh") return "xhigh";
	if (["off"].includes(key)) return "off";
	if ([
		"on",
		"enable",
		"enabled"
	].includes(key)) return "low";
	if (["min", "minimal"].includes(key)) return "minimal";
	if ([
		"low",
		"thinkhard",
		"think-hard",
		"think_hard"
	].includes(key)) return "low";
	if ([
		"mid",
		"med",
		"medium",
		"thinkharder",
		"think-harder",
		"harder"
	].includes(key)) return "medium";
	if ([
		"high",
		"ultra",
		"ultrathink",
		"think-hard",
		"thinkhardest",
		"highest",
		"max"
	].includes(key)) return "high";
	if (["think"].includes(key)) return "minimal";
}
function listThinkingLevels(_provider, _model) {
	return [...BASE_THINKING_LEVELS];
}
function listThinkingLevelLabels(provider, model) {
	if (isBinaryThinkingProvider(provider)) return ["off", "on"];
	return listThinkingLevels(provider, model);
}
function formatThinkingLevels(provider, model, separator = ", ") {
	return listThinkingLevelLabels(provider, model).join(separator);
}
function formatXHighModelHint() {
	return "provider models that advertise xhigh reasoning";
}
function resolveThinkingDefaultForModel(params) {
	const normalizedProvider = normalizeProviderId$1(params.provider);
	const modelId = params.model.trim();
	if (normalizedProvider === "anthropic" && ANTHROPIC_CLAUDE_46_MODEL_RE.test(modelId)) return "adaptive";
	if (normalizedProvider === "amazon-bedrock" && AMAZON_BEDROCK_CLAUDE_46_MODEL_RE.test(modelId)) return "adaptive";
	if ((params.catalog?.find((entry) => entry.provider === params.provider && entry.id === params.model))?.reasoning) return "low";
	return "off";
}
function normalizeOnOffFullLevel(raw) {
	if (!raw) return;
	const key = raw.toLowerCase();
	if ([
		"off",
		"false",
		"no",
		"0"
	].includes(key)) return "off";
	if ([
		"full",
		"all",
		"everything"
	].includes(key)) return "full";
	if ([
		"on",
		"minimal",
		"true",
		"yes",
		"1"
	].includes(key)) return "on";
}
function normalizeVerboseLevel(raw) {
	return normalizeOnOffFullLevel(raw);
}
function normalizeUsageDisplay(raw) {
	if (!raw) return;
	const key = raw.toLowerCase();
	if ([
		"off",
		"false",
		"no",
		"0",
		"disable",
		"disabled"
	].includes(key)) return "off";
	if ([
		"on",
		"true",
		"yes",
		"1",
		"enable",
		"enabled"
	].includes(key)) return "tokens";
	if ([
		"tokens",
		"token",
		"tok",
		"minimal",
		"min"
	].includes(key)) return "tokens";
	if (["full", "session"].includes(key)) return "full";
}
function resolveResponseUsageMode(raw) {
	return normalizeUsageDisplay(raw) ?? "off";
}
function normalizeFastMode(raw) {
	if (typeof raw === "boolean") return raw;
	if (!raw) return;
	const key = raw.toLowerCase();
	if ([
		"off",
		"false",
		"no",
		"0",
		"disable",
		"disabled",
		"normal"
	].includes(key)) return false;
	if ([
		"on",
		"true",
		"yes",
		"1",
		"enable",
		"enabled",
		"fast"
	].includes(key)) return true;
}
function normalizeElevatedLevel(raw) {
	if (!raw) return;
	const key = raw.toLowerCase();
	if ([
		"off",
		"false",
		"no",
		"0"
	].includes(key)) return "off";
	if ([
		"full",
		"auto",
		"auto-approve",
		"autoapprove"
	].includes(key)) return "full";
	if ([
		"ask",
		"prompt",
		"approval",
		"approve"
	].includes(key)) return "ask";
	if ([
		"on",
		"true",
		"yes",
		"1"
	].includes(key)) return "on";
}
function normalizeReasoningLevel(raw) {
	if (!raw) return;
	const key = raw.toLowerCase();
	if ([
		"off",
		"false",
		"no",
		"0",
		"hide",
		"hidden",
		"disable",
		"disabled"
	].includes(key)) return "off";
	if ([
		"on",
		"true",
		"yes",
		"1",
		"show",
		"visible",
		"enable",
		"enabled"
	].includes(key)) return "on";
	if ([
		"stream",
		"streaming",
		"draft",
		"live"
	].includes(key)) return "stream";
}
//#endregion
//#region src/agents/provider-id.ts
function normalizeProviderId(provider) {
	const normalized = provider.trim().toLowerCase();
	if (normalized === "z.ai" || normalized === "z-ai") return "zai";
	if (normalized === "opencode-zen") return "opencode";
	if (normalized === "opencode-go-auth") return "opencode-go";
	if (normalized === "qwen") return "qwen-portal";
	if (normalized === "kimi" || normalized === "kimi-code" || normalized === "kimi-coding") return "kimi";
	if (normalized === "bedrock" || normalized === "aws-bedrock") return "amazon-bedrock";
	if (normalized === "bytedance" || normalized === "doubao") return "volcengine";
	return normalized;
}
/** Normalize provider ID for auth lookup. Coding-plan variants share auth with base. */
function normalizeProviderIdForAuth(provider) {
	const normalized = normalizeProviderId(provider);
	if (normalized === "volcengine-plan") return "volcengine";
	if (normalized === "byteplus-plan") return "byteplus";
	return normalized;
}
function findNormalizedProviderValue(entries, provider) {
	if (!entries) return;
	const providerKey = normalizeProviderId(provider);
	for (const [key, value] of Object.entries(entries)) if (normalizeProviderId(key) === providerKey) return value;
}
function findNormalizedProviderKey(entries, provider) {
	if (!entries) return;
	const providerKey = normalizeProviderId(provider);
	return Object.keys(entries).find((key) => normalizeProviderId(key) === providerKey);
}
//#endregion
export { resolveResponseUsageMode as _, formatThinkingLevels as a, listThinkingLevelLabels as c, normalizeFastMode as d, normalizeProviderId$1 as f, normalizeVerboseLevel as g, normalizeUsageDisplay as h, normalizeProviderIdForAuth as i, listThinkingLevels as l, normalizeThinkLevel as m, findNormalizedProviderValue as n, formatXHighModelHint as o, normalizeReasoningLevel as p, normalizeProviderId as r, isBinaryThinkingProvider as s, findNormalizedProviderKey as t, normalizeElevatedLevel as u, resolveThinkingDefaultForModel as v, supportsBuiltInXHighThinking as y };
