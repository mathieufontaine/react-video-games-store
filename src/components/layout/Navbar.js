import React, { useContext, useEffect } from "react";
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

  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth > 850) toggleNav(!showNav);
  }, []);

  const handleClick = tabName => {
    changeTab(tabName);
    if (window.innerWidth < 850) toggleNav(!showNav);
  };

  return (
    <nav
      className={showNav === true ? "show-nav" : "hide-nav"}
      style={showNav === false ? { display: "none" } : {}}
    >
      <ul className="navbar">
        <li
          className={currentTab === "store" ? "selected" : ""}
          onClick={() => handleClick("store")}
        >
          <Link to="/">
            <div className="btn nav-tab">
              <FontAwesomeIcon icon={faStore} className="nav-icon" />
              <span>STORE</span>
            </div>
          </Link>
        </li>
        <li
          className={currentTab === "library" ? "selected" : ""}
          onClick={() => handleClick("library")}
        >
          <Link to="/library">
            <div className="btn nav-tab">
              <FontAwesomeIcon icon={faGamepad} className="nav-icon" />
              <span>MY LIBRARY</span>
            </div>
          </Link>
        </li>
        <li
          className={currentTab === "favorites" ? "selected" : ""}
          onClick={() => handleClick("favorites")}
        >
          <Link to="/favorites">
            <div className="btn nav-tab">
              <FontAwesomeIcon icon={faStar} className="nav-icon" />
              <span>My Favorites</span>
            </div>
          </Link>
        </li>
        <li
          className={currentTab === "whishlist" ? "selected" : ""}
          onClick={() => handleClick("whishlist")}
        >
          <Link to="/wishlist">
            <div className="btn nav-tab">
              <FontAwesomeIcon icon={faShoppingCart} className="nav-icon" />
              <span>My WISHLIST</span>
            </div>
          </Link>
        </li>
      </ul>
      {/* <ul className="navbar mobile">
        <li
          className={currentTab === "store" ? "selected" : ""}
          onClick={() => handleClick("store")}
        >
          <Link to="/">
            <div className="btn nav-tab">
              <FontAwesomeIcon icon={faStore} className="nav-icon" />
              <span>STORE</span>
            </div>
          </Link>
        </li>
        <li
          className={currentTab === "library" ? "selected" : ""}
          onClick={() => handleClick("library")}
        >
          <Link to="/library">
            <div className="btn nav-tab">
              <FontAwesomeIcon icon={faGamepad} className="nav-icon" />
              <span>MY LIBRARY</span>
            </div>
          </Link>
        </li>
        <li
          className={currentTab === "favorites" ? "selected" : ""}
          onClick={() => handleClick("favorites")}
        >
          <Link to="/favorites">
            <div className="btn nav-tab">
              <FontAwesomeIcon icon={faStar} className="nav-icon" />
              <span>My Favorites</span>
            </div>
          </Link>
        </li>
        <li
          className={currentTab === "whishlist" ? "selected" : ""}
          onClick={() => handleClick("whishlist")}
        >
          <Link to="/wishlist">
            <div className="btn nav-tab">
              <FontAwesomeIcon icon={faShoppingCart} className="nav-icon" />
              <span>My WISHLIST</span>
            </div>
          </Link>
        </li>
      </ul> */}
    </nav>
  );
};

export default Navbar;
