import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./product.css";

function Product() {
  const [chousenItem, setChousenItem] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const getProduct = async () => {
      const { data: product } = await axios.get(
        `http://localhost:8080/product/${id}`
      );

      // console.log(product);
      setChousenItem(product);
    };
    getProduct();
  }, []);

  return (
    <div>
      <Link to={"/"}>Back</Link>
      <div>
        <h1>{chousenItem?.brand} </h1>
        <img src={chousenItem.images?.[0]} alt="" />
        <h3>
          model: <span>{chousenItem?.title}</span>{" "}
        </h3>
        <h3>
          raiting: <span>{chousenItem.rating}</span>{" "}
        </h3>
        <h2>
          price: <span>{chousenItem.price}</span>
        </h2>
      </div>
    </div>
  );
}

export default Product;
