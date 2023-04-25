import Product from "../pages/product";
import reducer from "./reducer";

export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";

export const INCREMENT_PRODUCT_QUANTITY = "INCREMENT_PRODUCT_QUANTITY";

export const DECREMENT_PRODUCT_QUANTITY = "DECREMENT_PRODUCT_QUANTITY";

export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";

export const addToCart = (Product) => ({
  type: ADD_PRODUCT_TO_CART,
  Product,
});

export const removeItemFromCart = (Product) => ({
  type: REMOVE_PRODUCT_FROM_CART,
  Product,
});

export const incrimentOfQuantity = (Product) => ({
  type: INCREMENT_PRODUCT_QUANTITY,
  Product,
});

export const decrementOfQuantity = (Product) => ({
  type: DECREMENT_PRODUCT_QUANTITY,
  Product,
});
