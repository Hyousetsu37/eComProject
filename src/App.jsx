import { Navigation } from "./components/Navigation/Navigation";
import HomePage from "./routes/home/home.page";
import { Routes, Route } from "react-router-dom";
import SignInPage from "./routes/authentication/authentication.page";
import ShopPage from "./routes/shop/shop.page";
import CheckoutPage from "./routes/checkout/checkout.page";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkUserSession } from "./store/user/user.action";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />;
        <Route path="/shop/*" element={<ShopPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route
          path="/checkout"
          element={<CheckoutPage />}
          className="something"
        />
      </Route>
    </Routes>
  );
}

export default App;
