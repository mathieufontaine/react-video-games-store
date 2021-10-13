import React, { useState, useContext, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
const API_URL = "https://api.rawg.io/api/games?";
const KEY = process.env.REACT_APP_KEY;

function Search() {
  const {
    getPopularGames,
    showGames,
    updateHeading,
    setLoading,
    storeGames
  } = useContext(StoreContext);

  const [userInput, setUserInput] = useState("");
  const [gameTitle, setGameTitle] = useState("");
  const numberOfGames = 10;

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

  function compareTwoDates(newDate, releaseDate) {
    const todayDate = `${newDate.getFullYear()}-${newDate.getMonth()}
   -${newDate.getDate()}`;
    return todayDate >= releaseDate;
  }

  const orderGamesBy = value => {
    setLoading(true);
    const filteredGames = storeGames.filter(
      game =>
        game.ratings.length !== 0 &&
        compareTwoDates(new Date(), game.released) === true
    );
    let orderedGames;
    if (value === "-rating") {
      orderedGames = filteredGames.sort((a, b) => b.rating - a.rating);
      updateHeading("Best Ratings");
    } else {
      orderedGames = filteredGames.sort(
        (a, b) => new Date(b.released) - new Date(a.released)
      );
      updateHeading("Most Recent");
    }
    console.log(orderedGames);
    showGames(orderedGames);
    setLoading(false);
  };

  return (
    <div className="search-section">
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
      </form>
      <div className="actions-lists">
        <button className="btn" onClick={() => getPopularGames()}>
          Popular Games
        </button>
        <button className="btn" onClick={() => orderGamesBy("-rating")}>
          Best Ratings
        </button>
        <button className="btn" onClick={() => orderGamesBy("-released")}>
          Most Recent
        </button>
      </div>
    </div>
  );
}

export default Search;
