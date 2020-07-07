import React, { useContext } from 'react';
import {StoreContext} from '../../context/StoreContext';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import Rating from '@material-ui/lab/Rating';

const VideoGameStore = ({game}) => {

    const { findGame } = useContext(StoreContext)
    
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <li className="game-card">
            <Link to={`game/${game.id}`}>
                <h3 className="title">{game.name}</h3>

                {game.short_screenshots !== null ?
                <div className="caroussel">
                    <Slider {...settings}>
                        {game.short_screenshots.map((screenshot) => (
                            <div>
                                <img src={screenshot.image} alt="screnshot" className="screenshot"/>
                            </div>
                        ))}
                    </Slider>
                    </div>
                : <img src={game.background_image} alt={game.background_image} className="cover"/>
                } 


            <div className="rating-price">
                <span className="rating">{game.rating === 0 ? "N/A" : 
                // `${parseFloat(game.rating).toFixed(1)}/5`}
                <Rating name="half-rating-read" defaultValue={game.rating} precision={0.2} readOnly />
                }
                </span>
                <span className="price">${game.price}</span>
            </div>
            </Link>
            <div className="actions">
                <button className="btn purple"
                        onClick={() => findGame(game.id, "wishlist")}>
                        {/* <Link to={'/wishlist'}>Add to Wishlist</Link> */}
                </button>
                <button className="btn add-btn"
                        onClick={() => findGame(game.id, "cart")}>
                        <Link to={'/cart'}>Add to Cart</Link>
                </button>
            </div>
        </li>
    )
}

export default VideoGameStore
