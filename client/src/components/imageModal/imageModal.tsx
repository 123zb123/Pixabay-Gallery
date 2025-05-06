import { modalStyle, overlayStyle } from "./imageModalStyles";
import { useImageModal } from "./useImageModal";

export const ImageModal = () => {
  const { selectedImage, imageProperties, closeModal } = useImageModal();

  if (!selectedImage) return null;

  return (
    <div style={overlayStyle} onClick={closeModal}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <img
          src={selectedImage.webformatURL}
          alt={selectedImage.tags}
          style={{ width: "100%" }}
        />
        <div>{imageProperties}</div>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};
