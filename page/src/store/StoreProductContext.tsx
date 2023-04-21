import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
// import { getProductsCategories } from "../Helpers/Products";
import reducer from "./reducer";
import { CssBaseline } from "@mui/material";

type useProductType = {
  dispatch: any;
  products: object[];
  setProducts: any;
  state: any;
};

export const StoreProductContext = createContext({} as useProductType);

export const useProducts = () => useContext(StoreProductContext);

export type apiProdyctType = {
  id: number;
  title: string;
  description: string;
  price: number | string;
  discountPercentage: number;
  rating: string;
  stock: string;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};
export type cartItemsType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: string;
  stock: string;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  quantity: number;
};

type childrenProps = {
  children: React.ReactNode;
};
export type stateType = {
  cartItems: cartItemsType[];
};
export const initialState: stateType = { cartItems: [] };

const StoreProvider = ({ children }: childrenProps) => {
  const [products, setProducts] = useState([]);
  // const [state, dispatch] = useReducer(reducer, initialState);
  // const [productCategories, setProductCategories] = useState([]);

  // const totalPrice = useMemo(
  //   () =>
  //     state.cartItems.reduce(
  //       (acc, corrent) => acc + Number(corrent.price) * corrent.quantity,
  //       0
  //     ),
  //   [state.cartItems]
  // );
  const number = 10;

  useEffect(() => {
    const categories = async () => {
      const { data } = await getProductsCategories();
      setProductCategories(data);
    };
    categories();
  }, [products]);
  const productsStore = {
    products,
    setProducts,
    number,
    // handleThemeMode,
    // totalPrice,
    // productCategories,
  };

  return (
    <StoreProductContext.Provider value={productsStore}>
      <CssBaseline />
      {children}
    </StoreProductContext.Provider>
  );
};
export default StoreProvider;
