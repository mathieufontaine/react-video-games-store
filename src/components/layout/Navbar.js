import React, { useContext } from 'react';
import {StoreContext} from '../../context/StoreContext';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const { cartGames, wishlistGames } = useContext(StoreContext);


    return (
        <div className="navbar">
            <Link to="/">
            <div className="btn nav-tab white"
                    // onClick ={() => setStorePage(true)}
            >
                <span>STORE</span>
            </div>
            </Link>
            <Link to="/wishlist">
            <div className="btn nav-tab purple"
                    // onClick ={() => setStorePage(false)}
            >
                <span>WISHLIST({wishlistGames.length})</span>
            </div>
            </Link>
            <Link to="/leaderboard">
            <div className="btn nav-tab blue">
                <span>LEADERBOARD</span>
            </div>
            </Link>
            <Link to="/cart">
            <div className="btn nav-tab cart"
                    // onClick ={() => setStorePage(false)}
            >
                <span>CART({cartGames.length})</span>
            </div>
            </Link>
        </div>

    )
}

export default Navbar
