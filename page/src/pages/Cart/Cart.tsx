import { useAppSelector } from "../../Redux/hooks";
import { Button, Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { isUserAuthenticated } from "../../Helpers/user/isUserAuth";
import CartItem from "../../components/CartItem";
import "./Cart.scss";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import {
  addProductToOrders,
  deleteProductFromSales,
} from "../../PageRedux/actions";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Cart = () => {
  const { choosenItems } = useAppSelector<InitialState>(
    (state) => state.mainReducer
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  let total = 0;
  {
    choosenItems.map((item) => {
      return (total += item.quantity * Number(item.price));
    });
  }
  const userData = JSON.parse(localStorage.getItem("user") as string);

  const handleCheckout = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: choosenItems }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url);
        }
      });
  };

  const notify = () => toast("Enter your address !");

  console.log(userData);
  const isauthen = () => {
    if (!isUserAuthenticated().isUser) {
      navigate("/Login");
    }
    if (!userData.addressInfo) {
      notify(), navigate("/profile");
    } else {
      handleCheckout();
      dispatch(addProductToOrders({ items: choosenItems }));
    }
  };

  return (
    <div className="carts_page">
      <div className="cart_page">
        {choosenItems.map((item) => {
          return (
            <Paper key={item.id} elevation={5} className="paper">
              <CartItem item={item} />
            </Paper>
          );
        })}
      </div>
      <ToastContainer />
      {window.innerWidth > 1023 ? (
        <div className="right_side">
          <div className="list">
            {" "}
            <ul>
              {choosenItems.map((item) => {
                return (
                  <Paper elevation={3} className="paper" key={item.id}>
                    <h4>{item.title} </h4>
                    <div className="amount">
                      <h5>
                        {t("global.price")}: {Number(item.price).toFixed(2)}
                      </h5>
                      <h5>
                        {t("global.quantity")}:{item.quantity}{" "}
                      </h5>
                    </div>
                  </Paper>
                );
              })}
            </ul>
          </div>
          <div className="total_price">
            <hr />
            <h3>
              {t("global.total price")}:{Number(total.toFixed(2))} ${" "}
            </h3>
            <hr />
            <h1>
              <Button onClick={isauthen}>{t("global.Check Out")} </Button>
            </h1>
          </div>
        </div>
      ) : (
        <div className="total">
          <ul>
            <li>
              {t("global.total price")}:{Number(total.toFixed(2))}{" "}
              {t("global.lari")}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cart;
