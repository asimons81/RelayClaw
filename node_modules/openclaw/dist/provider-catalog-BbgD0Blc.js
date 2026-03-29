import { t as XAI_BASE_URL, u as buildXaiCatalogModels } from "./model-definitions-CLlu-y8L.js";
//#region extensions/xai/provider-catalog.ts
function buildXaiProvider(api = "openai-completions") {
	return {
		baseUrl: XAI_BASE_URL,
		api,
		models: buildXaiCatalogModels()
	};
}
//#endregion
export { buildXaiProvider as t };
