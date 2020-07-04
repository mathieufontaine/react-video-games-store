import React, { useContext } from 'react'
import {StoreContext} from '../../context/StoreContext';
import { Link } from 'react-router-dom';

const VideoGameWishlist = ({game}) => {

    const { findGame, removeFromWishlist } = useContext(StoreContext)

    return (
 
        <li className="video-game-wishlist">
            <Link to={`game/${game.id}`}>
                <img src={game.background_image} alt={game.background_image} className="cover"/> 
            {/* </Link>    */}
            {/* <Link to={`game/${game.id}`}> */}
                <h3>{game.name}</h3>
            </Link>   
            <div className="actions">
                <span className="price">${game.price}</span>
                <button className="btn add-btn"
                    onClick={() => findGame(game.id, 'cart')}>
                    <Link to={'/cart'}>Add to Cart</Link>
                </button>
                <button className="btn remove-btn"
                    onClick={() => removeFromWishlist(game.id)}
                >REMOVE
                </button>
            </div>
        </li>
    )
}

export default VideoGameWishlist
