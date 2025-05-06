import { useSelector, useDispatch } from "react-redux";
import type { ImagesState, Image } from "../../types/imagesTypes";
import { setSelectedImage } from "../../store/imagesSlice";
import { gridStyle, imageStyle } from "./imageGridStyles";

export const ImageGrid = () => {
  const dispatch = useDispatch();
  const images = useSelector((state: ImagesState) => state.images);

  const handleClick = (image: Image) => {
    dispatch(setSelectedImage(image));
  };

  return (
    <div style={gridStyle}>
      {images.map((image) => (
        <img
          key={image.id}
          src={image.webformatURL}
          alt=""
          style={imageStyle}
          onClick={() => handleClick(image)}
        />
      ))}
    </div>
  );
};

