/* eslint-disable react/prop-types */
import ProductCard from "../ProductCard/ProductCard.component";
import {
  CategoryPreviewContainer,
  CategoryTitle,
  Preview,
} from "./CategoryPreview.styles.jsx";

export default function CategoryPreview({ title, products }) {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryTitle to={`${title.toLowerCase()}`}>
          {title.toUpperCase()}
        </CategoryTitle>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
}
