import { bi as resolveDefaultAgentId, di as resolveAgentDir, wi as resolveSessionAgentId } from "./env-D1ktUnAV.js";
import "./paths-CjuwkA2v.js";
import "./safe-text-K2Nonoo3.js";
import "./tmp-openclaw-dir-DzRxfh9a.js";
import "./theme-BH5F9mlg.js";
import "./version-DGzLsBG-.js";
import "./configured-provider-fallback-C-XNRUP6.js";
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
import "./message-channel-ZzTqBBLH.js";
import { b as updateSessionStore } from "./sessions-uRDRs4f-.js";
import "./plugins-h0t63KQW.js";
import "./paths-BEHCHyAI.js";
import "./delivery-context-oynQ_N5k.js";
import "./session-write-lock-B7nwE7de.js";
import "./thinking-Me2S38se.js";
import { t as applyModelOverrideToSessionEntry } from "./model-overrides-BcLuYucW.js";
import { l as lookupCachedContextTokens, t as applyVerboseOverride } from "./level-overrides-CuN7Qk6r.js";
import { r as enqueueSystemEvent } from "./system-events-D_U3rn_H.js";
import { c as resolveModelSelectionFromDirective, n as enqueueModeSwitchEvents, t as canPersistInternalExecDirective } from "./directive-handling.shared-V0T_o_TT.js";
//#region src/auto-reply/reply/directive-handling.persist.ts
async function persistInlineDirectives(params) {
	const { directives, cfg, sessionEntry, sessionStore, sessionKey, storePath, elevatedEnabled, elevatedAllowed, defaultProvider, defaultModel, aliasIndex, allowedModelKeys, initialModelLabel, formatModelSwitchEvent, agentCfg } = params;
	let { provider, model } = params;
	const allowInternalExecPersistence = canPersistInternalExecDirective({
		surface: params.surface,
		gatewayClientScopes: params.gatewayClientScopes
	});
	const activeAgentId = sessionKey ? resolveSessionAgentId({
		sessionKey,
		config: cfg
	}) : resolveDefaultAgentId(cfg);
	const agentDir = params.agentDir ?? resolveAgentDir(cfg, activeAgentId);
	if (sessionEntry && sessionStore && sessionKey) {
		const prevElevatedLevel = sessionEntry.elevatedLevel ?? agentCfg?.elevatedDefault ?? (elevatedAllowed ? "on" : "off");
		const prevReasoningLevel = sessionEntry.reasoningLevel ?? "off";
		let elevatedChanged = directives.hasElevatedDirective && directives.elevatedLevel !== void 0 && elevatedEnabled && elevatedAllowed;
		let reasoningChanged = directives.hasReasoningDirective && directives.reasoningLevel !== void 0;
		let updated = false;
		if (directives.hasThinkDirective && directives.thinkLevel) {
			sessionEntry.thinkingLevel = directives.thinkLevel;
			updated = true;
		}
		if (directives.hasVerboseDirective && directives.verboseLevel) {
			applyVerboseOverride(sessionEntry, directives.verboseLevel);
			updated = true;
		}
		if (directives.hasReasoningDirective && directives.reasoningLevel) {
			if (directives.reasoningLevel === "off") sessionEntry.reasoningLevel = "off";
			else sessionEntry.reasoningLevel = directives.reasoningLevel;
			reasoningChanged = reasoningChanged || directives.reasoningLevel !== prevReasoningLevel && directives.reasoningLevel !== void 0;
			updated = true;
		}
		if (directives.hasElevatedDirective && directives.elevatedLevel && elevatedEnabled && elevatedAllowed) {
			sessionEntry.elevatedLevel = directives.elevatedLevel;
			elevatedChanged = elevatedChanged || directives.elevatedLevel !== prevElevatedLevel && directives.elevatedLevel !== void 0;
			updated = true;
		}
		if (directives.hasExecDirective && directives.hasExecOptions && allowInternalExecPersistence) {
			if (directives.execHost) {
				sessionEntry.execHost = directives.execHost;
				updated = true;
			}
			if (directives.execSecurity) {
				sessionEntry.execSecurity = directives.execSecurity;
				updated = true;
			}
			if (directives.execAsk) {
				sessionEntry.execAsk = directives.execAsk;
				updated = true;
			}
			if (directives.execNode) {
				sessionEntry.execNode = directives.execNode;
				updated = true;
			}
		}
		const modelDirective = directives.hasModelDirective && params.effectiveModelDirective ? params.effectiveModelDirective : void 0;
		if (modelDirective) {
			const modelResolution = resolveModelSelectionFromDirective({
				directives: {
					...directives,
					hasModelDirective: true,
					rawModelDirective: modelDirective
				},
				cfg,
				agentDir,
				defaultProvider,
				defaultModel,
				aliasIndex,
				allowedModelKeys,
				allowedModelCatalog: [],
				provider
			});
			if (modelResolution.modelSelection) {
				const { updated: modelUpdated } = applyModelOverrideToSessionEntry({
					entry: sessionEntry,
					selection: modelResolution.modelSelection,
					profileOverride: modelResolution.profileOverride
				});
				provider = modelResolution.modelSelection.provider;
				model = modelResolution.modelSelection.model;
				const nextLabel = `${provider}/${model}`;
				if (nextLabel !== initialModelLabel) enqueueSystemEvent(formatModelSwitchEvent(nextLabel, modelResolution.modelSelection.alias), {
					sessionKey,
					contextKey: `model:${nextLabel}`
				});
				updated = updated || modelUpdated;
			}
		}
		if (directives.hasQueueDirective && directives.queueReset) {
			delete sessionEntry.queueMode;
			delete sessionEntry.queueDebounceMs;
			delete sessionEntry.queueCap;
			delete sessionEntry.queueDrop;
			updated = true;
		}
		if (updated) {
			sessionEntry.updatedAt = Date.now();
			sessionStore[sessionKey] = sessionEntry;
			if (storePath) await updateSessionStore(storePath, (store) => {
				store[sessionKey] = sessionEntry;
			});
			enqueueModeSwitchEvents({
				enqueueSystemEvent,
				sessionEntry,
				sessionKey,
				elevatedChanged,
				reasoningChanged
			});
		}
	}
	return {
		provider,
		model,
		contextTokens: agentCfg?.contextTokens ?? lookupCachedContextTokens(model) ?? 2e5
	};
}
//#endregion
export { persistInlineDirectives };
