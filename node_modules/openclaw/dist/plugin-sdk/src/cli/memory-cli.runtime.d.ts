import type { MemoryCommandOptions, MemorySearchCommandOptions } from "./memory-cli.types.js";
export { registerMemoryCli } from "./memory-cli.js";
export declare function runMemoryStatus(opts: MemoryCommandOptions): Promise<void>;
export declare function runMemoryIndex(opts: MemoryCommandOptions): Promise<void>;
export declare function runMemorySearch(queryArg: string | undefined, opts: MemorySearchCommandOptions): Promise<void>;
