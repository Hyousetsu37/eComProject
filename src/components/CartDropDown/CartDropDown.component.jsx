import { Button } from "../Button/Button.component.jsx";
import "./CartDropDown.styles.scss";

export default function CartDropDown() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button>Go to checkout</Button>
    </div>
  );
}
