import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../Redux/hooks";
import { useDebounce } from "use-debounce";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

import "./NavBar.scss";
import { searchedItems } from "../../PageRedux/actions";
import { getSearchedProducts } from "../../Helpers/Products";
import Category from "../category";
import { isUserAuthenticated } from "../../Helpers/user/isUserAuth";
import AccountMenu from "../account";
import { Language } from "./language";

const NavBar = () => {
  const { favoriteItems, range, choosenItems } = useAppSelector<InitialState>(
    (state) => state.mainReducer
  );

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
      </div>
      <div className="navCenter">
        <input
          className="search"
          type="search"
          name="search"
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Category setSearch={setSearch} />
      </div>
      <div className="rightside">
        <Language />
        <div>
          {isUserAuthenticated()?.isUser || isUserAuthenticated()?.isAdmin ? (
            <AccountMenu />
          ) : (
            <Link to="/login" style={{ color: "white" }}>
              <Avatar sx={{ bgcolor: deepPurple[500] }}></Avatar>
              Log in
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default NavBar;
