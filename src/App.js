import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import StoreContextProvider from './context/StoreContext';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import VideoGamePage from './components/page/VideoGamePage';

import './assets/style/App.css';
import './assets/style/Store.css';
import './assets/style/Cart.css';
import './assets/style/Search.css';
import './assets/style/Game.css';
import './assets/style/Buttons.css';
import './assets/style/Navbar.css';

function App() {

  const [storePage, setStorePage] = useState(true);


  return (
    <StoreContextProvider >
      <Router>
        <div className="container">
          <Header />
          <Navbar setStorePage={setStorePage}/>
          <Switch>
              <Route exact path="/" component={() => <Index storePage={storePage}/>} />
              <Route exact path="/game/:id" component={VideoGamePage} />
          </Switch>
        </div>
      </Router>
    </StoreContextProvider >
  );
}

export default App;