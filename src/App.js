import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import StoreContextProvider from './context/StoreContext';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Cart from './components/cart/Cart';
import Wishlist from './components/wishlist/Wishlist';
import VideoGamePage from './components/game/VideoGamePage';

import './assets/style/App.css';
import './assets/style/Store.css';
import './assets/style/Cart.css';
import './assets/style/Search.css';
import './assets/style/Game.css';
import './assets/style/Buttons.css';
import './assets/style/Navbar.css';
import './assets/style/Wishlist.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './assets/style/List.css'
function App() {

  return (
    <StoreContextProvider >
      <Router>
        <div className="container">
          <Header />
          <Navbar />
          <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/wishlist" component={Wishlist} />
              <Route exact path="/game/:id" component={VideoGamePage} />
          </Switch>
        </div>
      </Router>
    </StoreContextProvider >
  );
}

export default App;