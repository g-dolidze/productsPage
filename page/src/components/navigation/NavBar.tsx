import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../Redux/hooks";
import { useDebounce } from "use-debounce";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

import "./NavBar.css";
import { searchedItems } from "../../pages/Home/redux/actions";
import { getSearchedProducts } from "../../Helpers/Products";
import Categorys from "../category";

const NavBar = () => {
  const { favoriteItems, range, chousenItems } = useAppSelector(
    (state) => state.mainReducer
  );
  const navigate = useNavigate();
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
          <ShoppingCartRoundedIcon /> {chousenItems.length}
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
        <Link to="/Login">
          <Avatar sx={{ bgcolor: deepPurple[500] }}>GD</Avatar>
          Log in
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
