import { ImageGrid } from "./components/imageGrid/imageGrid";
import { ImageModal } from "./components/imageModal/imageModal";
import { PaginationButtons } from "./components/paginationButtons/paginationButtons";
import { CategorySelector } from "./components/categorySelector/categorySelector";
import { useApp } from "./useApp";
import { WEB_SITE_TITLE } from "./constants/constants";

const App = () => {
  // Initialize the app state using Redux and fetch images from the server
  useApp();

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{WEB_SITE_TITLE}</h1>
      <CategorySelector />
      <PaginationButtons />
      <ImageGrid />
      <ImageModal />
    </div>
  );
};

export default App;
