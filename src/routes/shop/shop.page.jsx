import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import CategoriesPreviewPage from "../categoriesPreview/categoriesPreview.page";
import Category from "../category/category.page";
import { fetchCategoriesStart } from "../../store/categories/category.action";

export default function ShopPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesStart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreviewPage />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}
