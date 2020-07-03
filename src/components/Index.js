import React, {useState} from "react";
import Store from "./Store";
import Search from "./Search";
import Cart from './Cart';
import Navbar from './Navbar';

const Index = () => {

    const [storePage, setStorePage] = useState(true);

  return (
    <React.Fragment>
        <Navbar setStorePage={setStorePage}/>
        {storePage === true && <Search />}
        {storePage === true && <Store />}
        {storePage === false &&  <Cart />}
    </React.Fragment>
  );
};

export default Index;