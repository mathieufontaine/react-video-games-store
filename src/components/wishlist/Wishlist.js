import React, {useContext, useState, useEffect} from 'react';
import { StoreContext }  from '../../context/StoreContext';
import WishlistGame from './WishlistGame';
import CustomList from './CustomList';
import CustomListForm from './CustomListForm';
import CustomListSelect from './CustomListSelect';
import TopList from './TopList';
import { Link } from 'react-router-dom';
import ScrollArrow from '../layout/ScrollArrow';


// import {SortableContainer, SortableElement} from 'react-sortable-hoc';
// import arrayMove from 'array-move';



// const SortableItem = SortableElement(({game, sortIndex}) => 
//     <WishlistGame game={game} sortIndex={sortIndex}/>);


// const SortableList = SortableContainer(({sortedGames}) => {
//     return (

//       <ul className="sortable-list">
//         {sortedGames.map((game, index) => (
//           <SortableItem key={index} index={index} game={game} sortIndex={index}/>
//         ))}
//       </ul>
//     );
//   });


const Wishlist = () => {

    const { customLists, wishlistGames, selectedGames, clearWishlist} = useContext(StoreContext);
    // const [sortedGames, setGames] = useState(wishlistGames);

  //  const onSortEnd = ({oldIndex, newIndex}) => {
  //   setGames(arrayMove(sortedGames, oldIndex, newIndex));
  //     };

    const [selectListSection, setSelectListSection] = useState(false);
    const [gamesToAdd, setGamesToAdd] = useState(selectedGames);


      useEffect(() => {
        setGamesToAdd(selectedGames);
    }, [selectedGames.length]);

 

    return (

    <>
       <div className="wishlist">
       <div className= 'added-list mobile'>
                      {wishlistGames.length > 0 ?   
                      <div>
                      <h1 className="page-title">LIBRARY</h1>
                        <ul className="wishlist-list">
                            {/* <SortableList sortedGames={sortedGames} onSortEnd={onSortEnd}  distance={10}/> */}
                          {wishlistGames.map((game) => (
                            <WishlistGame game={game} key={game.id} setSelectListSection={setSelectListSection} selectListSection={selectListSection}/>
                          ))}
                        </ul>
                        {selectListSection === false ?
                        <button className="btn remove-btn" onClick={() => clearWishlist()}>Remove all games</button> : ''}
                        {customLists.length > 0 ?
                          (<CustomListSelect customLists={customLists} gamesToAdd={gamesToAdd} setSelectListSection={setSelectListSection} selectListSection={selectListSection}/>) 
                          : ''
                        }
                      </div> 
                      : <div className="empty-list empty-wishlist">
                          No Games. 
                          <p>To update your Top List or your Custom Lists, you need to add some games from the <Link to="/">store</Link> first.</p>
                        </div>}
                  </div>

            <div className="top-list-added-list-custom-list">
                <div className="top-list-section">
                  <TopList />
                </div>
                <div className="added-list-custom-list">

                  <div className="lists-section">
                    <h2>Your Custom Lists</h2>
                      <CustomListForm />
                      {customLists.length ?
                        <ul className="lists">
                            {customLists && customLists.map(list => (
                              <CustomList list={list} key={list.id}/>
                            ))}
                        </ul>
                      : (<div className="empty-list empty-wishlist">
                          To create a custom list your need to:
                          <p><strong>1. </strong>Use the form above to give a name to your list.</p>
                          <p><strong>2. </strong>Add some games from the Store to your Library.</p> 
                          <p><strong>3. </strong>Select the games you want to add by clicking on "add to custom list".</p>
                          <p><strong>4. </strong>Choose your list among all your custom lists.</p>
                        </div>)
                      }
                    </div>
                  </div>
            </div>
            <ScrollArrow />
        </div>



</>
    )
}

export default Wishlist;

