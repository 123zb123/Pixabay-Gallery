import { useSelector, useDispatch } from "react-redux";
import { setSelectedImage } from "../../store/imagesSlice";
import { PROPERTIES_TO_DISPLAY_IN_MODAL } from "../../constants/constants";
import type { ImagesState } from "../../types/imagesTypes";

export const useImageModal = () => {
  const dispatch = useDispatch();
  const selectedImage = useSelector(
    (state: ImagesState) => state.selectedImage
  );

  const closeModal = () => {
    dispatch(setSelectedImage(null));
  };

  const imageProperties = selectedImage
    ? Object.entries(selectedImage).map(([key, value]) => {
        const keyFormatted = key.charAt(0).toUpperCase() + key.slice(1);
        if (PROPERTIES_TO_DISPLAY_IN_MODAL.includes(keyFormatted)) {
          return (
            <p key={key}>
              <strong>{keyFormatted}:</strong> {value}
            </p>
          );
        }
        return null;
      })
    : [];

  return {
    selectedImage,
    imageProperties,
    closeModal,
  };
};
