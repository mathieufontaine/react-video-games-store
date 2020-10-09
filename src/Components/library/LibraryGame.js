import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faStar } from "@fortawesome/free-solid-svg-icons";

const LibraryGame = ({ game, showDelete, showFavorites }) => {
  const {
    favorites,
    removeFromLibrary,
    addToFavorites
    // addToSelectedGames,
    // selectedGames
  } = useContext(StoreContext);
  // const [bgColor, setBgColor] = useState('');
  // const [color, setColor] = useState('');

  // const [selectedGames, setSelectedGames] = useState([]);

  // const handleClick = game => {
  //   setSelectListSection(true);
  //   addToSelectedGames(game);
  // };

  // const styleCart = selectedGames.some(
  //   selectedGame => selectedGame.id === game.id
  // )
  //   ? { bgColor: "black", color: "white" }
  //   : { bgColor: "", color: "" };

  return (
    <li
      className="video-game-library"
      // style={{ backgroundColor: styleCart.bgColor, color: styleCart.color }}
    >
      <Link to={`game/${game.id}`}>
        <img
          src={game.background_image}
          alt={game.background_image}
          className="cover"
        />
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
