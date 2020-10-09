import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import StoreContextProvider from "./context/StoreContext";
import Header from "./components/layout/Header";
import Overlay from "./components/layout/Overlay";
import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import Library from "./components/library/Library";
import Favorites from "./components/favorites/Favorites";
import Wishlist from "./components/wishlist/Wishlist";
import VideoGamePage from "./components/game/VideoGamePage";
// import LeaderBoard from "./components/leaderboard/Leaderboard";

import "./assets/style/App.css";
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
        <Navbar />
        <div className="container">
          <Overlay />
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/library" component={Library} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/wishlist" component={Wishlist} />
            <Route path="/game/:id" component={VideoGamePage} />
            {/* <Route path="/leaderboard" component={LeaderBoard} /> */}
          </Switch>
        </div>
      </Router>
    </StoreContextProvider>
  );
};

export default App;
