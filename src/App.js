import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import StoreContextProvider from './context/StoreContext';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Index from './components/Index';
import VideoGamePage from './components/VideoGamePage';

// import Store from './components/Store';
// import Cart from './components/Cart';
// import Search from './components/Search';

import './assets/App.css';

function App() {


  return (
    <StoreContextProvider >
      <Router>
        <div className="container">
          <Header />
          <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/game/:id" component={VideoGamePage} />
            </Switch>
        </div>
      </Router>
    </StoreContextProvider >
  );
}

export default App;