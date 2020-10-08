import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";
import axios from "axios";
import Spinner from "../layout/Spinner";
import Slider from "react-slick";
import Rating from "@material-ui/lab/Rating";

const API_URL = "https://api.rawg.io/api/games/";

const VideoGamePage = props => {
  const { findGame, cartGames, libraryGames } = useContext(StoreContext);
  const [game, setGame] = useState("");

  console.log(props.match.params.id);

  useEffect(() => {
    axios
      .get(`${API_URL}${props.match.params.id}`)
      .then(res => {
        console.log(res.data);
        setGame(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true
  };

  // const divStyle = { 'background-color': `#${game.dominant_color}`};

  if (game === undefined || Object.keys(game).length === 0) {
    return <Spinner />;
  } else {
    return (
      <div className="game-page">
        <h2 className="game-title">{game.name}</h2>

        {game.background_image_additional !== null ? (
          // game.short_screenshots.map((screenshot) => (
          <div className="caroussel">
            <Slider {...settings}>
              <div>
                <img
                  src={game.background_image}
                  alt="screnshot"
                  className="screenshot"
                />
              </div>
              <div>
                <img
                  src={game.background_image_additional}
                  alt="screnshot"
                  className="screenshot"
                />
              </div>
            </Slider>
          </div>
        ) : (
          // ))
          <img
            src={game.background_image}
            alt={game.background_image}
            className="cover"
          />
        )}

        <div className="game-details">
          <div className="game-information">
            {/* <p className="price">Price: ${game.price}</p> */}
            <p className="rating">
              <strong>Rating: </strong>
              {game.rating === 0 ? (
                "N/A"
              ) : (
                <Rating
                  name="half-rating-read"
                  defaultValue={game.rating}
                  precision={0.2}
                  readOnly
                />
              )}
            </p>
            {game.genres[0] !== undefined ? (
              <p className="genre">
                <strong>Genre: </strong>
                {game.genres[0].name}
              </p>
            ) : (
              ""
            )}
            <p className="released">
              <strong>Released Date: </strong> {game.released}
            </p>
            <p className="description">
              <strong>Description: </strong> {game.description_raw}
            </p>
            {game.website !== "" ? (
              <p className="website">
                <strong>More info: </strong>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={game.website}
                >
                  {game.website}
                </a>
              </p>
            ) : (
              ""
            )}
          </div>

          <div className="actions">
            <button className="btn primary">
              <Link to="/">Go to Store</Link>
            </button>
            {libraryGames.some(listGame => listGame.id === game.id) ? (
              ""
            ) : (
              <button
                className="btn secondary"
                onClick={() => findGame(game.id, "library")}
              >
                <Link to={"/library"}>Add to My Games</Link>
              </button>
            )}
            {cartGames.some(listGame => listGame.id === game.id) ? (
              ""
            ) : (
              <button
                className="btn green"
                onClick={() => findGame(game.id, "cart")}
              >
                <Link to={"/cart"}>Add to Cart </Link>
              </button>
            )}
          </div>

          {game.clip !== null ? (
            <div className="clip">
              <h2>Game Video Clip</h2>
              <video controls>
                <source src={game.clip.clip} type="video/mp4" />
              </video>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
};

export default VideoGamePage;
