import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const CustomListGame = ({ game, sortIndex, id }) => {
  // console.log(game);/
  const { removeFromCustomList } = useContext(StoreContext);

  return (
    <li className="library-item">
      <div className="ranking">{sortIndex + 1}</div>
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
      <div
        className="icon-btn cross"
        onClick={() => removeFromCustomList(game.id, id)}
      >
        <FontAwesomeIcon icon={faTimes} />
      </div>
    </li>
  );
};

export default CustomListGame;
