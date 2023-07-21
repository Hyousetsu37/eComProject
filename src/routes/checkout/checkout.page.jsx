import CheckoutProductCard from "../../components/CheckOutProductCard/CheckoutProductCard.component";
import {
  CheckoutContainer,
  CheckOutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

export default function CheckoutPage() {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <CheckoutContainer>
      <CheckOutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckOutHeader>
      {cartItems.map((item) => {
        return <CheckoutProductCard key={item.id} cartItem={item} />;
      })}
      <Total>Total: ${cartTotal} </Total>
    </CheckoutContainer>
  );
}
