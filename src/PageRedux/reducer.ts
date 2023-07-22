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
import { MAIN_PAGE_ACTIONS } from "./types";

export const initialState: InitialState = {
  brands: [],
  products: [],
  totalFound: 0,
  choosenItems: [],
  favoriteItems: [],
  searchItems: [],
  range: 28,
  brandName: "",
  sales: [],
  orders: [],
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
        range: action.payload + 28,
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
    case GET_BRANDS_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_ALL_BRANDS:
      return {
        ...state,
        brands: action.payload,
      };

    case ADD_IN_SALES:
      const prevSales = state.sales;
      const newSales = action.payload;
      const discount = Number(newSales.price) - Number(newSales.price) * 0.5;
      const updatedSale = { ...newSales, price: discount };
      const updatePrevSales = [...prevSales, updatedSale];

      localStorage.setItem("sales", JSON.stringify(updatePrevSales));

      return {
        ...state,
        sales: updatePrevSales,
      };

    case DELETE_FROM_SALES:
      const sales = JSON.parse(localStorage.getItem("sales") as string);
      const deletedItem = sales.filter(
        (item: Prodact) => item.id !== action.payload.id
      );
      localStorage.setItem("sales", JSON.stringify(deletedItem));
      return {
        ...state,
        sales: deletedItem,
      };

    case ADD_IN_ORDERS:
      const prevOrders = state.orders;
      const newOrders = [...prevOrders, action.payload];

      localStorage.setItem("orders", JSON.stringify(newOrders));

      return {
        ...state,
        orders: newOrders,
      };

    default:
      return state;
  }
};
export default mainReducer;
