import React, { useContext } from 'react';
import {StoreContext} from '../../context/StoreContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faGamepad,faStore, faListOl } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {

    const { cartGames, wishlistGames } = useContext(StoreContext);


    return (
        <div className="navbar sticky">
            <Link to="/">
            <div className="btn nav-tab white"
                    // onClick ={() => setStorePage(true)}
            >
                <FontAwesomeIcon icon={faStore} className="nav-icon"/>
                <span>STORE</span>
            </div>
            </Link>
            <Link to="/wishlist">
            <div className="btn nav-tab purple"
                    // onClick ={() => setStorePage(false)}
            >
                <FontAwesomeIcon icon={faGamepad} className="nav-icon"/>
                <span>MY LIBRARY</span>
            </div>
            </Link>
            <Link to="/leaderboard">
            <div className="btn nav-tab blue">
                <FontAwesomeIcon icon={faListOl} className="nav-icon"/>
                <span>LEADERBOARD</span>
            </div>
            </Link>
            <Link to="/cart">
            <div className="btn nav-tab cart"
                    // onClick ={() => setStorePage(false)}
            >
                <FontAwesomeIcon icon={faShoppingCart} className="nav-icon"/>
                <span>CART({cartGames.length})</span>
            </div>
            </Link>
        </div>

    )
}

export default Navbar
