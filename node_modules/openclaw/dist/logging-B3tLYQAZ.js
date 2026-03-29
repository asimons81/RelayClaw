import { Ma as displayPath, T as createConfigIO } from "./env-D1ktUnAV.js";
//#region src/config/logging.ts
function formatConfigPath(path = createConfigIO().configPath) {
	return displayPath(path);
}
function logConfigUpdated(runtime, opts = {}) {
	const path = formatConfigPath(opts.path ?? createConfigIO().configPath);
	const suffix = opts.suffix ? ` ${opts.suffix}` : "";
	runtime.log(`Updated ${path}${suffix}`);
}
//#endregion
export { logConfigUpdated as n, formatConfigPath as t };
