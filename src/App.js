import React,{useContext, useState} from 'react';
import { StoreContext } from './context/StoreContext';

import Header from './components/Header';
import Store from './components/Store';
import StoreContextProvider from './context/StoreContext';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Search from './components/Search';

import './App.css';

function App() {

  
 const [storePage, setStorePage] = useState(true);


  return (
    <StoreContextProvider >
      <div className="container">
        <Header />
        <Navbar storePage={storePage} setStorePage={setStorePage}/>
        {storePage === true && <Search />}
        {storePage === true && <Store />}
        {storePage === false &&  <Cart />}
      </div>
    </StoreContextProvider >
  );
}

export default App;