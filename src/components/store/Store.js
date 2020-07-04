import React, {useContext} from 'react';
import { StoreContext }  from '../../context/StoreContext'
import VideoGameStore from './VideoGameStore'
import Spinner from '../layout/Spinner';

const Store = () => {

    const { storeGames, heading} = useContext(StoreContext)

    
    return (
        <div className="store">
            {(storeGames === undefined  || storeGames.length === 0) ?
                <Spinner /> :
                <>
                <h3 className="heading">{heading}</h3>
                <ul className="video-game-list">
                    {storeGames && storeGames.map((game) => (
                        <VideoGameStore game={game} key={game.id}/>
                    ))}
                </ul>
                </>
            }
        </div>
    )
}

export default Store;
