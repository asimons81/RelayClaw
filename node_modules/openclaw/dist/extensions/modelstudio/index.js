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
import { i as MODELSTUDIO_DEFAULT_MODEL_REF } from "../../provider-model-definitions-CrItEa-O.js";
import "../../provider-models-GbpUTgQg.js";
import { r as buildModelStudioProvider } from "../../provider-catalog-ChNRXv-H.js";
import "../../provider-api-key-auth-CZlY5wAT.js";
import { t as defineSingleProviderPluginEntry } from "../../provider-entry-DVpTMobV.js";
import "../../provider-onboard-DmLoftpN.js";
import "../../model-definitions-6KkKevYd.js";
import { a as applyModelStudioStandardConfig, n as applyModelStudioConfigCn, o as applyModelStudioStandardConfigCn, t as applyModelStudioConfig } from "../../onboard-Cpy6U-s5.js";
var modelstudio_default = defineSingleProviderPluginEntry({
	id: "modelstudio",
	name: "Model Studio Provider",
	description: "Bundled Model Studio provider plugin",
	provider: {
		label: "Model Studio",
		docsPath: "/providers/models",
		auth: [
			{
				methodId: "standard-api-key-cn",
				label: "Standard API Key for China (pay-as-you-go)",
				hint: "Endpoint: dashscope.aliyuncs.com",
				optionKey: "modelstudioStandardApiKeyCn",
				flagName: "--modelstudio-standard-api-key-cn",
				envVar: "MODELSTUDIO_API_KEY",
				promptMessage: "Enter Alibaba Cloud Model Studio API key (China)",
				defaultModel: MODELSTUDIO_DEFAULT_MODEL_REF,
				applyConfig: (cfg) => applyModelStudioStandardConfigCn(cfg),
				noteMessage: [
					"Get your API key at: https://bailian.console.aliyun.com/",
					"Endpoint: dashscope.aliyuncs.com/compatible-mode/v1",
					"Models: qwen3.5-plus, qwen3-coder-plus, qwen3-coder-next, etc."
				].join("\n"),
				noteTitle: "Alibaba Cloud Model Studio Standard (China)",
				wizard: {
					choiceHint: "Endpoint: dashscope.aliyuncs.com",
					groupLabel: "Qwen (Alibaba Cloud Model Studio)",
					groupHint: "Standard / Coding Plan (CN / Global)"
				}
			},
			{
				methodId: "standard-api-key",
				label: "Standard API Key for Global/Intl (pay-as-you-go)",
				hint: "Endpoint: dashscope-intl.aliyuncs.com",
				optionKey: "modelstudioStandardApiKey",
				flagName: "--modelstudio-standard-api-key",
				envVar: "MODELSTUDIO_API_KEY",
				promptMessage: "Enter Alibaba Cloud Model Studio API key (Global/Intl)",
				defaultModel: MODELSTUDIO_DEFAULT_MODEL_REF,
				applyConfig: (cfg) => applyModelStudioStandardConfig(cfg),
				noteMessage: [
					"Get your API key at: https://modelstudio.console.alibabacloud.com/",
					"Endpoint: dashscope-intl.aliyuncs.com/compatible-mode/v1",
					"Models: qwen3.5-plus, qwen3-coder-plus, qwen3-coder-next, etc."
				].join("\n"),
				noteTitle: "Alibaba Cloud Model Studio Standard (Global/Intl)",
				wizard: {
					choiceHint: "Endpoint: dashscope-intl.aliyuncs.com",
					groupLabel: "Qwen (Alibaba Cloud Model Studio)",
					groupHint: "Standard / Coding Plan (CN / Global)"
				}
			},
			{
				methodId: "api-key-cn",
				label: "Coding Plan API Key for China (subscription)",
				hint: "Endpoint: coding.dashscope.aliyuncs.com",
				optionKey: "modelstudioApiKeyCn",
				flagName: "--modelstudio-api-key-cn",
				envVar: "MODELSTUDIO_API_KEY",
				promptMessage: "Enter Alibaba Cloud Model Studio Coding Plan API key (China)",
				defaultModel: MODELSTUDIO_DEFAULT_MODEL_REF,
				applyConfig: (cfg) => applyModelStudioConfigCn(cfg),
				noteMessage: [
					"Get your API key at: https://bailian.console.aliyun.com/",
					"Endpoint: coding.dashscope.aliyuncs.com",
					"Models: qwen3.5-plus, glm-5, kimi-k2.5, MiniMax-M2.5, etc."
				].join("\n"),
				noteTitle: "Alibaba Cloud Model Studio Coding Plan (China)",
				wizard: {
					choiceHint: "Endpoint: coding.dashscope.aliyuncs.com",
					groupLabel: "Qwen (Alibaba Cloud Model Studio)",
					groupHint: "Standard / Coding Plan (CN / Global)"
				}
			},
			{
				methodId: "api-key",
				label: "Coding Plan API Key for Global/Intl (subscription)",
				hint: "Endpoint: coding-intl.dashscope.aliyuncs.com",
				optionKey: "modelstudioApiKey",
				flagName: "--modelstudio-api-key",
				envVar: "MODELSTUDIO_API_KEY",
				promptMessage: "Enter Alibaba Cloud Model Studio Coding Plan API key (Global/Intl)",
				defaultModel: MODELSTUDIO_DEFAULT_MODEL_REF,
				applyConfig: (cfg) => applyModelStudioConfig(cfg),
				noteMessage: [
					"Get your API key at: https://bailian.console.aliyun.com/",
					"Endpoint: coding-intl.dashscope.aliyuncs.com",
					"Models: qwen3.5-plus, glm-5, kimi-k2.5, MiniMax-M2.5, etc."
				].join("\n"),
				noteTitle: "Alibaba Cloud Model Studio Coding Plan (Global/Intl)",
				wizard: {
					choiceHint: "Endpoint: coding-intl.dashscope.aliyuncs.com",
					groupLabel: "Qwen (Alibaba Cloud Model Studio)",
					groupHint: "Standard / Coding Plan (CN / Global)"
				}
			}
		],
		catalog: {
			buildProvider: buildModelStudioProvider,
			allowExplicitBaseUrl: true
		}
	}
});
//#endregion
export { modelstudio_default as default };
