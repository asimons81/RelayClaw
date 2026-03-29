import "./env-D1ktUnAV.js";
import "./paths-CjuwkA2v.js";
import "./safe-text-K2Nonoo3.js";
import "./tmp-openclaw-dir-DzRxfh9a.js";
import "./theme-BH5F9mlg.js";
import "./version-DGzLsBG-.js";
import "./zod-schema.agent-runtime-DNndkpI8.js";
import "./runtime-BF_KUcJM.js";
import "./registry-bOiEdffE.js";
import "./ip-ByO4-_4f.js";
import "./paths-DJBuCoRE.js";
import "./file-lock-Cm3HPowf.js";
import "./profiles-CRvutsjq.js";
import "./provider-env-vars-BZwz5sMG.js";
import "./model-auth-env-BWzx2-YC.js";
import "./anthropic-vertex-provider-Cik2BDhe.js";
import { n as applyPrimaryModel } from "./provider-model-primary-CzTViwiy.js";
import "./provider-auth-ref-CkjXioxW.js";
import { i as normalizeApiKeyInput, n as ensureApiKeyFromOptionEnvOrPrompt, s as validateApiKeyInput } from "./provider-auth-input-DY2h0M4n.js";
import { n as buildApiKeyCredential, t as applyAuthProfileConfig } from "./provider-auth-helpers-CfaQ5Xn6.js";
//#region src/plugins/provider-api-key-auth.runtime.ts
const providerApiKeyAuthRuntime = {
	applyAuthProfileConfig,
	applyPrimaryModel,
	buildApiKeyCredential,
	ensureApiKeyFromOptionEnvOrPrompt,
	normalizeApiKeyInput,
	validateApiKeyInput
};
//#endregion
export { providerApiKeyAuthRuntime };
