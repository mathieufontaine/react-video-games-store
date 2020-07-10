import React, { useContext, useState, useRef } from 'react';
import {StoreContext} from '../../context/StoreContext';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import Rating from '@material-ui/lab/Rating';

const StoreGame = ({game}) => {

    const { findGame, wishlistGames, cartGames } = useContext(StoreContext);
    
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    let listBtnRef = useRef();
    let cartBtnRef = useRef();

    const onListBtnClick = e => {
        if(listBtnRef.current){
        listBtnRef.current.setAttribute("disabled", "disabled");
        }
        findGame(game.id, "wishlist");
    }

    const onCartBtnClick = e => {
        if(cartBtnRef.current){
        cartBtnRef.current.setAttribute("disabled", "disabled");
        }
        findGame(game.id, "cart");
    }

    return (
        <li className="game-card">
            <Link to={`game/${game.id}`}>
                <h3 className="title">{game.name}</h3>

                {game.short_screenshots !== null ?
                <div className="caroussel">
                    <Slider {...settings}>
                        {game.short_screenshots.map((screenshot, index) => (
                            <div key={index}>
                                <img src={screenshot.image} alt="screnshot" className="screenshot" />
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
                { wishlistGames.some(listGame => listGame.id === game.id) ? 
                <button className="btn disabled">
                        In your library
                </button>
                :
                <button className="btn purple"
                        ref={listBtnRef} 
                        onClick={onListBtnClick}>
                            Add to My Games
                        {/* <Link to={'/wishlist'}>Add to Wishlist</Link> */}
                </button>
                }
                { cartGames.some(listGame => listGame.id === game.id) ? 
                <button className="btn disabled">
                        In your Cart
                </button>
                :
                <button className="btn add-btn"
                        ref={cartBtnRef} 
                        onClick={onCartBtnClick}>
                        <Link to={'/cart'}>Add to Cart</Link>
                </button>
                }
            </div>
        </li>
    )
}

export default StoreGame;
