import { f as describeImageWithModel, p as describeImagesWithModel } from "./media-understanding-C8oVavar.js";
//#region extensions/zai/media-understanding-provider.ts
const zaiMediaUnderstandingProvider = {
	id: "zai",
	capabilities: ["image"],
	describeImage: describeImageWithModel,
	describeImages: describeImagesWithModel
};
//#endregion
export { zaiMediaUnderstandingProvider as t };
