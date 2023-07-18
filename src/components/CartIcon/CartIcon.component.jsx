import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import "./CartIcon.styles.scss";

export default function CartIcon() {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  function toggleIsCartOpen() {
    setIsCartOpen(!isCartOpen);
  }
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}