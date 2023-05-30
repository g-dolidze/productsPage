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
} from "./actions";
import { MAIN_PAGE_ACTIONS } from "./types";

export const initialState: InitialState = {
  products: [],
  totalFound: 0,
  choosenItems: [],
  favoriteItems: [],
  searchItems: [],
  range: 30,
};

const mainReducer = (state = initialState, action: MAIN_PAGE_ACTIONS) => {
  switch (action.type) {
    case GET_PRODUCTS_FROM_API:
      return {
        ...state,
        products: action.payload,
      };
    case SEARCH_ITEMS: {
      return {
        ...state,
        products: action.payload,
      };
    }

    case SEE_MORE_ITEMS: {
      return {
        ...state,
        range: action.payload + 30,
      };
    }

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
      const productIndex = state.choosenItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (productIndex === -1) {
        return {
          ...state,
          choosenItems: [
            ...state.choosenItems,
            { ...action.payload, quantity: 1 },
          ],
        };
      }
      if (productIndex >= 0) {
        const findedProduct = state.choosenItems[productIndex];
        const updateQuantity = {
          ...findedProduct,
          quantity: findedProduct.quantity + 1,
        };
        state.choosenItems[productIndex] = updateQuantity;
        return { ...state, choosenItems: state.choosenItems };
      }
    case INCRES_QUANTITY:
      const productIndex1 = state.choosenItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (productIndex1 >= 0) {
        const thisItem = state.choosenItems[productIndex1];
        const raseQuantity = { ...thisItem, quantity: thisItem.quantity + 1 };
        state.choosenItems[productIndex1] = raseQuantity;
        return {
          ...state,
          choosenItems: state.choosenItems,
        };
      }
    case DICRES_QUANTITY: {
      const productIndex2 = state.choosenItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const thisItem = state.choosenItems[productIndex2];
      if (productIndex2 >= 0 && thisItem.quantity > 0) {
        const reducedItem = { ...thisItem, quantity: thisItem.quantity - 1 };
        state.choosenItems[productIndex2] = reducedItem;
        return { ...state, chousenItems: state.choosenItems };
      }
      if (thisItem.quantity === 0) {
        const updatedItems = state.choosenItems.filter(
          (item) => item.id !== action.payload.id
        );
        return {
          ...state,
          chousenItems: updatedItems,
        };
      }
    }

    case REMOVE_ITEM_FROM_CART: {
      const updatedItems = state.choosenItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        chousenItems: updatedItems,
      };
    }

    default:
      return state;
  }
};
export default mainReducer;
