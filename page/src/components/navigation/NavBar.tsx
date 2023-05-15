import "./NavBar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { initialState } from "../../pages/Home/redux/reducer";

const NavBar = () => {
  const chousenItems = initialState.chousenItems;
  const favoriteItems = initialState.favoriteItems;

  return (
    <div className="nav">
      <div className="leftside">
        <Link to="/">
          <h1>e-commers</h1>
        </Link>
        <Link to="/cart">cart{chousenItems.length}</Link>
        <Link to="/favorites">favorites{favoriteItems.length}</Link>
        <Link to="/category">
          <h2>Categore</h2>
        </Link>
      </div>
      <div className="rightside">
        <div></div>
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
