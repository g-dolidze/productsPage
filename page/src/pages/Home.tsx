import React, { useState, useEffect } from "react";
import { getAllProducts } from "../Helpers/Products";
import Card from "../components/Card";
import { useStore } from "../store/productsStoreContext";

function Home() {
  const { products, setProducts } = useStore();

  useEffect(() => {
    const getProducts = async () => {
      const {
        data: { products },
      } = await getAllProducts();
      setProducts(products);
    };
    getProducts();
  }, []);

  return (
    <div>
      {products &&
        products.map((product) => {
          return (
            <div key={product?.id}>
              <Card product={product} />
            </div>
          );
        })}
    </div>
  );
}

export default Home;
