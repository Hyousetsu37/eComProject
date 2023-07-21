/* eslint-disable react/prop-types */
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";

import {
  CheckOutItemContainer,
  ImageContainer,
  BaseTag,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./CheckoutProductCard.styles";

export default function CheckoutProductCard({ cartItem }) {
  const { name, quantity, price, imageUrl } = cartItem;
  const { removeItemFromCart, decreaseItemFromCart, addItemToCart } =
    useContext(CartContext);

  function increaseQuantity() {
    addItemToCart(cartItem);
  }
  function decreaseQuantity() {
    decreaseItemFromCart(cartItem);
  }
  function removeProduct() {
    removeItemFromCart(cartItem);
  }

  return (
    <CheckOutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="" />
      </ImageContainer>
      <BaseTag>{name}</BaseTag>

      <Quantity>
        <Arrow onClick={decreaseQuantity}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={increaseQuantity}>&#10095;</Arrow>
      </Quantity>

      <BaseTag>{price}</BaseTag>
      <RemoveButton onClick={removeProduct}>&#10005;</RemoveButton>
    </CheckOutItemContainer>
  );
}
