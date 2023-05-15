import React from "react";
import { Grid, Paper } from "@mui/material";
import { initialState } from "../../pages/Home/redux/reducer";
import Card from "../Card";

function favorites() {
  const favoriteItems = initialState.favoriteItems;
  return (
    <Grid>
      <Grid className="page">
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
