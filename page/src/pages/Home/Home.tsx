import React, { useState, useEffect } from "react";
import { getAllProducts } from "../../Helpers/Products";
import Card from "../../components/Card";
import { useStore } from "../../store/productsStoreContext";
import { Grid, Box, Paper, Typography } from "@mui/material";

import "./Home.scss";
import Product from "../product";
type product1 = {
  title: string;
  description: string;
  images: string;
  brand: string;
  category: string;
  price: string;
  amount: number;
};
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
    <Grid>
      <Grid className="page">
        {products.map((product) => {
          return (
            <Paper elevation={5} key={product?.id}>
              <Card product={product} />
            </Paper>
          );
        })}
      </Grid>
    </Grid>
  );
}

export default Home;
