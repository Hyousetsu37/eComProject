import { Routes, Route } from "react-router-dom";
import CategoriesPreviewPage from "../categoriesPreview/categoriesPreview.page";
import Category from "../category/category.page";

export default function ShopPage() {
  return (
    <Routes>
      <Route index element={<CategoriesPreviewPage />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}
