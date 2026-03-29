import { sx as defineSetupPluginEntry } from "./pi-embedded-BaSvmUpW.js";
import { r as discordSetupAdapter } from "./setup-core-Dsnd4Ql4.js";
import { t as createDiscordPluginBase } from "./shared-Dg73H1hO.js";
//#region extensions/discord/src/channel.setup.ts
const discordSetupPlugin = { ...createDiscordPluginBase({ setup: discordSetupAdapter }) };
//#endregion
//#region extensions/discord/setup-entry.ts
var setup_entry_default = defineSetupPluginEntry(discordSetupPlugin);
//#endregion
export { discordSetupPlugin as n, setup_entry_default as t };
