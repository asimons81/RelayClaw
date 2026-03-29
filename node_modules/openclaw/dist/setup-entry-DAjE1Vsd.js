import { sx as defineSetupPluginEntry } from "./pi-embedded-BaSvmUpW.js";
import { a as imessageSetupAdapter } from "./setup-core-DBsq1T38.js";
import { r as imessageSetupWizard, t as createIMessagePluginBase } from "./shared-CwXtQWyb.js";
//#region extensions/imessage/src/channel.setup.ts
const imessageSetupPlugin = { ...createIMessagePluginBase({
	setupWizard: imessageSetupWizard,
	setup: imessageSetupAdapter
}) };
//#endregion
//#region extensions/imessage/setup-entry.ts
var setup_entry_default = defineSetupPluginEntry(imessageSetupPlugin);
//#endregion
export { imessageSetupPlugin as n, setup_entry_default as t };
