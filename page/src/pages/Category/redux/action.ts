import { Prodact } from "../../../@types/general";
import { CATEGORY_PAGE_ACTIONS } from "./type";

export const GET_TVS_FROM_API = "GET_TVS_FROM_API";

export const getTvProducts = (products: Prodact[]): CATEGORY_PAGE_ACTIONS => ({
  type: GET_TVS_FROM_API,
  payload: products,
});
