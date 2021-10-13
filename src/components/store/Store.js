import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import StoreGame from "./StoreGame";
import Spinner from "../layout/Spinner";
import ScrollArrow from "../layout/ScrollArrow";

const Store = () => {
  const { storeGames, heading, loading } = useContext(StoreContext);

  return (
    <div className="store">
      {loading === true ? (
        <Spinner />
      ) : (
        <>
          <h3 className="heading">{heading}</h3>
          <ScrollArrow />
          {storeGames === undefined || storeGames.length === 0 ? (
            <p className="empty-list">No Result found :/</p>
          ) : (
            <ul className="store-list">
              {storeGames &&
                storeGames.map(game =>
                  game.background_image !== null || game.name !== null ? (
                    <StoreGame game={game} key={game.id} />
                  ) : (
                    ""
                  )
                )}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default Store;
