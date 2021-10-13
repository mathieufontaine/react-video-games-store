import React, { useContext } from "react";
import { StoreContext } from "./context/StoreContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import Library from "./components/library/Library";
import Favorites from "./components/favorites/Favorites";
import Wishlist from "./components/wishlist/Wishlist";
import VideoGamePage from "./components/game/VideoGamePage";

const Content = () => {
  const { showNav } = useContext(StoreContext);

  return (
    <main style={showNav === true ? {} : { gridTemplateColumns: "1fr" }}>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/library" component={Library} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/wishlist" component={Wishlist} />
          <Route path="/game/:id" component={VideoGamePage} />
          {/* <Route path="/leaderboard" component={LeaderBoard} /> */}
        </Switch>
      </div>
    </main>
  );
};

export default Content;
