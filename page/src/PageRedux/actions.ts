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
export const GET_ALL_BRANDS = "GET_ALL_BRANDS";
export const ADD_IN_SALES = "ADD_IN_SALES";
export const DELETE_FROM_SALES = "DELETE_FROM_SALES";
export const ADD_IN_ORDERS = "ADD_IN_ORDERS";

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
export const getAllBrands = (brand: string[]): MAIN_PAGE_ACTIONS => ({
  type: GET_ALL_BRANDS,
  payload: brand,
});
export const addProductToSales = (product: Prodact): MAIN_PAGE_ACTIONS => ({
  type: ADD_IN_SALES,
  payload: product,
});
export const deleteProductFromSales = (
  product: Prodact
): MAIN_PAGE_ACTIONS => ({
  type: DELETE_FROM_SALES,
  payload: product,
});
export const addProductToOrders = (product: Prodact): MAIN_PAGE_ACTIONS => ({
  type: ADD_IN_ORDERS,
  payload: product,
});
