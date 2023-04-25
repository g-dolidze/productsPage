import { useContext, createContext, useState,useMemo,useReducer, } from "react";

export const StoreContext = createContext({});
export const useStore = () => useContext(StoreContext);

const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const store = { products, setProducts };
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default Provider;
