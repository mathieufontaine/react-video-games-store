import React, { useContext } from 'react'
import {StoreContext} from '../context/StoreContext';

const VideoGameStore = ({game}) => {

    const { findGame } = useContext(StoreContext)

    return (
        <li className="video-game">
            <h3>{game.title}</h3>
            <img src={game.cover} alt={game.cover} className="cover"/>
            <span className="price">${game.price}</span>
            <button className="btn add-to-cart"
                    onClick={() => findGame(game.id)}
            >ADD TO CART</button>
        </li>
    )
}

export default VideoGameStore
