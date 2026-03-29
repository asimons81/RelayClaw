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
import { S as applyXaiModelCompat } from "../../provider-model-definitions-CrItEa-O.js";
import { C as VENICE_DEFAULT_MODEL_REF } from "../../provider-models-GbpUTgQg.js";
import { t as buildVeniceProvider } from "../../provider-catalog-Czll7Q5-.js";
import "../../provider-api-key-auth-CZlY5wAT.js";
import { t as defineSingleProviderPluginEntry } from "../../provider-entry-DVpTMobV.js";
import "../../provider-onboard-DmLoftpN.js";
import { t as applyVeniceConfig } from "../../onboard-BdI3UPhS.js";
//#region extensions/venice/index.ts
const PROVIDER_ID = "venice";
function isXaiBackedVeniceModel(modelId) {
	return modelId.trim().toLowerCase().includes("grok");
}
var venice_default = defineSingleProviderPluginEntry({
	id: PROVIDER_ID,
	name: "Venice Provider",
	description: "Bundled Venice provider plugin",
	provider: {
		label: "Venice",
		docsPath: "/providers/venice",
		auth: [{
			methodId: "api-key",
			label: "Venice AI API key",
			hint: "Privacy-focused (uncensored models)",
			optionKey: "veniceApiKey",
			flagName: "--venice-api-key",
			envVar: "VENICE_API_KEY",
			promptMessage: "Enter Venice AI API key",
			defaultModel: VENICE_DEFAULT_MODEL_REF,
			applyConfig: (cfg) => applyVeniceConfig(cfg),
			noteMessage: [
				"Venice AI provides privacy-focused inference with uncensored models.",
				"Get your API key at: https://venice.ai/settings/api",
				"Supports 'private' (fully private) and 'anonymized' (proxy) modes."
			].join("\n"),
			noteTitle: "Venice AI",
			wizard: { groupLabel: "Venice AI" }
		}],
		catalog: { buildProvider: buildVeniceProvider },
		normalizeResolvedModel: ({ modelId, model }) => isXaiBackedVeniceModel(modelId) ? applyXaiModelCompat(model) : void 0
	}
});
//#endregion
export { venice_default as default };
