import React, { useContext } from 'react'
import {StoreContext} from '../../context/StoreContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const GameList = ({game, sortIndex}) => {
    // console.log(game);/
    const { lists, removeFromList } = useContext(StoreContext)

    return (
 
        <li className="video-game-wishlist">
            <div className="ranking">{sortIndex+1}</div>
            <Link to={`game/${game.id}`}>
                <img src={game.background_image} alt={game.background_image} className="cover"/> 
            </Link>  
            <div className="actions">
            <Link to={`game/${game.id}`}><h3>{game.name}</h3></Link>  
                <div className="cross-btn"
                    onClick={() => removeFromList(game.id, lists[1].id)}
                ><FontAwesomeIcon  icon={faTimes} />
                </div>
            </div>
        </li>
    )
}

export default GameList;
