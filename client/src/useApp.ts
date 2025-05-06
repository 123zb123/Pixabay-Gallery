import { useDispatch, useSelector } from "react-redux";
import type { ImagesState, Image } from "./types/imagesTypes";
import { useEffect } from "react";
import { setImages } from "./store/imagesSlice";
import axios from "axios";
import { IMAGES_PER_PAGE } from "./constants/constants";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const useApp = () => {
    const dispatch = useDispatch();
    const { category, page } = useSelector((state: ImagesState) => state);

    useEffect(() => {
        const fetchImages = async () => {
            // Fetch images from the server
            try {
                const res = await axios.get(
                    `${baseUrl}?category=${category}&page=${page}&imagesPerPage=${IMAGES_PER_PAGE}`
                );
                dispatch(setImages(res.data as Image[]));
            } catch (error) {
                console.error("Error fetching images:", error);
            }
        };
        fetchImages();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category, page]);
    return null
}