import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../Helpers/Products";
import { Button, Grid, Paper } from "@mui/material";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../Redux/hooks";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  getProductsFromApi,
  seeMoreItems,
  totalFound,
} from "../../PageRedux/actions";
import Card from "../../components/Card";
import "./Home.scss";
import Carusel from "../../components/carusel/mainCarusel/Carusel";
import BrandsSlider from "../../components/carusel/brands";
import ProductsCarusel from "../../components/carusel/productCarusel";

function Home() {
  const dispatch = useDispatch();
  const { products, range } = useAppSelector<InitialState>(
    (state) => state.mainReducer
  );
  const { t } = useTranslation();
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await getAllProducts(range);
      dispatch(totalFound(data.total_found));
      dispatch(getProductsFromApi(data.products));
    };
    getProducts();
  }, []);

  const notify = () =>
    toast("Added in Cart", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });


  return (
    <div style={{ width: "100%" }}>
      <ToastContainer />
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
                <Card
                  product={product}
                  notify={notify}
                 
                />
              </Paper>
            );
          })}
        </Grid>
        <Button onClick={() => dispatch(seeMoreItems(range))}>
          {t("global.show more")}
        </Button>
      </Grid>
      <div>
        <BrandsSlider />
      </div>
    </div>
  );
}

export default Home;
