import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";

import TopListGame from "./game/TopListGame";

import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";

const TopList = () => {
  const SortableItem = SortableElement(({ game, sortIndex }) => (
    <TopListGame game={game} sortIndex={sortIndex} />
  ));

  const SortableList = SortableContainer(({ sortedGames }) => {
    return (
      <ul className="sortable-list">
        {/* {console.log(sortedGames)} */}
        {sortedGames.map((game, index) => (
          // console.log(game)
          <SortableItem
            key={index}
            index={index}
            game={game}
            sortIndex={index}
          />
        ))}
      </ul>
    );
  });

  const { topList, updateTopList } = useContext(StoreContext);

  const [sortedGames, setGames] = useState(topList);
  // console.log(sortedGames);

  useEffect(() => {
    setGames(topList);
  }, [topList.length]);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setGames(arrayMove(sortedGames, oldIndex, newIndex));
  };

  useEffect(() => {
    if (sortedGames && sortedGames.length > 1) {
      updateTopList(sortedGames);
    }
  }, [sortedGames]);

  return (
    <li className="top-list">
      <div className="list-information">
        <h3>Rank your favorite games below.</h3>
      </div>

      {sortedGames.length === 3 ? (
        <div className="empty-list">
          <h3>You need at least 3 games in your Top List.</h3>
          <p>If you want to remove any of these games, add more games first.</p>
        </div>
      ) : (
        ""
      )}

      <ul className="sortable-list">
        <SortableList
          sortedGames={sortedGames}
          onSortEnd={onSortEnd}
          distance={10}
        />
      </ul>
    </li>
  );
};

export default TopList;