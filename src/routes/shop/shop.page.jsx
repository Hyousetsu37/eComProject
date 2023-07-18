import { useContext } from "react";
import { ProductsContext } from "../../context/products.context";
import ProductCard from "../../components/ProductCard/ProductCard.component";
import "./shop.styles.scss";

export default function ShopPage() {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}