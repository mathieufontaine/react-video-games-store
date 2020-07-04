import React, { useContext } from 'react'
import {StoreContext} from '../../context/StoreContext';
import { Link } from 'react-router-dom';

const VideoGameCart = ({game}) => {

    const { removeGame } = useContext(StoreContext)

    return (
 
        <li className="video-game-cart">
            <Link to={`game/${game.id}`}>
            <img src={game.background_image} alt={game.background_image} className="cover"/> 
            </Link>   
            <Link to={`game/${game.id}`}>
            <h3>{game.name}</h3>
            </Link>   
            <span className="price">${game.price}</span>
            <button className="btn remove-btn"
                    onClick={() => removeGame(game.id)}
            >REMOVE</button>
        </li>
    )
}

export default VideoGameCart
