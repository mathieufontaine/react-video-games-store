import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Link to="/">
        <div className="header">
            <h1>Video Games Store</h1>
        </div>
        </Link>
    )
}

export default Header;
