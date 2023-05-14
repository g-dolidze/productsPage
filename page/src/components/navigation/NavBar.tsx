import React, { useState } from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import { initialState } from "../../pages/Home/redux/reducer";
import Category from "../../pages/Category";

const NavBar = () => {
  const choosenItems = initialState.chousenItems;

  return (
    <div className="nav">
      <div className="leftside">
        <Link to="/">
          <h1>e-commers</h1>
        </Link>
        <Link to="/cart">cart {choosenItems.length}</Link>
        {Category()}
      </div>
      <div className="rightside">
        <div>
          <button type="submit">user</button>
        </div>
        <Link to="/Login">
          <img src="" alt="img" />
          Log in
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
