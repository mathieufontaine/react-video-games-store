import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const WishlistGame = ({ game, selectListSection, setSelectListSection }) => {
  const {
    customLists,
    addToSelectedGames,
    removeFromWishlist,
    selectedGames,
    cartGames,
    findGame
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
      className="cart-item"
      style={{ backgroundColor: styleCart.bgColor, color: styleCart.color }}
    >
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
      <span className="price">${game.price}</span>
      <div className="actions">
        {customLists.length ? (
          selectedGames.some(listGame => listGame.id === game.id) ? (
            ""
          ) : (
            <button className="btn primary" onClick={() => handleClick(game)}>
              Add to a Custom Wishlist
            </button>
          )
        ) : (
          ""
        )}
        <div
          className="cross icon-btn"
          onClick={() => removeFromWishlist(game.id)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
      </div>
    </li>
  );
};

export default WishlistGame;
