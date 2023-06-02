import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./product.css";

function Product() {
  const [choosenItem, setChoosenItem] = useState<Prodact>({
    id: "",
    title: "",
    description: "",
    category: "",
    images: [],
    brand: "",
    price: 0,
    rating: "",
    amount: "",
    brands: "",
  });
  const { id } = useParams();
  useEffect(() => {
    const getProduct = async () => {
      const { data: product } = await axios.get(
        `http://localhost:8080/product/${id}`
      );

      // console.log(product);
      setChoosenItem(product);
    };
    getProduct();
  }, []);

  return (
    <div>
      <Link to={"/"}>Back</Link>
      <div>
        <h1>{choosenItem?.brand} </h1>
        <img src={choosenItem.images?.[0]} alt="" />
        <div>
          <img src={choosenItem.images?.[1]} alt="" className="pictures" />
          <img src={choosenItem.images?.[2]} alt="" className="pictures" />
          <img src={choosenItem.images?.[3]} alt="" className="pictures" />
          <img src={choosenItem.images?.[4]} alt="" className="pictures" />
        </div>
        <h3>
          model: <span>{choosenItem?.title}</span>{" "}
        </h3>
        <h3>
          raiting: <span>{choosenItem.rating}</span>{" "}
        </h3>
        <h2>
          price: <span>{choosenItem.price}</span>
        </h2>
      </div>
    </div>
  );
}

export default Product;
