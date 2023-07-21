import { useContext } from "react";
import { CartContext } from "../../context/cart.context.jsx";
import CartItem from "../CartItem/CartItem.component.jsx";
import {
  CartDropDownContainer,
  EmptyMessage,
  CartItems,
  CartButton,
} from "./CartDropDown.styles.jsx";
import { useNavigate } from "react-router-dom";
import { BUTTON_TYPE_CLASSES } from "../Button/Button.component";

export default function CartDropDown() {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  function goToCheckoutHandler() {
    setIsCartOpen(false);
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
