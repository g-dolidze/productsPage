import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getTvProducts } from "./redux/action";
import { getTvItems } from "../../Helpers/Products";
import { useAppSelector } from "../../Redux/hooks";
import { IconButton } from "@mui/material";

export default function Category() {
  const dispatch = useDispatch;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { products } = useAppSelector((state) => state.categoryReducer);

  const getTvs = async () => {
    const { data } = await getTvItems();
    console.log(data);
    dispatch(getTvProducts(data));
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Category
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>
          <IconButton onClick={getTvs}>TV</IconButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>AC</MenuItem>
        <MenuItem onClick={handleClose}>PHone</MenuItem>
      </Menu>
    </div>
  );
}
