import { Navigation } from "./components/Navigation/Navigation";
import HomePage from "./routes/home/home.page";
import { Routes, Route } from "react-router-dom";
import SignInPage from "./routes/authentication/authentication.page";
import ShopPage from "./routes/shop/shop.page";
import CheckoutPage from "./routes/checkout/checkout.page";
import { useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.slice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      console.log(setCurrentUser(user));
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
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
