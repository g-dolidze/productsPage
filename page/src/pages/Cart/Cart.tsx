import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../Redux/hooks";
import { addToCart } from "../Home/redux/actions";
import CartItem from "../../components/CartItem";
import { Box, Grid, Paper } from "@mui/material";

const Cart = () => {
  const dispatch = useDispatch();
  const { chousenItems } = useAppSelector((state) => state.mainReducer);

  useEffect(() => {
    const cartItems = async () => {
      dispatch(addToCart(chousenItems));
    };
    cartItems();
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {chousenItems.map((item) => {
        return (
          <Paper
            key={item.id}
            elevation={5}
            sx={{
              borderRadius: "10px",
              width: "700px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CartItem item={item} />
          </Paper>
        );
      })}
    </Box>
  );
};

export default Cart;
