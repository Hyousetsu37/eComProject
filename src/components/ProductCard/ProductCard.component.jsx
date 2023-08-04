/* eslint-disable react/prop-types */
import { Button, BUTTON_TYPE_CLASSES } from "../Button/Button.component";
import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./ProductCard.styles.jsx";

import { addItemToCart } from "../../store/cart/cart.slice";
import { useDispatch } from "react-redux";

export default function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  function addProductToCart() {
    dispatch(addItemToCart(product));
  }
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name> {name} </Name>
        <Price> ${price} </Price>
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
