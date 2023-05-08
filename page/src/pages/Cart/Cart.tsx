import { useAppSelector } from "../../Redux/hooks";
import CartItem from "../../components/CartItem";
import { Paper } from "@mui/material";
import "./Cart.scss";

const Cart = () => {
  const { chousenItems } = useAppSelector((state) => state.mainReducer);

  return (
    <div className="cart_page">
      {chousenItems.map((item) => {
        return (
          <Paper key={item.id} elevation={5} className="paper">
            <CartItem item={item} />
          </Paper>
        );
      })}
    </div>
  );
};

export default Cart;
