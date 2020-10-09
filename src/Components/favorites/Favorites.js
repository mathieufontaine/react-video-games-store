import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";

import FavoritesGame from "./FavoritesGame";

import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";

const Favorites = () => {
  const SortableItem = SortableElement(({ game, sortIndex }) => (
    <FavoritesGame game={game} sortIndex={sortIndex} />
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

  const { favorites, updateFavorites } = useContext(StoreContext);

  const [sortedGames, setGames] = useState(favorites);
  // console.log(sortedGames);

  useEffect(() => {
    setGames(favorites);
  }, [favorites.length]);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setGames(arrayMove(sortedGames, oldIndex, newIndex));
  };

  useEffect(() => {
    if (sortedGames && sortedGames.length > 1) {
      updateFavorites(sortedGames);
    }
  }, [sortedGames]);

  return (
    <>
      <h2 className="section-title yellow">Favorites</h2>
      <div className="top-games top-list library-section">
        <div className="list-information">
          <h3>Rank your favorite games below.</h3>
        </div>

        {sortedGames.length === 3 ? (
          <div className="empty-list">
            <h3>You need at least 3 games in your Top List.</h3>
            <p>
              If you want to remove any of these games, add more games first.
            </p>
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
      </div>
    </>
  );
};

export default Favorites;
