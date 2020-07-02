import React, { useContext } from 'react'
import {StoreContext} from '../context/StoreContext';

const VideoGameCart = ({game}) => {

    const { removeGame } = useContext(StoreContext)

    return (
        <li className="video-game-cart">
            <img src={game.cover} alt={game.cover} className="cover"/>            
            <h3>{game.title}</h3>
            <span className="price">${game.price}</span>
            <button className="btn remove-btn"
                    onClick={() => removeGame(game.id)}
            >REMOVE</button>
        </li>
    )
}

export default VideoGameCart
