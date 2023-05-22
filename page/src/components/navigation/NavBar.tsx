import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../Redux/hooks";
import { useDebounce } from "use-debounce";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Avatar, Button } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

import "./NavBar.css";
import { searchedItems } from "../../pages/Home/redux/actions";
import { getSearchedProducts } from "../../Helpers/Products";
import Categorys from "../category";
import { isUserAuthenticated } from "../../Helpers/user/userinfo";

const NavBar = () => {
  const { favoriteItems, range, choosenItems } = useAppSelector(
    (state) => state.mainReducer
  );
  const navigate = useNavigate();

  const usersPage = () => {
    if (!isUserAuthenticated()) {
      navigate("/login");
    } else {
      navigate("/profile");
    }
  };

  const dispatch = useAppDispatch();
  const [search, setSearch] = useState("");
  const [value] = useDebounce(search, 1000);
  useEffect(() => {
    const getSearcheditems = async () => {
      const { data } = await getSearchedProducts(value, range);
      dispatch(searchedItems(data.products));
    };
    getSearcheditems();
  }, [value, range]);

  return (
    <div className="nav">
      <div className="leftside">
        <Link
          onClick={() => {
            useDebounce("", 100);
          }}
          to={"/"}
        >
          <h1>e-commers</h1>
        </Link>
        <Link to="/cart">
          <ShoppingCartRoundedIcon /> {choosenItems.length}
        </Link>
        <Link to="/favorites">
          <FavoriteBorderRoundedIcon /> {favoriteItems.length}
        </Link>

        <Categorys setSearch={setSearch} />
      </div>
      <div className="rightside">
        <input
          className="search"
          type="search"
          name="search"
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={() => usersPage()}>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>GD</Avatar>
          Log in
        </Button>
      </div>
    </div>
  );
};
export default NavBar;
