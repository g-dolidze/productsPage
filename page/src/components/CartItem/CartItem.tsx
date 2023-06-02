import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./CartItem.scss";
import { useDispatch } from "react-redux";
import {
  dicresQuantity,
  incresQuantity,
  removeItem,
} from "../../pages/Home/redux/actions";
type CartItemProps = {
  item: CartItem;
};
const CartItem: FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="item">
      <img
        src={item.images?.[0]}
        alt="image"
        width={"200px"}
        height={"200px"}
      />
      <div className="item_info">
        <span onClick={() => dispatch(removeItem(item))} className="remove">
          X
        </span>
        <Link to={`/product/${item.id}`}>
          <h3 className="title">{item.title} </h3>
        </Link>
        <div className="price">
          <h3>Price: {Number(item.price).toFixed(2)} </h3>
          <div className="quantity">
            <span onClick={() => dispatch(dicresQuantity(item))}>-</span>
            <span className="quantity_number">{item.quantity} </span>
            <span onClick={() => dispatch(incresQuantity(item))}>+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
