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
import "./message-channel-ZzTqBBLH.js";
import { b as updateSessionStore } from "./sessions-uRDRs4f-.js";
import "./plugins-h0t63KQW.js";
import "./paths-BEHCHyAI.js";
import "./delivery-context-oynQ_N5k.js";
import "./session-write-lock-B7nwE7de.js";
import { n as hasAbortCutoff, t as applyAbortCutoffToSessionEntry } from "./abort-cutoff-CNrw5wk0.js";
//#region src/auto-reply/reply/abort-cutoff.runtime.ts
async function clearAbortCutoffInSessionRuntime(params) {
	const { sessionEntry, sessionStore, sessionKey, storePath } = params;
	if (!sessionEntry || !sessionStore || !sessionKey || !hasAbortCutoff(sessionEntry)) return false;
	applyAbortCutoffToSessionEntry(sessionEntry, void 0);
	sessionEntry.updatedAt = Date.now();
	sessionStore[sessionKey] = sessionEntry;
	if (storePath) await updateSessionStore(storePath, (store) => {
		const existing = store[sessionKey] ?? sessionEntry;
		if (!existing) return;
		applyAbortCutoffToSessionEntry(existing, void 0);
		existing.updatedAt = Date.now();
		store[sessionKey] = existing;
	});
	return true;
}
//#endregion
export { clearAbortCutoffInSessionRuntime };
