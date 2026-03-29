import { t as definePluginEntry } from "./plugin-entry-CK-4XWE0.js";
import { n as createPerplexityWebSearchProvider } from "./perplexity-web-search-provider-CBvej2u9.js";
//#region extensions/perplexity/index.ts
var perplexity_default = definePluginEntry({
	id: "perplexity",
	name: "Perplexity Plugin",
	description: "Bundled Perplexity plugin",
	register(api) {
		api.registerWebSearchProvider(createPerplexityWebSearchProvider());
	}
});
//#endregion
export { perplexity_default as t };
