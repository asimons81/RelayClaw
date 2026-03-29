import { ox as defineChannelPluginEntry } from "./pi-embedded-BaSvmUpW.js";
import { t as zaloPlugin } from "./channel-BPKz0qDU.js";
import { n as setZaloRuntime } from "./runtime-BO7jm8nV.js";
//#region extensions/zalo/index.ts
var zalo_default = defineChannelPluginEntry({
	id: "zalo",
	name: "Zalo",
	description: "Zalo channel plugin",
	plugin: zaloPlugin,
	setRuntime: setZaloRuntime
});
//#endregion
export { zalo_default as t };
