import React, {useState, useContext, useEffect} from 'react';
import { StoreContext } from '../../context/StoreContext';
import axios from "axios";
const API_URL = 'https://api.rawg.io/api/games?search=';

function Search(){

const { showGames, updateHeading }= useContext(StoreContext);

const [userInput, setUserInput] = useState("");
const [gameTitle, setGameTitle] = useState("");



const randomNumber = () => Math.floor(Math.random() * (60 - 10 + 1) + 10);

useEffect(() => {
    if(gameTitle.length >0){
    axios
        .get(`${API_URL}${gameTitle}`)
        .then(res => {
            // console.log(res.data);
            const newGames = res.data.results.map(game => (
                {...{price: randomNumber()}, ...game}
            ));
            // console.log(newGames);

            showGames(newGames);
            updateHeading(gameTitle);
          })
          .catch(err => console.log(err));
        }
}, [gameTitle]);


const findGame = e => {
    e.preventDefault();
    setGameTitle(userInput);
  };


    return (
        <div className ="search-box">
            <form onSubmit={findGame}>
                <input type='text'
                className="search-bar"
                placeholder ="Search for any game"
                onChange={e => setUserInput(e.target.value)}
                value={userInput}
                />
                <button className="btn black-btn" type="submit">Search</button>
            </form>
        </div>
    )

}

export default Search;
