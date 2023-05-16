import React, { useEffect, useState } from "react";
import { getAllProducts, getSearchedProducts } from "../../Helpers/Products";
import { Grid, Paper } from "@mui/material";
import { useDispatch } from "react-redux";
import { getProductsFromApi, totalFound } from "./redux/actions";
import { useAppSelector } from "../../Redux/hooks";

import Card from "../../components/Card";
import "./Home.scss";

function Home() {
  const dispatch = useDispatch();
  const { products } = useAppSelector((state) => state.mainReducer);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await getAllProducts();
      dispatch(totalFound(data.total_found));
      dispatch(getProductsFromApi(data.products));
    };
    getProducts();
  }, []);

  return (
    <Grid container>
      <Grid item className="page">
        {products.map((product: Prodact) => {
          return (
            <Paper
              elevation={5}
              key={product?.id}
              sx={{ borderRadius: "10px" }}
            >
              <Card product={product} />
            </Paper>
          );
        })}
      </Grid>
    </Grid>
  );
}

export default Home;
