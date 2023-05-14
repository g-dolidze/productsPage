import { Prodact } from "../../../@types/general";
import { GET_TVS_FROM_API } from "./action";

export type GET_TVS_FROM_API_ACTION = {
  type: typeof GET_TVS_FROM_API;
  payload: Prodact[];
};

export type CATEGORY_PAGE_ACTIONS = GET_TVS_FROM_API_ACTION;
