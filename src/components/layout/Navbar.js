import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faGamepad,
  faStore,
  faListOl,
  faBars
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { cartGames, showNav } = useContext(StoreContext);

  return (
    <div
      className={showNav === true ? "navbar show-navbar" : "navbar hide-navbar"}
    >
      <Link to="/">
        <div
          className="btn nav-tab"
          // onClick={handleClick}
        >
          <FontAwesomeIcon icon={faStore} className="nav-icon" />
          <span>STORE</span>
        </div>
      </Link>
      <Link to="/library">
        <div
          className="btn nav-tab"
          // onClick={handleClick}
        >
          <FontAwesomeIcon icon={faGamepad} className="nav-icon" />
          <span>MY LIBRARY</span>
        </div>
      </Link>
      <Link to="/leaderboard">
        <div
          className="btn nav-tab"
          // onClick={handleClick}
        >
          <FontAwesomeIcon icon={faListOl} className="nav-icon" />
          <span>LEADERBOARD</span>
        </div>
      </Link>
      <Link to="/cart">
        <div
          className="btn nav-tab cart"
          // onClick={handleClick}
        >
          <FontAwesomeIcon icon={faShoppingCart} className="nav-icon" />
          <span>CART({cartGames.length})</span>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
