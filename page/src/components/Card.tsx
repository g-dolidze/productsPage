import React, { useState, useEffect } from "react";
import { Axios } from "axios";
import useProducts from "../store/StoreProductContext";

const Card = ({ product }) => {
  // const [dispach,products.setProducts]=useProducts()

  return (
    <>
      <div className="card">
        <h1>{product.title} </h1>
        <img src={product.images[0]} alt="image" />
        <div className="about">
          <h3>{product.brand} </h3>
          <h5>{product.price} </h5>
        </div>
      </div>
    </>
  );
};
export default Card;
