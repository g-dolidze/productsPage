import { MAIN_PAGE_ACTIONS } from "./types";
export const TOTAL_FOUND = "TOTAL_FOUND";
export const ADD_TO_CART = "ADD_TO_CART";

export const GET_PRODUCTS_FROM_API = "GET_PRODUCTS_FROM_API";

export const getProductsFromApi = (products: Prodact[]): MAIN_PAGE_ACTIONS => ({
  type: GET_PRODUCTS_FROM_API,
  payload: products,
});
export const totalFound = (totalProducts: number) => ({
  type: TOTAL_FOUND,
  payload: totalProducts,
});
export const addToCart = (chousenItem: Prodact): MAIN_PAGE_ACTIONS => ({
  type: ADD_TO_CART,
  payload: chousenItem,
});
