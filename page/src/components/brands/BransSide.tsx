import React from "react";
import { useAppSelector } from "../../Redux/hooks";
import { Menu, MenuItem } from "@mui/material";

function BransSide() {
  const { products } = useAppSelector((state) => state.mainReducer);

  return (
    <div style={{ width: "60px" }}>
      <Menu open={true}>
        {products.map((product: Prodact) => {
          return (
            <MenuItem sx={{ width: "100px", color: "black" }}>
              {product.brands}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}

export default BransSide;
