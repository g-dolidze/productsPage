import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import "./product.scss";
import { Button, Dialog, DialogContent } from "@mui/material";
import { addToCart } from "../../PageRedux/actions";
import { useDispatch } from "react-redux";
import SimilarsCarusel from "../../components/carusel/similars/SimilarsCarusel";

function Product() {
  const [choosenItem, setChoosenItem] = useState<Prodact>();
  const [open, setOpen] = React.useState(false);
  const [imageId, setImageId] = useState(0);
  const [readmore, setReadMore] = useState(true);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { id } = useParams();
  useEffect(() => {
    const getProduct = async () => {
      const { data: product } = await axios.get(
        `http://localhost:8080/product/${id}`
      );

      setChoosenItem(product);
    };
    getProduct();
  }, [id]);

  const { t } = useTranslation();

  return (
    <>
      <div className="choosenItem_page">
        <div className="left">
          <img
            src={choosenItem?.images?.[0]}
            onClick={() => {
              handleClickOpen(), setImageId(0);
            }}
            width={"400px"}
          />
          <div className="images">
            <img
              src={choosenItem?.images[1]}
              width={"100px"}
              onClick={() => {
                handleClickOpen(), setImageId(1);
              }}
            />
            <img
              src={choosenItem?.images[2]}
              width={"100px"}
              onClick={() => {
                handleClickOpen(), setImageId(2);
              }}
            />
            <img
              src={choosenItem?.images[3]}
              width={"100px"}
              onClick={() => {
                handleClickOpen(), setImageId(3);
              }}
            />

            <img
              src={choosenItem?.images[4]}
              width={"100px"}
              onClick={() => {
                handleClickOpen(), setImageId(4);
              }}
            />
          </div>{" "}
          <br />
          <h3>
            {t("global.raiting")}: <span>{choosenItem?.rating}</span>
          </h3>
        </div>

        <div className="choosenItem_info">
          <h3>
            {t("global.Brand")}: <span>{choosenItem?.brand}</span>
          </h3>
          <h3 style={{ textAlign: "center" }}>
            {t("global.Model")}: <span>{choosenItem?.title}</span>
          </h3>
          <h2>
            {t("global.price")}:{" "}
            <span>{Number(choosenItem?.price).toFixed(2)}₾</span>
          </h2>

          <Button
            sx={{
              borderRadius: "20px",
              backgroundColor: "green",
              color: "black",
              padding: "20px",
            }}
            onClick={() => {
              dispatch(addToCart(choosenItem));
            }}
          >
            {t("global.add to cart")}
          </Button>
        </div>
      </div>

      <div
        className={`description ${readmore ? "description" : "description2 "}`}
      >
        <h2>{t("global.Descriction")}</h2>
        <div className="text">
          <h4>{choosenItem?.description}</h4>
        </div>
        <button
          className="read_more_btn"
          onClick={() => setReadMore(!readmore)}
        >
          ↓ ↓ ↓ ↓
        </button>
        <button
          className="read_less_btn"
          onClick={() => setReadMore(!readmore)}
        >
          ↑↑↑↑
        </button>
      </div>

      <div
        style={{ border: "0.5px solid black", width: "90%", margin: "auto" }}
      >
        <h3 style={{ textAlign: "center", border: "0.5px solid black" }}>
          {" "}
          {choosenItem?.brand} {t("global.Products")}
        </h3>
        <br />

        <SimilarsCarusel item={choosenItem} />
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <img
            src={choosenItem?.images[imageId]}
            width={"400px"}
            height={"400px"}
            style={{
              borderRadius: "100px",
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Product;
