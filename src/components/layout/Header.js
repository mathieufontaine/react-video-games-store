import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { toggleNav } = useContext(StoreContext);

  const [showNavOn, setShowNavOn] = useState(true);
  const [screenWidth, setscreenWidth] = useState("");

  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  useEffect(() => {
    setscreenWidth(width);
  }, [width]);

  useEffect(() => {
    width > 1200 ? setShowNavOn(true) : setShowNavOn(false);
  }, [width]);

  const handleClick = () => (screenWidth < 1200 ? setShowNavOn(false) : "");

  //   console.log(width);

  const handleShowNav = () => {
    setShowNavOn(!showNavOn);
    toggleNav(showNavOn);
  };

  return (
    <div className="header sticky">
      <div className="mobile-nav-btn" onClick={handleShowNav}>
        <FontAwesomeIcon icon={faBars} className="nav-icon" />
      </div>

      <h1>
        <Link to="/">Video Games Store </Link>
      </h1>
    </div>
  );
};

export default Header;
