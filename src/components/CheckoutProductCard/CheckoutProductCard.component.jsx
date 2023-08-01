/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";

import {
  removeItemFromCart,
  decreaseItemFromCart,
  addItemToCart,
} from "../../store/cart/cart.action";

import { selectCartItems } from "../../store/cart/cart.selector";

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
  const cartItems = useSelector(selectCartItems);
  const { name, quantity, price, imageUrl } = cartItem;
  const dispatch = useDispatch();

  function increaseQuantity() {
    dispatch(addItemToCart(cartItems, cartItem));
  }
  function decreaseQuantity() {
    dispatch(decreaseItemFromCart(cartItems, cartItem));
  }
  function removeProduct() {
    dispatch(removeItemFromCart(cartItems, cartItem));
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
