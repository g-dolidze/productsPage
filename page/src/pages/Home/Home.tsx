import React, { useEffect } from "react";
import { getAllProducts } from "../../Helpers/Products";
import { Grid, Paper } from "@mui/material";
import { useDispatch } from "react-redux";
import { getProductsFromApi, totalFound } from "./redux/actions";
import { useAppSelector } from "../../Redux/hooks";

import Card from "../../components/Card";
import "./Home.scss";
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
    <Grid>
      <Grid className="page">
        {products.map((product) => {
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
