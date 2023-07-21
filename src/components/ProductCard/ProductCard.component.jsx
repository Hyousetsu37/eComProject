/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { Button, BUTTON_TYPE_CLASSES } from "../Button/Button.component";
import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./ProductCard.styles.jsx";

export default function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  function addProductToCart() {
    addItemToCart(product);
  }
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name> {name} </Name>
        <Price> {price} </Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
}
