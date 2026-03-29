//#region src/plugins/provider-model-kilocode.ts
const KILOCODE_BASE_URL = "https://api.kilo.ai/api/gateway/";
const KILOCODE_DEFAULT_MODEL_ID = "kilo/auto";
const KILOCODE_DEFAULT_MODEL_REF = `kilocode/${KILOCODE_DEFAULT_MODEL_ID}`;
const KILOCODE_DEFAULT_MODEL_NAME = "Kilo Auto";
/**
* Static fallback catalog used by synchronous config surfaces and as the
* discovery fallback when the gateway model endpoint is unavailable.
*/
const KILOCODE_MODEL_CATALOG = [{
	id: KILOCODE_DEFAULT_MODEL_ID,
	name: KILOCODE_DEFAULT_MODEL_NAME,
	reasoning: true,
	input: ["text", "image"],
	contextWindow: 1e6,
	maxTokens: 128e3
}];
const KILOCODE_DEFAULT_CONTEXT_WINDOW = 1e6;
const KILOCODE_DEFAULT_MAX_TOKENS = 128e3;
const KILOCODE_DEFAULT_COST = {
	input: 0,
	output: 0,
	cacheRead: 0,
	cacheWrite: 0
};
//#endregion
//#region src/agents/model-compat.ts
const XAI_TOOL_SCHEMA_PROFILE = "xai";
const HTML_ENTITY_TOOL_CALL_ARGUMENTS_ENCODING = "html-entities";
function extractModelCompat(modelOrCompat) {
	if (!modelOrCompat || typeof modelOrCompat !== "object") return;
	if ("compat" in modelOrCompat) {
		const compat = modelOrCompat.compat;
		return compat && typeof compat === "object" ? compat : void 0;
	}
	return modelOrCompat;
}
function applyModelCompatPatch(model, patch) {
	const nextCompat = {
		...model.compat,
		...patch
	};
	if (model.compat && Object.entries(patch).every(([key, value]) => model.compat?.[key] === value)) return model;
	return {
		...model,
		compat: nextCompat
	};
}
function applyXaiModelCompat(model) {
	return applyModelCompatPatch(model, {
		toolSchemaProfile: "xai",
		nativeWebSearchTool: true,
		toolCallArgumentsEncoding: HTML_ENTITY_TOOL_CALL_ARGUMENTS_ENCODING
	});
}
function usesXaiToolSchemaProfile(modelOrCompat) {
	return extractModelCompat(modelOrCompat)?.toolSchemaProfile === "xai";
}
function hasNativeWebSearchTool(modelOrCompat) {
	return extractModelCompat(modelOrCompat)?.nativeWebSearchTool === true;
}
function resolveToolCallArgumentsEncoding(modelOrCompat) {
	return extractModelCompat(modelOrCompat)?.toolCallArgumentsEncoding;
}
function isOpenAiCompletionsModel(model) {
	return model.api === "openai-completions";
}
/**
* Returns true only for endpoints that are confirmed to be native OpenAI
* infrastructure and therefore accept the `developer` message role.
* Azure OpenAI uses the Chat Completions API and does NOT accept `developer`.
* All other openai-completions backends (proxies, Qwen, GLM, DeepSeek, etc.)
* only support the standard `system` role.
*/
function isOpenAINativeEndpoint(baseUrl) {
	try {
		return new URL(baseUrl).hostname.toLowerCase() === "api.openai.com";
	} catch {
		return false;
	}
}
function isAnthropicMessagesModel(model) {
	return model.api === "anthropic-messages";
}
/**
* pi-ai constructs the Anthropic API endpoint as `${baseUrl}/v1/messages`.
* If a user configures `baseUrl` with a trailing `/v1` (e.g. the previously
* recommended format "https://api.anthropic.com/v1"), the resulting URL
* becomes "…/v1/v1/messages" which the Anthropic API rejects with a 404.
*
* Strip a single trailing `/v1` (with optional trailing slash) from the
* baseUrl for anthropic-messages models so users with either format work.
*/
function normalizeAnthropicBaseUrl(baseUrl) {
	return baseUrl.replace(/\/v1\/?$/, "");
}
function normalizeModelCompat(model) {
	const baseUrl = model.baseUrl ?? "";
	if (isAnthropicMessagesModel(model) && baseUrl) {
		const normalised = normalizeAnthropicBaseUrl(baseUrl);
		if (normalised !== baseUrl) return {
			...model,
			baseUrl: normalised
		};
	}
	if (!isOpenAiCompletionsModel(model)) return model;
	const compat = model.compat ?? void 0;
	if (!(baseUrl ? !isOpenAINativeEndpoint(baseUrl) : false)) return model;
	const forcedDeveloperRole = compat?.supportsDeveloperRole === true;
	const hasStreamingUsageOverride = compat?.supportsUsageInStreaming !== void 0;
	const targetStrictMode = compat?.supportsStrictMode ?? false;
	if (compat?.supportsDeveloperRole !== void 0 && hasStreamingUsageOverride && compat?.supportsStrictMode !== void 0) return model;
	return {
		...model,
		compat: compat ? {
			...compat,
			supportsDeveloperRole: forcedDeveloperRole || false,
			...hasStreamingUsageOverride ? {} : { supportsUsageInStreaming: false },
			supportsStrictMode: targetStrictMode
		} : {
			supportsDeveloperRole: false,
			supportsUsageInStreaming: false,
			supportsStrictMode: false
		}
	};
}
//#endregion
//#region src/plugins/provider-model-helpers.ts
function matchesExactOrPrefix(id, values) {
	const normalizedId = id.trim().toLowerCase();
	return values.some((value) => {
		const normalizedValue = value.trim().toLowerCase();
		return normalizedId === normalizedValue || normalizedId.startsWith(normalizedValue);
	});
}
function cloneFirstTemplateModel(params) {
	const trimmedModelId = params.modelId.trim();
	for (const templateId of [...new Set(params.templateIds)].filter(Boolean)) {
		const template = params.ctx.modelRegistry.find(params.providerId, templateId);
		if (!template) continue;
		return normalizeModelCompat({
			...template,
			id: trimmedModelId,
			name: trimmedModelId,
			...params.patch
		});
	}
}
//#endregion
//#region src/plugins/provider-model-minimax.ts
const MINIMAX_DEFAULT_MODEL_ID = "MiniMax-M2.7";
const MINIMAX_DEFAULT_MODEL_REF = `minimax/${MINIMAX_DEFAULT_MODEL_ID}`;
const MINIMAX_TEXT_MODEL_ORDER = ["MiniMax-M2.7", "MiniMax-M2.7-highspeed"];
const MINIMAX_TEXT_MODEL_CATALOG = {
	"MiniMax-M2.7": {
		name: "MiniMax M2.7",
		reasoning: true
	},
	"MiniMax-M2.7-highspeed": {
		name: "MiniMax M2.7 Highspeed",
		reasoning: true
	}
};
const MINIMAX_TEXT_MODEL_REFS = MINIMAX_TEXT_MODEL_ORDER.map((modelId) => `minimax/${modelId}`);
const MINIMAX_MODERN_MODEL_MATCHERS = ["minimax-m2.7"];
function isMiniMaxModernModelId(modelId) {
	return matchesExactOrPrefix(modelId, MINIMAX_MODERN_MODEL_MATCHERS);
}
`${MINIMAX_DEFAULT_MODEL_ID}`;
const MODELSTUDIO_CN_BASE_URL = "https://coding.dashscope.aliyuncs.com/v1";
const MODELSTUDIO_GLOBAL_BASE_URL = "https://coding-intl.dashscope.aliyuncs.com/v1";
const MODELSTUDIO_DEFAULT_MODEL_ID = "qwen3.5-plus";
const MODELSTUDIO_DEFAULT_MODEL_REF = `modelstudio/${MODELSTUDIO_DEFAULT_MODEL_ID}`;
const MODELSTUDIO_DEFAULT_COST = {
	input: 0,
	output: 0,
	cacheRead: 0,
	cacheWrite: 0
};
const MODELSTUDIO_MODEL_CATALOG = {
	"qwen3.5-plus": {
		name: "qwen3.5-plus",
		reasoning: false,
		input: ["text", "image"],
		contextWindow: 1e6,
		maxTokens: 65536
	},
	"qwen3-max-2026-01-23": {
		name: "qwen3-max-2026-01-23",
		reasoning: false,
		input: ["text"],
		contextWindow: 262144,
		maxTokens: 65536
	},
	"qwen3-coder-next": {
		name: "qwen3-coder-next",
		reasoning: false,
		input: ["text"],
		contextWindow: 262144,
		maxTokens: 65536
	},
	"qwen3-coder-plus": {
		name: "qwen3-coder-plus",
		reasoning: false,
		input: ["text"],
		contextWindow: 1e6,
		maxTokens: 65536
	},
	"MiniMax-M2.5": {
		name: "MiniMax-M2.5",
		reasoning: false,
		input: ["text"],
		contextWindow: 1e6,
		maxTokens: 65536
	},
	"glm-5": {
		name: "glm-5",
		reasoning: false,
		input: ["text"],
		contextWindow: 202752,
		maxTokens: 16384
	},
	"glm-4.7": {
		name: "glm-4.7",
		reasoning: false,
		input: ["text"],
		contextWindow: 202752,
		maxTokens: 16384
	},
	"kimi-k2.5": {
		name: "kimi-k2.5",
		reasoning: false,
		input: ["text", "image"],
		contextWindow: 262144,
		maxTokens: 32768
	}
};
const ZAI_CODING_GLOBAL_BASE_URL = "https://api.z.ai/api/coding/paas/v4";
const ZAI_CODING_CN_BASE_URL = "https://open.bigmodel.cn/api/coding/paas/v4";
const ZAI_GLOBAL_BASE_URL = "https://api.z.ai/api/paas/v4";
const ZAI_CN_BASE_URL = "https://open.bigmodel.cn/api/paas/v4";
function buildModelStudioModelDefinition(params) {
	const catalog = MODELSTUDIO_MODEL_CATALOG[params.id];
	return {
		id: params.id,
		name: params.name ?? catalog?.name ?? params.id,
		reasoning: params.reasoning ?? catalog?.reasoning ?? false,
		input: params.input ?? [...catalog?.input ?? ["text"]],
		cost: params.cost ?? MODELSTUDIO_DEFAULT_COST,
		contextWindow: params.contextWindow ?? catalog?.contextWindow ?? 262144,
		maxTokens: params.maxTokens ?? catalog?.maxTokens ?? 65536
	};
}
function buildModelStudioDefaultModelDefinition() {
	return buildModelStudioModelDefinition({ id: MODELSTUDIO_DEFAULT_MODEL_ID });
}
//#endregion
export { KILOCODE_DEFAULT_MAX_TOKENS as A, hasNativeWebSearchTool as C, KILOCODE_BASE_URL as D, usesXaiToolSchemaProfile as E, KILOCODE_DEFAULT_MODEL_NAME as M, KILOCODE_DEFAULT_MODEL_REF as N, KILOCODE_DEFAULT_CONTEXT_WINDOW as O, KILOCODE_MODEL_CATALOG as P, applyXaiModelCompat as S, resolveToolCallArgumentsEncoding as T, isMiniMaxModernModelId as _, MODELSTUDIO_GLOBAL_BASE_URL as a, HTML_ENTITY_TOOL_CALL_ARGUMENTS_ENCODING as b, ZAI_CODING_GLOBAL_BASE_URL as c, buildModelStudioModelDefinition as d, MINIMAX_DEFAULT_MODEL_ID as f, MINIMAX_TEXT_MODEL_REFS as g, MINIMAX_TEXT_MODEL_ORDER as h, MODELSTUDIO_DEFAULT_MODEL_REF as i, KILOCODE_DEFAULT_MODEL_ID as j, KILOCODE_DEFAULT_COST as k, ZAI_GLOBAL_BASE_URL as l, MINIMAX_TEXT_MODEL_CATALOG as m, MODELSTUDIO_DEFAULT_COST as n, ZAI_CN_BASE_URL as o, MINIMAX_DEFAULT_MODEL_REF as p, MODELSTUDIO_DEFAULT_MODEL_ID as r, ZAI_CODING_CN_BASE_URL as s, MODELSTUDIO_CN_BASE_URL as t, buildModelStudioDefaultModelDefinition as u, cloneFirstTemplateModel as v, normalizeModelCompat as w, XAI_TOOL_SCHEMA_PROFILE as x, matchesExactOrPrefix as y };
