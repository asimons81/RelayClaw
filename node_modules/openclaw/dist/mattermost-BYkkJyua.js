import { ox as defineChannelPluginEntry } from "./pi-embedded-BaSvmUpW.js";
import { n as registerSlashCommandRoute, r as setMattermostRuntime, t as mattermostPlugin } from "./channel-Dhl-5Tbx.js";
//#region extensions/mattermost/index.ts
var mattermost_default = defineChannelPluginEntry({
	id: "mattermost",
	name: "Mattermost",
	description: "Mattermost channel plugin",
	plugin: mattermostPlugin,
	setRuntime: setMattermostRuntime,
	registerFull(api) {
		registerSlashCommandRoute(api);
	}
});
//#endregion
export { mattermost_default as t };
