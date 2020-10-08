import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { toggleNav, showNav } = useContext(StoreContext);

  const handleShowNav = () => {
    toggleNav(!showNav);
  };

  return (
    <div className="header sticky">
      <div className="hamburger" onClick={handleShowNav}>
        <FontAwesomeIcon icon={faBars} className="nav-icon" />
      </div>
      <h1>
        <Link to="/">Video Games Store </Link>
      </h1>
    </div>
  );
};

export default Header;

// const [screenWidth, setscreenWidth] = useState("");

// const width =
//   window.innerWidth ||
//   document.documentElement.clientWidth ||
//   document.body.clientWidth;

// useEffect(() => {
//   setscreenWidth(width);
// }, [width]);

// useEffect(() => {
//   width > 1200 ? setShowNavOn(true) : setShowNavOn(false);
// }, [width]);

// const handleClick = () => (screenWidth < 1200 ? setShowNavOn(false) : "");

//   console.log(width);
