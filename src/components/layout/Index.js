import React, {useState} from "react";
import Store from "../store/Store";
import Search from "../store/Search";
// import Cart from '../cart/Cart';
// import Navbar from '../layout/Navbar';

const Index = ({storePage}) => {

    // const [storePage, setStorePage] = useState(true);

  return (
    <React.Fragment>
        {/* <Navbar setStorePage={setStorePage}/> */}
        <Search />
        <Store />
        {/* {storePage === false &&  <Cart />} */}
    </React.Fragment>
  );
};

export default Index;