import React, {useContext, useState, useEffect} from 'react';
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

    const { lists, wishlistGames, selectedGames, clearSelectedGames, addToList, findList } = useContext(StoreContext)

    const [sortedGames, setGames] = useState(wishlistGames);


   const onSortEnd = ({oldIndex, newIndex}) => {
    setGames(arrayMove(sortedGames, oldIndex, newIndex));
      };

      const [selectListSection, setSelectListSection] = useState(false);
      // const [selectedList, setSelectedList] = useState('');
      const [gamesToAdd, setGamesToAdd] = useState(selectedGames);


      useEffect(() => {
        setGamesToAdd(selectedGames);
    }, [selectedGames.length]);

      useEffect(() => {
        handleCancel();
    }, [lists]);

      const handleClick = (id) => {
      //  setSelectedList(id).then(addToList(gamesToAdd, selectedList));
        addToList(gamesToAdd, id);
      }

      const handleCancel = () => {
        setSelectListSection(false); 
        clearSelectedGames();
      }

    return (
        
<>

        {wishlistGames.length > 0 ? 
        (<div className="wishlist">
            {/* <h2>Wishlist</h2> */}
                <ul className="wishlist-list">
                {/* <SortableList sortedGames={sortedGames} onSortEnd={onSortEnd}  distance={10}/> */}

                    {wishlistGames.map((game) => (
                        <VideoGameWishlist game={game} key={game.id} setSelectListSection={setSelectListSection} selectListSection={selectListSection}/>
                     ))}
                </ul>

        {lists.length > 0 ?
        <div className= { selectListSection === false ? "hide": "show"}> 
          <h3>Select the list you want to add the game to:</h3>
          <div className="actions-lists">
            {lists.map(list => (
            <button className='btn btn-list' 
                    key={list.id} 
                    onClick={()=>handleClick(list.id)}>
                    {list.title}
            </button>
            ))}
          </div>
          <button className="btn remove-btn" onClick={handleCancel}>Cancel</button>
        </div>
        : ''}

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

