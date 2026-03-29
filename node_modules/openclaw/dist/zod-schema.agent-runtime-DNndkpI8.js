import { a as formatExecSecretRefIdValidationMessage, o as isValidExecSecretRefId, s as isValidFileSecretRefId } from "./ref-contract-BFBhfQKU.js";
import { t as parseDurationMs } from "./parse-duration-J09geyeq.js";
import path from "node:path";
import { z } from "zod";
//#region src/infra/exec-safety.ts
const SHELL_METACHARS = /[;&|`$<>]/;
const CONTROL_CHARS = /[\r\n]/;
const QUOTE_CHARS = /["']/;
const BARE_NAME_PATTERN = /^[A-Za-z0-9._+-]+$/;
function isLikelyPath(value) {
	if (value.startsWith(".") || value.startsWith("~")) return true;
	if (value.includes("/") || value.includes("\\")) return true;
	return /^[A-Za-z]:[\\/]/.test(value);
}
function isSafeExecutableValue(value) {
	if (!value) return false;
	const trimmed = value.trim();
	if (!trimmed) return false;
	if (trimmed.includes("\0")) return false;
	if (CONTROL_CHARS.test(trimmed)) return false;
	if (SHELL_METACHARS.test(trimmed)) return false;
	if (QUOTE_CHARS.test(trimmed)) return false;
	if (isLikelyPath(trimmed)) return true;
	if (trimmed.startsWith("-")) return false;
	return BARE_NAME_PATTERN.test(trimmed);
}
//#endregion
//#region src/agents/sandbox/network-mode.ts
function normalizeNetworkMode(network) {
	return network?.trim().toLowerCase() || void 0;
}
function getBlockedNetworkModeReason(params) {
	const normalized = normalizeNetworkMode(params.network);
	if (!normalized) return null;
	if (normalized === "host") return "host";
	if (normalized.startsWith("container:") && params.allowContainerNamespaceJoin !== true) return "container_namespace_join";
	return null;
}
function isDangerousNetworkMode(network) {
	const normalized = normalizeNetworkMode(network);
	return normalized === "host" || normalized?.startsWith("container:") === true;
}
//#endregion
//#region src/config/zod-schema.agent-model.ts
const AgentModelSchema = z.union([z.string(), z.object({
	primary: z.string().optional(),
	fallbacks: z.array(z.string()).optional()
}).strict()]);
//#endregion
//#region src/config/types.models.ts
const MODEL_APIS = [
	"openai-completions",
	"openai-responses",
	"openai-codex-responses",
	"anthropic-messages",
	"google-generative-ai",
	"github-copilot",
	"bedrock-converse-stream",
	"ollama"
];
//#endregion
//#region src/config/zod-schema.allowdeny.ts
const AllowDenyActionSchema = z.union([z.literal("allow"), z.literal("deny")]);
const AllowDenyChatTypeSchema = z.union([
	z.literal("direct"),
	z.literal("group"),
	z.literal("channel"),
	z.literal("dm")
]).optional();
function createAllowDenyChannelRulesSchema() {
	return z.object({
		default: AllowDenyActionSchema.optional(),
		rules: z.array(z.object({
			action: AllowDenyActionSchema,
			match: z.object({
				channel: z.string().optional(),
				chatType: AllowDenyChatTypeSchema,
				keyPrefix: z.string().optional(),
				rawKeyPrefix: z.string().optional()
			}).strict().optional()
		}).strict()).optional()
	}).strict().optional();
}
//#endregion
//#region src/config/zod-schema.sensitive.ts
const sensitive = z.registry();
//#endregion
//#region src/config/zod-schema.core.ts
const ENV_SECRET_REF_ID_PATTERN = /^[A-Z][A-Z0-9_]{0,127}$/;
const SECRET_PROVIDER_ALIAS_PATTERN = /^[a-z][a-z0-9_-]{0,63}$/;
const WINDOWS_ABS_PATH_PATTERN = /^[A-Za-z]:[\\/]/;
const WINDOWS_UNC_PATH_PATTERN = /^\\\\[^\\]+\\[^\\]+/;
function isAbsolutePath(value) {
	return path.isAbsolute(value) || WINDOWS_ABS_PATH_PATTERN.test(value) || WINDOWS_UNC_PATH_PATTERN.test(value);
}
const EnvSecretRefSchema = z.object({
	source: z.literal("env"),
	provider: z.string().regex(SECRET_PROVIDER_ALIAS_PATTERN, "Secret reference provider must match /^[a-z][a-z0-9_-]{0,63}$/ (example: \"default\")."),
	id: z.string().regex(ENV_SECRET_REF_ID_PATTERN, "Env secret reference id must match /^[A-Z][A-Z0-9_]{0,127}$/ (example: \"OPENAI_API_KEY\").")
}).strict();
const FileSecretRefSchema = z.object({
	source: z.literal("file"),
	provider: z.string().regex(SECRET_PROVIDER_ALIAS_PATTERN, "Secret reference provider must match /^[a-z][a-z0-9_-]{0,63}$/ (example: \"default\")."),
	id: z.string().refine(isValidFileSecretRefId, "File secret reference id must be an absolute JSON pointer (example: \"/providers/openai/apiKey\"), or \"value\" for singleValue mode.")
}).strict();
const ExecSecretRefSchema = z.object({
	source: z.literal("exec"),
	provider: z.string().regex(SECRET_PROVIDER_ALIAS_PATTERN, "Secret reference provider must match /^[a-z][a-z0-9_-]{0,63}$/ (example: \"default\")."),
	id: z.string().refine(isValidExecSecretRefId, formatExecSecretRefIdValidationMessage())
}).strict();
const SecretRefSchema = z.discriminatedUnion("source", [
	EnvSecretRefSchema,
	FileSecretRefSchema,
	ExecSecretRefSchema
]);
const SecretInputSchema = z.union([z.string(), SecretRefSchema]);
const SecretsEnvProviderSchema = z.object({
	source: z.literal("env"),
	allowlist: z.array(z.string().regex(ENV_SECRET_REF_ID_PATTERN)).max(256).optional()
}).strict();
const SecretsFileProviderSchema = z.object({
	source: z.literal("file"),
	path: z.string().min(1),
	mode: z.union([z.literal("singleValue"), z.literal("json")]).optional(),
	timeoutMs: z.number().int().positive().max(12e4).optional(),
	maxBytes: z.number().int().positive().max(20 * 1024 * 1024).optional()
}).strict();
const SecretsExecProviderSchema = z.object({
	source: z.literal("exec"),
	command: z.string().min(1).refine((value) => isSafeExecutableValue(value), "secrets.providers.*.command is unsafe.").refine((value) => isAbsolutePath(value), "secrets.providers.*.command must be an absolute path."),
	args: z.array(z.string().max(1024)).max(128).optional(),
	timeoutMs: z.number().int().positive().max(12e4).optional(),
	noOutputTimeoutMs: z.number().int().positive().max(12e4).optional(),
	maxOutputBytes: z.number().int().positive().max(20 * 1024 * 1024).optional(),
	jsonOnly: z.boolean().optional(),
	env: z.record(z.string(), z.string()).optional(),
	passEnv: z.array(z.string().regex(ENV_SECRET_REF_ID_PATTERN)).max(128).optional(),
	trustedDirs: z.array(z.string().min(1).refine((value) => isAbsolutePath(value), "trustedDirs entries must be absolute paths.")).max(64).optional(),
	allowInsecurePath: z.boolean().optional(),
	allowSymlinkCommand: z.boolean().optional()
}).strict();
const SecretProviderSchema = z.discriminatedUnion("source", [
	SecretsEnvProviderSchema,
	SecretsFileProviderSchema,
	SecretsExecProviderSchema
]);
const SecretsConfigSchema = z.object({
	providers: z.object({}).catchall(SecretProviderSchema).optional(),
	defaults: z.object({
		env: z.string().regex(SECRET_PROVIDER_ALIAS_PATTERN).optional(),
		file: z.string().regex(SECRET_PROVIDER_ALIAS_PATTERN).optional(),
		exec: z.string().regex(SECRET_PROVIDER_ALIAS_PATTERN).optional()
	}).strict().optional(),
	resolution: z.object({
		maxProviderConcurrency: z.number().int().positive().max(16).optional(),
		maxRefsPerProvider: z.number().int().positive().max(4096).optional(),
		maxBatchBytes: z.number().int().positive().max(5 * 1024 * 1024).optional()
	}).strict().optional()
}).strict().optional();
const ModelApiSchema = z.enum(MODEL_APIS);
const ModelCompatSchema = z.object({
	supportsStore: z.boolean().optional(),
	supportsDeveloperRole: z.boolean().optional(),
	supportsReasoningEffort: z.boolean().optional(),
	supportsUsageInStreaming: z.boolean().optional(),
	supportsTools: z.boolean().optional(),
	supportsStrictMode: z.boolean().optional(),
	maxTokensField: z.union([z.literal("max_completion_tokens"), z.literal("max_tokens")]).optional(),
	thinkingFormat: z.union([
		z.literal("openai"),
		z.literal("openrouter"),
		z.literal("zai"),
		z.literal("qwen"),
		z.literal("qwen-chat-template")
	]).optional(),
	requiresToolResultName: z.boolean().optional(),
	requiresAssistantAfterToolResult: z.boolean().optional(),
	requiresThinkingAsText: z.boolean().optional(),
	toolSchemaProfile: z.literal("xai").optional(),
	nativeWebSearchTool: z.boolean().optional(),
	toolCallArgumentsEncoding: z.literal("html-entities").optional(),
	requiresMistralToolIds: z.boolean().optional(),
	requiresOpenAiAnthropicToolPayload: z.boolean().optional()
}).strict().optional();
const ModelDefinitionSchema = z.object({
	id: z.string().min(1),
	name: z.string().min(1),
	api: ModelApiSchema.optional(),
	reasoning: z.boolean().optional(),
	input: z.array(z.union([z.literal("text"), z.literal("image")])).optional(),
	cost: z.object({
		input: z.number().optional(),
		output: z.number().optional(),
		cacheRead: z.number().optional(),
		cacheWrite: z.number().optional()
	}).strict().optional(),
	contextWindow: z.number().positive().optional(),
	maxTokens: z.number().positive().optional(),
	headers: z.record(z.string(), z.string()).optional(),
	compat: ModelCompatSchema
}).strict();
const ModelProviderSchema = z.object({
	baseUrl: z.string().min(1),
	apiKey: SecretInputSchema.optional().register(sensitive),
	auth: z.union([
		z.literal("api-key"),
		z.literal("aws-sdk"),
		z.literal("oauth"),
		z.literal("token")
	]).optional(),
	api: ModelApiSchema.optional(),
	injectNumCtxForOpenAICompat: z.boolean().optional(),
	headers: z.record(z.string(), SecretInputSchema.register(sensitive)).optional(),
	authHeader: z.boolean().optional(),
	models: z.array(ModelDefinitionSchema)
}).strict();
const BedrockDiscoverySchema = z.object({
	enabled: z.boolean().optional(),
	region: z.string().optional(),
	providerFilter: z.array(z.string()).optional(),
	refreshInterval: z.number().int().nonnegative().optional(),
	defaultContextWindow: z.number().int().positive().optional(),
	defaultMaxTokens: z.number().int().positive().optional()
}).strict().optional();
const ModelsConfigSchema = z.object({
	mode: z.union([z.literal("merge"), z.literal("replace")]).optional(),
	providers: z.record(z.string(), ModelProviderSchema).optional(),
	bedrockDiscovery: BedrockDiscoverySchema
}).strict().optional();
const GroupChatSchema = z.object({
	mentionPatterns: z.array(z.string()).optional(),
	historyLimit: z.number().int().positive().optional()
}).strict().optional();
const DmConfigSchema = z.object({ historyLimit: z.number().int().min(0).optional() }).strict();
const IdentitySchema = z.object({
	name: z.string().optional(),
	theme: z.string().optional(),
	emoji: z.string().optional(),
	avatar: z.string().optional()
}).strict().optional();
const QueueModeSchema = z.union([
	z.literal("steer"),
	z.literal("followup"),
	z.literal("collect"),
	z.literal("steer-backlog"),
	z.literal("steer+backlog"),
	z.literal("queue"),
	z.literal("interrupt")
]);
const QueueDropSchema = z.union([
	z.literal("old"),
	z.literal("new"),
	z.literal("summarize")
]);
const ReplyToModeSchema = z.union([
	z.literal("off"),
	z.literal("first"),
	z.literal("all")
]);
const TypingModeSchema = z.union([
	z.literal("never"),
	z.literal("instant"),
	z.literal("thinking"),
	z.literal("message")
]);
const GroupPolicySchema = z.enum([
	"open",
	"disabled",
	"allowlist"
]);
const DmPolicySchema = z.enum([
	"pairing",
	"allowlist",
	"open",
	"disabled"
]);
const BlockStreamingCoalesceSchema = z.object({
	minChars: z.number().int().positive().optional(),
	maxChars: z.number().int().positive().optional(),
	idleMs: z.number().int().nonnegative().optional()
}).strict();
const ReplyRuntimeConfigSchemaShape = {
	historyLimit: z.number().int().min(0).optional(),
	dmHistoryLimit: z.number().int().min(0).optional(),
	dms: z.record(z.string(), DmConfigSchema.optional()).optional(),
	textChunkLimit: z.number().int().positive().optional(),
	chunkMode: z.enum(["length", "newline"]).optional(),
	blockStreaming: z.boolean().optional(),
	blockStreamingCoalesce: BlockStreamingCoalesceSchema.optional(),
	responsePrefix: z.string().optional(),
	mediaMaxMb: z.number().positive().optional()
};
const BlockStreamingChunkSchema = z.object({
	minChars: z.number().int().positive().optional(),
	maxChars: z.number().int().positive().optional(),
	breakPreference: z.union([
		z.literal("paragraph"),
		z.literal("newline"),
		z.literal("sentence")
	]).optional()
}).strict();
const MarkdownTableModeSchema = z.enum([
	"off",
	"bullets",
	"code"
]);
const MarkdownConfigSchema = z.object({ tables: MarkdownTableModeSchema.optional() }).strict().optional();
const TtsProviderSchema = z.string().min(1);
const TtsModeSchema = z.enum(["final", "all"]);
const TtsAutoSchema = z.enum([
	"off",
	"always",
	"inbound",
	"tagged"
]);
const TtsMicrosoftConfigSchema = z.object({
	enabled: z.boolean().optional(),
	voice: z.string().optional(),
	lang: z.string().optional(),
	outputFormat: z.string().optional(),
	pitch: z.string().optional(),
	rate: z.string().optional(),
	volume: z.string().optional(),
	saveSubtitles: z.boolean().optional(),
	proxy: z.string().optional(),
	timeoutMs: z.number().int().min(1e3).max(12e4).optional()
}).strict().optional();
const TtsConfigSchema = z.object({
	auto: TtsAutoSchema.optional(),
	enabled: z.boolean().optional(),
	mode: TtsModeSchema.optional(),
	provider: TtsProviderSchema.optional(),
	summaryModel: z.string().optional(),
	modelOverrides: z.object({
		enabled: z.boolean().optional(),
		allowText: z.boolean().optional(),
		allowProvider: z.boolean().optional(),
		allowVoice: z.boolean().optional(),
		allowModelId: z.boolean().optional(),
		allowVoiceSettings: z.boolean().optional(),
		allowNormalization: z.boolean().optional(),
		allowSeed: z.boolean().optional()
	}).strict().optional(),
	elevenlabs: z.object({
		apiKey: SecretInputSchema.optional().register(sensitive),
		baseUrl: z.string().optional(),
		voiceId: z.string().optional(),
		modelId: z.string().optional(),
		seed: z.number().int().min(0).max(4294967295).optional(),
		applyTextNormalization: z.enum([
			"auto",
			"on",
			"off"
		]).optional(),
		languageCode: z.string().optional(),
		voiceSettings: z.object({
			stability: z.number().min(0).max(1).optional(),
			similarityBoost: z.number().min(0).max(1).optional(),
			style: z.number().min(0).max(1).optional(),
			useSpeakerBoost: z.boolean().optional(),
			speed: z.number().min(.5).max(2).optional()
		}).strict().optional()
	}).strict().optional(),
	openai: z.object({
		apiKey: SecretInputSchema.optional().register(sensitive),
		baseUrl: z.string().optional(),
		model: z.string().optional(),
		voice: z.string().optional(),
		speed: z.number().min(.25).max(4).optional(),
		instructions: z.string().optional()
	}).strict().optional(),
	edge: TtsMicrosoftConfigSchema,
	microsoft: TtsMicrosoftConfigSchema,
	prefsPath: z.string().optional(),
	maxTextLength: z.number().int().min(1).optional(),
	timeoutMs: z.number().int().min(1e3).max(12e4).optional()
}).strict().optional();
const HumanDelaySchema = z.object({
	mode: z.union([
		z.literal("off"),
		z.literal("natural"),
		z.literal("custom")
	]).optional(),
	minMs: z.number().int().nonnegative().optional(),
	maxMs: z.number().int().nonnegative().optional()
}).strict();
const CliBackendWatchdogModeSchema = z.object({
	noOutputTimeoutMs: z.number().int().min(1e3).optional(),
	noOutputTimeoutRatio: z.number().min(.05).max(.95).optional(),
	minMs: z.number().int().min(1e3).optional(),
	maxMs: z.number().int().min(1e3).optional()
}).strict().optional();
const CliBackendSchema = z.object({
	command: z.string(),
	args: z.array(z.string()).optional(),
	output: z.union([
		z.literal("json"),
		z.literal("text"),
		z.literal("jsonl")
	]).optional(),
	resumeOutput: z.union([
		z.literal("json"),
		z.literal("text"),
		z.literal("jsonl")
	]).optional(),
	input: z.union([z.literal("arg"), z.literal("stdin")]).optional(),
	maxPromptArgChars: z.number().int().positive().optional(),
	env: z.record(z.string(), z.string()).optional(),
	clearEnv: z.array(z.string()).optional(),
	modelArg: z.string().optional(),
	modelAliases: z.record(z.string(), z.string()).optional(),
	sessionArg: z.string().optional(),
	sessionArgs: z.array(z.string()).optional(),
	resumeArgs: z.array(z.string()).optional(),
	sessionMode: z.union([
		z.literal("always"),
		z.literal("existing"),
		z.literal("none")
	]).optional(),
	sessionIdFields: z.array(z.string()).optional(),
	systemPromptArg: z.string().optional(),
	systemPromptMode: z.union([z.literal("append"), z.literal("replace")]).optional(),
	systemPromptWhen: z.union([
		z.literal("first"),
		z.literal("always"),
		z.literal("never")
	]).optional(),
	imageArg: z.string().optional(),
	imageMode: z.union([z.literal("repeat"), z.literal("list")]).optional(),
	serialize: z.boolean().optional(),
	reliability: z.object({ watchdog: z.object({
		fresh: CliBackendWatchdogModeSchema,
		resume: CliBackendWatchdogModeSchema
	}).strict().optional() }).strict().optional()
}).strict();
const normalizeAllowFrom = (values) => (values ?? []).map((v) => String(v).trim()).filter(Boolean);
const requireOpenAllowFrom = (params) => {
	if (params.policy !== "open") return;
	if (normalizeAllowFrom(params.allowFrom).includes("*")) return;
	params.ctx.addIssue({
		code: z.ZodIssueCode.custom,
		path: params.path,
		message: params.message
	});
};
/**
* Validate that dmPolicy="allowlist" has a non-empty allowFrom array.
* Without this, all DMs are silently dropped because the allowlist is empty
* and no senders can match.
*/
const requireAllowlistAllowFrom = (params) => {
	if (params.policy !== "allowlist") return;
	if (normalizeAllowFrom(params.allowFrom).length > 0) return;
	params.ctx.addIssue({
		code: z.ZodIssueCode.custom,
		path: params.path,
		message: params.message
	});
};
const MSTeamsReplyStyleSchema = z.enum(["thread", "top-level"]);
const RetryConfigSchema = z.object({
	attempts: z.number().int().min(1).optional(),
	minDelayMs: z.number().int().min(0).optional(),
	maxDelayMs: z.number().int().min(0).optional(),
	jitter: z.number().min(0).max(1).optional()
}).strict().optional();
const QueueModeBySurfaceSchema = z.object({
	whatsapp: QueueModeSchema.optional(),
	telegram: QueueModeSchema.optional(),
	discord: QueueModeSchema.optional(),
	irc: QueueModeSchema.optional(),
	slack: QueueModeSchema.optional(),
	mattermost: QueueModeSchema.optional(),
	signal: QueueModeSchema.optional(),
	imessage: QueueModeSchema.optional(),
	msteams: QueueModeSchema.optional(),
	webchat: QueueModeSchema.optional()
}).strict().optional();
const DebounceMsBySurfaceSchema = z.record(z.string(), z.number().int().nonnegative()).optional();
const QueueSchema = z.object({
	mode: QueueModeSchema.optional(),
	byChannel: QueueModeBySurfaceSchema,
	debounceMs: z.number().int().nonnegative().optional(),
	debounceMsByChannel: DebounceMsBySurfaceSchema,
	cap: z.number().int().positive().optional(),
	drop: QueueDropSchema.optional()
}).strict().optional();
const InboundDebounceSchema = z.object({
	debounceMs: z.number().int().nonnegative().optional(),
	byChannel: DebounceMsBySurfaceSchema
}).strict().optional();
const TranscribeAudioSchema = z.object({
	command: z.array(z.string()).superRefine((value, ctx) => {
		const executable = value[0];
		if (!isSafeExecutableValue(executable)) ctx.addIssue({
			code: z.ZodIssueCode.custom,
			path: [0],
			message: "expected safe executable name or path"
		});
	}),
	timeoutSeconds: z.number().int().positive().optional()
}).strict().optional();
const HexColorSchema = z.string().regex(/^#?[0-9a-fA-F]{6}$/, "expected hex color (RRGGBB)");
const ExecutableTokenSchema = z.string().refine(isSafeExecutableValue, "expected safe executable name or path");
const MediaUnderstandingScopeSchema = createAllowDenyChannelRulesSchema();
const MediaUnderstandingCapabilitiesSchema = z.array(z.union([
	z.literal("image"),
	z.literal("audio"),
	z.literal("video")
])).optional();
const MediaUnderstandingAttachmentsSchema = z.object({
	mode: z.union([z.literal("first"), z.literal("all")]).optional(),
	maxAttachments: z.number().int().positive().optional(),
	prefer: z.union([
		z.literal("first"),
		z.literal("last"),
		z.literal("path"),
		z.literal("url")
	]).optional()
}).strict().optional();
const DeepgramAudioSchema = z.object({
	detectLanguage: z.boolean().optional(),
	punctuate: z.boolean().optional(),
	smartFormat: z.boolean().optional()
}).strict().optional();
const ProviderOptionValueSchema = z.union([
	z.string(),
	z.number(),
	z.boolean()
]);
const ProviderOptionsSchema = z.record(z.string(), z.record(z.string(), ProviderOptionValueSchema)).optional();
const MediaUnderstandingRuntimeFields = {
	prompt: z.string().optional(),
	timeoutSeconds: z.number().int().positive().optional(),
	language: z.string().optional(),
	providerOptions: ProviderOptionsSchema,
	deepgram: DeepgramAudioSchema,
	baseUrl: z.string().optional(),
	headers: z.record(z.string(), z.string()).optional()
};
const MediaUnderstandingModelSchema = z.object({
	provider: z.string().optional(),
	model: z.string().optional(),
	capabilities: MediaUnderstandingCapabilitiesSchema,
	type: z.union([z.literal("provider"), z.literal("cli")]).optional(),
	command: z.string().optional(),
	args: z.array(z.string()).optional(),
	maxChars: z.number().int().positive().optional(),
	maxBytes: z.number().int().positive().optional(),
	...MediaUnderstandingRuntimeFields,
	profile: z.string().optional(),
	preferredProfile: z.string().optional()
}).strict().optional();
const ToolsMediaUnderstandingSchema = z.object({
	enabled: z.boolean().optional(),
	scope: MediaUnderstandingScopeSchema,
	maxBytes: z.number().int().positive().optional(),
	maxChars: z.number().int().positive().optional(),
	...MediaUnderstandingRuntimeFields,
	attachments: MediaUnderstandingAttachmentsSchema,
	models: z.array(MediaUnderstandingModelSchema).optional(),
	echoTranscript: z.boolean().optional(),
	echoFormat: z.string().optional()
}).strict().optional();
const ToolsMediaSchema = z.object({
	models: z.array(MediaUnderstandingModelSchema).optional(),
	concurrency: z.number().int().positive().optional(),
	image: ToolsMediaUnderstandingSchema.optional(),
	audio: ToolsMediaUnderstandingSchema.optional(),
	video: ToolsMediaUnderstandingSchema.optional()
}).strict().optional();
const LinkModelSchema = z.object({
	type: z.literal("cli").optional(),
	command: z.string().min(1),
	args: z.array(z.string()).optional(),
	timeoutSeconds: z.number().int().positive().optional()
}).strict();
const ToolsLinksSchema = z.object({
	enabled: z.boolean().optional(),
	scope: MediaUnderstandingScopeSchema,
	maxLinks: z.number().int().positive().optional(),
	timeoutSeconds: z.number().int().positive().optional(),
	models: z.array(LinkModelSchema).optional()
}).strict().optional();
const NativeCommandsSettingSchema = z.union([z.boolean(), z.literal("auto")]);
const ProviderCommandsSchema = z.object({
	native: NativeCommandsSettingSchema.optional(),
	nativeSkills: NativeCommandsSettingSchema.optional()
}).strict().optional();
//#endregion
//#region src/config/zod-schema.agent-runtime.ts
const HeartbeatSchema = z.object({
	every: z.string().optional(),
	activeHours: z.object({
		start: z.string().optional(),
		end: z.string().optional(),
		timezone: z.string().optional()
	}).strict().optional(),
	model: z.string().optional(),
	session: z.string().optional(),
	includeReasoning: z.boolean().optional(),
	target: z.string().optional(),
	directPolicy: z.union([z.literal("allow"), z.literal("block")]).optional(),
	to: z.string().optional(),
	accountId: z.string().optional(),
	prompt: z.string().optional(),
	ackMaxChars: z.number().int().nonnegative().optional(),
	suppressToolErrorWarnings: z.boolean().optional(),
	lightContext: z.boolean().optional(),
	isolatedSession: z.boolean().optional()
}).strict().superRefine((val, ctx) => {
	if (!val.every) return;
	try {
		parseDurationMs(val.every, { defaultUnit: "m" });
	} catch {
		ctx.addIssue({
			code: z.ZodIssueCode.custom,
			path: ["every"],
			message: "invalid duration (use ms, s, m, h)"
		});
	}
	const active = val.activeHours;
	if (!active) return;
	const timePattern = /^([01]\d|2[0-3]|24):([0-5]\d)$/;
	const validateTime = (raw, opts, path) => {
		if (!raw) return;
		if (!timePattern.test(raw)) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				path: ["activeHours", path],
				message: "invalid time (use \"HH:MM\" 24h format)"
			});
			return;
		}
		const [hourStr, minuteStr] = raw.split(":");
		const hour = Number(hourStr);
		const minute = Number(minuteStr);
		if (hour === 24 && minute !== 0) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				path: ["activeHours", path],
				message: "invalid time (24:00 is the only allowed 24:xx value)"
			});
			return;
		}
		if (hour === 24 && !opts.allow24) ctx.addIssue({
			code: z.ZodIssueCode.custom,
			path: ["activeHours", path],
			message: "invalid time (start cannot be 24:00)"
		});
	};
	validateTime(active.start, { allow24: false }, "start");
	validateTime(active.end, { allow24: true }, "end");
}).optional();
const SandboxDockerSchema = z.object({
	image: z.string().optional(),
	containerPrefix: z.string().optional(),
	workdir: z.string().optional(),
	readOnlyRoot: z.boolean().optional(),
	tmpfs: z.array(z.string()).optional(),
	network: z.string().optional(),
	user: z.string().optional(),
	capDrop: z.array(z.string()).optional(),
	env: z.record(z.string(), z.string()).optional(),
	setupCommand: z.union([z.string(), z.array(z.string())]).transform((value) => Array.isArray(value) ? value.join("\n") : value).optional(),
	pidsLimit: z.number().int().positive().optional(),
	memory: z.union([z.string(), z.number()]).optional(),
	memorySwap: z.union([z.string(), z.number()]).optional(),
	cpus: z.number().positive().optional(),
	ulimits: z.record(z.string(), z.union([
		z.string(),
		z.number(),
		z.object({
			soft: z.number().int().nonnegative().optional(),
			hard: z.number().int().nonnegative().optional()
		}).strict()
	])).optional(),
	seccompProfile: z.string().optional(),
	apparmorProfile: z.string().optional(),
	dns: z.array(z.string()).optional(),
	extraHosts: z.array(z.string()).optional(),
	binds: z.array(z.string()).optional(),
	dangerouslyAllowReservedContainerTargets: z.boolean().optional(),
	dangerouslyAllowExternalBindSources: z.boolean().optional(),
	dangerouslyAllowContainerNamespaceJoin: z.boolean().optional()
}).strict().superRefine((data, ctx) => {
	if (data.binds) for (let i = 0; i < data.binds.length; i += 1) {
		const bind = data.binds[i]?.trim() ?? "";
		if (!bind) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				path: ["binds", i],
				message: "Sandbox security: bind mount entry must be a non-empty string."
			});
			continue;
		}
		const firstColon = bind.indexOf(":");
		const source = (firstColon <= 0 ? bind : bind.slice(0, firstColon)).trim();
		if (!source.startsWith("/")) ctx.addIssue({
			code: z.ZodIssueCode.custom,
			path: ["binds", i],
			message: `Sandbox security: bind mount "${bind}" uses a non-absolute source path "${source}". Only absolute POSIX paths are supported for sandbox binds.`
		});
	}
	const blockedNetworkReason = getBlockedNetworkModeReason({
		network: data.network,
		allowContainerNamespaceJoin: data.dangerouslyAllowContainerNamespaceJoin === true
	});
	if (blockedNetworkReason === "host") ctx.addIssue({
		code: z.ZodIssueCode.custom,
		path: ["network"],
		message: "Sandbox security: network mode \"host\" is blocked. Use \"bridge\" or \"none\" instead."
	});
	if (blockedNetworkReason === "container_namespace_join") ctx.addIssue({
		code: z.ZodIssueCode.custom,
		path: ["network"],
		message: "Sandbox security: network mode \"container:*\" is blocked by default. Use a custom bridge network, or set dangerouslyAllowContainerNamespaceJoin=true only when you fully trust this runtime."
	});
	if (data.seccompProfile?.trim().toLowerCase() === "unconfined") ctx.addIssue({
		code: z.ZodIssueCode.custom,
		path: ["seccompProfile"],
		message: "Sandbox security: seccomp profile \"unconfined\" is blocked. Use a custom seccomp profile file or omit this setting."
	});
	if (data.apparmorProfile?.trim().toLowerCase() === "unconfined") ctx.addIssue({
		code: z.ZodIssueCode.custom,
		path: ["apparmorProfile"],
		message: "Sandbox security: apparmor profile \"unconfined\" is blocked. Use a named AppArmor profile or omit this setting."
	});
}).optional();
const SandboxBrowserSchema = z.object({
	enabled: z.boolean().optional(),
	image: z.string().optional(),
	containerPrefix: z.string().optional(),
	network: z.string().optional(),
	cdpPort: z.number().int().positive().optional(),
	cdpSourceRange: z.string().optional(),
	vncPort: z.number().int().positive().optional(),
	noVncPort: z.number().int().positive().optional(),
	headless: z.boolean().optional(),
	enableNoVnc: z.boolean().optional(),
	allowHostControl: z.boolean().optional(),
	autoStart: z.boolean().optional(),
	autoStartTimeoutMs: z.number().int().positive().optional(),
	binds: z.array(z.string()).optional()
}).superRefine((data, ctx) => {
	if (data.network?.trim().toLowerCase() === "host") ctx.addIssue({
		code: z.ZodIssueCode.custom,
		path: ["network"],
		message: "Sandbox security: browser network mode \"host\" is blocked. Use \"bridge\" or a custom bridge network instead."
	});
}).strict().optional();
const SandboxPruneSchema = z.object({
	idleHours: z.number().int().nonnegative().optional(),
	maxAgeDays: z.number().int().nonnegative().optional()
}).strict().optional();
const ToolPolicySchema = z.object({
	allow: z.array(z.string()).optional(),
	alsoAllow: z.array(z.string()).optional(),
	deny: z.array(z.string()).optional()
}).strict().superRefine((value, ctx) => {
	if (value.allow && value.allow.length > 0 && value.alsoAllow && value.alsoAllow.length > 0) ctx.addIssue({
		code: z.ZodIssueCode.custom,
		message: "tools policy cannot set both allow and alsoAllow in the same scope (merge alsoAllow into allow, or remove allow and use profile + alsoAllow)"
	});
}).optional();
const ToolsWebSearchSchema = z.object({
	enabled: z.boolean().optional(),
	provider: z.string().optional(),
	maxResults: z.number().int().positive().optional(),
	timeoutSeconds: z.number().int().positive().optional(),
	cacheTtlMinutes: z.number().nonnegative().optional(),
	apiKey: SecretInputSchema.optional().register(sensitive),
	brave: z.object({
		apiKey: SecretInputSchema.optional().register(sensitive),
		baseUrl: z.string().optional(),
		model: z.string().optional(),
		mode: z.string().optional()
	}).strict().optional(),
	firecrawl: z.object({
		apiKey: SecretInputSchema.optional().register(sensitive),
		baseUrl: z.string().optional(),
		model: z.string().optional()
	}).strict().optional(),
	gemini: z.object({
		apiKey: SecretInputSchema.optional().register(sensitive),
		baseUrl: z.string().optional(),
		model: z.string().optional()
	}).strict().optional(),
	grok: z.object({
		apiKey: SecretInputSchema.optional().register(sensitive),
		baseUrl: z.string().optional(),
		model: z.string().optional(),
		inlineCitations: z.boolean().optional()
	}).strict().optional(),
	kimi: z.object({
		apiKey: SecretInputSchema.optional().register(sensitive),
		baseUrl: z.string().optional(),
		model: z.string().optional()
	}).strict().optional(),
	perplexity: z.object({
		apiKey: SecretInputSchema.optional().register(sensitive),
		baseUrl: z.string().optional(),
		model: z.string().optional()
	}).strict().optional()
}).strict().optional();
const ToolsWebFetchSchema = z.object({
	enabled: z.boolean().optional(),
	maxChars: z.number().int().positive().optional(),
	maxCharsCap: z.number().int().positive().optional(),
	timeoutSeconds: z.number().int().positive().optional(),
	cacheTtlMinutes: z.number().nonnegative().optional(),
	maxRedirects: z.number().int().nonnegative().optional(),
	userAgent: z.string().optional(),
	readability: z.boolean().optional(),
	firecrawl: z.object({
		enabled: z.boolean().optional(),
		apiKey: SecretInputSchema.optional().register(sensitive),
		baseUrl: z.string().optional(),
		onlyMainContent: z.boolean().optional(),
		maxAgeMs: z.number().int().nonnegative().optional(),
		timeoutSeconds: z.number().int().positive().optional()
	}).strict().optional()
}).strict().optional();
const ToolsWebSchema = z.object({
	search: ToolsWebSearchSchema,
	fetch: ToolsWebFetchSchema
}).strict().optional();
const ToolProfileSchema = z.union([
	z.literal("minimal"),
	z.literal("coding"),
	z.literal("messaging"),
	z.literal("full")
]).optional();
function addAllowAlsoAllowConflictIssue(value, ctx, message) {
	if (value.allow && value.allow.length > 0 && value.alsoAllow && value.alsoAllow.length > 0) ctx.addIssue({
		code: z.ZodIssueCode.custom,
		message
	});
}
const ToolPolicyWithProfileSchema = z.object({
	allow: z.array(z.string()).optional(),
	alsoAllow: z.array(z.string()).optional(),
	deny: z.array(z.string()).optional(),
	profile: ToolProfileSchema
}).strict().superRefine((value, ctx) => {
	addAllowAlsoAllowConflictIssue(value, ctx, "tools.byProvider policy cannot set both allow and alsoAllow in the same scope (merge alsoAllow into allow, or remove allow and use profile + alsoAllow)");
});
const ElevatedAllowFromSchema = z.record(z.string(), z.array(z.union([z.string(), z.number()]))).optional();
const ToolExecApplyPatchSchema = z.object({
	enabled: z.boolean().optional(),
	workspaceOnly: z.boolean().optional(),
	allowModels: z.array(z.string()).optional()
}).strict().optional();
const ToolExecSafeBinProfileSchema = z.object({
	minPositional: z.number().int().nonnegative().optional(),
	maxPositional: z.number().int().nonnegative().optional(),
	allowedValueFlags: z.array(z.string()).optional(),
	deniedFlags: z.array(z.string()).optional()
}).strict();
const ToolExecBaseShape = {
	host: z.enum([
		"sandbox",
		"gateway",
		"node"
	]).optional(),
	security: z.enum([
		"deny",
		"allowlist",
		"full"
	]).optional(),
	ask: z.enum([
		"off",
		"on-miss",
		"always"
	]).optional(),
	node: z.string().optional(),
	pathPrepend: z.array(z.string()).optional(),
	safeBins: z.array(z.string()).optional(),
	strictInlineEval: z.boolean().optional(),
	safeBinTrustedDirs: z.array(z.string()).optional(),
	safeBinProfiles: z.record(z.string(), ToolExecSafeBinProfileSchema).optional(),
	backgroundMs: z.number().int().positive().optional(),
	timeoutSec: z.number().int().positive().optional(),
	cleanupMs: z.number().int().positive().optional(),
	notifyOnExit: z.boolean().optional(),
	notifyOnExitEmptySuccess: z.boolean().optional(),
	applyPatch: ToolExecApplyPatchSchema
};
const AgentToolExecSchema = z.object({
	...ToolExecBaseShape,
	approvalRunningNoticeMs: z.number().int().nonnegative().optional()
}).strict().optional();
const ToolExecSchema = z.object(ToolExecBaseShape).strict().optional();
const ToolFsSchema = z.object({ workspaceOnly: z.boolean().optional() }).strict().optional();
const ToolLoopDetectionDetectorSchema = z.object({
	genericRepeat: z.boolean().optional(),
	knownPollNoProgress: z.boolean().optional(),
	pingPong: z.boolean().optional()
}).strict().optional();
const ToolLoopDetectionSchema = z.object({
	enabled: z.boolean().optional(),
	historySize: z.number().int().positive().optional(),
	warningThreshold: z.number().int().positive().optional(),
	criticalThreshold: z.number().int().positive().optional(),
	globalCircuitBreakerThreshold: z.number().int().positive().optional(),
	detectors: ToolLoopDetectionDetectorSchema
}).strict().superRefine((value, ctx) => {
	if (value.warningThreshold !== void 0 && value.criticalThreshold !== void 0 && value.warningThreshold >= value.criticalThreshold) ctx.addIssue({
		code: z.ZodIssueCode.custom,
		path: ["criticalThreshold"],
		message: "tools.loopDetection.warningThreshold must be lower than criticalThreshold."
	});
	if (value.criticalThreshold !== void 0 && value.globalCircuitBreakerThreshold !== void 0 && value.criticalThreshold >= value.globalCircuitBreakerThreshold) ctx.addIssue({
		code: z.ZodIssueCode.custom,
		path: ["globalCircuitBreakerThreshold"],
		message: "tools.loopDetection.criticalThreshold must be lower than globalCircuitBreakerThreshold."
	});
}).optional();
const SandboxSshSchema = z.object({
	target: z.string().min(1).optional(),
	command: z.string().min(1).optional(),
	workspaceRoot: z.string().min(1).optional(),
	strictHostKeyChecking: z.boolean().optional(),
	updateHostKeys: z.boolean().optional(),
	identityFile: z.string().min(1).optional(),
	certificateFile: z.string().min(1).optional(),
	knownHostsFile: z.string().min(1).optional(),
	identityData: SecretInputSchema.optional().register(sensitive),
	certificateData: SecretInputSchema.optional().register(sensitive),
	knownHostsData: SecretInputSchema.optional().register(sensitive)
}).strict().optional();
const AgentSandboxSchema = z.object({
	mode: z.union([
		z.literal("off"),
		z.literal("non-main"),
		z.literal("all")
	]).optional(),
	backend: z.string().min(1).optional(),
	workspaceAccess: z.union([
		z.literal("none"),
		z.literal("ro"),
		z.literal("rw")
	]).optional(),
	sessionToolsVisibility: z.union([z.literal("spawned"), z.literal("all")]).optional(),
	scope: z.union([
		z.literal("session"),
		z.literal("agent"),
		z.literal("shared")
	]).optional(),
	perSession: z.boolean().optional(),
	workspaceRoot: z.string().optional(),
	docker: SandboxDockerSchema,
	ssh: SandboxSshSchema,
	browser: SandboxBrowserSchema,
	prune: SandboxPruneSchema
}).strict().superRefine((data, ctx) => {
	if (getBlockedNetworkModeReason({
		network: data.browser?.network,
		allowContainerNamespaceJoin: data.docker?.dangerouslyAllowContainerNamespaceJoin === true
	}) === "container_namespace_join") ctx.addIssue({
		code: z.ZodIssueCode.custom,
		path: ["browser", "network"],
		message: "Sandbox security: browser network mode \"container:*\" is blocked by default. Set sandbox.docker.dangerouslyAllowContainerNamespaceJoin=true only when you fully trust this runtime."
	});
}).optional();
const CommonToolPolicyFields = {
	profile: ToolProfileSchema,
	allow: z.array(z.string()).optional(),
	alsoAllow: z.array(z.string()).optional(),
	deny: z.array(z.string()).optional(),
	byProvider: z.record(z.string(), ToolPolicyWithProfileSchema).optional()
};
const AgentToolsSchema = z.object({
	...CommonToolPolicyFields,
	elevated: z.object({
		enabled: z.boolean().optional(),
		allowFrom: ElevatedAllowFromSchema
	}).strict().optional(),
	exec: AgentToolExecSchema,
	fs: ToolFsSchema,
	loopDetection: ToolLoopDetectionSchema,
	sandbox: z.object({ tools: ToolPolicySchema }).strict().optional()
}).strict().superRefine((value, ctx) => {
	addAllowAlsoAllowConflictIssue(value, ctx, "agent tools cannot set both allow and alsoAllow in the same scope (merge alsoAllow into allow, or remove allow and use profile + alsoAllow)");
}).optional();
const MemorySearchSchema = z.object({
	enabled: z.boolean().optional(),
	sources: z.array(z.union([z.literal("memory"), z.literal("sessions")])).optional(),
	extraPaths: z.array(z.string()).optional(),
	multimodal: z.object({
		enabled: z.boolean().optional(),
		modalities: z.array(z.union([
			z.literal("image"),
			z.literal("audio"),
			z.literal("all")
		])).optional(),
		maxFileBytes: z.number().int().positive().optional()
	}).strict().optional(),
	experimental: z.object({ sessionMemory: z.boolean().optional() }).strict().optional(),
	provider: z.union([
		z.literal("openai"),
		z.literal("local"),
		z.literal("gemini"),
		z.literal("voyage"),
		z.literal("mistral"),
		z.literal("ollama")
	]).optional(),
	remote: z.object({
		baseUrl: z.string().optional(),
		apiKey: SecretInputSchema.optional().register(sensitive),
		headers: z.record(z.string(), z.string()).optional(),
		batch: z.object({
			enabled: z.boolean().optional(),
			wait: z.boolean().optional(),
			concurrency: z.number().int().positive().optional(),
			pollIntervalMs: z.number().int().nonnegative().optional(),
			timeoutMinutes: z.number().int().positive().optional()
		}).strict().optional()
	}).strict().optional(),
	fallback: z.union([
		z.literal("openai"),
		z.literal("gemini"),
		z.literal("local"),
		z.literal("voyage"),
		z.literal("mistral"),
		z.literal("ollama"),
		z.literal("none")
	]).optional(),
	model: z.string().optional(),
	outputDimensionality: z.number().int().positive().optional(),
	local: z.object({
		modelPath: z.string().optional(),
		modelCacheDir: z.string().optional()
	}).strict().optional(),
	store: z.object({
		driver: z.literal("sqlite").optional(),
		path: z.string().optional(),
		vector: z.object({
			enabled: z.boolean().optional(),
			extensionPath: z.string().optional()
		}).strict().optional()
	}).strict().optional(),
	chunking: z.object({
		tokens: z.number().int().positive().optional(),
		overlap: z.number().int().nonnegative().optional()
	}).strict().optional(),
	sync: z.object({
		onSessionStart: z.boolean().optional(),
		onSearch: z.boolean().optional(),
		watch: z.boolean().optional(),
		watchDebounceMs: z.number().int().nonnegative().optional(),
		intervalMinutes: z.number().int().nonnegative().optional(),
		sessions: z.object({
			deltaBytes: z.number().int().nonnegative().optional(),
			deltaMessages: z.number().int().nonnegative().optional(),
			postCompactionForce: z.boolean().optional()
		}).strict().optional()
	}).strict().optional(),
	query: z.object({
		maxResults: z.number().int().positive().optional(),
		minScore: z.number().min(0).max(1).optional(),
		hybrid: z.object({
			enabled: z.boolean().optional(),
			vectorWeight: z.number().min(0).max(1).optional(),
			textWeight: z.number().min(0).max(1).optional(),
			candidateMultiplier: z.number().int().positive().optional(),
			mmr: z.object({
				enabled: z.boolean().optional(),
				lambda: z.number().min(0).max(1).optional()
			}).strict().optional(),
			temporalDecay: z.object({
				enabled: z.boolean().optional(),
				halfLifeDays: z.number().int().positive().optional()
			}).strict().optional()
		}).strict().optional()
	}).strict().optional(),
	cache: z.object({
		enabled: z.boolean().optional(),
		maxEntries: z.number().int().positive().optional()
	}).strict().optional()
}).strict().optional();
const AgentRuntimeAcpSchema = z.object({
	agent: z.string().optional(),
	backend: z.string().optional(),
	mode: z.enum(["persistent", "oneshot"]).optional(),
	cwd: z.string().optional()
}).strict().optional();
const AgentRuntimeSchema = z.union([z.object({ type: z.literal("embedded") }).strict(), z.object({
	type: z.literal("acp"),
	acp: AgentRuntimeAcpSchema
}).strict()]).optional();
const AgentEntrySchema = z.object({
	id: z.string(),
	default: z.boolean().optional(),
	name: z.string().optional(),
	workspace: z.string().optional(),
	agentDir: z.string().optional(),
	model: AgentModelSchema.optional(),
	thinkingDefault: z.enum([
		"off",
		"minimal",
		"low",
		"medium",
		"high",
		"xhigh",
		"adaptive"
	]).optional(),
	reasoningDefault: z.enum([
		"on",
		"off",
		"stream"
	]).optional(),
	fastModeDefault: z.boolean().optional(),
	skills: z.array(z.string()).optional(),
	memorySearch: MemorySearchSchema,
	humanDelay: HumanDelaySchema.optional(),
	heartbeat: HeartbeatSchema,
	identity: IdentitySchema,
	groupChat: GroupChatSchema,
	subagents: z.object({
		allowAgents: z.array(z.string()).optional(),
		model: z.union([z.string(), z.object({
			primary: z.string().optional(),
			fallbacks: z.array(z.string()).optional()
		}).strict()]).optional(),
		thinking: z.string().optional()
	}).strict().optional(),
	sandbox: AgentSandboxSchema,
	params: z.record(z.string(), z.unknown()).optional(),
	tools: AgentToolsSchema,
	runtime: AgentRuntimeSchema
}).strict();
const ToolsSchema = z.object({
	...CommonToolPolicyFields,
	web: ToolsWebSchema,
	media: ToolsMediaSchema,
	links: ToolsLinksSchema,
	sessions: z.object({ visibility: z.enum([
		"self",
		"tree",
		"agent",
		"all"
	]).optional() }).strict().optional(),
	loopDetection: ToolLoopDetectionSchema,
	message: z.object({
		allowCrossContextSend: z.boolean().optional(),
		crossContext: z.object({
			allowWithinProvider: z.boolean().optional(),
			allowAcrossProviders: z.boolean().optional(),
			marker: z.object({
				enabled: z.boolean().optional(),
				prefix: z.string().optional(),
				suffix: z.string().optional()
			}).strict().optional()
		}).strict().optional(),
		broadcast: z.object({ enabled: z.boolean().optional() }).strict().optional()
	}).strict().optional(),
	agentToAgent: z.object({
		enabled: z.boolean().optional(),
		allow: z.array(z.string()).optional()
	}).strict().optional(),
	elevated: z.object({
		enabled: z.boolean().optional(),
		allowFrom: ElevatedAllowFromSchema
	}).strict().optional(),
	exec: ToolExecSchema,
	fs: ToolFsSchema,
	subagents: z.object({ tools: ToolPolicySchema }).strict().optional(),
	sandbox: z.object({ tools: ToolPolicySchema }).strict().optional(),
	sessions_spawn: z.object({ attachments: z.object({
		enabled: z.boolean().optional(),
		maxTotalBytes: z.number().optional(),
		maxFiles: z.number().optional(),
		maxFileBytes: z.number().optional(),
		retainOnSessionKeep: z.boolean().optional()
	}).strict().optional() }).strict().optional()
}).strict().superRefine((value, ctx) => {
	addAllowAlsoAllowConflictIssue(value, ctx, "tools cannot set both allow and alsoAllow in the same scope (merge alsoAllow into allow, or remove allow and use profile + alsoAllow)");
}).optional();
//#endregion
export { SecretRefSchema as A, sensitive as B, ProviderCommandsSchema as C, RetryConfigSchema as D, ReplyToModeSchema as E, TtsModeSchema as F, isDangerousNetworkMode as G, MODEL_APIS as H, TtsProviderSchema as I, normalizeNetworkMode as K, TypingModeSchema as L, TranscribeAudioSchema as M, TtsAutoSchema as N, SecretInputSchema as O, TtsConfigSchema as P, requireAllowlistAllowFrom as R, NativeCommandsSettingSchema as S, ReplyRuntimeConfigSchemaShape as T, AgentModelSchema as U, createAllowDenyChannelRulesSchema as V, getBlockedNetworkModeReason as W, HumanDelaySchema as _, MemorySearchSchema as a, MarkdownConfigSchema as b, BlockStreamingChunkSchema as c, DmConfigSchema as d, DmPolicySchema as f, HexColorSchema as g, GroupPolicySchema as h, HeartbeatSchema as i, SecretsConfigSchema as j, SecretProviderSchema as k, BlockStreamingCoalesceSchema as l, GroupChatSchema as m, AgentSandboxSchema as n, ToolPolicySchema as o, ExecutableTokenSchema as p, isSafeExecutableValue as q, ElevatedAllowFromSchema as r, ToolsSchema as s, AgentEntrySchema as t, CliBackendSchema as u, InboundDebounceSchema as v, QueueSchema as w, ModelsConfigSchema as x, MSTeamsReplyStyleSchema as y, requireOpenAllowFrom as z };
