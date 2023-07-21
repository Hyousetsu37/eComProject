import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import {
  CartItemContainer,
  ShoppingIconContainer,
  ItemCount,
} from "./CartIcon.styles.jsx";

export default function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  function toggleIsCartOpen() {
    setIsCartOpen(!isCartOpen);
  }
  return (
    <CartItemContainer onClick={toggleIsCartOpen}>
      <ShoppingIconContainer />
      <ItemCount>{cartCount}</ItemCount>
    </CartItemContainer>
  );
}
