import { D as KILOCODE_BASE_URL, N as KILOCODE_DEFAULT_MODEL_REF } from "./provider-model-definitions-CrItEa-O.js";
import { t as buildKilocodeProvider } from "./provider-catalog-DzIvFdfj.js";
import { d as createModelCatalogPresetAppliers } from "./provider-onboarding-config-BgvKO-O4.js";
//#region extensions/kilocode/onboard.ts
const kilocodePresetAppliers = createModelCatalogPresetAppliers({
	primaryModelRef: KILOCODE_DEFAULT_MODEL_REF,
	resolveParams: (_cfg) => ({
		providerId: "kilocode",
		api: "openai-completions",
		baseUrl: KILOCODE_BASE_URL,
		catalogModels: buildKilocodeProvider().models ?? [],
		aliases: [{
			modelRef: KILOCODE_DEFAULT_MODEL_REF,
			alias: "Kilo Gateway"
		}]
	})
});
function applyKilocodeProviderConfig(cfg) {
	return kilocodePresetAppliers.applyProviderConfig(cfg);
}
function applyKilocodeConfig(cfg) {
	return kilocodePresetAppliers.applyConfig(cfg);
}
//#endregion
export { applyKilocodeProviderConfig as n, applyKilocodeConfig as t };
