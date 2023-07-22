import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDebounce } from "use-debounce";
import { Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { useTranslation } from "react-i18next";

import "./AdminNavbar.scss";
import { getSearchedProducts } from "../../../Helpers/Products";
import { searchedItems } from "../../../PageRedux/actions";
import { isUserAuthenticated } from "../../../Helpers/user/isUserAuth";
import AccountMenu from "../../../components/account";
import { Language } from "../../../components/navigation/language";
import { useAppDispatch, useAppSelector } from "../../../Redux/hooks";
import DiscountIcon from "@mui/icons-material/Discount";
import SalesDialog from "../AllDialogs/sales";
import Category from "../../../components/category";

const AdminNavbar = () => {
  const { range } = useAppSelector<InitialState>((state) => state.mainReducer);

  const hotSales = JSON.parse(localStorage.getItem("sales") as string);
  const dispatch = useAppDispatch();

  const [search, setSearch] = useState("");
  const [value] = useDebounce(search, 1000);
  const [open, setOpen] = useState(false);

  const { t } = useTranslation();

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

        <h4 onClick={() => setOpen(true)}>
          <DiscountIcon />
          {hotSales.length}
        </h4>
        <div className="admin_category">
          <Category setSearch={setSearch} />
        </div>
      </div>
      <div className="navCenter">
        <input
          className="search"
          type="search"
          name="search"
          placeholder={t("global.search") as string}
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
              {t("global.Login")}
            </Link>
          )}
        </div>
      </div>
      <SalesDialog open={open} setOpen={setOpen} Items={hotSales} />
    </div>
  );
};
export default AdminNavbar;
