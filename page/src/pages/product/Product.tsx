import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

function Product() {
  const [chousenItem, setChousenItem] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const getProduct = async () => {
      const { data: product } = await axios(
        `https://dummyjson.com/products/${id}`
      );
      setChousenItem(product);
    };
    getProduct();
  }, []);

  return (
    <div>
      <Link to={"/"}>Back</Link>
      <div>
        <h1>{chousenItem.brand} </h1>
        <img src={chousenItem?.images?.[0]} alt="" />
        <h3>
          {chousenItem.title} {chousenItem.rating}{" "}
        </h3>
        <h2>{chousenItem.price} </h2>
      </div>
    </div>
  );
}

export default Product;
