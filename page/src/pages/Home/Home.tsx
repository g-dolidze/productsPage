import React, { useEffect, useState } from "react";
import { getAllProducts, getSearchedProducts } from "../../Helpers/Products";
import { Grid, Paper } from "@mui/material";
import { useDispatch } from "react-redux";
import { getProductsFromApi, totalFound } from "./redux/actions";
import { useAppSelector } from "../../Redux/hooks";
import { useDebounce } from "use-debounce";

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

  // const [search, setSearch] = useState("");
  // const [value] = useDebounce(search, 1000);
  // useEffect(() => {
  //   const getSearchProducts = async () => {
  //     const { data } = await getSearchedProducts(value);
  //   };
  //   getSearchProducts();
  // }, [value]);
  // console.log(getSearchedProducts());
  const [search, setSearch] = useState("");
  const [value] = useDebounce(search, 1000);

  useEffect(() => {
    const getSearchProducts = async () => {
      try {
        const { data } = await getSearchedProducts(value);
        console.log(data);
      } catch (error) {}
    };

    getSearchProducts();
  }, [value]);

  return (
    <Grid>
      <input
        className="search"
        type="search"
        name="search"
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
      />
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
