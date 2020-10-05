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
  const { cartGames, wishlistGames, showNav } = useContext(StoreContext);

  // const [mobileNavOn, setMobileNavOn] = useState(false);

  // useEffect(() => {
  //     const width  = window.innerWidth || document.documentElement.clientWidth ||
  //     document.body.clientWidth;
  //     if(width > 1200){setMobileNavOn(true)} else {setMobileNavOn(false)};
  //     // {setMobileNavOn(true)};
  // }, [width]);

  return (
    <div className="navbar">
      {/* <div className={showNav === false ? "hide" : "mobile-nav full-width"}> */}
      {/* <div
          className="mobile-nav-btn"
          onClick={() => setMobileNavOn(!mobileNavOn)}
        >
          <FontAwesomeIcon icon={faBars} className="nav-icon" />
        </div> */}
      {/* </div> */}
      {showNav === true ? (
        <>
          <Link to="/">
            <div
              className="btn nav-tab"
              // onClick={handleClick}
            >
              <FontAwesomeIcon icon={faStore} className="nav-icon" />
              <span>STORE</span>
            </div>
          </Link>
          <Link to="/wishlist">
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
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
