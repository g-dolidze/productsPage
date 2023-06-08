import { Height } from "@mui/icons-material";
import { Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";
import product from "../../pages/product";

function BrandsCaruselItem({ item }) {
  return (
    <>
      <Paper>
        <img
          src={item.image}
          alt={item.title}
          style={{ width: "130px", height: "150px " }}
        />
      </Paper>
    </>
  );
}
export default BrandsCaruselItem;
