import { useContext } from "react";
import { CartContext } from "../../context/cart.context.jsx";
import CartItem from "../CartItem/CartItem.component.jsx";
import "./CartDropDown.styles.scss";
import { Link } from "react-router-dom";

export default function CartDropDown() {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  function closeDropDown() {
    setIsCartOpen(false);
  }
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Link className="button-container" to="/checkout" onClick={closeDropDown}>
        Go to checkout
      </Link>
    </div>
  );
}
