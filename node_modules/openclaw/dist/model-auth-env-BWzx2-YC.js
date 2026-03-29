import { ha as getShellEnvAppliedKeys } from "./env-D1ktUnAV.js";
import { i as normalizeProviderIdForAuth } from "./provider-id-Dub5ZtOv.js";
import { t as normalizeOptionalSecretInput } from "./normalize-secret-input-EW7savI9.js";
import { r as listKnownProviderAuthEnvVarNames, t as PROVIDER_AUTH_ENV_VAR_CANDIDATES } from "./provider-env-vars-BZwz5sMG.js";
import { t as hasAnthropicVertexAvailableAuth } from "./anthropic-vertex-provider-Cik2BDhe.js";
import { getEnvApiKey } from "@mariozechner/pi-ai";
//#region src/agents/model-auth-env-vars.ts
const PROVIDER_ENV_API_KEY_CANDIDATES = PROVIDER_AUTH_ENV_VAR_CANDIDATES;
function listKnownProviderEnvApiKeyNames() {
	return listKnownProviderAuthEnvVarNames();
}
//#endregion
//#region src/agents/model-auth-markers.ts
const MINIMAX_OAUTH_MARKER = "minimax-oauth";
const OAUTH_API_KEY_MARKER_PREFIX = "oauth:";
const QWEN_OAUTH_MARKER = "qwen-oauth";
const OLLAMA_LOCAL_AUTH_MARKER = "ollama-local";
const CUSTOM_LOCAL_AUTH_MARKER = "custom-local";
const GCP_VERTEX_CREDENTIALS_MARKER = "gcp-vertex-credentials";
const NON_ENV_SECRETREF_MARKER = "secretref-managed";
const SECRETREF_ENV_HEADER_MARKER_PREFIX = "secretref-env:";
const AWS_SDK_ENV_MARKERS = new Set([
	"AWS_BEARER_TOKEN_BEDROCK",
	"AWS_ACCESS_KEY_ID",
	"AWS_PROFILE"
]);
const LEGACY_ENV_API_KEY_MARKERS = [
	"GOOGLE_API_KEY",
	"DEEPSEEK_API_KEY",
	"PERPLEXITY_API_KEY",
	"FIREWORKS_API_KEY",
	"NOVITA_API_KEY",
	"AZURE_OPENAI_API_KEY",
	"AZURE_API_KEY",
	"MINIMAX_CODE_PLAN_KEY"
];
const KNOWN_ENV_API_KEY_MARKERS = new Set([
	...listKnownProviderEnvApiKeyNames(),
	...LEGACY_ENV_API_KEY_MARKERS,
	...AWS_SDK_ENV_MARKERS
]);
function isAwsSdkAuthMarker(value) {
	return AWS_SDK_ENV_MARKERS.has(value.trim());
}
function isKnownEnvApiKeyMarker(value) {
	const trimmed = value.trim();
	return KNOWN_ENV_API_KEY_MARKERS.has(trimmed) && !isAwsSdkAuthMarker(trimmed);
}
function resolveOAuthApiKeyMarker(providerId) {
	return `${OAUTH_API_KEY_MARKER_PREFIX}${providerId.trim()}`;
}
function isOAuthApiKeyMarker(value) {
	return value.trim().startsWith(OAUTH_API_KEY_MARKER_PREFIX);
}
function resolveNonEnvSecretRefApiKeyMarker(_source) {
	return NON_ENV_SECRETREF_MARKER;
}
function resolveNonEnvSecretRefHeaderValueMarker(_source) {
	return NON_ENV_SECRETREF_MARKER;
}
function resolveEnvSecretRefHeaderValueMarker(envVarName) {
	return `${SECRETREF_ENV_HEADER_MARKER_PREFIX}${envVarName.trim()}`;
}
function isSecretRefHeaderValueMarker(value) {
	const trimmed = value.trim();
	return trimmed === "secretref-managed" || trimmed.startsWith("secretref-env:");
}
function isNonSecretApiKeyMarker(value, opts) {
	const trimmed = value.trim();
	if (!trimmed) return false;
	if (trimmed === "minimax-oauth" || trimmed === "qwen-oauth" || isOAuthApiKeyMarker(trimmed) || trimmed === "ollama-local" || trimmed === "custom-local" || trimmed === "gcp-vertex-credentials" || trimmed === "secretref-managed" || isAwsSdkAuthMarker(trimmed)) return true;
	if (opts?.includeEnvVarName === false) return false;
	return KNOWN_ENV_API_KEY_MARKERS.has(trimmed);
}
//#endregion
//#region src/agents/model-auth-env.ts
function resolveEnvApiKey(provider, env = process.env) {
	const normalized = normalizeProviderIdForAuth(provider);
	const applied = new Set(getShellEnvAppliedKeys());
	const pick = (envVar) => {
		const value = normalizeOptionalSecretInput(env[envVar]);
		if (!value) return null;
		return {
			apiKey: value,
			source: applied.has(envVar) ? `shell env: ${envVar}` : `env: ${envVar}`
		};
	};
	const candidates = PROVIDER_ENV_API_KEY_CANDIDATES[normalized];
	if (candidates) for (const envVar of candidates) {
		const resolved = pick(envVar);
		if (resolved) return resolved;
	}
	if (normalized === "google-vertex") {
		const envKey = getEnvApiKey(normalized);
		if (!envKey) return null;
		return {
			apiKey: envKey,
			source: "gcloud adc"
		};
	}
	if (normalized === "anthropic-vertex") {
		if (hasAnthropicVertexAvailableAuth(env)) return {
			apiKey: GCP_VERTEX_CREDENTIALS_MARKER,
			source: "gcloud adc"
		};
		return null;
	}
	return null;
}
//#endregion
export { resolveNonEnvSecretRefHeaderValueMarker as _, NON_ENV_SECRETREF_MARKER as a, QWEN_OAUTH_MARKER as c, isKnownEnvApiKeyMarker as d, isNonSecretApiKeyMarker as f, resolveNonEnvSecretRefApiKeyMarker as g, resolveEnvSecretRefHeaderValueMarker as h, MINIMAX_OAUTH_MARKER as i, SECRETREF_ENV_HEADER_MARKER_PREFIX as l, isSecretRefHeaderValueMarker as m, CUSTOM_LOCAL_AUTH_MARKER as n, OAUTH_API_KEY_MARKER_PREFIX as o, isOAuthApiKeyMarker as p, GCP_VERTEX_CREDENTIALS_MARKER as r, OLLAMA_LOCAL_AUTH_MARKER as s, resolveEnvApiKey as t, isAwsSdkAuthMarker as u, resolveOAuthApiKeyMarker as v, PROVIDER_ENV_API_KEY_CANDIDATES as y };
