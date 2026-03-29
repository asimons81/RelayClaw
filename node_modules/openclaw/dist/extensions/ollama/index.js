import "../../env-D1ktUnAV.js";
import "../../paths-CjuwkA2v.js";
import "../../safe-text-K2Nonoo3.js";
import "../../tmp-openclaw-dir-DzRxfh9a.js";
import "../../theme-BH5F9mlg.js";
import "../../version-DGzLsBG-.js";
import "../../zod-schema.agent-runtime-DNndkpI8.js";
import "../../runtime-BF_KUcJM.js";
import "../../registry-bOiEdffE.js";
import "../../ip-ByO4-_4f.js";
import "../../anthropic-vertex-provider-Cik2BDhe.js";
import "../../provider-model-definitions-CrItEa-O.js";
import { rt as resolveOllamaApiBase } from "../../provider-models-GbpUTgQg.js";
import { t as OLLAMA_DEFAULT_BASE_URL } from "../../ollama-defaults-BH8D2agd.js";
import { t as definePluginEntry } from "../../plugin-entry-CK-4XWE0.js";
//#region extensions/ollama/index.ts
const PROVIDER_ID = "ollama";
const DEFAULT_API_KEY = "ollama-local";
async function loadProviderSetup() {
	return await import("../../plugin-sdk/ollama-setup.js");
}
var ollama_default = definePluginEntry({
	id: "ollama",
	name: "Ollama Provider",
	description: "Bundled Ollama provider plugin",
	register(api) {
		api.registerProvider({
			id: PROVIDER_ID,
			label: "Ollama",
			docsPath: "/providers/ollama",
			envVars: ["OLLAMA_API_KEY"],
			auth: [{
				id: "local",
				label: "Ollama",
				hint: "Cloud and local open models",
				kind: "custom",
				run: async (ctx) => {
					const result = await (await loadProviderSetup()).promptAndConfigureOllama({
						cfg: ctx.config,
						prompter: ctx.prompter
					});
					return {
						profiles: [{
							profileId: "ollama:default",
							credential: {
								type: "api_key",
								provider: PROVIDER_ID,
								key: DEFAULT_API_KEY
							}
						}],
						configPatch: result.config
					};
				},
				runNonInteractive: async (ctx) => {
					return await (await loadProviderSetup()).configureOllamaNonInteractive({
						nextConfig: ctx.config,
						opts: ctx.opts,
						runtime: ctx.runtime
					});
				}
			}],
			discovery: {
				order: "late",
				run: async (ctx) => {
					const explicit = ctx.config.models?.providers?.ollama;
					const hasExplicitModels = Array.isArray(explicit?.models) && explicit.models.length > 0;
					const ollamaKey = ctx.resolveProviderApiKey(PROVIDER_ID).apiKey;
					if (hasExplicitModels && explicit) return { provider: {
						...explicit,
						baseUrl: typeof explicit.baseUrl === "string" && explicit.baseUrl.trim() ? resolveOllamaApiBase(explicit.baseUrl) : OLLAMA_DEFAULT_BASE_URL,
						api: explicit.api ?? "ollama",
						apiKey: ollamaKey ?? explicit.apiKey ?? DEFAULT_API_KEY
					} };
					const provider = await (await loadProviderSetup()).buildOllamaProvider(explicit?.baseUrl, { quiet: !ollamaKey && !explicit });
					if (provider.models.length === 0 && !ollamaKey && !explicit?.apiKey) return null;
					return { provider: {
						...provider,
						apiKey: ollamaKey ?? explicit?.apiKey ?? DEFAULT_API_KEY
					} };
				}
			},
			wizard: {
				setup: {
					choiceId: "ollama",
					choiceLabel: "Ollama",
					choiceHint: "Cloud and local open models",
					groupId: "ollama",
					groupLabel: "Ollama",
					groupHint: "Cloud and local open models",
					methodId: "local"
				},
				modelPicker: {
					label: "Ollama (custom)",
					hint: "Detect models from a local or remote Ollama instance",
					methodId: "local"
				}
			},
			onModelSelected: async ({ config, model, prompter }) => {
				if (!model.startsWith("ollama/")) return;
				await (await loadProviderSetup()).ensureOllamaModelPulled({
					config,
					model,
					prompter
				});
			}
		});
	}
});
//#endregion
export { ollama_default as default };
