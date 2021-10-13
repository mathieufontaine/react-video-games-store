import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import StoreContextProvider from "./context/StoreContext";
import Header from "./components/layout/Header";
import Content from "./Content";
import Footer from "./components/layout/Footer";

// import LeaderBoard from "./components/leaderboard/Leaderboard";

import "./assets/style/App.css";
import "./assets/style/Header.css";
import "./assets/style/Footer.css";
import "./assets/style/Store.css";
import "./assets/style/Search.css";
import "./assets/style/Game.css";
import "./assets/style/Buttons.css";
import "./assets/style/Navbar.css";
import "./assets/style/Library.css";
import "./assets/style/Favorites.css";
import "./assets/style/Wishlist.css";
import "./assets/style/Lists.css";
import "./assets/style/Mobile.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./assets/style/Leaderboard.css";

const App = () => {
  return (
    <StoreContextProvider>
      <Router>
        <Header />
        <Content />
        <Footer />
      </Router>
    </StoreContextProvider>
  );
};

export default App;
