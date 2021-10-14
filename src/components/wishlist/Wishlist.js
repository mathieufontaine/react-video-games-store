import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import WishlistGame from "./WishlistGame";
import CustomList from "./CustomList";
import CustomListForm from "./CustomListForm";
import CustomListSelect from "./CustomListSelect";
import { Link } from "react-router-dom";
import ScrollArrow from "../layout/ScrollArrow";
import CartTotal from "./Total";

const Wishlist = () => {
  const {
    customLists,
    wishlistGames,
    selectedGames,
    clearWishlist
  } = useContext(StoreContext);

  const [selectListSection, setSelectListSection] = useState(false);
  const [gamesToAdd, setGamesToAdd] = useState(selectedGames);

  useEffect(() => {
    setGamesToAdd(selectedGames);
  }, [selectedGames.length]);

  return (
    <>
      <section className="wishlist">
        <h2 className="section-title">My Wishlist</h2>
        <div className="section-inner">
          {wishlistGames.length > 0 ? (
            <div>
              <ul className="games-list">
                {wishlistGames.map(game => (
                  <WishlistGame
                    game={game}
                    key={game.id}
                    setSelectListSection={setSelectListSection}
                    selectListSection={selectListSection}
                  />
                ))}
              </ul>
              <CartTotal games={wishlistGames} />

              {customLists.length > 0 ? (
                <CustomListSelect
                  customLists={customLists}
                  gamesToAdd={gamesToAdd}
                  setSelectListSection={setSelectListSection}
                  selectListSection={selectListSection}
                />
              ) : (
                ""
              )}
            </div>
          ) : (
            <div className="empty-list">
              <h3>No Games.</h3>
              <p>
                To create Wishlists, you need to add some games from the{" "}
                <Link to="/">
                  <strong>Store</strong>
                </Link>{" "}
                or from your{" "}
                <Link to="/library">
                  <strong>Library</strong>
                </Link>{" "}
                first.
              </p>
            </div>
          )}
          {selectListSection === false ? (
            <button className="btn remove-btn" onClick={() => clearWishlist()}>
              Remove all games
            </button>
          ) : (
            ""
          )}
        </div>
      </section>
      <section className="custom-lists">
        <h2 className="section-title">My Custom Wishlists</h2>
        <div className="section-inner">
          <CustomListForm />
          {customLists.length ? (
            <ul className="lists">
              {customLists &&
                customLists.map(list => (
                  <CustomList list={list} key={list.id} />
                ))}
            </ul>
          ) : (
            <div className="empty-list">
              <h3>No Lists</h3>
              <p>To create a custom wishlist your need to:</p>
              <div className="indications">
                <div>
                  <p>
                    <strong>1. </strong>Add some games to your Wishlist.
                  </p>
                </div>
                <div>
                  <p>
                    <strong>2. </strong>Create a new List with the form above
                  </p>
                </div>
                <div>
                  <p>
                    <strong>3. </strong>Select any game by clicking on the{" "}
                    <span>+</span> button in the game card.
                  </p>
                </div>
                <div>
                  <p>
                    <strong>4. </strong>Choose a list among all the custom
                    wishlists you have created.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <ScrollArrow />
    </>
  );
};

export default Wishlist;
