import React from "react";
import { Grid, Paper } from "@mui/material";
import { useAppSelector } from "../../Redux/hooks";
import Card from "../Card";

function favorites() {
  const { favoriteItems } = useAppSelector<InitialState>(
    (state) => state.mainReducer
  );

  console.log(favoriteItems);
  return (
    <Grid>
      <Grid className="page">
        <h1 style={{ color: "black" }}> Favorites</h1>
        {favoriteItems.map((product) => {
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
export default favorites;
