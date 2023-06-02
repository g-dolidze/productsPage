import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../Helpers/Products";
import { Button, Grid, Paper } from "@mui/material";
import { useDispatch } from "react-redux";
import { getProductsFromApi, seeMoreItems, totalFound } from "./redux/actions";
import { useAppSelector } from "../../Redux/hooks";

import Card from "../../components/Card";
import "./Home.scss";
import Carusel from "../../components/carusel/Carusel";

function Home() {
  const dispatch = useDispatch();
  const { products, range } = useAppSelector<InitialState>(
    (state) => state.mainReducer
  );

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await getAllProducts(range);
      dispatch(totalFound(data.total_found));
      dispatch(getProductsFromApi(data.products));
    };
    getProducts();
  }, []);

  return (
    <Grid
      container
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Carusel />
      <Grid
        container
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          left: "5px ",
          top: "500px",
        }}
      >
        {/* <BransSide /> */}
      </Grid>
      <Grid item className="page">
        {products.map((product) => {
          return (
            <Paper elevation={5} key={product.id} sx={{ borderRadius: "10px" }}>
              <Card product={product} />
            </Paper>
          );
        })}
      </Grid>
      <Button onClick={() => dispatch(seeMoreItems(range))}>Show more</Button>
    </Grid>
  );
}

export default Home;
