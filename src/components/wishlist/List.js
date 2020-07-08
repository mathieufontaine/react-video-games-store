import React, { useContext, useState, useEffect } from 'react';
import { StoreContext }  from '../../context/StoreContext';

import GameList from './GameList';


import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';




const List = ({ list }) => {


const SortableItem = SortableElement(({game, sortIndex}) => 
    <GameList game={game} sortIndex={sortIndex} id={list.id}/>);


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

    const { lists, removeList, findItem, updateOrderGames } = useContext(StoreContext);

    const selectedList = lists.filter(listi => listi.id === list.id);
    // console.log(selectedList);

    const unsortedGames = selectedList[0].games;
    // console.log(unsortedGames);

    // const gamesList = selectedList[0].games;
    // console.log(gamesList);

    const [sortedGames, setGames] = useState(unsortedGames);
    // console.log(sortedGames);


    useEffect(() => {
        setGames(unsortedGames);
    }, [unsortedGames]);


   const onSortEnd = ({oldIndex, newIndex}) => {
    setGames(arrayMove(sortedGames, oldIndex, newIndex));
      };


    useEffect(() => {
        if (sortedGames && sortedGames.length > 1) {
        updateOrderGames(sortedGames, list.id);}
    }, [sortedGames]);

    return (
        <li className = "list">
            <div className="list-information">  
            <p className="title">{list.title}</p>


                {/* <button className="btn btn-edit"
                        onClick = {() => findItem(list.id)}>
                    <i className="fa fa-pencil"></i>
                </button> */}
            </div>



            {sortedGames && sortedGames.length > 0 ?(
                <ul className="sortable-list">
                <SortableList sortedGames={sortedGames} onSortEnd={onSortEnd} distance={10} list={list.id}/>
                </ul>)
                : (
                <div className="empty-list">
                    <h3>No game yet. </h3>
                    <p>Add some games in your wishlist first.</p>
                </div>
            )}   




                <button className="btn"
                        onClick = {() => removeList(list.id)}>
                    Remove list
                </button>
        </li>
    )
}

export default List;