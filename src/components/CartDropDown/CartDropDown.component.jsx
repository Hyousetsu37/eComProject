import { useContext } from "react";
import { CartContext } from "../../context/cart.context.jsx";
import { Button } from "../Button/Button.component.jsx";
import CartItem from "../CartItem/CartItem.component.jsx";
import "./CartDropDown.styles.scss";

export default function CartDropDown() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>Go to checkout</Button>
    </div>
  );
}
