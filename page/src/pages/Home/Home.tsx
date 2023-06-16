import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../Helpers/Products";
import { Button, Grid, Paper } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  getProductsFromApi,
  seeMoreItems,
  totalFound,
} from "../../PageRedux/actions";
import { useAppSelector } from "../../Redux/hooks";

import Card from "../../components/Card";
import "./Home.scss";
import Carusel from "../../components/carusel/mainCarusel/Carusel";
import BrandsSlider from "../../components/brands";
import ProductsCarusel from "../../components/carusel/productCarusel";

function Home() {
  const dispatch = useDispatch();
  const { products, range } = useAppSelector<InitialState>(
    (state) => state.mainReducer
  );
  // const user = localStorage.getItem("user");
  // const userPars = JSON.parse(user as string);
  // console.log(userPars);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await getAllProducts(range);
      dispatch(totalFound(data.total_found));
      dispatch(getProductsFromApi(data.products));
    };
    getProducts();
  }, []);

  return (
    <div style={{ width: "100%" }}>
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
        <ProductsCarusel />
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
              <Paper
                elevation={5}
                key={product.id}
                sx={{ borderRadius: "10px" }}
              >
                <Card product={product} />
              </Paper>
            );
          })}
        </Grid>
        <Button onClick={() => dispatch(seeMoreItems(range))}>Show more</Button>
      </Grid>
      <div>
        <BrandsSlider />
      </div>
    </div>
  );
}

export default Home;
