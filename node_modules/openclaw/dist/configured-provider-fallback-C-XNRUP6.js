//#region src/agents/defaults.ts
const DEFAULT_PROVIDER = "anthropic";
const DEFAULT_MODEL = "claude-opus-4-6";
const DEFAULT_CONTEXT_TOKENS = 2e5;
//#endregion
//#region src/config/model-input.ts
function resolveAgentModelPrimaryValue(model) {
	if (typeof model === "string") return model.trim() || void 0;
	if (!model || typeof model !== "object") return;
	return model.primary?.trim() || void 0;
}
function resolveAgentModelFallbackValues(model) {
	if (!model || typeof model !== "object") return [];
	return Array.isArray(model.fallbacks) ? model.fallbacks : [];
}
function toAgentModelListLike(model) {
	if (typeof model === "string") {
		const primary = model.trim();
		return primary ? { primary } : void 0;
	}
	if (!model || typeof model !== "object") return;
	return model;
}
//#endregion
//#region src/agents/configured-provider-fallback.ts
function resolveConfiguredProviderFallback(params) {
	const configuredProviders = params.cfg.models?.providers;
	if (!configuredProviders || typeof configuredProviders !== "object") return null;
	if (configuredProviders[params.defaultProvider]) return null;
	const availableProvider = Object.entries(configuredProviders).find(([, providerCfg]) => providerCfg && Array.isArray(providerCfg.models) && providerCfg.models.length > 0 && providerCfg.models[0]?.id);
	if (!availableProvider) return null;
	const [provider, providerCfg] = availableProvider;
	return {
		provider,
		model: providerCfg.models[0].id
	};
}
//#endregion
export { DEFAULT_CONTEXT_TOKENS as a, toAgentModelListLike as i, resolveAgentModelFallbackValues as n, DEFAULT_MODEL as o, resolveAgentModelPrimaryValue as r, DEFAULT_PROVIDER as s, resolveConfiguredProviderFallback as t };
