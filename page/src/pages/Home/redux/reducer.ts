import {
  GET_PRODUCTS_FROM_API,
  TOTAL_FOUND,
  ADD_TO_CART,
  INCRES_QUANTITY,
  DICRES_QUANTITY,
  REMOVE_ITEM_FROM_CART,
  ADD_TO_FAVORITE,
  SEARCH_ITEMS,
} from "./actions";
import { MAIN_PAGE_ACTIONS } from "./types";

export const initialState: InitialState = {
  products: [],
  totalFound: 0,
  chousenItems: [],
  favoriteItems: [],
  searchItems: [],
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
    case ADD_TO_FAVORITE: {
      const isAlready = state.favoriteItems.find(
        (item) => item.id === action.payload.id
      );
      if (isAlready) {
        const newFavoritesArry = state.favoriteItems.filter(
          (item) => item.id !== action.payload.id
        );
        console.log("it is");
        return {
          ...state,
          favoriteItems: newFavoritesArry,
        };
      }
      if (!isAlready) {
        return {
          ...state,
          favoriteItems: [...state.favoriteItems, { ...action.payload }],
        };
      }
    }

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
    case INCRES_QUANTITY:
      const productIndex1 = state.chousenItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (productIndex1 >= 0) {
        const thisItem = state.chousenItems[productIndex1];
        const raseQuantity = { ...thisItem, quantity: thisItem.quantity + 1 };
        state.chousenItems[productIndex1] = raseQuantity;
        return {
          ...state,
          chousenItems: state.chousenItems,
        };
      }
    case DICRES_QUANTITY: {
      const productIndex2 = state.chousenItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const thisItem = state.chousenItems[productIndex2];
      if (productIndex2 >= 0 && thisItem.quantity > 0) {
        const reducedItem = { ...thisItem, quantity: thisItem.quantity - 1 };
        state.chousenItems[productIndex2] = reducedItem;
        return { ...state, chousenItems: state.chousenItems };
      }
      if (thisItem.quantity === 0) {
        const updatedItems = state.chousenItems.filter(
          (item) => item.id !== action.payload.id
        );
        return {
          ...state,
          chousenItems: updatedItems,
        };
      }
    }

    case REMOVE_ITEM_FROM_CART: {
      const updatedItems = state.chousenItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        chousenItems: updatedItems,
      };
    }

    case SEARCH_ITEMS: {
      return {
        ...state,
        products: action.payload,
      };
    }

    default:
      return state;
  }
};
export default mainReducer;
