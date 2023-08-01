import CartItem from "../CartItem/CartItem.component.jsx";
import {
  CartDropDownContainer,
  EmptyMessage,
  CartItems,
  CartButton,
} from "./CartDropDown.styles.jsx";
import { useNavigate } from "react-router-dom";
import { BUTTON_TYPE_CLASSES } from "../Button/Button.component";

import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.action.js";
import { selectCartItems } from "../../store/cart/cart.selector.js";

export default function CartDropDown() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);

  function goToCheckoutHandler() {
    dispatch(setIsCartOpen(false));
    navigate("/checkout");
  }
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length >= 1 ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <CartButton
        buttonType={BUTTON_TYPE_CLASSES.base}
        onClick={goToCheckoutHandler}
      >
        Go to checkout
      </CartButton>
    </CartDropDownContainer>
  );
}
