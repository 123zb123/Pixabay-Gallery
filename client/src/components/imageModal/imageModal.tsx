import { useSelector, useDispatch } from "react-redux";
import type { ImagesState } from "../../types/imagesTypes";
import { setSelectedImage } from "../../store/imagesSlice";
import { modalStyle, overlayStyle } from "./imageModalStyles";

export const ImageModal = () => {
  const dispatch = useDispatch();
  const selectedImage = useSelector(
    (state: ImagesState) => state.selectedImage
  );

  if (!selectedImage) return null;

  return (
    <div style={overlayStyle} onClick={() => dispatch(setSelectedImage(null))}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <img
          src={selectedImage.webformatURL}
          alt=""
          style={{ width: "100%" }}
        />
        <p>
          <strong>Views:</strong> {selectedImage.views}
        </p>
        <p>
          <strong>Downloads:</strong> {selectedImage.downloads}
        </p>
        <p>
          <strong>Collections:</strong> {selectedImage.collections}
        </p>
        <button onClick={() => dispatch(setSelectedImage(null))}>Close</button>
      </div>
    </div>
  );
};
