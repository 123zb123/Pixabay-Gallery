import { Request, Response } from 'express';
import { fetchImages } from '../services/images.service';
import status from 'http-status';
import { DEFAULT_CATEGORY_TO_FETCH, DEFAULT_IMAGES_PER_PAGE_TO_FETCH, DEFAULT_PAGE_TO_FETCH } from '../../constants/constants';

export const getImages = async (req: Request, res: Response) => {

    const {
        category = DEFAULT_CATEGORY_TO_FETCH,
        page = DEFAULT_PAGE_TO_FETCH,
        imagesPerPage = DEFAULT_IMAGES_PER_PAGE_TO_FETCH
    } = req.query;

    try {
        const data = await fetchImages({
            category: category as string,
            page: parseInt(page as string),
            imagesPerPage: parseInt(imagesPerPage as string),
        });
        res
            .status(status.OK)
            .json(data);
    } catch (error) {
        res
            .status(status.INTERNAL_SERVER_ERROR)
            .json({
                message: 'Server error',
                error: error.message,
            });
    }
};