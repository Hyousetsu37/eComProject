import { useSelector } from "react-redux";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview.component";
import { selectCategoriesMap } from "../../store/categories/category.selector";

export default function CategoriesPreviewPage() {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
}
