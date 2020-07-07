import React, { useContext, useState, useEffect } from 'react'
import {StoreContext} from '../../context/StoreContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const VideoGameWishlist = ({game, selectListSection, setSelectListSection}) => {

    const { lists, addToSelectedGames, removeFromWishlist } = useContext(StoreContext)
    const [bgColor, setBgColor] = useState('');

    // const [selectedGames, setSelectedGames] = useState([]);

    const handleClick = (game) => {
        // console.log(game);
        setSelectListSection(true);
        setBgColor('cadetblue');
        addToSelectedGames(game);
    }

    useEffect(() => {
        setBgColor('');
    }, [lists]);


    // useEffect(() => {
    //     setBgColor('blue');
    // }, [selectListSection === true]);

    return (
 
        <li className="video-game-wishlist" style={{backgroundColor: bgColor}}>
            <Link to={`game/${game.id}`}>
                <img src={game.background_image} alt={game.background_image} className="cover"/> 
                <h3>{game.name}</h3>
            </Link>  
            <div className="actions">
                {lists.length ? 
                    <button className="btn add-btn"
                        onClick={() => handleClick(game)}>
                        Add to List
                    </button>
                : ''}
                <div className="cross-btn"
                    onClick={() => removeFromWishlist(game.id)}
                ><FontAwesomeIcon  icon={faTimes} />
                </div>
            </div>
        </li>
    )
}

export default VideoGameWishlist;
