import { t as __commonJSMin } from "./chunk-DORXReHP.js";
import { t as require_axios } from "./axios-zS_oAKS1.js";
//#region node_modules/@microsoft/teams.common/dist/logging/ansi.js
var require_ansi = /* @__PURE__ */ __commonJSMin(((exports) => {
	var ANSI = /* @__PURE__ */ ((ANSI2) => {
		ANSI2["Reset"] = "\x1B[0m";
		ANSI2["Bold"] = "\x1B[1m";
		ANSI2["BoldReset"] = "\x1B[22m";
		ANSI2["Italic"] = "\x1B[3m";
		ANSI2["ItalicReset"] = "\x1B[23m";
		ANSI2["Underline"] = "\x1B[4m";
		ANSI2["UnderlineReset"] = "\x1B[24m";
		ANSI2["Strike"] = "\x1B[9m";
		ANSI2["StrikeReset"] = "\x1B[29m";
		ANSI2["ForegroundReset"] = "\x1B[0m";
		ANSI2["BackgroundReset"] = "\x1B[0m";
		ANSI2["ForegroundBlack"] = "\x1B[30m";
		ANSI2["BackgroundBlack"] = "\x1B[40m";
		ANSI2["ForegroundRed"] = "\x1B[31m";
		ANSI2["BackgroundRed"] = "\x1B[41m";
		ANSI2["ForegroundGreen"] = "\x1B[32m";
		ANSI2["BackgroundGreen"] = "\x1B[42m";
		ANSI2["ForegroundYellow"] = "\x1B[33m";
		ANSI2["BackgroundYellow"] = "\x1B[43m";
		ANSI2["ForegroundBlue"] = "\x1B[34m";
		ANSI2["BackgroundBlue"] = "\x1B[44m";
		ANSI2["ForegroundMagenta"] = "\x1B[35m";
		ANSI2["BackgroundMagenta"] = "\x1B[45m";
		ANSI2["ForegroundCyan"] = "\x1B[36m";
		ANSI2["BackgroundCyan"] = "\x1B[46m";
		ANSI2["ForegroundWhite"] = "\x1B[37m";
		ANSI2["BackgroundWhite"] = "\x1B[47m";
		ANSI2["ForegroundGray"] = "\x1B[90m";
		ANSI2["ForegroundDefault"] = "\x1B[39m";
		ANSI2["BackgroundDefault"] = "\x1B[49m";
		return ANSI2;
	})(ANSI || {});
	exports.ANSI = ANSI;
}));
//#endregion
//#region node_modules/@microsoft/teams.common/dist/logging/console.js
var require_console = /* @__PURE__ */ __commonJSMin(((exports) => {
	var ansi = require_ansi();
	var ConsoleLogger = class ConsoleLogger {
		loggerOptions;
		name;
		level;
		_enabled;
		_levels = {
			error: 100,
			warn: 200,
			info: 300,
			debug: 400,
			trace: 500
		};
		_colors = {
			error: ansi.ANSI.ForegroundRed,
			warn: ansi.ANSI.ForegroundYellow,
			info: ansi.ANSI.ForegroundCyan,
			debug: ansi.ANSI.ForegroundMagenta,
			trace: ansi.ANSI.BackgroundBlue
		};
		constructor(name, options) {
			this.name = name;
			const env = typeof process === "undefined" ? void 0 : process.env;
			const logNamePattern = env?.LOG || options?.pattern || "*";
			this._enabled = parseMagicExpr(logNamePattern).test(name);
			this.level = parseLogLevel(env?.LOG_LEVEL) || options?.level || "info";
			this.loggerOptions = options ?? {
				level: this.level,
				pattern: logNamePattern
			};
		}
		error(...msg) {
			this.log("error", ...msg);
		}
		warn(...msg) {
			this.log("warn", ...msg);
		}
		info(...msg) {
			this.log("info", ...msg);
		}
		debug(...msg) {
			this.log("debug", ...msg);
		}
		trace(...msg) {
			this.log("trace", ...msg);
		}
		log(level, ...msg) {
			if (!this._enabled) return;
			if (this._levels[level] > this._levels[this.level]) return;
			const prefix = [
				this._colors[level],
				ansi.ANSI.Bold,
				`[${level.toUpperCase()}]`
			];
			const name = [
				this.name,
				ansi.ANSI.ForegroundReset,
				ansi.ANSI.BoldReset
			];
			for (const m of msg) {
				let text = new String(m);
				if (typeof m === "object") text = JSON.stringify(m, null, 2);
				for (const line of text.split("\n")) console[level](prefix.join(""), name.join(""), line);
			}
		}
		child(name, overrideOptions) {
			const mergedPattern = mergePatterns(this.loggerOptions.pattern, overrideOptions?.pattern);
			return new ConsoleLogger(`${this.name}/${name}`, {
				...this.loggerOptions,
				...overrideOptions,
				pattern: mergedPattern
			});
		}
	};
	function parsePatternString(pattern) {
		const patterns = pattern.split(",").map((p) => p.trim());
		const inclusions = [];
		const exclusions = [];
		for (const p of patterns) if (p.startsWith("-")) exclusions.push(p.substring(1));
		else inclusions.push(p);
		return {
			inclusions,
			exclusions
		};
	}
	function parseMagicExpr(pattern) {
		const { inclusions: inclusionPatterns, exclusions: exclusionPatterns } = parsePatternString(pattern);
		const inclusions = inclusionPatterns.map((p) => patternToRegex(p));
		const exclusions = exclusionPatterns.map((p) => patternToRegex(p));
		if (inclusions.length === 0 && exclusions.length > 0) inclusions.push(/.*/);
		return { test: (name) => {
			if (!inclusions.some((regex) => regex.test(name))) return false;
			return !exclusions.some((regex) => regex.test(name));
		} };
	}
	function patternToRegex(pattern) {
		let res = "";
		const parts = pattern.split("*");
		for (let i = 0; i < parts.length; i++) {
			if (i > 0) res += ".*";
			res += parts[i];
		}
		return new RegExp(res);
	}
	function mergePatterns(parentPattern, childPattern) {
		if (!parentPattern && !childPattern) return "*";
		if (!parentPattern) return childPattern;
		if (!childPattern) return parentPattern;
		const parent = parsePatternString(parentPattern);
		const child = parsePatternString(childPattern);
		let allInclusions = [.../* @__PURE__ */ new Set([...parent.inclusions, ...child.inclusions])];
		if (allInclusions.length === 0) allInclusions = ["*"];
		const optimizedInclusions = allInclusions.includes("*") ? ["*"] : allInclusions;
		const allExclusions = [.../* @__PURE__ */ new Set([...parent.exclusions, ...child.exclusions])];
		const inclusionStrings = optimizedInclusions;
		const exclusionStrings = allExclusions.map((e) => "-" + e);
		return [...inclusionStrings, ...exclusionStrings].join(",");
	}
	function parseLogLevel(level) {
		const value = level?.toLowerCase();
		switch (value) {
			case "error":
			case "warn":
			case "info":
			case "debug":
			case "trace": return value;
			default: return;
		}
	}
	exports.ConsoleLogger = ConsoleLogger;
}));
//#endregion
//#region node_modules/@microsoft/teams.common/dist/logging/logger.js
var require_logger = /* @__PURE__ */ __commonJSMin((() => {}));
//#endregion
//#region node_modules/@microsoft/teams.common/dist/logging/string.js
var require_string = /* @__PURE__ */ __commonJSMin(((exports) => {
	var ansi = require_ansi();
	var String = class {
		_value;
		constructor(value = "") {
			this._value = value;
		}
		clear() {
			this._value = "";
			return this;
		}
		append(...text) {
			this._value += text.join("");
			return this;
		}
		reset() {
			this._value += ansi.ANSI.Reset;
			return this;
		}
		bold(text) {
			this._value += ansi.ANSI.Bold + text.toString() + ansi.ANSI.BoldReset;
			return this;
		}
		italic(text) {
			this._value += ansi.ANSI.Italic + text.toString() + ansi.ANSI.ItalicReset;
			return this;
		}
		underline(text) {
			this._value += ansi.ANSI.Underline + text.toString() + ansi.ANSI.UnderlineReset;
			return this;
		}
		strike(text) {
			this._value += ansi.ANSI.Strike + text.toString() + ansi.ANSI.StrikeReset;
			return this;
		}
		black(text) {
			this._value += ansi.ANSI.ForegroundBlack + text.toString() + ansi.ANSI.ForegroundReset;
			return this;
		}
		bgBlack(text) {
			this._value += ansi.ANSI.BackgroundBlack + text.toString() + ansi.ANSI.BackgroundReset;
			return this;
		}
		red(text) {
			this._value += ansi.ANSI.ForegroundRed + text.toString() + ansi.ANSI.ForegroundReset;
			return this;
		}
		bgRed(text) {
			this._value += ansi.ANSI.BackgroundRed + text.toString() + ansi.ANSI.BackgroundReset;
			return this;
		}
		green(text) {
			this._value += ansi.ANSI.ForegroundGreen + text.toString() + ansi.ANSI.ForegroundReset;
			return this;
		}
		bgGreen(text) {
			this._value += ansi.ANSI.BackgroundGreen + text.toString() + ansi.ANSI.BackgroundReset;
			return this;
		}
		yellow(text) {
			this._value += ansi.ANSI.ForegroundYellow + text.toString() + ansi.ANSI.ForegroundReset;
			return this;
		}
		bgYellow(text) {
			this._value += ansi.ANSI.BackgroundYellow + text.toString() + ansi.ANSI.BackgroundReset;
			return this;
		}
		blue(text) {
			this._value += ansi.ANSI.ForegroundBlue + text.toString() + ansi.ANSI.ForegroundReset;
			return this;
		}
		bgBlue(text) {
			this._value += ansi.ANSI.BackgroundBlue + text.toString() + ansi.ANSI.BackgroundReset;
			return this;
		}
		magenta(text) {
			this._value += ansi.ANSI.ForegroundMagenta + text.toString() + ansi.ANSI.ForegroundReset;
			return this;
		}
		bgMagenta(text) {
			this._value += ansi.ANSI.BackgroundMagenta + text.toString() + ansi.ANSI.BackgroundReset;
			return this;
		}
		cyan(text) {
			this._value += ansi.ANSI.ForegroundCyan + text.toString() + ansi.ANSI.ForegroundReset;
			return this;
		}
		bgCyan(text) {
			this._value += ansi.ANSI.BackgroundCyan + text.toString() + ansi.ANSI.BackgroundReset;
			return this;
		}
		white(text) {
			this._value += ansi.ANSI.ForegroundWhite + text.toString() + ansi.ANSI.ForegroundReset;
			return this;
		}
		bgWhite(text) {
			this._value += ansi.ANSI.BackgroundWhite + text.toString() + ansi.ANSI.BackgroundReset;
			return this;
		}
		gray(text) {
			this._value += ansi.ANSI.ForegroundGray + text.toString() + ansi.ANSI.ForegroundReset;
			return this;
		}
		default(text) {
			this._value += ansi.ANSI.ForegroundDefault + text.toString() + ansi.ANSI.ForegroundReset;
			return this;
		}
		bgDefault(text) {
			this._value += ansi.ANSI.BackgroundDefault + text.toString() + ansi.ANSI.BackgroundReset;
			return this;
		}
		toString() {
			return this._value;
		}
	};
	exports.String = String;
}));
//#endregion
//#region node_modules/@microsoft/teams.common/dist/logging/index.js
var require_logging = /* @__PURE__ */ __commonJSMin(((exports) => {
	var console = require_console();
	var logger = require_logger();
	var string = require_string();
	Object.keys(console).forEach(function(k) {
		if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
			enumerable: true,
			get: function() {
				return console[k];
			}
		});
	});
	Object.keys(logger).forEach(function(k) {
		if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
			enumerable: true,
			get: function() {
				return logger[k];
			}
		});
	});
	Object.keys(string).forEach(function(k) {
		if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
			enumerable: true,
			get: function() {
				return string[k];
			}
		});
	});
}));
//#endregion
//#region node_modules/@microsoft/teams.common/dist/http/client.js
var require_client = /* @__PURE__ */ __commonJSMin(((exports) => {
	var axios = require_axios();
	var logging = require_logging();
	function _interopDefault(e) {
		return e && e.__esModule ? e : { default: e };
	}
	var axios__default = /* @__PURE__ */ _interopDefault(axios);
	exports.Client = class Client {
		token;
		name;
		options;
		log;
		http;
		seq = 0;
		interceptors;
		constructor(options = {}) {
			this.options = options;
			this.name = options.name || "http";
			this.token = options.token;
			this.log = options.logger || new logging.ConsoleLogger(this.name);
			this.interceptors = /* @__PURE__ */ new Map();
			this.http = axios__default.default.create({
				baseURL: options.baseUrl,
				timeout: options.timeout,
				headers: options.headers
			});
			for (const interceptor of options.interceptors || []) this.use(interceptor);
		}
		async get(url, config) {
			return this.http.get(url, await this.withConfig(config));
		}
		async post(url, data, config) {
			return this.http.post(url, data, await this.withConfig(config));
		}
		async put(url, data, config) {
			return this.http.put(url, data, await this.withConfig(config));
		}
		async patch(url, data, config) {
			return this.http.patch(url, data, await this.withConfig(config));
		}
		async delete(url, config) {
			return this.http.delete(url, await this.withConfig(config));
		}
		async request(config) {
			return this.http.request(await this.withConfig(config));
		}
		/**
		* Register an interceptor to use
		* as middleware for the request/response/error
		*/
		use(interceptor) {
			const id = ++this.seq;
			let requestId = void 0;
			let responseId = void 0;
			if (interceptor.request) requestId = this.http.interceptors.request.use(
				/* istanbul ignore next */
				(config) => {
					return interceptor.request({
						config,
						log: this.log
					});
				},
				/* istanbul ignore next */
				(error) => {
					if (!interceptor.error) return error;
					return interceptor.error({
						error,
						log: this.log
					});
				}
			);
			if (interceptor.response) responseId = this.http.interceptors.response.use(
				/* istanbul ignore next */
				(res) => {
					return interceptor.response({
						res,
						log: this.log
					});
				},
				/* istanbul ignore next */
				(error) => {
					if (!interceptor.error) return error;
					return interceptor.error({
						error,
						log: this.log
					});
				}
			);
			this.interceptors.set(id, {
				requestId,
				responseId,
				interceptor
			});
			return id;
		}
		/**
		* Eject an interceptor
		*/
		eject(id) {
			const registry = this.interceptors.get(id);
			if (!registry) return;
			if (registry.requestId) this.http.interceptors.request.eject(registry.requestId);
			if (registry.responseId) this.http.interceptors.response.eject(registry.responseId);
			this.interceptors.delete(id);
		}
		/**
		* Clear (Eject) all interceptors
		*/
		clear() {
			for (const id of this.interceptors.keys()) this.eject(id);
		}
		/**
		* Create a copy of the client
		*/
		clone(options) {
			return new Client({
				...this.options,
				...options,
				headers: {
					...this.options.headers,
					...options?.headers
				},
				interceptors: [...Array.from(this.interceptors.values()).map((i) => i.interceptor)]
			});
		}
		async withConfig(config = {}) {
			let token = config.token || this.token;
			if (config.token) delete config.token;
			if (this.options.headers) {
				if (!config.headers) config.headers = {};
				for (const key in this.options.headers) config.headers[key] = this.options.headers[key];
			}
			if (token) {
				if (!config.headers) config.headers = {};
				if (typeof token === "function") token = await token(config);
				if (token && typeof token === "object") token = token.toString();
				config.headers["Authorization"] = `Bearer ${token}`;
			}
			return config;
		}
	};
}));
//#endregion
//#region node_modules/@microsoft/teams.common/dist/http/interceptor.js
var require_interceptor = /* @__PURE__ */ __commonJSMin((() => {}));
//#endregion
//#region node_modules/@microsoft/teams.common/dist/http/token.js
var require_token = /* @__PURE__ */ __commonJSMin((() => {}));
//#endregion
//#region node_modules/@microsoft/teams.common/dist/http/index.js
var require_http = /* @__PURE__ */ __commonJSMin(((exports) => {
	var client = require_client();
	var interceptor = require_interceptor();
	var token = require_token();
	Object.keys(client).forEach(function(k) {
		if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
			enumerable: true,
			get: function() {
				return client[k];
			}
		});
	});
	Object.keys(interceptor).forEach(function(k) {
		if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
			enumerable: true,
			get: function() {
				return interceptor[k];
			}
		});
	});
	Object.keys(token).forEach(function(k) {
		if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
			enumerable: true,
			get: function() {
				return token[k];
			}
		});
	});
}));
//#endregion
export { require_logging as n, require_http as t };
