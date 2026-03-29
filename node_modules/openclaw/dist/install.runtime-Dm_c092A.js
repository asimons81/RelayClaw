import { At as checkMinHostVersion, Kt as detectBundleManifestFormat, Qt as resolvePackageExtensionEntries, Vt as isPathInside, Xt as getPackageManifestMetadata, Zt as loadPluginManifest, qt as loadBundleManifest } from "./env-D1ktUnAV.js";
import "./paths-CjuwkA2v.js";
import "./safe-text-K2Nonoo3.js";
import "./tmp-openclaw-dir-DzRxfh9a.js";
import "./theme-BH5F9mlg.js";
import { o as resolveRuntimeServiceVersion } from "./version-DGzLsBG-.js";
import "./zod-schema.agent-runtime-DNndkpI8.js";
import "./runtime-BF_KUcJM.js";
import "./registry-bOiEdffE.js";
import "./ip-ByO4-_4f.js";
import "./path-alias-guards-BfUEa8Z8.js";
import { a as resolveArchiveKind, i as readJsonFile, r as fileExists } from "./archive-Oi0PB5pw.js";
import { d as writeFileFromPathWithinRoot } from "./fs-safe-DpC9pe80.js";
import { i as validateRegistryNpmSpec } from "./npm-registry-spec-DpKYq7zh.js";
import { r as resolveArchiveSourcePath } from "./install-source-utils-D_zHPlMh.js";
import { i as withExtractedArchiveRoot, r as resolveExistingInstallPath, t as installPackageDir } from "./install-package-dir-CVSm9E_b.js";
import { a as finalizeNpmSpecArchiveInstall, i as resolveTimedInstallModeOptions, n as resolveCanonicalInstallTarget, o as installFromNpmSpecArchiveWithInstaller, r as resolveInstallModeOptions, t as ensureInstallTargetAvailable } from "./install-target-BlxzNE_T.js";
//#region src/plugins/install-security-scan.ts
async function loadInstallSecurityScanRuntime() {
	return await import("./install-security-scan.runtime-BjPBoqB1.js");
}
async function scanBundleInstallSource(params) {
	const { scanBundleInstallSourceRuntime } = await loadInstallSecurityScanRuntime();
	await scanBundleInstallSourceRuntime(params);
}
async function scanPackageInstallSource(params) {
	const { scanPackageInstallSourceRuntime } = await loadInstallSecurityScanRuntime();
	await scanPackageInstallSourceRuntime(params);
}
//#endregion
export { checkMinHostVersion, detectBundleManifestFormat, ensureInstallTargetAvailable, fileExists, finalizeNpmSpecArchiveInstall, getPackageManifestMetadata, installFromNpmSpecArchiveWithInstaller, installPackageDir, isPathInside, loadBundleManifest, loadPluginManifest, readJsonFile, resolveArchiveKind, resolveArchiveSourcePath, resolveCanonicalInstallTarget, resolveExistingInstallPath, resolveInstallModeOptions, resolvePackageExtensionEntries, resolveRuntimeServiceVersion, resolveTimedInstallModeOptions, scanBundleInstallSource, scanPackageInstallSource, validateRegistryNpmSpec, withExtractedArchiveRoot, writeFileFromPathWithinRoot };
