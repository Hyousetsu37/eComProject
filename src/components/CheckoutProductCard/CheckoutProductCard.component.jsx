/* eslint-disable react/prop-types */
import "./CheckoutProductCard.styles.scss";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";

export default function CheckoutProductCard({ cartItem }) {
  const { name, quantity, price, imageUrl } = cartItem;
  const { removeItemFromCart, decreaseItemFromCart, addItemToCart } =
    useContext(CartContext);

  function increaseQuantity() {
    addItemToCart(cartItem);
  }
  function decreaseQuantity() {
    decreaseItemFromCart(cartItem);
  }
  function removeProduct() {
    removeItemFromCart(cartItem);
  }

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={decreaseQuantity}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={increaseQuantity}>
          &#10095;
        </div>
      </span>

      <span className="price">{price}</span>
      <div className="remove-button" onClick={removeProduct}>
        &#10005;
      </div>
    </div>
  );
}
