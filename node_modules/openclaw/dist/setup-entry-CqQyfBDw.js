import { Ca as lineSetupWizard, sx as defineSetupPluginEntry, wa as lineSetupAdapter } from "./pi-embedded-BaSvmUpW.js";
import { t as lineChannelPluginCommon } from "./channel-shared-9rJGBoos.js";
//#region extensions/line/src/channel.setup.ts
const lineSetupPlugin = {
	id: "line",
	...lineChannelPluginCommon,
	setupWizard: lineSetupWizard,
	setup: lineSetupAdapter
};
//#endregion
//#region extensions/line/setup-entry.ts
var setup_entry_default = defineSetupPluginEntry(lineSetupPlugin);
//#endregion
export { lineSetupPlugin as n, setup_entry_default as t };
