import "./redact-BDinS1q9.js";
import "./errors-BxyFnvP3.js";
import "./env-D1ktUnAV.js";
import "./paths-CjuwkA2v.js";
import "./safe-text-K2Nonoo3.js";
import "./tmp-openclaw-dir-DzRxfh9a.js";
import "./theme-BH5F9mlg.js";
import "./version-DGzLsBG-.js";
import "./zod-schema.agent-runtime-DNndkpI8.js";
import "./runtime-BF_KUcJM.js";
import "./registry-bOiEdffE.js";
import "./ip-ByO4-_4f.js";
import "./paths-DJBuCoRE.js";
import "./auth-profiles-XJahKVCp.js";
import "./provider-runtime.runtime-DOayHKEH.js";
import "./file-lock-Cm3HPowf.js";
import "./audit-fs-7IxnGQxG.js";
import "./resolve-DqJVzTVp.js";
import "./profiles-CRvutsjq.js";
import "./daemon-install-plan.shared-ddAnhVxS.js";
import "./runtime-paths-Du8UajUp.js";
import { n as buildGatewayInstallPlan, r as gatewayInstallErrorHint, t as resolveGatewayInstallToken } from "./gateway-install-token-DaSTpUzC.js";
import { r as isGatewayDaemonRuntime } from "./daemon-runtime-_44dBgK9.js";
import "./tailscale-FHZADwLL.js";
import "./tailnet-BPCtbdja.js";
import "./net-1LAzWzJc.js";
import "./auth-BC0t_CEl.js";
import "./credentials-6hokf6e3.js";
import "./message-channel-ZzTqBBLH.js";
import "./sessions-uRDRs4f-.js";
import "./plugins-h0t63KQW.js";
import "./paths-BEHCHyAI.js";
import "./delivery-context-oynQ_N5k.js";
import "./session-write-lock-B7nwE7de.js";
import "./method-scopes-DhuXuLfv.js";
import "./call-DTKTDk3E.js";
import "./control-ui-shared-DC20jeM6.js";
import "./detect-binary-78pS71eg.js";
import "./onboard-helpers-Dol668Y7.js";
import "./prompt-style-qxNRcnm3.js";
import "./ports-lsof-qBGFcQvX.js";
import "./restart-stale-pids-ciXEfnyN.js";
import "./runtime-parse-DXvKIjPm.js";
import "./launchd-ljiqPV9i.js";
import { r as resolveGatewayService } from "./service-mdsdTkvr.js";
import "./ports-DF41F7NN.js";
import { i as isSystemdUserServiceAvailable } from "./systemd-62-fJtxm.js";
import "./note-LPm85Buz.js";
import { n as ensureSystemdUserLingerNonInteractive } from "./systemd-linger-w2MAtmKo.js";
//#region src/commands/onboard-non-interactive/local/daemon-install.ts
async function installGatewayDaemonNonInteractive(params) {
	const { opts, runtime, port } = params;
	if (!opts.installDaemon) return { installed: false };
	const daemonRuntimeRaw = opts.daemonRuntime ?? "node";
	const systemdAvailable = process.platform === "linux" ? await isSystemdUserServiceAvailable() : true;
	if (process.platform === "linux" && !systemdAvailable) {
		runtime.log("Systemd user services are unavailable; skipping service install. Use a direct shell run (`openclaw gateway run`) or rerun without --install-daemon on this session.");
		return {
			installed: false,
			skippedReason: "systemd-user-unavailable"
		};
	}
	if (!isGatewayDaemonRuntime(daemonRuntimeRaw)) {
		runtime.error("Invalid --daemon-runtime (use node or bun)");
		runtime.exit(1);
		return { installed: false };
	}
	const service = resolveGatewayService();
	const tokenResolution = await resolveGatewayInstallToken({
		config: params.nextConfig,
		env: process.env
	});
	for (const warning of tokenResolution.warnings) runtime.log(warning);
	if (tokenResolution.unavailableReason) {
		runtime.error([
			"Gateway install blocked:",
			tokenResolution.unavailableReason,
			"Fix gateway auth config/token input and rerun setup."
		].join(" "));
		runtime.exit(1);
		return { installed: false };
	}
	const { programArguments, workingDirectory, environment } = await buildGatewayInstallPlan({
		env: process.env,
		port,
		runtime: daemonRuntimeRaw,
		warn: (message) => runtime.log(message),
		config: params.nextConfig
	});
	try {
		await service.install({
			env: process.env,
			stdout: process.stdout,
			programArguments,
			workingDirectory,
			environment
		});
	} catch (err) {
		runtime.error(`Gateway service install failed: ${String(err)}`);
		runtime.log(gatewayInstallErrorHint());
		return { installed: false };
	}
	await ensureSystemdUserLingerNonInteractive({ runtime });
	return { installed: true };
}
//#endregion
export { installGatewayDaemonNonInteractive };
