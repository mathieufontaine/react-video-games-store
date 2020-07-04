import React, {useContext} from 'react';
import { StoreContext }  from '../../context/StoreContext';
import VideoGameWishlist from './VideoGameWishlist';


const Wishlist = () => {

    const { wishlistGames } = useContext(StoreContext)

    console.log(wishlistGames);

    return (
        
        wishlistGames.length > 0 ? 
        (<div className="wishlist">
            {/* <h2>Wishlist</h2> */}
                <ul className="wishlist-list">
                    {wishlistGames.map((game) => (
                        <VideoGameWishlist game={game} key={game.id}/>
                    ))}
                </ul>
        </div>)
        : (<div className="empty-wishlist">Your wishlist is empty</div>)

    )
}

export default Wishlist;