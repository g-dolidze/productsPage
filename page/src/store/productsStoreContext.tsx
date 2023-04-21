import { useContext, createContext, useState } from "react";

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
