import React, { useContext } from 'react'
import {StoreContext} from '../../context/StoreContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const CartGame = ({game}) => {

    const { removeFromCart } = useContext(StoreContext)

    return (
 
        <li className="video-game-cart">
            <Link to={`game/${game.id}`}>
            <img src={game.background_image} alt={game.background_image} className="cover"/> 
            </Link>   
            <Link to={`game/${game.id}`}>
            <h3>{game.name}</h3>
            </Link>   
            <span className="price">${game.price}</span>
            <span className="trash-btn"
                    onClick={() => removeFromCart(game.id)}
            >
            <FontAwesomeIcon  icon={faTrash} />
            </span>
            
        </li>
    )
}

export default CartGame;
