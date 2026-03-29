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
import { r as buildQianfanProvider } from "../../provider-catalog-CbmUNOJv2.js";
import "../../provider-api-key-auth-CZlY5wAT.js";
import { t as defineSingleProviderPluginEntry } from "../../provider-entry-DVpTMobV.js";
import "../../provider-onboard-DmLoftpN.js";
import { n as applyQianfanConfig, t as QIANFAN_DEFAULT_MODEL_REF } from "../../onboard-CSbKvjEH.js";
var qianfan_default = defineSingleProviderPluginEntry({
	id: "qianfan",
	name: "Qianfan Provider",
	description: "Bundled Qianfan provider plugin",
	provider: {
		label: "Qianfan",
		docsPath: "/providers/qianfan",
		auth: [{
			methodId: "api-key",
			label: "Qianfan API key",
			hint: "API key",
			optionKey: "qianfanApiKey",
			flagName: "--qianfan-api-key",
			envVar: "QIANFAN_API_KEY",
			promptMessage: "Enter Qianfan API key",
			defaultModel: QIANFAN_DEFAULT_MODEL_REF,
			applyConfig: (cfg) => applyQianfanConfig(cfg)
		}],
		catalog: { buildProvider: buildQianfanProvider }
	}
});
//#endregion
export { qianfan_default as default };
