import React, { useState } from "react";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import FiberNewSharpIcon from "@mui/icons-material/FiberNewSharp";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import { Link } from "react-router-dom";
import { addToCart, addToFavorite } from "../../../pages/Home/redux/actions";
import { MAIN_PAGE_ACTIONS } from "../../../pages/Home/redux/types";
import { useDispatch } from "react-redux";
import "./itemCard.scss";
import EditDialog from "../editDialog/EditDialog";
import { DeleteItemfromApi } from "../../../Helpers/admin/AdminRequest";
import Confirm from "../confirmDialog";
type PropsType = {
  product: Prodact;
};

function ItemCard({ product }: PropsType) {
  const [open, setOpen] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <div className="itemcard">
        <div className="about-item">
          <img src={product?.images[0]} alt="image" width={"100px "} />
          <Link to={`product/${product.id}`}>
            <h5>{product.title} </h5>
          </Link>
          <h5>price: {product.price} </h5>
        </div>
        <div className="item_btns">
          <LoyaltyIcon
            className="item_btn"
            onClick={() => dispatch(addToCart(product))}
          />

          <DeleteSharpIcon
            className="item_btn"
            onClick={() => setOpenConfirm(true)}
          />
          <EditSharpIcon className="item_btn" onClick={() => setOpen(true)} />
        </div>
      </div>
      <EditDialog open={open} setOpen={setOpen} product={product} />;
      <Confirm open={openConfirm} setOpen={setOpenConfirm} item={product} />
    </>
  );
}

export default ItemCard;
