import { f as describeImageWithModel, p as describeImagesWithModel } from "./media-understanding-C8oVavar.js";
//#region extensions/anthropic/media-understanding-provider.ts
const anthropicMediaUnderstandingProvider = {
	id: "anthropic",
	capabilities: ["image"],
	describeImage: describeImageWithModel,
	describeImages: describeImagesWithModel
};
//#endregion
export { anthropicMediaUnderstandingProvider as t };
