import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import LibraryGame from "./LibraryGame";
import { Link } from "react-router-dom";
import ScrollArrow from "../layout/ScrollArrow";

const Library = () => {
  const [showDelete, setShowDelete] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const { libraryGames, changeTab } = useContext(StoreContext);

  const handleCancel = () => {
    setShowDelete(false);
    setShowFavorites(false);
  };

  return (
    <section className="library">
      <h2 className="section-title">My Library</h2>
      {showDelete || showFavorites ? (
        <button className="btn" onClick={handleCancel}>
          Cancel
        </button>
      ) : (
        <div className="button-container">
          <button className="btn" onClick={() => changeTab("store")}>
            <Link to="/">Add Games From Store</Link>
          </button>
          <button
            className="btn secondary"
            onClick={() => setShowFavorites(true)}
          >
            Send Games to Favorites
          </button>
          <button
            className="btn remove-btn"
            onClick={() => setShowDelete(true)}
          >
            Remove some Games
          </button>
        </div>
      )}
      <div className="library-section">
        {libraryGames.length > 0 ? (
          <>
            <ul className="games-list">
              {libraryGames.map(game => (
                <LibraryGame
                  game={game}
                  key={game.id}
                  showDelete={showDelete}
                  showFavorites={showFavorites}
                />
              ))}
            </ul>
            <h3>You have {libraryGames.length} games in your library</h3>
          </>
        ) : (
          <div className="empty-list">
            <h3 className=".empty-list-title">No Games.</h3>
            <p>
              Go to the <Link to="/">store</Link> and select the games you want
              to add to your library.
            </p>
          </div>
        )}
      </div>
      <ScrollArrow />
    </section>
  );
};

export default Library;
