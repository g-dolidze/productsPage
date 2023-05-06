import { GET_PRODUCTS_FROM_API, TOTAL_FOUND, ADD_TO_CART } from "./actions";
import { MAIN_PAGE_ACTIONS } from "./types";

export const initialState: InitialState = {
  products: [],
  totalFound: 0,
  chousenItems: [],
};

const mainReducer = (state = initialState, action: MAIN_PAGE_ACTIONS) => {
  switch (action.type) {
    case GET_PRODUCTS_FROM_API:
      return {
        ...state,
        products: action.payload,
      };
    case TOTAL_FOUND:
      return {
        ...state,
        totalFound: action.payload,
      };
    case ADD_TO_CART:
      const productIndex = state.chousenItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (productIndex === -1) {
        return {
          ...state,
          chousenItems: [
            ...state.chousenItems,
            { ...action.payload, quantity: 1 },
          ],
        };
      }
      if (productIndex >= 0) {
        const findedProduct = state.chousenItems[productIndex];
        const updateQuantity = {
          ...findedProduct,
          quantity: findedProduct.quantity + 1,
        };
        state.chousenItems[productIndex] = updateQuantity;
        return { ...state, chousenItems: state.chousenItems };
      }

    default:
      return state;
  }
};
export default mainReducer;
