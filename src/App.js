import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import StoreContextProvider from "./context/StoreContext";
import Header from "./Components/layout/Header";
import Overlay from "./Components/layout/Overlay";
import Navbar from "./Components/layout/Navbar";
import Index from "./Components/layout/Index";
// import Cart from "./Components/cart/Cart";
import Library from "./Components/library/Library";
import Favorites from "./Components/favorites/Favorites";
import Wishlist from "./Components/wishlist/Wishlist";
import VideoGamePage from "./Components/game/VideoGamePage";
// import LeaderBoard from "./Components/leaderboard/Leaderboard";

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
            <Route path="/library" component={Library} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/wishlist" component={Wishlist} />
            {/* <Route path="/leaderboard" component={LeaderBoard} /> */}
            <Route path="/game/:id" component={VideoGamePage} />
            {/* <Route path="/cart" component={Cart} /> */}
          </Switch>
        </div>
      </Router>
    </StoreContextProvider>
  );
};

export default App;
