import React, { useState } from "react";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import FiberNewSharpIcon from "@mui/icons-material/FiberNewSharp";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import { Link } from "react-router-dom";
import {
  addProductToSales,
  addToCart,
  addToFavorite,
} from "../../../PageRedux/actions";
import { useDispatch } from "react-redux";
import "./itemCard.scss";
import EditDialog from "../AllDialogs/editDialog/EditDialog";
import { DeleteItemfromApi } from "../../../Helpers/admin/AdminRequest";
import Confirm from "../AllDialogs/confirmDialog";
import ItemDialog from "../AllDialogs/itemDialog";
import { useTranslation } from "react-i18next";
type PropsType = {
  product: Prodact;
};

function ItemCard({ product }: PropsType) {
  const [open, setOpen] = useState(false);
  const [openItemDialog, setOpenItemDialog] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const dispatch = useDispatch();

  console.log(product.id);
  const { t } = useTranslation();
  return (
    <>
      <div className="itemcard">
        <img
          src={product?.images[0]}
          alt="image"
          width={"100px "}
          height={"80px"}
        />
        <div className="about_item">
          <div className="properties">
            <h5 onClick={() => setOpenItemDialog(true)} className="title">
              {product.title}{" "}
            </h5>
            <div>
              <h5>
                {" "}
                {t("global.price")} : {Number(product.price).toFixed(2)}{" "}
              </h5>
              <h5>
                {t("global.amount")} : {product.amount}
              </h5>
              <h5>
                {t("global.rating")} : {product.rating}
              </h5>
            </div>
          </div>
        </div>
        <div className="item_btns">
          <LoyaltyIcon
            className="item_btn"
            onClick={() => dispatch(addProductToSales(product))}
          />

          <DeleteSharpIcon
            className="item_btn"
            onClick={() => setOpenConfirm(true)}
          />
          <EditSharpIcon className="item_btn" onClick={() => setOpen(true)} />
        </div>
      </div>
      <EditDialog open={open} setOpen={setOpen} product={product} />
      <Confirm open={openConfirm} setOpen={setOpenConfirm} item={product} />
      <ItemDialog
        open={openItemDialog}
        setOpen={setOpenItemDialog}
        item={product}
      />
    </>
  );
}

export default ItemCard;
