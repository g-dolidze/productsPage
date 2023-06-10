import Product from "../../product";
import { MAIN_PAGE_ACTIONS } from "./types";
export const GET_PRODUCTS_FROM_API = "GET_PRODUCTS_FROM_API";
export const TOTAL_FOUND = "TOTAL_FOUND";
export const ADD_TO_CART = "ADD_TO_CART";
export const INCRES_QUANTITY = "INCTIS_QUANTITY";
export const DICRES_QUANTITY = "DICRES_QUANTITY";
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const SEARCH_ITEMS = "SEARCH_ITEMS";
export const SEE_MORE_ITEMS = "SEE_MORE_ITEMS";
export const GET_BRANDS_PRODUCTS = "GET_BRANDS_PRODUCTS";
export const SEE_MORE_BRAND_ITEMS = "SEE_MORE_BRAND_ITEMS";

export const getProductsFromApi = (products: Prodact[]): MAIN_PAGE_ACTIONS => ({
  type: GET_PRODUCTS_FROM_API,
  payload: products,
});
export const getBrandsProducts = (brand: Prodact): MAIN_PAGE_ACTIONS => ({
  type: GET_BRANDS_PRODUCTS,
  payload: brand,
});
export const totalFound = (totalProducts: number) => ({
  type: TOTAL_FOUND,
  payload: totalProducts,
});
export const addToFavorite = (favoriteItem: Prodact): MAIN_PAGE_ACTIONS => ({
  type: ADD_TO_FAVORITE,
  payload: favoriteItem,
});
export const addToCart = (choosenItem: Prodact): MAIN_PAGE_ACTIONS => ({
  type: ADD_TO_CART,
  payload: choosenItem,
});
export const incresQuantity = (choosenItem: CartItem): MAIN_PAGE_ACTIONS => ({
  type: INCRES_QUANTITY,
  payload: choosenItem,
});
export const dicresQuantity = (choosenItem: CartItem): MAIN_PAGE_ACTIONS => ({
  type: DICRES_QUANTITY,
  payload: choosenItem,
});
export const removeItem = (choosenItem: CartItem): MAIN_PAGE_ACTIONS => ({
  type: REMOVE_ITEM_FROM_CART,
  payload: choosenItem,
});
export const searchedItems = (searchItem: Prodact): MAIN_PAGE_ACTIONS => ({
  type: SEARCH_ITEMS,
  payload: searchItem,
});
export const seeMoreItems = (range: number): MAIN_PAGE_ACTIONS => ({
  type: SEE_MORE_ITEMS,
  payload: range,
});
export const seeMoreBrandItems = (range: number): MAIN_PAGE_ACTIONS => ({
  type: SEE_MORE_BRAND_ITEMS,
  payload: range,
});
