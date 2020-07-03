import React, { useContext } from 'react';
import {StoreContext} from '../context/StoreContext';

const Navbar = ({setStorePage}) => {

    const { cartGames} = useContext(StoreContext);
    


    return (
        <div className="navbar">
            <button className="btn nav-store white"
                    onClick ={() => setStorePage(true)}>
                <span>STORE</span>
            </button>
            <button className="btn nav-cart green"
                    onClick ={() => setStorePage(false)}>
                <span>CART({cartGames.length})</span>
            </button>
        </div>
    )
}

export default Navbar
