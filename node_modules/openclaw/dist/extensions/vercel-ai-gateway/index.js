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
import { t as buildVercelAiGatewayProvider } from "../../provider-catalog-BFvOY2Dt.js";
import "../../provider-api-key-auth-CZlY5wAT.js";
import { t as defineSingleProviderPluginEntry } from "../../provider-entry-DVpTMobV.js";
import { n as applyVercelAiGatewayConfig, t as VERCEL_AI_GATEWAY_DEFAULT_MODEL_REF } from "../../provider-onboard-DmLoftpN.js";
var vercel_ai_gateway_default = defineSingleProviderPluginEntry({
	id: "vercel-ai-gateway",
	name: "Vercel AI Gateway Provider",
	description: "Bundled Vercel AI Gateway provider plugin",
	provider: {
		label: "Vercel AI Gateway",
		docsPath: "/providers/vercel-ai-gateway",
		auth: [{
			methodId: "api-key",
			label: "Vercel AI Gateway API key",
			hint: "API key",
			optionKey: "aiGatewayApiKey",
			flagName: "--ai-gateway-api-key",
			envVar: "AI_GATEWAY_API_KEY",
			promptMessage: "Enter Vercel AI Gateway API key",
			defaultModel: VERCEL_AI_GATEWAY_DEFAULT_MODEL_REF,
			applyConfig: (cfg) => applyVercelAiGatewayConfig(cfg),
			wizard: {
				choiceId: "ai-gateway-api-key",
				groupId: "ai-gateway"
			}
		}],
		catalog: { buildProvider: buildVercelAiGatewayProvider }
	}
});
//#endregion
export { vercel_ai_gateway_default as default };
