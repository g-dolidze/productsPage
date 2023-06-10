import { Paper, Grid, Button } from "@mui/material";
import React, { useEffect } from "react";
import { getBrandsProducts, seeMoreBrandItems, seeMoreItems } from "../Home/redux/actions";
import { useDispatch } from "react-redux";
import { getBrandProducts } from "../../Helpers/Products";
import { useAppSelector } from "../../Redux/hooks";
import Card from "../../components/Card";
import { useLocation } from "react-router";

type PropsType = {
  brandName: string;
  range: number;
};

function BrandsPage() {
  const dispatch = useDispatch();
  const { products, range } = useAppSelector<InitialState>(
    (state) => state.mainReducer
  );

  const url = useLocation();
  let urlArray = "";
  urlArray = url.search;
  let urlText = urlArray.split("");
  const brand = urlText.slice(1);
  const brandName = brand.join("");
  console.log(brandName);

  const brandKind = "keyboard";

  useEffect(() => {
    const getBrands = async () => {
      const { data } = await getBrandProducts(brandKind, brandName);
      dispatch(getBrandsProducts(data.products));
    };
    getBrands();
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
        <Button onClick={() => dispatch(seeMoreBrandItems(range))}>
          Show more
        </Button>
      </Grid>
    </div>
  );
}

export default BrandsPage;
