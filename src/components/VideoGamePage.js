import React, { useContext, useState, useEffect } from 'react';
import {StoreContext} from '../context/StoreContext';
import { Link } from 'react-router-dom';
import axios from "axios";
import Spinner from './Spinner';


const API_URL = 'https://api.rawg.io/api/games/';

const VideoGamePage = props => {
    const { findGame } = useContext(StoreContext)
    const [game, setGame] = useState('');

    console.log(props.match.params.id);

    useEffect(() => {
        axios
            .get(`${API_URL}${props.match.params.id}`)
            .then(res => {
                console.log(res.data);
                setGame(res.data)
              })
              .catch(err => console.log(err));
    }, []);

    const gameColor = game.dominant_color;

    if (
        game === undefined || Object.keys(game).length === 0
      ) {
        return <Spinner />;
      } else {
    return (
        <div className="video-game-page">

            {/* <div className="game-details"> */}
                <h2 className="game-title">{game.name}</h2>

                <img src={game.background_image} alt={game.background_image} className="cover"/>
                {/* <span className="price">Price: ${game.price}</span> */}

                <div className="game-information">
                <p className="rating"><strong>Rating: </strong>{game.rating === 0 ? "N/A" : game.rating}</p>
                {game.genres !== undefined ? 
                <p className="genre"><strong>Genre: </strong>{game.genres[0].name}</p>
                : ''
                }
                <p className="released"><strong>Released Date: </strong> {game.released}</p>
                <p className="description"><strong>Description: </strong> {game.description_raw}</p>
                {game.website !== '' ?
                <p className="website"><strong>Website: </strong>{game.website}</p>
                : ''}
                </div>

                <div className="actions">
                    <button className="btn black-btn">
                        <Link to="/">Go back</Link>
                    </button>
                    <button className="btn add-btn"
                            onClick={() => findGame(game.id)}
                    >ADD TO CART</button>
                </div>
                
                {game.clip !== null ?
                <div className="clip">
                    <h3>Game Video Clip</h3>
                    <video width="800" height="500" controls>
                        <source src={game.clip.clip} type="video/mp4"/>
                    </video>
                </div>
                : ''}


            {/* </div> */}
        </div>
    )}
}

export default VideoGamePage
