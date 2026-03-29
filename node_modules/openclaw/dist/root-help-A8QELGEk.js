import "./env-D1ktUnAV.js";
import "./paths-CjuwkA2v.js";
import "./safe-text-K2Nonoo3.js";
import "./tmp-openclaw-dir-DzRxfh9a.js";
import "./theme-BH5F9mlg.js";
import { n as VERSION } from "./version-DGzLsBG-.js";
import "./zod-schema.agent-runtime-DNndkpI8.js";
import "./runtime-BF_KUcJM.js";
import "./registry-bOiEdffE.js";
import "./ip-ByO4-_4f.js";
import "./links-DaR1j_Bv.js";
import { t as getCoreCliCommandDescriptors } from "./core-command-descriptors-DTG3LL4R.js";
import { n as getSubCliEntries } from "./subcli-descriptors-BVDygHdP.js";
import "./banner-CMCUIYka.js";
import { t as configureProgramHelp } from "./help-DHt8oVCw.js";
import { Command } from "commander";
//#region src/cli/program/root-help.ts
function buildRootHelpProgram() {
	const program = new Command();
	configureProgramHelp(program, {
		programVersion: VERSION,
		channelOptions: [],
		messageChannelOptions: "",
		agentChannelOptions: ""
	});
	for (const command of getCoreCliCommandDescriptors()) program.command(command.name).description(command.description);
	for (const command of getSubCliEntries()) program.command(command.name).description(command.description);
	return program;
}
function renderRootHelpText() {
	const program = buildRootHelpProgram();
	let output = "";
	const originalWrite = process.stdout.write.bind(process.stdout);
	const captureWrite = ((chunk) => {
		output += String(chunk);
		return true;
	});
	process.stdout.write = captureWrite;
	try {
		program.outputHelp();
	} finally {
		process.stdout.write = originalWrite;
	}
	return output;
}
function outputRootHelp() {
	process.stdout.write(renderRootHelpText());
}
//#endregion
export { outputRootHelp };
