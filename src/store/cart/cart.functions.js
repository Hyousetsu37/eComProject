export function addCartItem(cartItems, productToAdd) {
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

export function decreaseCartItem(cartItems, productToDecrease) {
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

export function removeCartItem(cartItems, productToRemove) {
  return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
}
