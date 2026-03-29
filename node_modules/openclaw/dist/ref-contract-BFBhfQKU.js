//#region src/config/types.secrets.ts
const DEFAULT_SECRET_PROVIDER_ALIAS = "default";
const ENV_SECRET_REF_ID_RE = /^[A-Z][A-Z0-9_]{0,127}$/;
const ENV_SECRET_TEMPLATE_RE = /^\$\{([A-Z][A-Z0-9_]{0,127})\}$/;
function isValidEnvSecretRefId(value) {
	return ENV_SECRET_REF_ID_RE.test(value);
}
function isRecord(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
function isSecretRef(value) {
	if (!isRecord(value)) return false;
	if (Object.keys(value).length !== 3) return false;
	return (value.source === "env" || value.source === "file" || value.source === "exec") && typeof value.provider === "string" && value.provider.trim().length > 0 && typeof value.id === "string" && value.id.trim().length > 0;
}
function isLegacySecretRefWithoutProvider(value) {
	if (!isRecord(value)) return false;
	return (value.source === "env" || value.source === "file" || value.source === "exec") && typeof value.id === "string" && value.id.trim().length > 0 && value.provider === void 0;
}
function parseEnvTemplateSecretRef(value, provider = DEFAULT_SECRET_PROVIDER_ALIAS) {
	if (typeof value !== "string") return null;
	const match = ENV_SECRET_TEMPLATE_RE.exec(value.trim());
	if (!match) return null;
	return {
		source: "env",
		provider: provider.trim() || "default",
		id: match[1]
	};
}
function coerceSecretRef(value, defaults) {
	if (isSecretRef(value)) return value;
	if (isLegacySecretRefWithoutProvider(value)) {
		const provider = value.source === "env" ? defaults?.env ?? "default" : value.source === "file" ? defaults?.file ?? "default" : defaults?.exec ?? "default";
		return {
			source: value.source,
			provider,
			id: value.id
		};
	}
	const envTemplate = parseEnvTemplateSecretRef(value, defaults?.env);
	if (envTemplate) return envTemplate;
	return null;
}
function hasConfiguredSecretInput(value, defaults) {
	if (normalizeSecretInputString(value)) return true;
	return coerceSecretRef(value, defaults) !== null;
}
function normalizeSecretInputString(value) {
	if (typeof value !== "string") return;
	const trimmed = value.trim();
	return trimmed.length > 0 ? trimmed : void 0;
}
function formatSecretRefLabel(ref) {
	return `${ref.source}:${ref.provider}:${ref.id}`;
}
function assertSecretInputResolved(params) {
	const { ref } = resolveSecretInputRef({
		value: params.value,
		refValue: params.refValue,
		defaults: params.defaults
	});
	if (!ref) return;
	throw new Error(`${params.path}: unresolved SecretRef "${formatSecretRefLabel(ref)}". Resolve this command against an active gateway runtime snapshot before reading it.`);
}
function normalizeResolvedSecretInputString(params) {
	const normalized = normalizeSecretInputString(params.value);
	if (normalized) return normalized;
	assertSecretInputResolved(params);
}
function resolveSecretInputRef(params) {
	const explicitRef = coerceSecretRef(params.refValue, params.defaults);
	const inlineRef = explicitRef ? null : coerceSecretRef(params.value, params.defaults);
	return {
		explicitRef,
		inlineRef,
		ref: explicitRef ?? inlineRef
	};
}
//#endregion
//#region src/secrets/ref-contract.ts
const FILE_SECRET_REF_SEGMENT_PATTERN = /^(?:[^~]|~0|~1)*$/;
const SECRET_PROVIDER_ALIAS_PATTERN = /^[a-z][a-z0-9_-]{0,63}$/;
const EXEC_SECRET_REF_ID_PATTERN = /^[A-Za-z0-9][A-Za-z0-9._:/-]{0,255}$/;
const SINGLE_VALUE_FILE_REF_ID = "value";
const FILE_SECRET_REF_ID_PATTERN = /^(?:value|\/(?:[^~]|~0|~1)*(?:\/(?:[^~]|~0|~1)*)*)$/;
const EXEC_SECRET_REF_ID_JSON_SCHEMA_PATTERN = "^(?!.*(?:^|/)\\.{1,2}(?:/|$))[A-Za-z0-9][A-Za-z0-9._:/-]{0,255}$";
function secretRefKey(ref) {
	return `${ref.source}:${ref.provider}:${ref.id}`;
}
function resolveDefaultSecretProviderAlias(config, source, options) {
	const configured = source === "env" ? config.secrets?.defaults?.env : source === "file" ? config.secrets?.defaults?.file : config.secrets?.defaults?.exec;
	if (configured?.trim()) return configured.trim();
	if (options?.preferFirstProviderForSource) {
		const providers = config.secrets?.providers;
		if (providers) {
			for (const [providerName, provider] of Object.entries(providers)) if (provider?.source === source) return providerName;
		}
	}
	return DEFAULT_SECRET_PROVIDER_ALIAS;
}
function isValidFileSecretRefId(value) {
	if (value === "value") return true;
	if (!value.startsWith("/")) return false;
	return value.slice(1).split("/").every((segment) => FILE_SECRET_REF_SEGMENT_PATTERN.test(segment));
}
function isValidSecretProviderAlias(value) {
	return SECRET_PROVIDER_ALIAS_PATTERN.test(value);
}
function validateExecSecretRefId(value) {
	if (!EXEC_SECRET_REF_ID_PATTERN.test(value)) return {
		ok: false,
		reason: "pattern"
	};
	for (const segment of value.split("/")) if (segment === "." || segment === "..") return {
		ok: false,
		reason: "traversal-segment"
	};
	return { ok: true };
}
function isValidExecSecretRefId(value) {
	return validateExecSecretRefId(value).ok;
}
function formatExecSecretRefIdValidationMessage() {
	return [
		"Exec secret reference id must match /^[A-Za-z0-9][A-Za-z0-9._:/-]{0,255}$/",
		"and must not include \".\" or \"..\" path segments",
		"(example: \"vault/openai/api-key\")."
	].join(" ");
}
//#endregion
export { resolveSecretInputRef as S, isSecretRef as _, formatExecSecretRefIdValidationMessage as a, normalizeSecretInputString as b, isValidSecretProviderAlias as c, validateExecSecretRefId as d, DEFAULT_SECRET_PROVIDER_ALIAS as f, hasConfiguredSecretInput as g, coerceSecretRef as h, SINGLE_VALUE_FILE_REF_ID as i, resolveDefaultSecretProviderAlias as l, assertSecretInputResolved as m, FILE_SECRET_REF_ID_PATTERN as n, isValidExecSecretRefId as o, ENV_SECRET_REF_ID_RE as p, SECRET_PROVIDER_ALIAS_PATTERN as r, isValidFileSecretRefId as s, EXEC_SECRET_REF_ID_JSON_SCHEMA_PATTERN as t, secretRefKey as u, isValidEnvSecretRefId as v, parseEnvTemplateSecretRef as x, normalizeResolvedSecretInputString as y };
