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
  const { showNav, toggleNav, currentTab, changeTab } = useContext(
    StoreContext
  );

  const handleShowNav = () => toggleNav(!showNav);
  const handleChangeTab = tabName => changeTab(tabName);

  return (
    <nav>
      <ul
        className={
          showNav === true
            ? "navbar show-navbar desktop"
            : "navbar hide-navbar desktop"
        }
      >
        <li
          className={currentTab === "store" ? "selected" : ""}
          onClick={() => handleChangeTab("store")}
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
        </li>
        <li
          className={currentTab === "library" ? "selected" : ""}
          onClick={() => handleChangeTab("library")}
        >
          <Link to="/library">
            <div
              className="btn nav-tab"
              // onClick={handleClick}
            >
              <FontAwesomeIcon icon={faGamepad} className="nav-icon" />
              <span>MY LIBRARY</span>
            </div>
          </Link>
        </li>
        <li
          className={currentTab === "favorites" ? "selected" : ""}
          onClick={() => handleChangeTab("favorites")}
        >
          <Link to="/favorites">
            <div
              className="btn nav-tab"
              // onClick={handleClick}
            >
              <FontAwesomeIcon icon={faStar} className="nav-icon" />
              <span>My Favorites</span>
            </div>
          </Link>
        </li>
        <li
          className={currentTab === "whishlist" ? "selected" : ""}
          onClick={() => handleChangeTab("whishlist")}
        >
          <Link to="/wishlist">
            <div
              className="btn nav-tab"
              // onClick={handleClick}
            >
              <FontAwesomeIcon icon={faShoppingCart} className="nav-icon" />
              <span>My WISHLIST</span>
            </div>
          </Link>
        </li>
        {/* <Link to="/leaderboard">
        <div
          className="btn nav-tab"
          // onClick={handleClick}
        >
          <FontAwesomeIcon icon={faListOl} className="nav-icon" />
          <span>LEADERBOARD</span>
        </div>
      </Link> */}
      </ul>
      <ul
        className={
          showNav === true
            ? "navbar show-navbar mobile"
            : "navbar hide-navbar mobile"
        }
      >
        <li>
          <Link to="/">
            <div className="btn nav-tab" onClick={handleShowNav}>
              <FontAwesomeIcon icon={faStore} className="nav-icon" />
              <span>STORE</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/library">
            <div className="btn nav-tab" onClick={handleShowNav}>
              <FontAwesomeIcon icon={faGamepad} className="nav-icon" />
              <span>MY LIBRARY</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/favorites">
            <div className="btn nav-tab" onClick={handleShowNav}>
              <FontAwesomeIcon icon={faStar} className="nav-icon" />
              <span>My Favorites</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/wishlist">
            <div className="btn nav-tab" onClick={handleShowNav}>
              <FontAwesomeIcon icon={faShoppingCart} className="nav-icon" />
              <span>My WISHLIST</span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
