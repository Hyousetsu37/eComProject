/* eslint-disable react/prop-types */
import { CategoryItem } from "../CategoryItem/CategoryItem";
import "./Directory.styles.scss";

export function Directory({ categories }) {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
}
