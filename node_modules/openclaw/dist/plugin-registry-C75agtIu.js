import { O as loadConfig, bi as resolveDefaultAgentId, o as createSubsystemLogger, yi as resolveAgentWorkspaceDir } from "./env-D1ktUnAV.js";
import { n as getActivePluginRegistry } from "./runtime-BF_KUcJM.js";
import { gt as loadOpenClawPlugins } from "./pi-embedded-BaSvmUpW.js";
import { n as resolveConfiguredChannelPluginIds, t as resolveChannelPluginIds } from "./channel-plugin-ids-wy-st73s.js";
//#region src/cli/plugin-registry.ts
const log = createSubsystemLogger("plugins");
let pluginRegistryLoaded = "none";
function scopeRank(scope) {
	switch (scope) {
		case "none": return 0;
		case "configured-channels": return 1;
		case "channels": return 2;
		case "all": return 3;
	}
}
function ensurePluginRegistryLoaded(options) {
	const scope = options?.scope ?? "all";
	if (scopeRank(pluginRegistryLoaded) >= scopeRank(scope)) return;
	const active = getActivePluginRegistry();
	if (pluginRegistryLoaded === "none" && active && (active.plugins.length > 0 || active.channels.length > 0 || active.tools.length > 0)) {
		pluginRegistryLoaded = "all";
		return;
	}
	const config = loadConfig();
	const workspaceDir = resolveAgentWorkspaceDir(config, resolveDefaultAgentId(config));
	loadOpenClawPlugins({
		config,
		workspaceDir,
		logger: {
			info: (msg) => log.info(msg),
			warn: (msg) => log.warn(msg),
			error: (msg) => log.error(msg),
			debug: (msg) => log.debug(msg)
		},
		throwOnLoadError: true,
		...scope === "configured-channels" ? { onlyPluginIds: resolveConfiguredChannelPluginIds({
			config,
			workspaceDir,
			env: process.env
		}) } : scope === "channels" ? { onlyPluginIds: resolveChannelPluginIds({
			config,
			workspaceDir,
			env: process.env
		}) } : {}
	});
	pluginRegistryLoaded = scope;
}
//#endregion
export { ensurePluginRegistryLoaded as t };
