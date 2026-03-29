type GoogleApiCarrier = {
    api?: string | null;
};
type GoogleProviderConfigLike = GoogleApiCarrier & {
    models?: ReadonlyArray<GoogleApiCarrier | null | undefined> | null;
};
export declare function isGoogleGenerativeAiApi(api?: string | null): boolean;
export declare function normalizeGoogleGenerativeAiBaseUrl(baseUrl?: string): string | undefined;
export declare function resolveGoogleGenerativeAiTransport<TApi extends string | null | undefined>(params: {
    api: TApi;
    baseUrl?: string;
}): {
    api: TApi;
    baseUrl?: string;
};
export declare function resolveGoogleGenerativeAiApiOrigin(baseUrl?: string): string;
export declare function shouldNormalizeGoogleGenerativeAiProviderConfig(providerKey: string, provider: GoogleProviderConfigLike): boolean;
export {};
