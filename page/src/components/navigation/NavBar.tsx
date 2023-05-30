import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../Redux/hooks";
import { useDebounce } from "use-debounce";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

import "./NavBar.css";
import { searchedItems } from "../../pages/Home/redux/actions";
import { getSearchedProducts } from "../../Helpers/Products";
import Category from "../category";
import { isUserAuthenticated } from "../../Helpers/user/isUserAuth";
import AccountMenu from "../account";
import { Language } from "./language";

const NavBar = () => {
  const { favoriteItems, range, choosenItems } = useAppSelector(
    (state) => state.mainReducer
  );

  const usersPage = () => {
    if (!isUserAuthenticated()) {
      return (
        <Link to="/login" style={{ color: "white" }}>
          <Avatar sx={{ bgcolor: deepPurple[500] }}></Avatar>
          Log in
        </Link>
      );
    } else {
      return <AccountMenu />;
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

        <Category setSearch={setSearch} />
      </div>
      <div className="rightside">
        <Language />
        <input
          className="search"
          type="search"
          name="search"
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div>{usersPage()}</div>
      </div>
    </div>
  );
};
export default NavBar;
