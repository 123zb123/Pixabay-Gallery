import axios from 'axios';
import dotenv from 'dotenv';
import { PixabayImage } from '../../types/imagesTypes';
import { sortImagesById } from '../../utils/imagesUtils';
dotenv.config();

const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY || '';
const PIXABAY_API_URL = process.env.PIXABAY_API_URL || 'https://pixabay.com/api/';

interface Props {
    category: string;
    page: number;
    imagesPerPage: number;
}
export const fetchImages = async ({ category, imagesPerPage, page }: Props) => {
    const response = await axios.get(`${PIXABAY_API_URL}`, {
        params: {
            page: page,
            q: category,
            image_type: 'photo',
            key: PIXABAY_API_KEY,
            per_page: imagesPerPage,
        }
    })

    let images: PixabayImage[] | [] = response.data.hits;
    if (images.length) {
        // Sort images by id in ascending order
        images = sortImagesById(images);
    }
    return images;
};
