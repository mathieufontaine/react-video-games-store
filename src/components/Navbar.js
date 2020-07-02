import React, { useContext } from 'react';
import {StoreContext} from '../context/StoreContext';

const Navbar = ({storePage, setStorePage}) => {

    const { cartGames} = useContext(StoreContext);
    

    if(storePage === true){

    }

    return (
        <div className="navbar">
            <button className={(storePage === true) ?
                    "btn nav-store white" :
                    "btn nav-store green"}
                    onClick ={() => setStorePage(true)}>
                <span>STORE</span>
            </button>
            <button className={(storePage === false) ?
                    "btn nav-cart white" :
                    "btn nav-cart green"}
                    onClick ={() => setStorePage(false)}>
                <span>CART({cartGames.length})</span>
            </button>
        </div>
    )
}

export default Navbar
