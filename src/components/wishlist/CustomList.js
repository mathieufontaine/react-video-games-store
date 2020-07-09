import React, { useContext, useState, useEffect } from 'react';
import { StoreContext }  from '../../context/StoreContext';
import CustomListGame from './CustomListGame';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';


const CustomList = ({ list }) => {


const SortableItem = SortableElement(({game, sortIndex}) => 
    <CustomListGame game={game} sortIndex={sortIndex} id={list.id}/>);


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

    const { customLists, removeCustomList, findItem, updateOrderGames } = useContext(StoreContext);

    const selectedList = customLists.filter(customList => customList.id === list.id);
    const unsortedGames = selectedList[0].games;

    const [sortedGames, setGames] = useState(unsortedGames);

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
                    <p>Add some games from your added games list.</p>
                </div>
            )}   

                <button className="btn"
                        onClick = {() => removeCustomList(list.id)}>
                    Remove list
                </button>
        </li>
    )
}

export default CustomList;