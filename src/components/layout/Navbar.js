import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faGamepad,
  faStore,
  faStar
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { showNav, toggleNav } = useContext(StoreContext);

  const handleShowNav = () => {
    toggleNav(!showNav);
  };

  return (
    <>
      <div
        className={
          showNav === true
            ? "navbar show-navbar desktop"
            : "navbar hide-navbar desktop"
        }
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
        <Link to="/favorites">
          <div
            className="btn nav-tab"
            // onClick={handleClick}
          >
            <FontAwesomeIcon icon={faStar} className="nav-icon" />
            <span>My Favorites</span>
          </div>
        </Link>
        <Link to="/wishlist">
          <div
            className="btn nav-tab"
            // onClick={handleClick}
          >
            <FontAwesomeIcon icon={faShoppingCart} className="nav-icon" />
            <span>My WISHLIST</span>
          </div>
        </Link>
        {/* <Link to="/leaderboard">
        <div
          className="btn nav-tab"
          // onClick={handleClick}
        >
          <FontAwesomeIcon icon={faListOl} className="nav-icon" />
          <span>LEADERBOARD</span>
        </div>
      </Link> */}
      </div>
      <div
        className={
          showNav === true
            ? "navbar show-navbar mobile"
            : "navbar hide-navbar mobile"
        }
      >
        <Link to="/">
          <div className="btn nav-tab" onClick={handleShowNav}>
            <FontAwesomeIcon icon={faStore} className="nav-icon" />
            <span>STORE</span>
          </div>
        </Link>
        <Link to="/library">
          <div className="btn nav-tab" onClick={handleShowNav}>
            <FontAwesomeIcon icon={faGamepad} className="nav-icon" />
            <span>MY LIBRARY</span>
          </div>
        </Link>
        <Link to="/favorites">
          <div className="btn nav-tab" onClick={handleShowNav}>
            <FontAwesomeIcon icon={faStar} className="nav-icon" />
            <span>My Favorites</span>
          </div>
        </Link>
        <Link to="/wishlist">
          <div className="btn nav-tab" onClick={handleShowNav}>
            <FontAwesomeIcon icon={faShoppingCart} className="nav-icon" />
            <span>My WISHLIST</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
