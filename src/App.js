import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import StoreContextProvider from "./context/StoreContext";
import Header from "./components/layout/Header";
import Overlay from "./components/layout/Overlay";
import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import Cart from "./components/cart/Cart";
import Library from "./components/library/Library";
import VideoGamePage from "./components/game/VideoGamePage";
import LeaderBoard from "./components/leaderboard/Leaderboard";

import "./assets/style/App.css";
import "./assets/style/Store.css";
import "./assets/style/Cart.css";
import "./assets/style/Search.css";
import "./assets/style/Game.css";
import "./assets/style/Buttons.css";
import "./assets/style/Navbar.css";
import "./assets/style/Library.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/style/List.css";
import "./assets/style/Leaderboard.css";

const App = () => {
  return (
    <StoreContextProvider>
      <Router>
        <Header />
        <Navbar />
        <div className="container">
          <Overlay />
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/cart" component={Cart} />
            <Route path="/library" component={Library} />
            <Route path="/leaderboard" component={LeaderBoard} />
            <Route path="/game/:id" component={VideoGamePage} />
          </Switch>
        </div>
      </Router>
    </StoreContextProvider>
  );
};

export default App;
