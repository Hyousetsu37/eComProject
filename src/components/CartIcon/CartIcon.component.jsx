import {
  selectIsCartOpen,
  selectCartCount,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.slice";
import { useDispatch, useSelector } from "react-redux";

import {
  CartItemContainer,
  ShoppingIconContainer,
  ItemCount,
} from "./CartIcon.styles.jsx";

export default function CartIcon() {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  function toggleIsCartOpen() {
    dispatch(setIsCartOpen(!isCartOpen));
  }
  return (
    <CartItemContainer onClick={toggleIsCartOpen}>
      <ShoppingIconContainer />
      <ItemCount>{cartCount}</ItemCount>
    </CartItemContainer>
  );
}
