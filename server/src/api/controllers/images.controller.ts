import { Request, Response } from 'express';
import { fetchImages } from '../services/images.service';

export const getImages = async (req: Request, res: Response) => {

    const { category = 'nature', page = '1', imagesPerPage = '9' } = req.query;

    try {
        const data = await fetchImages({
            category: category as string,
            page: parseInt(page as string),
            imagesPerPage: parseInt(imagesPerPage as string),
        });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};