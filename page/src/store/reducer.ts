import { stateType } from "./productsStoreContext";
import { cartItemsType } from "./productsStoreContext";

const reducer = (state: stateType, action: any) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART": {
      const prevCart = [...state.cartItems];
      const indexOfProduct = prevCart.findIndex(
        (product) => product.id === action.product.id
      );
      if (indexOfProduct === -1) {
        return {
          ...state,
          cartItems: [...prevCart, { ...action.product, quantity: 1 }],
        };
      }
      const sameProduct: cartItemsType = prevCart[indexOfProduct];
      const updateQuantity = {
        ...sameProduct,
        quantity: sameProduct.quantity + 1,
      };
      prevCart[indexOfProduct] = updateQuantity;
      return { ...state, cartItems: prevCart };
    }

    case "REMOVE_PRODUCT_FROM_CART": {
      const prevCart = [...state.cartItems];
      const itemsAfterRemove = prevCart.filter(
        (product) => product.id !== action.product.id
      );
      return { ...state, cartItems: itemsAfterRemove };
    }

    case "INCREMENT_PRODUCT_QUANTITY": {
      const prevCart = [...state.cartItems];
      const indexOfProduct = prevCart.findIndex(
        (product) => product.id === action.product.id
      );
      const productToUpdate: cartItemsType = prevCart[indexOfProduct];
      const updateQuantity = {
        ...productToUpdate,
        quantity: productToUpdate.quantity + 1,
      };
      prevCart[indexOfProduct] = updateQuantity;
      return { ...state, cartItems: prevCart };
    }

    case "DECREMENT_PRODUCT_QUANTITY": {
      const prevCart = [...state.cartItems];
      const indexOfProduct = prevCart.findIndex(
        (product) => product.id === action.product.id
      );
      const productToUpdate: cartItemsType = prevCart[indexOfProduct];
      const updateQuantity = {
        ...productToUpdate,
        quantity: productToUpdate.quantity - 1,
      };
      prevCart[indexOfProduct] = updateQuantity;

      if (updateQuantity.quantity <= 0) {
        const prevCart = [...state.cartItems];
        const itemsAfterRemove = prevCart.filter(
          (product) => product.id !== action.product.id
        );
        return { ...state, cartItems: itemsAfterRemove };
      }

      return { ...state, cartItems: prevCart };
    }
    // case 'CHANGE_THEME':{
    //   if(state.theme === 'light') {
    //     return{...state, theme: 'dark'}}
    // }
  }
};

export default reducer;
