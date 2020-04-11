import { createSelector } from 'reselect';

// two types of selectore

// 1. input selector
// Doesn't user createSelector

// 2. output selector
// Uses createSelector

// input selector
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumelatedQuantity, cartItem) =>
        accumelatedQuantity + cartItem.quantity,
      0
    )
);
