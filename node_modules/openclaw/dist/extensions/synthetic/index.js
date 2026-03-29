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
import { I as SYNTHETIC_DEFAULT_MODEL_REF } from "../../provider-models-GbpUTgQg.js";
import { t as buildSyntheticProvider } from "../../provider-catalog-Bce8iOMh.js";
import "../../provider-api-key-auth-CZlY5wAT.js";
import { t as defineSingleProviderPluginEntry } from "../../provider-entry-DVpTMobV.js";
import "../../provider-onboard-DmLoftpN.js";
import { t as applySyntheticConfig } from "../../onboard-DcvatCHh.js";
var synthetic_default = defineSingleProviderPluginEntry({
	id: "synthetic",
	name: "Synthetic Provider",
	description: "Bundled Synthetic provider plugin",
	provider: {
		label: "Synthetic",
		docsPath: "/providers/synthetic",
		auth: [{
			methodId: "api-key",
			label: "Synthetic API key",
			hint: "Anthropic-compatible (multi-model)",
			optionKey: "syntheticApiKey",
			flagName: "--synthetic-api-key",
			envVar: "SYNTHETIC_API_KEY",
			promptMessage: "Enter Synthetic API key",
			defaultModel: SYNTHETIC_DEFAULT_MODEL_REF,
			applyConfig: (cfg) => applySyntheticConfig(cfg)
		}],
		catalog: { buildProvider: buildSyntheticProvider }
	}
});
//#endregion
export { synthetic_default as default };
