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
        <h2 className="section-title black">My Wishlist</h2>
        <div className="added-games section-innner mobile">
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

              {selectListSection === false ? (
                <button
                  className="btn remove-btn"
                  onClick={() => clearWishlist()}
                >
                  Remove all games
                </button>
              ) : (
                ""
              )}
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
              <h3 className="empty-list-title">No Games.</h3>
              <p>
                To change your Top Games or your Custom Lists, you need to add
                some games from the <Link to="/">store</Link> first.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="custom-lists">
        <h2 className="section-title black">My Custom Wishlists</h2>
        <div className="section-inner custom-lists">
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
              <h3>To create a custom wishlist your need to:</h3>
              <p>
                <strong>1. </strong>Use the form above to give a name to your
                list.
              </p>
              <p>
                <strong>2. </strong>Add some games from the Store to your
                Wishlist.
              </p>
              <p>
                <strong>3. </strong>Select the games you want to add by clicking
                on "add to custom list".
              </p>
              <p>
                <strong>4. </strong>Choose your list among all your custom
                lists.
              </p>
            </div>
          )}
        </div>
      </section>
      <ScrollArrow />
    </>
  );
};

export default Wishlist;
