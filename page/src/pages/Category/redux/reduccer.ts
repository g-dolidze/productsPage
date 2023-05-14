import { CategoryState } from "../../../@types/general";
import { GET_TVS_FROM_API } from "./action";
import { CATEGORY_PAGE_ACTIONS } from "./type";
export const categoryState: CategoryState = {
  tvs: [],
};
const categoryReducer = (
  state = categoryState,
  action: CATEGORY_PAGE_ACTIONS
) => {
  switch (action.type) {
    case GET_TVS_FROM_API:
      return {
        ...state,
        tvs: action.payload,
      };

    default:
      return state;
  }
};
export default categoryReducer;
