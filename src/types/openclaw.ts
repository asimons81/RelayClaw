// =============================================================================
// Minimal structural type definitions for the OpenClaw plugin API.
//
// These mirror the shapes in:
//   openclaw/src/plugins/types.ts (OpenClawPluginApi, hook events, etc.)
//
// We define them locally (following the byterover pattern) so this plugin
// typechecks without openclaw being installed as a full package.
// The gateway resolves the actual openclaw peer dep at runtime.
// =============================================================================

// ---------------------------------------------------------------------------
// Logger
// ---------------------------------------------------------------------------

export type PluginLogger = {
  info(message: string, ...args: unknown[]): void;
  warn(message: string, ...args: unknown[]): void;
  error(message: string, ...args: unknown[]): void;
  debug(message: string, ...args: unknown[]): void;
};

// ---------------------------------------------------------------------------
// Hook event shapes (only the hooks RelayClaw uses)
// ---------------------------------------------------------------------------

export type PluginHookAgentContext = {
  runId?: string;
  agentId?: string;
  sessionKey?: string;
  sessionId?: string;
  workspaceDir?: string;
  trigger?: string;
  channelId?: string;
};

export type PluginHookSessionContext = {
  agentId?: string;
  sessionId: string;
  sessionKey?: string;
};

export type PluginHookSessionStartEvent = {
  sessionId: string;
  sessionKey?: string;
  resumedFrom?: string;
};

export type PluginHookSessionEndEvent = {
  sessionId: string;
  sessionKey?: string;
  messageCount: number;
  durationMs?: number;
};

export type PluginHookBeforePromptBuildEvent = {
  prompt: string;
  messages: unknown[];
};

export type PluginHookBeforePromptBuildResult = {
  systemPrompt?: string;
  prependContext?: string;
  prependSystemContext?: string;
  appendSystemContext?: string;
};

export type PluginHookLlmOutputEvent = {
  runId: string;
  sessionId: string;
  provider: string;
  model: string;
  assistantTexts: string[];
  lastAssistant?: unknown;
  usage?: {
    input?: number;
    output?: number;
    cacheRead?: number;
    cacheWrite?: number;
    total?: number;
  };
};

export type PluginHookAgentEndEvent = {
  messages: unknown[];
  success: boolean;
  error?: string;
  durationMs?: number;
};

export type PluginHookToolContext = {
  agentId?: string;
  sessionKey?: string;
  sessionId?: string;
  runId?: string;
  toolName: string;
  toolCallId?: string;
};

export type PluginHookBeforeToolCallEvent = {
  toolName: string;
  params: Record<string, unknown>;
  runId?: string;
  toolCallId?: string;
};

export type PluginHookBeforeToolCallResult = {
  params?: Record<string, unknown>;
  block?: boolean;
  blockReason?: string;
};

export type PluginHookGatewayContext = {
  port?: number;
};

export type PluginHookGatewayStartEvent = {
  port: number;
};

export type PluginHookGatewayStopEvent = {
  reason?: string;
};

// ---------------------------------------------------------------------------
// Service
// ---------------------------------------------------------------------------

export type OpenClawPluginService = {
  id: string;
  start: () => Promise<void>;
  stop: () => Promise<void>;
};

// ---------------------------------------------------------------------------
// Tool
// ---------------------------------------------------------------------------

export type AgentToolResult = {
  content: Array<{ type: "text"; text: string }>;
  details?: unknown;
};

export type AnyAgentTool = {
  name: string;
  label?: string;
  description: string;
  parameters: Record<string, unknown>;
  execute(toolCallId: string, params: unknown): Promise<AgentToolResult>;
};

// ---------------------------------------------------------------------------
// CLI registrar
// ---------------------------------------------------------------------------

export type OpenClawPluginCliRegistrar = (ctx: {
  program: { command: (name: string) => unknown };
}) => void;

export type OpenClawPluginCliCommandDescriptor = {
  name: string;
  description?: string;
  hasSubcommands?: boolean;
};

// ---------------------------------------------------------------------------
// HTTP route
// ---------------------------------------------------------------------------

export type OpenClawPluginHttpRouteHandler = (
  req: unknown,
  res: { json: (body: unknown) => void; status: (code: number) => { json: (body: unknown) => void } },
) => Promise<void> | void;

export type OpenClawPluginHttpRouteParams = {
  path: string;
  auth: "plugin" | "operator" | "public";
  handler: OpenClawPluginHttpRouteHandler;
};

// ---------------------------------------------------------------------------
// Gateway method
// ---------------------------------------------------------------------------

export type GatewayRequestHandlerOptions = {
  params?: Record<string, unknown>;
  respond: (ok: boolean, payload?: unknown) => void;
};

export type GatewayRequestHandler = (opts: GatewayRequestHandlerOptions) => Promise<void> | void;

// ---------------------------------------------------------------------------
// Hook name union (only the hooks RelayClaw uses)
// ---------------------------------------------------------------------------

export type RelayClawHookName =
  | "session_start"
  | "session_end"
  | "before_prompt_build"
  | "llm_output"
  | "agent_end"
  | "before_tool_call"
  | "gateway_start"
  | "gateway_stop";

// Minimal handler map for the hooks RelayClaw registers
type RelayClawHookHandlerMap = {
  session_start: (
    event: PluginHookSessionStartEvent,
    ctx: PluginHookSessionContext,
  ) => Promise<void> | void;
  session_end: (
    event: PluginHookSessionEndEvent,
    ctx: PluginHookSessionContext,
  ) => Promise<void> | void;
  before_prompt_build: (
    event: PluginHookBeforePromptBuildEvent,
    ctx: PluginHookAgentContext,
  ) => Promise<PluginHookBeforePromptBuildResult | void> | PluginHookBeforePromptBuildResult | void;
  llm_output: (event: PluginHookLlmOutputEvent, ctx: PluginHookAgentContext) => Promise<void> | void;
  agent_end: (event: PluginHookAgentEndEvent, ctx: PluginHookAgentContext) => Promise<void> | void;
  before_tool_call: (
    event: PluginHookBeforeToolCallEvent,
    ctx: PluginHookToolContext,
  ) => Promise<PluginHookBeforeToolCallResult | void> | PluginHookBeforeToolCallResult | void;
  gateway_start: (
    event: PluginHookGatewayStartEvent,
    ctx: PluginHookGatewayContext,
  ) => Promise<void> | void;
  gateway_stop: (
    event: PluginHookGatewayStopEvent,
    ctx: PluginHookGatewayContext,
  ) => Promise<void> | void;
};

// ---------------------------------------------------------------------------
// OpenClawPluginApi — structural type matching the runtime interface
// ---------------------------------------------------------------------------

export type OpenClawPluginApi = {
  id: string;
  name: string;
  version?: string;
  description?: string;
  source: string;
  rootDir?: string;
  pluginConfig?: Record<string, unknown>;
  runtime: Record<string, unknown>;
  logger: PluginLogger;

  registerTool(tool: AnyAgentTool, opts?: { name?: string }): void;

  registerCli(
    registrar: OpenClawPluginCliRegistrar,
    opts?: {
      commands?: string[];
      descriptors?: OpenClawPluginCliCommandDescriptor[];
    },
  ): void;

  registerHttpRoute(params: OpenClawPluginHttpRouteParams): void;

  registerGatewayMethod(method: string, handler: GatewayRequestHandler): void;

  registerService(service: OpenClawPluginService): void;

  on<K extends RelayClawHookName>(
    hookName: K,
    handler: RelayClawHookHandlerMap[K],
    opts?: { priority?: number },
  ): void;
};
