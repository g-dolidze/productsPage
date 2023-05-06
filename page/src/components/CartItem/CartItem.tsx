import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./CartItem.scss";

const CartItem = ({ item }) => {
  return (
    <div>
      <div className="item">
        {/* <img src="" alt="image" width={"50px"} height={"50px"} /> */}
        <div className="item_info">
          <Link to={`/product/${item.id}`}>
            <Typography variant="h4">{item.title} </Typography>
            <Typography variant="h5"> {item.price} </Typography>
          </Link>
          <div className="quantity">
            {" "}
            <button>-</button>
            <Typography variant="h4">{item.quantity} </Typography>
            <button>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
