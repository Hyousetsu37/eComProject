import { CART_ACTION_TYPES } from "./cart.type";
import { createAction } from "../../utils/reducer/reducer.utils";

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

function removeCartItem(cartItems, productToRemove) {
  return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
}

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export function addItemToCart(cartItems, productToAdd) {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export function removeItemFromCart(cartItems, productToRemove) {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export function decreaseItemFromCart(cartItems, productToDecrease) {
  const newCartItems = decreaseCartItem(cartItems, productToDecrease);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}
