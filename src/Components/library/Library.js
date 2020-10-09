import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import LibraryGame from "./LibraryGame";
// import TopList from "./TopList";
import { Link } from "react-router-dom";
import ScrollArrow from "../layout/ScrollArrow";

// import {SortableContainer, SortableElement} from 'react-sortable-hoc';
// import arrayMove from 'array-move';

// const SortableItem = SortableElement(({game, sortIndex}) =>
//     <LibraryGame game={game} sortIndex={sortIndex}/>);

// const SortableList = SortableContainer(({sortedGames}) => {
//     return (

//       <ul className="sortable-list">
//         {sortedGames.map((game, index) => (
//           <SortableItem key={index} index={index} game={game} sortIndex={index}/>
//         ))}
//       </ul>
//     );
//   });

const Library = () => {
  const [showDelete, setShowDelete] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const { libraryGames, selectedGames, clearLibrary } = useContext(
    StoreContext
  );

  const handleCancel = () => {
    setShowDelete(false);
    setShowFavorites(false);
  };

  console.log(showDelete, showFavorites);
  // const [sortedGames, setGames] = useState(libraryGames);

  //  const onSortEnd = ({oldIndex, newIndex}) => {
  //   setGames(arrayMove(sortedGames, oldIndex, newIndex));
  //     };

  // const [selectListSection, setSelectListSection] = useState(false);
  // const [gamesToAdd, setGamesToAdd] = useState(selectedGames);

  // useEffect(() => {
  //   setGamesToAdd(selectedGames);
  // }, [selectedGames.length]);

  return (
    <div className="library">
      <h2 className="section-title black">My Library</h2>
      {showDelete || showFavorites ? (
        <button className="btn" onClick={handleCancel}>
          Cancel
        </button>
      ) : (
        <div className="button-container">
          <button className="btn secondary">
            <Link to="/">Add Games to Libray</Link>
          </button>
          <button className="btn yellow" onClick={() => setShowFavorites(true)}>
            Add Games to Favorites
          </button>
          <button
            className="btn remove-btn"
            onClick={() => setShowDelete(true)}
          >
            Remove some Games
          </button>
        </div>
      )}
      <div className="added-games library-section mobile">
        {libraryGames.length > 0 ? (
          <div>
            <ul className="added-games-list">
              {/* <SortableList sortedGames={sortedGames} onSortEnd={onSortEnd}  distance={10}/> */}
              {libraryGames.map(game => (
                <LibraryGame
                  game={game}
                  key={game.id}
                  showDelete={showDelete}
                  showFavorites={showFavorites}
                  // setSelectListSection={setSelectListSection}
                  // selectListSection={selectListSection}
                />
              ))}
            </ul>

            {/* {selectListSection === false ? (
              <button className="btn remove-btn" onClick={() => clearLibrary()}>
                Remove all games
              </button>
            ) : (
              ""
            )} */}
            {/* {customLists.length > 0 ? (
              <CustomListSelect
                customLists={customLists}
                gamesToAdd={gamesToAdd}
                setSelectListSection={setSelectListSection}
                selectListSection={selectListSection}
              />
            ) : (
              ""
            )} */}
          </div>
        ) : (
          <div className="empty-library">
            No Games.
            <p>
              Go to the <Link to="/">store</Link> and select the games you want
              to add to your library.
            </p>
          </div>
        )}
      </div>

      {/* <h2 className="section-title black">Favorites</h2>
      <div className="top-games library-section">
        <TopList />
      </div> */}

      {/* <h2 className="section-title black">My Custom Lists</h2>
      <div className="custom-lists library-section">
        <CustomListForm />
        {customLists.length ? (
          <ul className="lists">
            {customLists &&
              customLists.map(list => <CustomList list={list} key={list.id} />)}
          </ul>
        ) : (
          <div className="empty-list empty-library">
            <h3>To create a custom list your need to:</h3>
            <p>
              <strong>1. </strong>Use the form above to give a name to your
              list.
            </p>
            <p>
              <strong>2. </strong>Add some games from the Store to your Library.
            </p>
            <p>
              <strong>3. </strong>Select the games you want to add by clicking
              on "add to custom list".
            </p>
            <p>
              <strong>4. </strong>Choose your list among all your custom lists.
            </p>
          </div>
        )}
      </div> */}
      <ScrollArrow />
    </div>
  );
};

export default Library;
