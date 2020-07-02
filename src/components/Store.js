import React, {useContext} from 'react';
import { StoreContext }  from '../context/StoreContext'
import VideoGameStore from './VideoGameStore'

const Store = () => {

    const { storeGames } = useContext(StoreContext)

    
    return (
        <div className="store">
            <ul className="video-game-list">
                {storeGames && storeGames.map((game) => (
                    <VideoGameStore game={game} key={game.id}/>
                ))}
            </ul>
        </div>
    )
}

export default Store;
