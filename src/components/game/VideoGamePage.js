import React, { useContext, useState, useEffect } from 'react';
import {StoreContext} from '../../context/StoreContext';
import { Link } from 'react-router-dom';
import axios from "axios";
import Spinner from '../layout/Spinner';
import Slider from "react-slick";


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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    // const divStyle = { 'background-color': `#${game.dominant_color}`};

    if (
        game === undefined || Object.keys(game).length === 0
      ) {
        return <Spinner />;
      } else {
    return (


<div className="video-game-page">
<h2 className="game-title">{game.name}</h2>

                {game.background_image_additional !== null ?
                // game.short_screenshots.map((screenshot) => (
                    <div className="caroussel">
                    <Slider {...settings}>
                        <div>
                        <img src={game.background_image} alt="screnshot" className="screenshot"/>
                        </div>
                        <div>
                        <img src={game.background_image_additional} alt="screnshot" className="screenshot"/>
                        </div>
                    </Slider>
                    </div>
                // ))
                : <img src={game.background_image} alt={game.background_image} className="cover"/>
                }

            <div className="game-details">
   
                <div className="game-information">
                {/* <p className="price">Price: ${game.price}</p> */}
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
                    <button className="btn purple"
                            onClick={() => findGame(game.id, 'wishlist')}>
                            <Link to={'/wishlist'}>Add to Wishlist</Link>
                    </button>
                    <button className="btn add-btn"
                            onClick={() => findGame(game.id, 'cart')}>
                            <Link to={'/cart'}>Add to Cart </Link>
                    </button>
                </div>
                
                {game.clip !== null ?
                <div className="clip">
                    <h3>Game Video Clip</h3>
                    <video width="800" height="500" controls>
                        <source src={game.clip.clip} type="video/mp4"/>
                    </video>
                </div>
                : ''}


            </div>
        </div>
    )}
}

export default VideoGamePage
