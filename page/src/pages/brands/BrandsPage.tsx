import { Paper, Grid, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getBrandsProducts } from "../../PageRedux/actions";
import { useDispatch } from "react-redux";
import { getBrandProducts } from "../../Helpers/Products";
import { useAppSelector } from "../../Redux/hooks";
import Card from "../../components/Card";
import { useLocation } from "react-router";
import BrandProducts from "./BrandProducts";

function BrandsPage() {
  const [brandKind, setBrandKind] = useState("");
  const [range, setRange] = useState(10);
  const dispatch = useDispatch();
  const { products } = useAppSelector<InitialState>(
    (state) => state.mainReducer
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const seeMoreBrandItems = () => {
    setRange(range + 10);
  };

  const url = useLocation();
  let urlArray = "";
  urlArray = url.search;
  let urlText = urlArray.split("");
  const brand = urlText.slice(1);
  const brandName = brand.join("");

  console.log(url);
  useEffect(() => {
    const getBrands = async () => {
      const { data } = await getBrandProducts(brandKind, range, brandName);
      dispatch(getBrandsProducts(data.products));
    };
    getBrands();
  }, [range, brandName, brandKind]);

  return (
    <div style={{ width: "100%", display: "flex" }}>
      <BrandProducts setBrandKind={setBrandKind} />
      <Grid
        container
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Grid
          container
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            left: "5px ",
            top: "500px",
          }}
        ></Grid>
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
        <Button onClick={() => seeMoreBrandItems()}>Show more</Button>
      </Grid>
    </div>
  );
}

export default BrandsPage;
