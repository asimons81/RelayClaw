import "../env-D1ktUnAV.js";
import "../paths-CjuwkA2v.js";
import "../safe-text-K2Nonoo3.js";
import "../tmp-openclaw-dir-DzRxfh9a.js";
import "../theme-BH5F9mlg.js";
import "../version-DGzLsBG-.js";
import "../zod-schema.agent-runtime-DNndkpI8.js";
import "../runtime-BF_KUcJM.js";
import "../registry-bOiEdffE.js";
import "../ip-ByO4-_4f.js";
import "../paths-DJBuCoRE.js";
import "../file-lock-Cm3HPowf.js";
import "../profiles-CRvutsjq.js";
import "../detect-binary-78pS71eg.js";
import "../provider-env-vars-BZwz5sMG.js";
import "../anthropic-vertex-provider-Cik2BDhe.js";
import "../provider-model-definitions-CrItEa-O.js";
import { c as VLLM_DEFAULT_API_KEY_ENV_VAR, d as VLLM_PROVIDER_LABEL, l as VLLM_DEFAULT_BASE_URL, u as VLLM_MODEL_PLACEHOLDER } from "../provider-models-GbpUTgQg.js";
import { t as OLLAMA_DEFAULT_BASE_URL } from "../ollama-defaults-BH8D2agd.js";
import "../provider-catalog-hDyZGQ8R.js";
import "../provider-catalog-0WIhy6f_.js";
import "../provider-catalog-CdCrQ7UP.js";
import "../provider-catalog-DzIvFdfj.js";
import "../provider-catalog-COMYNKV2.js";
import "../provider-catalog-Bce8iOMh.js";
import "../provider-catalog-CPx35FBq.js";
import "../provider-catalog-Czll7Q5-.js";
import "../provider-catalog-BFvOY2Dt.js";
import "../provider-catalog-VZaye2Ib.js";
import { a as SELF_HOSTED_DEFAULT_COST, i as SELF_HOSTED_DEFAULT_CONTEXT_WINDOW, n as buildSglangProvider, o as SELF_HOSTED_DEFAULT_MAX_TOKENS, r as buildVllmProvider, t as buildOllamaProvider } from "../models-config.providers.discovery-oJl_MWQT.js";
import "../setup-binary-Tg8N6z5q.js";
import "../provider-auth-helpers-CfaQ5Xn6.js";
import "../upsert-with-lock-C1q_OPtB.js";
import "../setup-browser-BIeLOo-O.js";
import { i as promptAndConfigureOllama, n as configureOllamaNonInteractive, r as ensureOllamaModelPulled, t as OLLAMA_DEFAULT_MODEL } from "../provider-ollama-setup-BBlr-G8v.js";
import { a as promptAndConfigureOpenAICompatibleSelfHostedProviderAuth, i as promptAndConfigureOpenAICompatibleSelfHostedProvider, n as configureOpenAICompatibleSelfHostedProviderNonInteractive, r as discoverOpenAICompatibleSelfHostedProvider, t as applyProviderDefaultModel } from "../provider-self-hosted-setup-BjN3qdXc.js";
//#region src/plugins/provider-vllm-setup.ts
const VLLM_DEFAULT_CONTEXT_WINDOW = SELF_HOSTED_DEFAULT_CONTEXT_WINDOW;
const VLLM_DEFAULT_MAX_TOKENS = SELF_HOSTED_DEFAULT_MAX_TOKENS;
const VLLM_DEFAULT_COST = SELF_HOSTED_DEFAULT_COST;
async function promptAndConfigureVllm(params) {
	const result = await promptAndConfigureOpenAICompatibleSelfHostedProvider({
		cfg: params.cfg,
		prompter: params.prompter,
		providerId: "vllm",
		providerLabel: VLLM_PROVIDER_LABEL,
		defaultBaseUrl: VLLM_DEFAULT_BASE_URL,
		defaultApiKeyEnvVar: VLLM_DEFAULT_API_KEY_ENV_VAR,
		modelPlaceholder: VLLM_MODEL_PLACEHOLDER
	});
	return {
		config: result.config,
		modelId: result.modelId,
		modelRef: result.modelRef
	};
}
//#endregion
export { OLLAMA_DEFAULT_BASE_URL, OLLAMA_DEFAULT_MODEL, SELF_HOSTED_DEFAULT_CONTEXT_WINDOW, SELF_HOSTED_DEFAULT_COST, SELF_HOSTED_DEFAULT_MAX_TOKENS, VLLM_DEFAULT_BASE_URL, VLLM_DEFAULT_CONTEXT_WINDOW, VLLM_DEFAULT_COST, VLLM_DEFAULT_MAX_TOKENS, applyProviderDefaultModel, buildOllamaProvider, buildSglangProvider, buildVllmProvider, configureOllamaNonInteractive, configureOpenAICompatibleSelfHostedProviderNonInteractive, discoverOpenAICompatibleSelfHostedProvider, ensureOllamaModelPulled, promptAndConfigureOllama, promptAndConfigureOpenAICompatibleSelfHostedProvider, promptAndConfigureOpenAICompatibleSelfHostedProviderAuth, promptAndConfigureVllm };
