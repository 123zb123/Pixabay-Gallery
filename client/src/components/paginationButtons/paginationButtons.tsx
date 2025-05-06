import { useDispatch, useSelector } from "react-redux";
import type { ImagesState } from "../../types/imagesTypes";
import { setPage } from "../../store/imagesSlice";
import { containerStyle } from "./paginationButtonsStyles";
import {
  NEXT_BUTTON,
  PAGE_NUMBER_TITLE,
  PREV_BUTTON,
} from "../../constants/constants";

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
        {PREV_BUTTON}
      </button>
      <span style={{ margin: "0 10px" }}>
        {PAGE_NUMBER_TITLE} {page}
      </span>
      <button onClick={handleNext}>{NEXT_BUTTON}</button>
    </div>
  );
};
