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
import { t as buildTogetherProvider } from "../../provider-catalog-CPx35FBq.js";
import "../../provider-api-key-auth-CZlY5wAT.js";
import { t as defineSingleProviderPluginEntry } from "../../provider-entry-DVpTMobV.js";
import "../../provider-onboard-DmLoftpN.js";
import { n as applyTogetherConfig, t as TOGETHER_DEFAULT_MODEL_REF } from "../../onboard-B28HVPOs2.js";
var together_default = defineSingleProviderPluginEntry({
	id: "together",
	name: "Together Provider",
	description: "Bundled Together provider plugin",
	provider: {
		label: "Together",
		docsPath: "/providers/together",
		auth: [{
			methodId: "api-key",
			label: "Together AI API key",
			hint: "API key",
			optionKey: "togetherApiKey",
			flagName: "--together-api-key",
			envVar: "TOGETHER_API_KEY",
			promptMessage: "Enter Together AI API key",
			defaultModel: TOGETHER_DEFAULT_MODEL_REF,
			applyConfig: (cfg) => applyTogetherConfig(cfg),
			wizard: { groupLabel: "Together AI" }
		}],
		catalog: { buildProvider: buildTogetherProvider }
	}
});
//#endregion
export { together_default as default };
