import { useAppSelector } from "../../Redux/hooks";
import CartItem from "../../components/CartItem";
import { Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./Cart.scss";

const Cart = () => {
  const { chousenItems } = useAppSelector((state) => state.mainReducer);

  let total = 0;
  {
    chousenItems.map((item) => {
      return (total += item.quantity * Number(item.price));
    });
  }
  return (
    <div className="carts_page">
      <div className="cart_page">
        {chousenItems.map((item) => {
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
            {chousenItems.map((item) => {
              return (
                <Paper elevation={3} className="paper">
                  <h4>{item.title} </h4>
                  <div className="amount">
                    <h5>price:{parseFloat(item.price).toFixed(2)} </h5>
                    <h5>quantity:{item.quantity} </h5>
                  </div>
                </Paper>
              );
            })}
          </ul>
        </div>
        <hr />
        <h3>total price:{parseFloat(total).toFixed(2)} Lari</h3>
        <hr />
        <div className="total_price">
          <h1>
            <Link to="/login">Check Out</Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;
