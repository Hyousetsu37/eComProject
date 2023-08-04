import {
  CheckoutContainer,
  CheckOutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles.jsx";
import { useSelector } from "react-redux";
import {
  selectCartTotal,
  selectCartItems,
} from "../../store/cart/cart.selector.js";
import CheckoutProductCard from "../../components/CheckoutProductCard/CheckoutProductCard.component.jsx";
import PaymentForm from "../../components/PaymentForm/PaymentForm.component.jsx";

export default function CheckoutPage() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

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
      <PaymentForm />
    </CheckoutContainer>
  );
}
