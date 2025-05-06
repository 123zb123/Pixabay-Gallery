import { DEFAULT_SELECTED_CATEGORY, DEFAULT_SELECTED_PAGE, DEFAULT_SELECTED_IMAGE } from './../constants/constants';
import { type ImagesState, type Image, type ImagesAction, ImagesActionTypes } from "../types/imagesTypes";

const initialState: ImagesState = {
    images: [],
    category: DEFAULT_SELECTED_CATEGORY,
    page: DEFAULT_SELECTED_PAGE,
    selectedImage: DEFAULT_SELECTED_IMAGE,
};

// Reducer
const imagesReducer = (state = initialState, action: ImagesAction): ImagesState => {
    switch (action.type) {
        case ImagesActionTypes.SET_IMAGES:
            return { ...state, images: action.payload };
        case ImagesActionTypes.SET_CATEGORY:
            return { ...state, category: action.payload, page: DEFAULT_SELECTED_PAGE };
        case ImagesActionTypes.SET_PAGE:
            return { ...state, page: action.payload };
        case ImagesActionTypes.SET_SELECTED_IMAGE:
            return { ...state, selectedImage: action.payload };
        default:
            return state;
    }
};

// Action Creators
export const setImages = (images: Image[]) => ({ type: ImagesActionTypes.SET_IMAGES, payload: images });
export const setCategory = (category: string) => ({ type: ImagesActionTypes.SET_CATEGORY, payload: category });
export const setPage = (page: number) => ({ type: ImagesActionTypes.SET_PAGE, payload: page });
export const setSelectedImage = (image: Image | null) => ({ type: ImagesActionTypes.SET_SELECTED_IMAGE, payload: image });

export default imagesReducer;
