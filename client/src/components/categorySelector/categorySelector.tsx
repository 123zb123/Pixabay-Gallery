import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../store/imagesSlice";
import type { ImagesState } from "../../types/imagesTypes";
import { containerStyle } from "./categorySelectorStyles";
import type { ChangeEvent } from "react";
import { CATEGORIES_LIST, CATEGORY_SELECTOR_TITLE } from "../../constants/constants";

export const CategorySelector = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state: ImagesState) => state.category);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCategory(e.target.value));
  };

  return (
    <div style={containerStyle}>
      <label htmlFor="category">{CATEGORY_SELECTOR_TITLE}</label>
      <select id="category" value={selectedCategory} onChange={handleChange}>
        {CATEGORIES_LIST.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};
