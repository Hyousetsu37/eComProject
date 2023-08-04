/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";

import {
  removeItemFromCart,
  decreaseItemFromCart,
  addItemToCart,
} from "../../store/cart/cart.slice";

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
  const dispatch = useDispatch();

  function increaseQuantity() {
    dispatch(addItemToCart(cartItem));
  }
  function decreaseQuantity() {
    dispatch(decreaseItemFromCart(cartItem));
  }
  function removeProduct() {
    dispatch(removeItemFromCart(cartItem));
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
