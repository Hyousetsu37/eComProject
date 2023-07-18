import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import { UserProvider } from "./context/user.context.jsx";
import { ProductsProvider } from "./context/products.context.jsx";
import { CartProvider } from "./context/cart.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <UserProvider>
          <ProductsProvider>
            <App />
          </ProductsProvider>
        </UserProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
