import { useSelector, useDispatch } from "react-redux";
import type { ImagesState } from "../../types/imagesTypes";
import { setSelectedImage } from "../../store/imagesSlice";
import { modalStyle, overlayStyle } from "./imageModalStyles";
import { PROPERTIES_TO_DISPLAY_IN_MODAL } from "../../constants/constants";

export const ImageModal = () => {
  const dispatch = useDispatch();
  const selectedImage = useSelector(
    (state: ImagesState) => state.selectedImage
  );

  if (!selectedImage) return null;

  const imageProperties = Object.entries(selectedImage).map(([key, value]) => {
    const keyToDIsplayInModal = key.charAt(0).toUpperCase() + key.slice(1);
    // Check if the key is in the PROPERTIES_TO_DISPLAY_IN_MODAL array
    if (PROPERTIES_TO_DISPLAY_IN_MODAL.includes(keyToDIsplayInModal)) {
      return (
        <p key={key}>
          <strong>{keyToDIsplayInModal}:</strong> {value}
        </p>
      );
    }
    return null;
  });

  return (
    <div style={overlayStyle} onClick={() => dispatch(setSelectedImage(null))}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <img
          src={selectedImage.webformatURL}
          alt={selectedImage.tags}
          style={{ width: "100%" }}
        />
        <div>{imageProperties}</div>
        <button onClick={() => dispatch(setSelectedImage(null))}>Close</button>
      </div>
    </div>
  );
};
