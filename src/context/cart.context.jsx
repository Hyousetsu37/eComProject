/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { createContext, useState } from "react";

function addCartItem(cartItems, productToAdd) {
  //find if cartItems contains product to add
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  //if found, increment quantity
  if (existingCartItem) {
    // return new array with modified cart items
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
}

function removeCartItem(cartItems, productToRemove) {
  return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
}

function decreaseCartItem(cartItems, productToDecrease) {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToDecrease.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToDecrease.id);
  }
  return cartItems.map((cartItem) => {
    return cartItem.id === productToDecrease.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });
}

/* function modifyCartItem(cartItems, productToModify, action) {
  return cartItems.map((cartItem) => {
    if (cartItem.id === productToModify.id) {
      if (action === "decrease") {
        return cartItem.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem;
      } else if (action === "increase") {
        return cartItem.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem;
      }
    }
    return cartItem;
  });
} */

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  decreaseItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    setCartTotal(newCartTotal);
  }, [cartItems]);

  function addItemToCart(productToAdd) {
    setCartItems(addCartItem(cartItems, productToAdd));
  }

  function removeItemFromCart(productToRemove) {
    setCartItems(removeCartItem(cartItems, productToRemove));
  }

  function decreaseItemFromCart(productToDecrease) {
    setCartItems(decreaseCartItem(cartItems, productToDecrease));
  }

  /*   function modifyItemFromCart(productToModify, action) {
    setCartItems(modifyCartItem(cartItems, productToModify, action));
  } */

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    decreaseItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
