import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../../context/StoreContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { color } from "@material-ui/system";

const LibraryGame = ({ game, selectListSection, setSelectListSection }) => {
  const {
    customLists,
    topList,
    addToSelectedGames,
    removeFromLibrary,
    addToTopList,
    selectedGames
  } = useContext(StoreContext);
  // const [bgColor, setBgColor] = useState('');
  // const [color, setColor] = useState('');

  // const [selectedGames, setSelectedGames] = useState([]);

  const handleClick = game => {
    setSelectListSection(true);
    addToSelectedGames(game);
  };

  const styleCart = selectedGames.some(
    selectedGame => selectedGame.id === game.id
  )
    ? { bgColor: "black", color: "white" }
    : { bgColor: "", color: "" };

  return (
    <li
      className="video-game-library"
      style={{ backgroundColor: styleCart.bgColor, color: styleCart.color }}
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
        {topList.some(listGame => listGame.id === game.id) ||
        selectListSection === true ? (
          ""
        ) : (
          <button className="btn add-btn" onClick={() => addToTopList(game)}>
            Add to Top List
          </button>
        )}
        {customLists.length ? (
          selectedGames.some(listGame => listGame.id === game.id) ? (
            ""
          ) : (
            <button className="btn gray-btn" onClick={() => handleClick(game)}>
              Add to Custom List
            </button>
          )
        ) : (
          ""
        )}
        <div className="cross-btn" onClick={() => removeFromLibrary(game.id)}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
      </div>
    </li>
  );
};

export default LibraryGame;
