import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import WishlistGame from "./WishlistGame";
import CustomList from "./CustomList";
import CustomListForm from "./CustomListForm";
import CustomListSelect from "./CustomListSelect";
import { Link } from "react-router-dom";
import ScrollArrow from "../layout/ScrollArrow";
import CartTotal from "../cart/CartTotal";

// import { SortableContainer, SortableElement } from "react-sortable-hoc";
// import arrayMove from "array-move";

const Wishlist = () => {
  const {
    customLists,
    wishlistGames,
    selectedGames,
    clearWishlist,
    cartGames
  } = useContext(StoreContext);

  // const [sortedGames, setGames] = useState(wishlistGames);

  // const onSortEnd = ({ oldIndex, newIndex }) => {
  //   setGames(arrayMove(sortedGames, oldIndex, newIndex));
  // };

  // const SortableItem = SortableElement(({ game, sortIndex }) => (
  //   <WishlistGame game={game} sortIndex={sortIndex} />
  // ));

  const [selectListSection, setSelectListSection] = useState(false);
  const [gamesToAdd, setGamesToAdd] = useState(selectedGames);

  useEffect(() => {
    setGamesToAdd(selectedGames);
  }, [selectedGames.length]);

  return (
    <div className="library">
      <h2 className="section-title black">My Wishlist</h2>
      <div className="added-games wishlist-section mobile">
        {wishlistGames.length > 0 ? (
          <div>
            <ul className="added-games-list">
              {/* <SortableList
                sortedGames={sortedGames}
                onSortEnd={onSortEnd}
                distance={10}
              /> */}
              {wishlistGames.map(game => (
                <WishlistGame
                  game={game}
                  key={game.id}
                  setSelectListSection={setSelectListSection}
                  selectListSection={selectListSection}
                />
                // <SortableItem
                //   key={index}
                //   index={index}
                //   game={game}
                //   sortIndex={index}
                //     setSelectListSection={setSelectListSection}
                //     selectListSection={selectListSection}
                // />
              ))}
            </ul>
            <CartTotal cartGames={wishlistGames} />

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
          <div className="empty-library">
            No Games.
            <p>
              To change your Top Games or your Custom Lists, you need to add
              some games from the <Link to="/">store</Link> first.
            </p>
          </div>
        )}
      </div>

      <h2 className="section-title black">My Custom Wishlists</h2>
      <div className="custom-lists library-section">
        <CustomListForm />
        {customLists.length ? (
          <ul className="lists">
            {customLists &&
              customLists.map(list => <CustomList list={list} key={list.id} />)}
          </ul>
        ) : (
          <div className="empty-list empty-library">
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
              <strong>4. </strong>Choose your list among all your custom lists.
            </p>
          </div>
        )}
      </div>
      <ScrollArrow />
    </div>
  );
};

export default Wishlist;
