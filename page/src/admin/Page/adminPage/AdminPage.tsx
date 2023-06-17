import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../Redux/hooks";
import { getAllProducts, getBransFromApi } from "../../../Helpers/Products";
import {
  getAllBrands,
  getProductsFromApi,
  seeMoreItems,
  totalFound,
} from "../../../PageRedux/actions";
import { Button, Grid, Paper, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ItemCard from "../../components/itemCard";
import AddItemDialog from "../../components/add";

function AdminPage() {
  const [open, setOpen] = useState(false);

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
  useEffect(() => {
    const getBrands = async () => {
      const { data } = await getBransFromApi();
      dispatch(getAllBrands(data.brands));
    };
    getBrands();
  }, []);

  return (
    <>
      <div style={{ width: "100%" }}>
        <Grid
          container
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            marginTop: "40px ",
          }}
        >
          <AddIcon
            sx={{
              width: "40px",
              height: "40px",
              padding: "20px ",
              border: "1px solid blue",
              borderRadius: "50% ",
              cursor: "pointer",
            }}
            onClick={() => setOpen(true)}
          />
          <Grid
            item
            className="Adminpage"
            style={{
              width: "90%",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            {products.map((product) => {
              return (
                <Paper
                  elevation={5}
                  key={product.id}
                  sx={{ borderRadius: "10px" }}
                >
                  <ItemCard product={product} />
                </Paper>
              );
            })}
          </Grid>
          <Button onClick={() => dispatch(seeMoreItems(range))}>
            Show more
          </Button>
        </Grid>
      </div>
      <AddItemDialog open={open} setOpen={setOpen} />
    </>
  );
}

export default AdminPage;
