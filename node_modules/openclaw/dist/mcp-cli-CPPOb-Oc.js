import { Do as defaultRuntime } from "./env-D1ktUnAV.js";
import "./paths-CjuwkA2v.js";
import "./safe-text-K2Nonoo3.js";
import "./tmp-openclaw-dir-DzRxfh9a.js";
import "./theme-BH5F9mlg.js";
import "./version-DGzLsBG-.js";
import "./zod-schema.agent-runtime-DNndkpI8.js";
import "./runtime-BF_KUcJM.js";
import "./registry-bOiEdffE.js";
import "./ip-ByO4-_4f.js";
import { i as unsetConfiguredMcpServer, r as setConfiguredMcpServer, t as listConfiguredMcpServers } from "./mcp-config-vaYGkUmW.js";
import { t as parseConfigValue } from "./config-value-DTKYRJnc.js";
//#region src/cli/mcp-cli.ts
function fail(message) {
	defaultRuntime.error(message);
	defaultRuntime.exit(1);
	throw new Error(message);
}
function printJson(value) {
	defaultRuntime.writeJson(value);
}
function registerMcpCli(program) {
	const mcp = program.command("mcp").description("Manage OpenClaw MCP server config");
	mcp.command("list").description("List configured MCP servers").option("--json", "Print JSON").action(async (opts) => {
		const loaded = await listConfiguredMcpServers();
		if (!loaded.ok) fail(loaded.error);
		if (opts.json) {
			printJson(loaded.mcpServers);
			return;
		}
		const names = Object.keys(loaded.mcpServers).toSorted();
		if (names.length === 0) {
			defaultRuntime.log(`No MCP servers configured in ${loaded.path}.`);
			return;
		}
		defaultRuntime.log(`MCP servers (${loaded.path}):`);
		for (const name of names) defaultRuntime.log(`- ${name}`);
	});
	mcp.command("show").description("Show one configured MCP server or the full MCP config").argument("[name]", "MCP server name").option("--json", "Print JSON").action(async (name, opts) => {
		const loaded = await listConfiguredMcpServers();
		if (!loaded.ok) fail(loaded.error);
		const value = name ? loaded.mcpServers[name] : loaded.mcpServers;
		if (name && !value) fail(`No MCP server named "${name}" in ${loaded.path}.`);
		if (opts.json) {
			printJson(value ?? {});
			return;
		}
		if (name) defaultRuntime.log(`MCP server "${name}" (${loaded.path}):`);
		else defaultRuntime.log(`MCP servers (${loaded.path}):`);
		printJson(value ?? {});
	});
	mcp.command("set").description("Set one configured MCP server from a JSON object").argument("<name>", "MCP server name").argument("<value>", "JSON object, for example {\"command\":\"uvx\",\"args\":[\"context7-mcp\"]}").action(async (name, rawValue) => {
		const parsed = parseConfigValue(rawValue);
		if (parsed.error) fail(parsed.error);
		const result = await setConfiguredMcpServer({
			name,
			server: parsed.value
		});
		if (!result.ok) fail(result.error);
		defaultRuntime.log(`Saved MCP server "${name}" to ${result.path}.`);
	});
	mcp.command("unset").description("Remove one configured MCP server").argument("<name>", "MCP server name").action(async (name) => {
		const result = await unsetConfiguredMcpServer({ name });
		if (!result.ok) fail(result.error);
		if (!result.removed) fail(`No MCP server named "${name}" in ${result.path}.`);
		defaultRuntime.log(`Removed MCP server "${name}" from ${result.path}.`);
	});
}
//#endregion
export { registerMcpCli };
