import React, { useContext, useRef } from "react";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Rating from "@material-ui/lab/Rating";

const StoreGame = ({ game }) => {
  const { findGame, libraryGames, wishlistGames, changeTab } = useContext(
    StoreContext
  );

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  let listBtnRef = useRef();
  let wishlistBtnRef = useRef();
  // let cartBtnRef = useRef();

  const onLibraryBtnClick = e => {
    if (listBtnRef.current) {
      listBtnRef.current.setAttribute("disabled", "disabled");
    }
    findGame(game.id, "library");
  };

  const onWishlistBtnClick = e => {
    if (wishlistBtnRef.current) {
      wishlistBtnRef.current.setAttribute("disabled", "disabled");
    }
    findGame(game.id, "wishlist");
  };

  // const onCartBtnClick = e => {
  //   if (cartBtnRef.current) {
  //     cartBtnRef.current.setAttribute("disabled", "disabled");
  //   }
  //   findGame(game.id, "cart");
  // };

  return (
    <li className="game-card">
      <Link to={`game/${game.id}`}>
        <h3 className="title">{game.name}</h3>

        {game.short_screenshots !== null ? (
          <div className="caroussel">
            <Slider {...settings}>
              {game.short_screenshots.map((screenshot, index) => (
                <div key={index}>
                  <img
                    src={screenshot.image}
                    alt="screnshot"
                    className="screenshot"
                  />
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <img
            src={game.background_image}
            alt={game.background_image}
            className="cover"
          />
        )}

        <div className="rating-genre">
          <span className="rating">
            {game.rating === 0 ? (
              "N/A"
            ) : (
              // `${parseFloat(game.rating).toFixed(1)}/5`}
              <Rating
                name="half-rating-read"
                defaultValue={game.rating}
                precision={0.2}
                readOnly
              />
            )}
          </span>
          <span className="genre">
            {game.genres[0] !== undefined ? game.genres[0].name : "N/A"}
          </span>
        </div>
      </Link>
      <div className="actions">
        {libraryGames.some(listGame => listGame.id === game.id) ? (
          <button
            className="btn secondary"
            onClick={() => changeTab("library")}
          >
            <Link to={"/library"}>Added to Library</Link>
          </button>
        ) : (
          <button
            className="btn btn--library"
            ref={listBtnRef}
            onClick={onLibraryBtnClick}
          >
            Add to Library
            {/* <Link to={'/library'}>Add to Library</Link> */}
          </button>
        )}
        {wishlistGames.some(listGame => listGame.id === game.id) ? (
          <button className="btn green" onClick={() => changeTab("wishlist")}>
            <Link to={"/wishlist"}>Added to Wishlist</Link>
          </button>
        ) : (
          <button
            className="btn btn--wishlist"
            ref={wishlistBtnRef}
            onClick={onWishlistBtnClick}
          >
            Add to Wishlist
            {/* <Link to={"/wishlist"}>Add to Wishlist</Link> */}
          </button>
        )}
        {/* {cartGames.some(listGame => listGame.id === game.id) ? (
          <button className="btn secondary">
            <Link to={"/cart"}>In your Cart</Link>
          </button>
        ) : (
          <button
            className="btn primary"
            ref={cartBtnRef}
            onClick={onCartBtnClick}
          >
            <Link to={"/cart"}>Add to Cart</Link>
          </button>
        )} */}
      </div>
    </li>
  );
};

export default StoreGame;
