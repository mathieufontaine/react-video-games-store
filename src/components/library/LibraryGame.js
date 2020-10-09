import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const LibraryGame = ({ game, showDelete, showFavorites }) => {
  const { favorites, removeFromLibrary, addToFavorites } = useContext(
    StoreContext
  );

  return (
    <li className="library-item">
      <Link to={`game/${game.id}`}>
        <img
          src={game.background_image}
          alt={game.background_image}
          className="cover"
        />
      </Link>
      <Link to={`game/${game.id}`}>
        <h4>{game.name}</h4>
      </Link>
      <div className="actions">
        {showFavorites ? (
          favorites.some(listGame => listGame.id == game.id) ? (
            ""
          ) : (
            <button className="btn yellow" onClick={() => addToFavorites(game)}>
              Add to Favorites
            </button>
          )
        ) : (
          ""
        )}
        {showDelete ? (
          <div
            className="icon-btn cross"
            onClick={() => removeFromLibrary(game.id)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </div>
        ) : (
          ""
        )}
      </div>
    </li>
  );
};

export default LibraryGame;
