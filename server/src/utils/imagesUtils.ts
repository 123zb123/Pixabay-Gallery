import { PixabayImage } from "../types/imagesTypes";

export const sortImagesById = (images: PixabayImage[]) => {
    return images.sort((a, b) => a.id - b.id);
};