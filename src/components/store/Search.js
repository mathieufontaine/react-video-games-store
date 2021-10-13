import React, { useState, useContext, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
const API_URL = "https://api.rawg.io/api/games?";
const KEY = process.env.REACT_APP_KEY;

function Search() {
  const { getPopularGames, showGames, updateHeading, setLoading } = useContext(
    StoreContext
  );

  const [userInput, setUserInput] = useState("");
  const [gameTitle, setGameTitle] = useState("");

  const randomNumber = () => Math.floor(Math.random() * (60 - 10 + 1) + 10);

  useEffect(() => {
    if (gameTitle.length > 0) {
      setLoading(true);
      axios
        .get(`${API_URL}key=${KEY}&search=${gameTitle}`)
        .then(res => {
          const newGames = res.data.results.map(game => ({
            ...{ price: randomNumber() },
            ...game
          }));
          showGames(newGames);
          updateHeading(gameTitle);
          setLoading(false);
        })
        .catch(err => console.log(err));
    }
  }, [gameTitle]);

  const findGame = e => {
    e.preventDefault();
    setGameTitle(userInput);
  };

  return (
    <>
      <form onSubmit={findGame} className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for any game"
          onChange={e => setUserInput(e.target.value)}
          value={userInput}
        />
        <button className="btn black-btn" type="submit">
          Search
        </button>

        <button className="btn btn-secondary" onClick={() => getPopularGames()}>
          Show Popular Games
        </button>
      </form>
    </>
  );
}

export default Search;
