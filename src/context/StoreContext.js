import React, { createContext, useReducer, useEffect } from "react";
import { AppReducer } from "./AppReducer";
import axios from "axios";

// const API_KEY = process.env.RAWG_API_KEY;
const API_URL = "https://api.rawg.io/api/games?";
const KEY = process.env.REACT_APP_KEY;

const leaderboardGames = [
  {
    name: "The Last of Us",
    id: 3990,
    score: "200",
    cover: (
      <img
        className="leaderboard cover"
        src="https://media.rawg.io/media/games/a26/a26df52a846d2f5b3e6d5f7bbe58ed28.jpg"
        alt="img"
      />
    ),
    background_image:
      "https://media.rawg.io/media/games/a26/a26df52a846d2f5b3e6d5f7bbe58ed28.jpg"
  },
  {
    name: "Tomb Raider",
    id: 5286,
    score: "100",
    cover: (
      <img
        className="leaderboard cover"
        src="https://media.rawg.io/media/games/81b/81b138691f027ed1f8720758daa0d895.jpg"
        alt="img"
      />
    ),
    background_image:
      "https://media.rawg.io/media/games/81b/81b138691f027ed1f8720758daa0d895.jpg"
  },
  {
    name: "GTA V",
    id: 3498,
    score: "150",
    cover: (
      <img
        className="leaderboard cover"
        src="https://media.rawg.io/media/games/b11/b115b2bc6a5957a917bc7601f4abdda2.jpg"
        alt="img"
      />
    ),
    background_image:
      "https://media.rawg.io/media/games/b11/b115b2bc6a5957a917bc7601f4abdda2.jpg"
  }
];

const initialState = {
  storeGames: [],
  selectedGames: [],
  libraryGames: JSON.parse(localStorage.getItem("libraryGames")) || [],
  favorites: JSON.parse(localStorage.getItem("favorites")) || leaderboardGames,
  wishlistGames: JSON.parse(localStorage.getItem("wishlistGames")) || [],
  customLists: JSON.parse(localStorage.getItem("customLists")) || [],
  // cartGames: JSON.parse(localStorage.getItem("cartGames")) || [],
  heading: "Popular Games",
  showNav: false,
  currentTab: "store",
  loading: true
};

export const StoreContext = createContext(initialState);

const StoreContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const randomNumber = () => Math.floor(Math.random() * (60 - 10 + 1) + 10);

  useEffect(() => {
    getPopularGames();
    localStorage.setItem("libraryGames", JSON.stringify(state.libraryGames));
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
    localStorage.setItem("wishlistGames", JSON.stringify(state.wishlistGames));
    localStorage.setItem("customLists", JSON.stringify(state.customLists));
    localStorage.setItem("currenTab", JSON.stringify(state.currentTab));
    // localStorage.setItem("cartGames", JSON.stringify(state.cartGames));
  }, []);

  function getPopularGames() {
    setLoading(true);
    axios
      .get(`${API_URL}key=${KEY}`)
      .then(res => {
        // console.log(res.data);
        const newGames = res.data.results.map(game => ({
          ...{ price: randomNumber() },
          ...game
        }));
        showGames(newGames);
        setLoading(false);
        updateHeading("Popular Games");
        // const gamesFavorites = newGames.slice(Math.floor(Math.random() * (5 - 0) + 0), Math.floor(Math.random() * (12 - 6) + 6));
        //  addToFavorites(gamesFavorites);
      })
      .catch(err => console.log(err));
  }

  function toggleNav(boolean) {
    dispatch({
      type: "TOGGLE_NAV",
      payload: boolean
    });
  }
  function setLoading(boolean) {
    dispatch({
      type: "SET_LOADING",
      payload: boolean
    });
  }

  function changeTab(name) {
    dispatch({
      type: "CHANGE_TAB",
      payload: name
    });
  }

  function showGames(games) {
    dispatch({
      type: "SHOW_GAMES",
      payload: games
    });
    // console.log(games);
  }

  function updateHeading(text) {
    dispatch({
      type: "UPDATE_HEADING",
      payload: text
    });
  }

  // function addToCart(game) {
  //   dispatch({
  //     type: "ADD_TO_CART",
  //     payload: game
  //   });
  // }

  // function removeFromCart(id) {
  //   dispatch({
  //     type: "REMOVE_FROM_CART",
  //     payload: id
  //   });
  // }

  // function findGame (id) {
  //     const game = state.storeGames.find((storeGame) => storeGame.id === id);
  //     addtoCart(game);
  // }

  function addToLibrary(game) {
    dispatch({
      type: "ADD_TO_LIBRARY",
      payload: game
    });
  }

  function removeFromLibrary(id) {
    dispatch({
      type: "REMOVE_FROM_LIBRARY",
      payload: id
    });
  }

  function clearLibrary() {
    dispatch({
      type: "CLEAR_LIBRARY",
      payload: []
    });
  }

  function addToWishlist(game) {
    dispatch({
      type: "ADD_TO_WISHLIST",
      payload: game
    });
  }

  function removeFromWishlist(id) {
    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: id
    });
  }

  function clearWishlist() {
    dispatch({
      type: "CLEAR_WISHLIST",
      payload: []
    });
  }

  function addToFavorites(game) {
    dispatch({
      type: "ADD_TO_FAVORITES",
      payload: game
    });
  }

  function removeFromFavorites(id) {
    dispatch({
      type: "REMOVE_FROM_FAVORITES",
      payload: id
    });
  }

  function updateFavorites(games) {
    dispatch({
      type: "UPDATE_FAVORITES",
      payload: games
    });
  }

  function addToSelectedGames(game) {
    // console.log(game);
    dispatch({
      type: "ADD_TO_SELECTED_GAMES",
      payload: game
    });
  }

  function clearSelectedGames() {
    dispatch({
      type: "CLEAR_SELECTED_GAMES",
      payload: []
    });
  }

  function findGame(id, page) {
    const game = state.storeGames.find(storeGame => storeGame.id === id);
    if (page === "library") {
      addToLibrary(game);
    } else if (page === "wishlist") {
      addToWishlist(game);
      // } else if (page === "cart") {
      //   addToCart(game);
    } else if (page === "selectedGames") {
      addToSelectedGames(game);
    }
  }

  function findList(gameId, listId) {
    const game = state.storeGames.find(storeGame => storeGame.id === gameId);
    // const list = state.lists.find((list) => list.id === id);
    addToCustomList(game, listId);
    // console.log(game);
  }

  function addCustomList(title) {
    dispatch({
      type: "ADD_CUSTOM_LIST",
      payload: title
    });
  }

  function removeCustomList(id) {
    dispatch({
      type: "REMOVE_CUSTOM_LIST",
      payload: id
    });
  }

  function addToCustomList(game, listId) {
    dispatch({
      type: "ADD_TO_CUSTOM_LIST",
      payload: { game, listId }
    });
  }

  function removeFromCustomList(id, listId) {
    dispatch({
      type: "REMOVE_FROM_CUSTOM_LIST",
      payload: { id, listId }
    });
  }

  function updateOrderGames(games, id) {
    dispatch({
      type: "UPDATE_ORDER_GAMES",
      payload: { games, id }
    });
  }

  // function searchGames (query) {
  //     dispatch({
  //         type: 'FILTER_GAMES',
  //         payload: query
  //     });
  // }

  // function getAllGames(){
  //     state.storeGames =  initialState.storeGames;
  // };

  // function showAllGames(){
  //     getAllGames();
  // }

  return (
    <StoreContext.Provider
      value={{
        showNav: state.showNav,
        loading: state.loading,
        currentTab: state.currentTab,
        storeGames: state.storeGames,
        // cartGames: state.cartGames,
        customLists: state.customLists,
        favorites: state.favorites,
        selectedGames: state.selectedGames,
        libraryGames: state.libraryGames,
        wishlistGames: state.wishlistGames,
        heading: state.heading,

        toggleNav,
        changeTab,
        setLoading,
        getPopularGames,
        findGame,
        // removeFromCart,
        removeFromLibrary,
        clearLibrary,
        removeFromWishlist,
        clearWishlist,
        showGames,
        updateHeading,

        addCustomList,
        removeCustomList,
        addToCustomList,
        removeFromCustomList,
        updateOrderGames,

        addToFavorites,
        removeFromFavorites,
        updateFavorites,

        addToSelectedGames,
        clearSelectedGames,
        findList
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
