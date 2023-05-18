import { Height } from "@mui/icons-material";
import { Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";
import product from "../../pages/product";

function CaruselItem({ item }) {
  return (
    <>
      <Paper>
        <Link
          to={`product/${item.id}`}
          style={{ width: "100% ", height: "400px  " }}
        >
          <img
            src={item.image}
            alt={item.title}
            style={{ width: "100%", height: "400px " }}
          />
        </Link>
      </Paper>
    </>
  );
}
export default CaruselItem;
