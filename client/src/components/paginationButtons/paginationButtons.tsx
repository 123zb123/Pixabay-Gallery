import { useDispatch, useSelector } from "react-redux";
import type { ImagesState } from "../../types/imagesTypes";
import { setPage } from "../../store/imagesSlice";
import { containerStyle } from "./paginationButtonsStyles";

export const PaginationButtons = () => {
  const dispatch = useDispatch();
  const page = useSelector((state: ImagesState) => state.page);

  const handlePrev = () => {
    if (page > 1) dispatch(setPage(page - 1));
  };

  const handleNext = () => {
    dispatch(setPage(page + 1));
  };

  return (
    <div style={containerStyle}>
      <button onClick={handlePrev} disabled={page === 1}>
        Prev
      </button>
      <span style={{ margin: "0 10px" }}>Page {page}</span>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};
