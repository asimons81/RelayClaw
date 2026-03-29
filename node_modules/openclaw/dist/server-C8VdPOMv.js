import "./redact-BDinS1q9.js";
import "./errors-BxyFnvP3.js";
import { O as loadConfig, o as createSubsystemLogger } from "./env-D1ktUnAV.js";
import "./paths-CjuwkA2v.js";
import "./safe-text-K2Nonoo3.js";
import "./tmp-openclaw-dir-DzRxfh9a.js";
import "./theme-BH5F9mlg.js";
import "./version-DGzLsBG-.js";
import "./zod-schema.agent-runtime-DNndkpI8.js";
import "./runtime-BF_KUcJM.js";
import "./registry-bOiEdffE.js";
import "./ip-ByO4-_4f.js";
import "./audit-fs-7IxnGQxG.js";
import "./resolve-DqJVzTVp.js";
import "./tailscale-FHZADwLL.js";
import "./tailnet-BPCtbdja.js";
import "./net-1LAzWzJc.js";
import "./auth-BC0t_CEl.js";
import "./credentials-6hokf6e3.js";
import "./ports-lsof-qBGFcQvX.js";
import "./ports-DF41F7NN.js";
import "./image-ops-xftchR8Z.js";
import "./path-alias-guards-BfUEa8Z8.js";
import "./mime-Bwp1UQ_8.js";
import "./ssrf-BdAu1_OT.js";
import "./fs-safe-DpC9pe80.js";
import { D as createBrowserRuntimeState, O as stopBrowserRuntime, Q as resolveBrowserControlAuth, Z as ensureBrowserControlAuth, k as createBrowserRouteContext, r as registerBrowserRoutes } from "./client-fetch-rOaJaND5.js";
import { n as resolveBrowserConfig } from "./config-B6bjVdCF.js";
import { n as installBrowserCommonMiddleware, t as installBrowserAuthMiddleware } from "./server-middleware-DUIlEnG_.js";
import express from "express";
//#region src/browser/server.ts
let state = null;
const logServer = createSubsystemLogger("browser").child("server");
async function startBrowserControlServerFromConfig() {
	if (state) return state;
	const cfg = loadConfig();
	const resolved = resolveBrowserConfig(cfg.browser, cfg);
	if (!resolved.enabled) return null;
	let browserAuth = resolveBrowserControlAuth(cfg);
	let browserAuthBootstrapFailed = false;
	try {
		const ensured = await ensureBrowserControlAuth({ cfg });
		browserAuth = ensured.auth;
		if (ensured.generatedToken) logServer.info("No browser auth configured; generated gateway.auth.token automatically.");
	} catch (err) {
		logServer.warn(`failed to auto-configure browser auth: ${String(err)}`);
		browserAuthBootstrapFailed = true;
	}
	if (browserAuthBootstrapFailed && !browserAuth.token && !browserAuth.password) {
		logServer.error("browser control startup aborted: authentication bootstrap failed and no fallback auth is configured.");
		return null;
	}
	const app = express();
	installBrowserCommonMiddleware(app);
	installBrowserAuthMiddleware(app, browserAuth);
	registerBrowserRoutes(app, createBrowserRouteContext({
		getState: () => state,
		refreshConfigFromDisk: true
	}));
	const port = resolved.controlPort;
	const server = await new Promise((resolve, reject) => {
		const s = app.listen(port, "127.0.0.1", () => resolve(s));
		s.once("error", reject);
	}).catch((err) => {
		logServer.error(`openclaw browser server failed to bind 127.0.0.1:${port}: ${String(err)}`);
		return null;
	});
	if (!server) return null;
	state = await createBrowserRuntimeState({
		server,
		port,
		resolved,
		onWarn: (message) => logServer.warn(message)
	});
	const authMode = browserAuth.token ? "token" : browserAuth.password ? "password" : "off";
	logServer.info(`Browser control listening on http://127.0.0.1:${port}/ (auth=${authMode})`);
	return state;
}
async function stopBrowserControlServer() {
	await stopBrowserRuntime({
		current: state,
		getState: () => state,
		clearState: () => {
			state = null;
		},
		closeServer: true,
		onWarn: (message) => logServer.warn(message)
	});
}
//#endregion
export { startBrowserControlServerFromConfig, stopBrowserControlServer };
