export interface Image {
    id: number;
    pageURL: string;
    type: string;
    tags: string;
    previewURL: string;
    previewWidth: number;
    previewHeight: number;
    webformatURL: string;
    webformatWidth: number;
    webformatHeight: number;
    largeImageURL: string;
    imageWidth: number;
    imageHeight: number;
    imageSize: number;
    views: number;
    downloads: number;
    collections: number;
    likes: number;
    comments: number;
    user_id: number;
    user: string;
    userImageURL: string;
    noAiTraining: boolean;
  }

export interface ImagesState {
    images: Image[];
    category: string;
    page: number;
    selectedImage: Image | null;
}

export const ImagesActionTypes = {
    SET_IMAGES: 'SET_IMAGES',
    SET_CATEGORY: 'SET_CATEGORY',
    SET_PAGE: 'SET_PAGE',
    SET_SELECTED_IMAGE: 'SET_SELECTED_IMAGE',
  } as const;
  
  export type ImagesActionType = typeof ImagesActionTypes[keyof typeof ImagesActionTypes];
  
  export type ImagesAction =
    | { type: typeof ImagesActionTypes.SET_IMAGES; payload: Image[] }
    | { type: typeof ImagesActionTypes.SET_CATEGORY; payload: string }
    | { type: typeof ImagesActionTypes.SET_PAGE; payload: number }
    | { type: typeof ImagesActionTypes.SET_SELECTED_IMAGE; payload: Image | null };
  