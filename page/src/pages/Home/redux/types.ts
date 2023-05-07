import { GET_PRODUCTS_FROM_API, TOTAL_FOUND, ADD_TO_CART,INCRES_QUANTITY, DICRES_QUANTITY } from "./actions";
export type GET_PRODUCTS_FROM_API_ACTION = {
  type: typeof GET_PRODUCTS_FROM_API;
  payload: Prodact[];
};

export type TOTAL_FOUND_ACTION = {
  type: typeof TOTAL_FOUND;
  payload: number;
};

export type ADD_TO_CART_ACTION = {
  type: typeof ADD_TO_CART;
  payload: Prodact;
};
export type INCRES_QUANTITY={
  type: typeof INCRES_QUANTITY,
  payload:CartItem,
}
export type DICRES_QUANTITY={
  type: typeof DICRES_QUANTITY,
  payload:CartItem,
}

export type MAIN_PAGE_ACTIONS =
  | GET_PRODUCTS_FROM_API_ACTION
  | TOTAL_FOUND_ACTION
  | ADD_TO_CART_ACTION
  | DICRES_QUANTITY
  | INCRES_QUANTITY


