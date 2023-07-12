/* eslint-disable react/prop-types */
import "./CategoryItem.styles.scss";

export function CategoryItem({ category }) {
  const { imageUrl, title } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="category-body-container">
        <h2 className="text-2xl">{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}
