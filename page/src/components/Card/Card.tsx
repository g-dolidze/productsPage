import { Link } from "react-router-dom";
import "./Card.scss";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import { useTranslation } from "react-i18next";

import { addToCart, addToFavorite } from "../../PageRedux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Loyalty } from "@mui/icons-material";

type PropsType = {
  product: Prodact;
};
const Card = ({ product }: PropsType) => {
  const sales = JSON.parse(localStorage.getItem("sales") as string);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <>
      <div className="card">
        <img src={product?.images[0]} alt="image" />
        <div className="about">
          <Link to={`/product/${product.id}`}>
            <h5 style={{ marginLeft: "20px" }}>{product.title} </h5>
            <br />
            <div>
              <h5 style={{ marginLeft: "20px" }}>
                {" "}
                {t("global.price")} : {Number(product.price).toFixed(2)}{" "}
              </h5>
            </div>
            <br />
          </Link>
          <div className="card_hover">
            <AddShoppingCartRoundedIcon
              sx={{ display: "none" }}
              className="btn"
              onClick={() => dispatch(addToCart(product))}
            />
            <FavoriteBorderRoundedIcon
              sx={{ display: "none" }}
              className="btn"
              onClick={() => dispatch(addToFavorite(product))}
            />
            <Link to={`/brand?${product.brand}`} className="btn">
              {product.brand}
            </Link>
          </div>
        </div>
        <div className="saleicon">
          {sales.map((item: Prodact) => {
            if (item.id === product.id) {
              return (
                <img src="https://icon-library.com/images/sale-png-icon/sale-png-icon-28.jpg" />
              );
            }
          })}
        </div>
      </div>
    </>
  );
};
export default Card;
