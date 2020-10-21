import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import CustomListGame from "./CustomListGame";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";
import CartTotal from "./Total";

const CustomList = ({ list }) => {
  const SortableItem = SortableElement(({ game, sortIndex }) => (
    <CustomListGame game={game} sortIndex={sortIndex} id={list.id} />
  ));

  const SortableList = SortableContainer(({ sortedGames }) => {
    return (
      <>
        <ul className="sortable-list">
          {sortedGames.map((game, index) => (
            <SortableItem
              key={index}
              index={index}
              game={game}
              sortIndex={index}
            />
          ))}
        </ul>
        <CartTotal games={sortedGames} />
      </>
    );
  });

  const { customLists, removeCustomList, updateOrderGames } = useContext(
    StoreContext
  );

  const selectedList = customLists.filter(
    customList => customList.id === list.id
  );
  const unsortedGames = selectedList[0].games;

  const [sortedGames, setGames] = useState(unsortedGames);

  useEffect(() => {
    setGames(unsortedGames);
  }, [unsortedGames]);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setGames(arrayMove(sortedGames, oldIndex, newIndex));
  };

  useEffect(() => {
    if (sortedGames && sortedGames.length > 1) {
      updateOrderGames(sortedGames, list.id);
    }
  }, [sortedGames]);

  return (
    <li className="list">
      <h3 className="title">{list.title}</h3>

      {/* <button className="btn btn-edit"
                        onClick = {() => findItem(list.id)}>
                    <i className="fa fa-pencil"></i>
                </button> */}

      {sortedGames && sortedGames.length > 0 ? (
        <ul className="sortable-list">
          <SortableList
            sortedGames={sortedGames}
            onSortEnd={onSortEnd}
            distance={10}
            list={list.id}
          />
        </ul>
      ) : (
        <div className="empty-list">
          <p>No game yet.</p>
          <p>Add some games from your custom list.</p>
        </div>
      )}

      <button className="btn" onClick={() => removeCustomList(list.id)}>
        Remove list
      </button>
    </li>
  );
};

export default CustomList;
