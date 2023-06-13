import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDebounce } from "use-debounce";
import { Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

import "./AdminNavbar.scss";
import { getSearchedProducts } from "../../../Helpers/Products";
import { searchedItems } from "../../../pages/Home/redux/actions";
import { isUserAuthenticated } from "../../../Helpers/user/isUserAuth";
import AccountMenu from "../../../components/account";
import { Language } from "../../../components/navigation/language";
import { useAppDispatch, useAppSelector } from "../../../Redux/hooks";

const AdminNavbar = () => {
  const { range } = useAppSelector<InitialState>(
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
        <Link to="/cart">Sales</Link>
        <Link to="/favorites">new Items</Link>
      </div>
      <div className="navCenter">
        <input
          className="search"
          type="search"
          name="search"
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
        />
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
export default AdminNavbar;
