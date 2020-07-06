import React, {useContext, useState} from 'react';
import { StoreContext }  from '../../context/StoreContext';
import VideoGameWishlist from './VideoGameWishlist';

import List from './List';
import ListForm from './ListForm';

import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';


const SortableItem = SortableElement(({game, sortIndex}) => 
    <VideoGameWishlist game={game} sortIndex={sortIndex}/>);


const SortableList = SortableContainer(({sortedGames}) => {
    return (

      <ul className="sortable-list">
          {/* {console.log(sortedGames)} */}
        {sortedGames.map((game, index) => (
            // console.log(game)
          <SortableItem key={index} index={index} game={game} sortIndex={index}/>
        ))}
      </ul>
    );
  });



const Wishlist = () => {

    const { lists, wishlistGames } = useContext(StoreContext)

    const [sortedGames, setGames] = useState(wishlistGames);


   const onSortEnd = ({oldIndex, newIndex}) => {
    setGames(arrayMove(sortedGames, oldIndex, newIndex));
      };



    return (
        
<>

        {wishlistGames.length > 0 ? 
        (<div className="wishlist">
            {/* <h2>Wishlist</h2> */}
                <ul className="wishlist-list">
                {/* <SortableList sortedGames={sortedGames} onSortEnd={onSortEnd}  distance={10}/> */}

                    {wishlistGames.map((game) => (
                        <VideoGameWishlist game={game} key={game.id}/>
                     ))}

                </ul>
        </div>)
        : (<div className="empty-wishlist">Your wishlist is empty</div>)}


      <div className="lists-section">
            <ListForm />
            {lists.length ?
              <ul className="lists">
                  {lists && lists.map(list => (
                    <List list={list} key={list.id}/>
                  ))}
              </ul>
            : (<div className="empty-wishlist">No personal list yet. Use the form above to create your first list.</div>)}
      </div>
</>
    )
}

export default Wishlist;

