import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const TopListGame = ({ game, sortIndex }) => {
  // console.log(game);/
  const { topList, removeFromTopList } = useContext(StoreContext);

  return (
    <li className="video-game-library">
      <div className="ranking">{sortIndex + 1}</div>
      <img
        src={game.background_image}
        alt={game.background_image}
        className="cover"
      />
      <h3>{game.name}</h3>
      {topList.length > 3 ? (
        <div
          className="cross icon-btn"
          onClick={() => removeFromTopList(game.id)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
      ) : (
        ""
      )}
    </li>
  );
};

export default TopListGame;
