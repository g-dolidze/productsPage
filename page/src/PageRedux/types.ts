import {
  GET_PRODUCTS_FROM_API,
  TOTAL_FOUND,
  ADD_TO_CART,
  INCRES_QUANTITY,
  DICRES_QUANTITY,
  REMOVE_ITEM_FROM_CART,
  ADD_TO_FAVORITE,
  SEARCH_ITEMS,
  SEE_MORE_ITEMS,
  GET_BRANDS_PRODUCTS,
  GET_ALL_BRANDS,
  ADD_IN_SALES,
  DELETE_FROM_SALES,
  ADD_IN_ORDERS,
} from "./actions";
export type GET_PRODUCTS_FROM_API_ACTION = {
  type: typeof GET_PRODUCTS_FROM_API;
  payload: Prodact[];
};
export type GET_BRANDS_PRODUCTS_ACTION = {
  type: typeof GET_BRANDS_PRODUCTS;
  payload: Prodact;
};
export type TOTAL_FOUND_ACTION = {
  type: typeof TOTAL_FOUND;
  payload: number;
};

export type ADD_TO_CART_ACTION = {
  type: typeof ADD_TO_CART;
  payload: Prodact;
};
export type INCRES_QUANTITY_ACTION = {
  type: typeof INCRES_QUANTITY;
  payload: CartItem;
};
export type DICRES_QUANTITY_ACTION = {
  type: typeof DICRES_QUANTITY;
  payload: CartItem;
};
export type REMOVE_ITEM_FROM_CART_ACTION = {
  type: typeof REMOVE_ITEM_FROM_CART;
  payload: CartItem;
};
export type ADD_TO_FAVORITE_ACTION = {
  type: typeof ADD_TO_FAVORITE;
  payload: Prodact;
};
export type SEARCH_ITEMS_ACTION = {
  type: typeof SEARCH_ITEMS;
  payload: Prodact;
};
export type SEE_MORE_ITEMS_ACTION = {
  type: typeof SEE_MORE_ITEMS;
  payload: number;
};
export type GET_ALL_BRANDS_ACTION = {
  type: typeof GET_ALL_BRANDS;
  payload: string[];
};
export type ADD_IN_SALES_ACTION = {
  type: typeof ADD_IN_SALES;
  payload: Prodact;
};
export type DELETE_FROM_SALES_action = {
  type: typeof DELETE_FROM_SALES;
  payload: Prodact;
};
export type ADD_IN_ORDERS_ACTION = {
  type: typeof ADD_IN_ORDERS;
  payload: Prodact;
};

export type MAIN_PAGE_ACTIONS =
  | GET_PRODUCTS_FROM_API_ACTION
  | TOTAL_FOUND_ACTION
  | ADD_TO_CART_ACTION
  | DICRES_QUANTITY_ACTION
  | INCRES_QUANTITY_ACTION
  | REMOVE_ITEM_FROM_CART_ACTION
  | ADD_TO_FAVORITE_ACTION
  | SEARCH_ITEMS_ACTION
  | SEE_MORE_ITEMS_ACTION
  | GET_BRANDS_PRODUCTS_ACTION
  | GET_ALL_BRANDS_ACTION
  | ADD_IN_SALES_ACTION
  | DELETE_FROM_SALES_action
  | ADD_IN_ORDERS_ACTION;
