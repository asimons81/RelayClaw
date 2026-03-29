//#region src/infra/google-api-base-url.ts
const DEFAULT_GOOGLE_API_HOST = "generativelanguage.googleapis.com";
const DEFAULT_GOOGLE_API_BASE_URL = "https://generativelanguage.googleapis.com/v1beta";
function trimTrailingSlashes(value) {
	return value.replace(/\/+$/, "");
}
function normalizeGoogleApiBaseUrl(baseUrl) {
	const raw = trimTrailingSlashes(baseUrl?.trim() || "https://generativelanguage.googleapis.com/v1beta");
	try {
		const url = new URL(raw);
		url.hash = "";
		url.search = "";
		if (url.hostname.toLowerCase() === DEFAULT_GOOGLE_API_HOST && trimTrailingSlashes(url.pathname || "") === "") url.pathname = "/v1beta";
		return trimTrailingSlashes(url.toString());
	} catch {
		if (/^https:\/\/generativelanguage\.googleapis\.com\/?$/i.test(raw)) return DEFAULT_GOOGLE_API_BASE_URL;
		return raw;
	}
}
//#endregion
//#region src/infra/gemini-auth.ts
/**
* Shared Gemini authentication utilities.
*
* Supports both traditional API keys and OAuth JSON format.
*/
/**
* Parse Gemini API key and return appropriate auth headers.
*
* OAuth format: `{"token": "...", "projectId": "..."}`
*
* @param apiKey - Either a traditional API key string or OAuth JSON
* @returns Headers object with appropriate authentication
*/
function parseGeminiAuth(apiKey) {
	if (apiKey.startsWith("{")) try {
		const parsed = JSON.parse(apiKey);
		if (typeof parsed.token === "string" && parsed.token) return { headers: {
			Authorization: `Bearer ${parsed.token}`,
			"Content-Type": "application/json"
		} };
	} catch {}
	return { headers: {
		"x-goog-api-key": apiKey,
		"Content-Type": "application/json"
	} };
}
//#endregion
export { DEFAULT_GOOGLE_API_BASE_URL as n, normalizeGoogleApiBaseUrl as r, parseGeminiAuth as t };
