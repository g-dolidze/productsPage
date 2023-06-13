import { Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";

type PropsType = {
  item: Product;
};

function CaruselItem({ item }: PropsType) {
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
