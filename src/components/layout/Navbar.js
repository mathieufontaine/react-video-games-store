import React, { useContext, useState, useEffect } from 'react';
import {StoreContext} from '../../context/StoreContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faGamepad,faStore, faListOl, faBars } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {

    const { cartGames, wishlistGames } = useContext(StoreContext);

    const [mobileNavOn, setMobileNavOn] = useState(false);
    const [screenWidth, setscreenWidth] = useState('');


    const width  = window.innerWidth || document.documentElement.clientWidth || 
    document.body.clientWidth;

    useEffect(() => {
        setscreenWidth(width);
    }, [width]);



    useEffect(() => {
        width > 1200 ? setMobileNavOn(true): setMobileNavOn(false);
    }, [width]);

    // useEffect(() => {
    //     const width  = window.innerWidth || document.documentElement.clientWidth || 
    //     document.body.clientWidth;
    //     if(width > 1200){setMobileNavOn(true)} else {setMobileNavOn(false)};
    //     // {setMobileNavOn(true)};
    // }, [width]);


    const handleClick = () => (screenWidth < 1200 ? setMobileNavOn(false) : '');


    console.log(width);

    return (
        <div className="navbar sticky">
            <div className={mobileNavOn === false ? "mobile-nav full-width" : "mobile-nav"}>
                <div className="mobile-nav-btn" onClick={() => setMobileNavOn(!mobileNavOn)}>
                    <FontAwesomeIcon icon={faBars} className=""/>
                </div>
            </div>
            {mobileNavOn === true ? 
            <>
            <Link to="/">
            <div className="btn nav-tab white"
                    onClick ={handleClick}
            >
                <FontAwesomeIcon icon={faStore} className="nav-icon"/>
                <span>STORE</span>
            </div>
            </Link>
            <Link to="/wishlist">
            <div className="btn nav-tab purple"
                    onClick ={handleClick}
            >
                <FontAwesomeIcon icon={faGamepad} className="nav-icon"/>
                <span>MY LIBRARY</span>
            </div>
            </Link>
            <Link to="/leaderboard">
            <div className="btn nav-tab blue"
                    onClick ={handleClick}
            >
                <FontAwesomeIcon icon={faListOl} className="nav-icon"/>
                <span>LEADERBOARD</span>
            </div>
            </Link>
            <Link to="/cart">
            <div className="btn nav-tab cart"
                    onClick ={handleClick}
            >
                <FontAwesomeIcon icon={faShoppingCart} className="nav-icon"/>
                <span>CART({cartGames.length})</span>
            </div>
            </Link>
            </> : ''}
        </div>
    )
}

export default Navbar
