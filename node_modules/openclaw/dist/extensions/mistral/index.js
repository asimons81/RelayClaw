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
import "../../paths-DJBuCoRE.js";
import "../../file-lock-Cm3HPowf.js";
import "../../profiles-CRvutsjq.js";
import "../../anthropic-vertex-provider-Cik2BDhe.js";
import "../../provider-model-definitions-CrItEa-O.js";
import "../../provider-models-GbpUTgQg.js";
import "../../ssrf-BdAu1_OT.js";
import "../../fetch-guard-BiSGgjb-.js";
import "../../provider-api-key-auth-CZlY5wAT.js";
import "../../media-understanding-C8oVavar.js";
import { t as defineSingleProviderPluginEntry } from "../../provider-entry-DVpTMobV.js";
import "../../provider-onboard-DmLoftpN.js";
import { t as mistralMediaUnderstandingProvider } from "../../media-understanding-provider-CpO1sur4.js";
import "../../model-definitions-zm4BGwK_.js";
import { n as applyMistralConfig, t as MISTRAL_DEFAULT_MODEL_REF } from "../../onboard-BNNjhr6V.js";
import { t as buildMistralProvider } from "../../provider-catalog-BQAS34Zw.js";
var mistral_default = defineSingleProviderPluginEntry({
	id: "mistral",
	name: "Mistral Provider",
	description: "Bundled Mistral provider plugin",
	provider: {
		label: "Mistral",
		docsPath: "/providers/models",
		auth: [{
			methodId: "api-key",
			label: "Mistral API key",
			hint: "API key",
			optionKey: "mistralApiKey",
			flagName: "--mistral-api-key",
			envVar: "MISTRAL_API_KEY",
			promptMessage: "Enter Mistral API key",
			defaultModel: MISTRAL_DEFAULT_MODEL_REF,
			applyConfig: (cfg) => applyMistralConfig(cfg),
			wizard: { groupLabel: "Mistral AI" }
		}],
		catalog: {
			buildProvider: buildMistralProvider,
			allowExplicitBaseUrl: true
		},
		capabilities: {
			transcriptToolCallIdMode: "strict9",
			transcriptToolCallIdModelHints: [
				"mistral",
				"mixtral",
				"codestral",
				"pixtral",
				"devstral",
				"ministral",
				"mistralai"
			]
		}
	},
	register(api) {
		api.registerMediaUnderstandingProvider(mistralMediaUnderstandingProvider);
	}
});
//#endregion
export { mistral_default as default };
