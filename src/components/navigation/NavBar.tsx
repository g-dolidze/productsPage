import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../Redux/hooks";
import { useDebounce } from "use-debounce";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Avatar, Button, Fade, Menu, MenuItem } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { useTranslation } from "react-i18next";

import "./NavBar.scss";
import { searchedItems } from "../../PageRedux/actions";
import { getSearchedProducts } from "../../Helpers/Products";
import Category from "../category";
import { isUserAuthenticated } from "../../Helpers/user/isUserAuth";
import AccountMenu from "../account";
import { Language } from "./language";
import SearchIcon from "@mui/icons-material/Search";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import React from "react";

const NavBar = () => {
  const { favoriteItems, range, choosenItems } = useAppSelector<InitialState>(
    (state) => state.mainReducer
  );
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState("");
  const [value] = useDebounce(search, 1000);
  const [show, setShow] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const getSearcheditems = async () => {
      const { data } = await getSearchedProducts(value, range);
      dispatch(searchedItems(data.products));
    };
    getSearcheditems();
  }, [value, range]);

  const handleShow = () => {
    setShow(!show);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/Login");
  };
  const Login = () => {
    navigate("/login");
  };

  const location = useLocation();
  console.log(location);

  return (
    <div className="nav">
      <div className="leftside">
        <Link
          onClick={() => {
            useDebounce("", 100);
          }}
          to={"/"}
        >
          <h1>E-Shop</h1>
        </Link>
        {location.pathname === "/login" ? (
          ""
        ) : (
          <div className="icons">
            <Link to="/cart">
              <ShoppingCartRoundedIcon className="mui_icon" />
              <span>{choosenItems.length}</span>
            </Link>
            <Link to="/favorites">
              <FavoriteBorderRoundedIcon className="mui_icon" />
              <span>{favoriteItems.length}</span>
            </Link>
          </div>
        )}
      </div>
      <div className="searchicon">
        <SearchIcon onClick={() => handleShow()} />
      </div>
      {location.pathname === "/brand" ? (
        ""
      ) : (
        <div className={`navCenter ${show ? "new_nav_center" : ""} `}>
          <input
            placeholder={t("global.search") as string}
            className="search"
            type="search"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="category">
            <Category setSearch={setSearch} />
          </div>
        </div>
      )}
      <div className="rightside">
        <div className="language">
          <Language />
        </div>
        <div className="account">
          {isUserAuthenticated()?.isUser || isUserAuthenticated()?.isAdmin ? (
            <AccountMenu />
          ) : (
            <Link to="/login">
              <Avatar sx={{ bgcolor: deepPurple[500] }}></Avatar>
              <p style={{ color: "black", textAlign: "center" }}>
                {" "}
                {t("global.Log in")}
              </p>
            </Link>
          )}
        </div>
      </div>
      {}
      <div className="burger_menu  ">
        {" "}
        <Button
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MenuOutlinedIcon
            sx={{ color: "white", fontSize: "72px" }}
            className="menu_icon"
          />
        </Button>
        <div className="bar">
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}>
              <div className="account">
                {isUserAuthenticated()?.isUser ||
                isUserAuthenticated()?.isAdmin ? (
                  <Link to="/profile">
                    <Avatar
                      sx={{ bgcolor: deepOrange[500] }}
                      alt="Gio Dolidze"
                      src="/broken-image.jpg"
                    ></Avatar>
                    <br />
                    {t("global.My Account")}
                  </Link>
                ) : (
                  <div onClick={() => Login()} className="bar_account">
                    <Avatar sx={{ bgcolor: deepPurple[500] }}></Avatar>
                    {t("global.Log in")}
                  </div>
                )}
              </div>
            </MenuItem>
            <div className="bar_icons">
              <MenuItem onClick={handleClose}>
                <Link to="/cart">
                  <ShoppingCartRoundedIcon className="mui_icon" />
                  <span>{choosenItems.length}</span>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/favorites">
                  <FavoriteBorderRoundedIcon className="mui_icon" />
                  <span>{favoriteItems.length}</span>
                </Link>
              </MenuItem>
            </div>
            <MenuItem onClick={handleClose}>
              <Language />
            </MenuItem>
            <MenuItem
              onClick={() => {
                logOut(), handleClose();
              }}
              className="logout"
            >
              {t("global.Logout")}
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
