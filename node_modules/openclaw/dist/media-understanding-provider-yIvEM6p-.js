import { f as describeImageWithModel, p as describeImagesWithModel } from "./media-understanding-C8oVavar.js";
//#region extensions/minimax/media-understanding-provider.ts
const minimaxMediaUnderstandingProvider = {
	id: "minimax",
	capabilities: ["image"],
	describeImage: describeImageWithModel,
	describeImages: describeImagesWithModel
};
const minimaxPortalMediaUnderstandingProvider = {
	id: "minimax-portal",
	capabilities: ["image"],
	describeImage: describeImageWithModel,
	describeImages: describeImagesWithModel
};
//#endregion
export { minimaxPortalMediaUnderstandingProvider as n, minimaxMediaUnderstandingProvider as t };
