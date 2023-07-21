/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
/* import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.jsx";
import SHOP_DATA from "../shoping-data.js"; */
import { getCategoriesAnddDocuments } from "../utils/firebase/firebase.utils.jsx";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  /*  useEffect(() => {
    addCollectionAndDocuments("categories", SHOP_DATA);
  }, []); */
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAnddDocuments();
      console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
