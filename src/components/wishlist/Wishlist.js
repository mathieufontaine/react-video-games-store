import React, {useContext, useState} from 'react';
import { StoreContext }  from '../../context/StoreContext';
import VideoGameWishlist from './VideoGameWishlist';


import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';


const SortableItem = SortableElement(({game}) => 
    <VideoGameWishlist game={game}/>);


const SortableList = SortableContainer(({sortedGames}) => {
    return (
      <ul className="sortable-list">
          {/* {console.log(sortedGames)} */}
        {sortedGames.map((game, index) => (
            // console.log(game)
          <SortableItem key={index} index={index} game={game} />
        ))}
      </ul>
    );
  });



const Wishlist = () => {

    const { wishlistGames } = useContext(StoreContext)


    const [sortedGames, setGames] = useState(wishlistGames);


   const onSortEnd = ({oldIndex, newIndex}) => {
    setGames(arrayMove(sortedGames, oldIndex, newIndex));
      };



    return (
        

        wishlistGames.length > 0 ? 
        (<div className="wishlist">
            {/* <h2>Wishlist</h2> */}
            

                <ul className="wishlist-list">
                <SortableList sortedGames={sortedGames} onSortEnd={onSortEnd}/>

                    {/* {wishlistGames.map((game) => (
                        <VideoGameWishlist game={game} key={game.id}/>
                     ))} */}

                </ul>
        </div>)
        : (<div className="empty-wishlist">Your wishlist is empty</div>)

    )
}

export default Wishlist;

