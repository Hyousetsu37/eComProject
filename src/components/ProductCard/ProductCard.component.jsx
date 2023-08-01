/* eslint-disable react/prop-types */
import { Button, BUTTON_TYPE_CLASSES } from "../Button/Button.component";
import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./ProductCard.styles.jsx";

import { addItemToCart } from "../../store/cart/cart.action";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

export default function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  function addProductToCart() {
    dispatch(addItemToCart(cartItems, product));
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
