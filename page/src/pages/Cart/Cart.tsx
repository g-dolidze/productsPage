import { useAppSelector } from "../../Redux/hooks";
import CartItem from "../../components/CartItem";
import { useTranslation, Trans } from "react-i18next";

import { Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./Cart.scss";
import { Key } from "@mui/icons-material";

const Cart = () => {
  const { choosenItems } = useAppSelector<InitialState>(
    (state) => state.mainReducer
  );

  const { t } = useTranslation();

  let total = 0;
  {
    choosenItems.map((item) => {
      return (total += item.quantity * Number(item.price));
    });
  }
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
            {t("global.total price")}:{Number(total.toFixed(2))}{" "}
            {t("global.lari")}
          </h3>
          <hr />
          <h1>
            <Link to="/checkout">{t("global.Check Out")} </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;
