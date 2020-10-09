import React from "react";
import Store from "../store/Store";
import Search from "../store/Search";

const Index = ({ storePage }) => {
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
