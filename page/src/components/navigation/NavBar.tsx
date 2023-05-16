import { Link } from "react-router-dom";
import { useAppSelector } from "../../Redux/hooks";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import "./NavBar.css";
import { Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

const NavBar = () => {
  const { favoriteItems } = useAppSelector((state) => state.mainReducer);
  const { chousenItems } = useAppSelector((state) => state.mainReducer);

  return (
    <div className="nav">
      <div className="leftside">
        <Link to="/">
          <h1>e-commers</h1>
        </Link>
        <Link to="/cart">
          {" "}
          <ShoppingCartRoundedIcon /> {chousenItems.length}
        </Link>
        <Link to="/favorites">
          <FavoriteBorderRoundedIcon /> {favoriteItems.length}
        </Link>
        <Link to="/category">
          <h2>Categore</h2>
        </Link>
      </div>
      <div className="rightside">
        <Link to="/Login">
          <Avatar sx={{ bgcolor: deepPurple[500] }}>GD</Avatar>
          Log in
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
