import React, { createContext, useReducer, useEffect} from 'react';
import { AppReducer } from './AppReducer';
import axios from "axios";

// const API_KEY = process.env.RAWG_API_KEY;
const API_URL = 'https://api.rawg.io/api/games';

const leaderboardGames = [
    {name: "The Last of Us" , id: 3990, score: "200", cover: <img className= "leaderboard cover" src='https://media.rawg.io/media/games/a26/a26df52a846d2f5b3e6d5f7bbe58ed28.jpg' alt="img"/>, background_image:'https://media.rawg.io/media/games/a26/a26df52a846d2f5b3e6d5f7bbe58ed28.jpg' },    
    {name: "Tomb Raider" , id: 5286, score: "100", cover: <img className= "leaderboard cover" src='https://media.rawg.io/media/games/81b/81b138691f027ed1f8720758daa0d895.jpg' alt="img"/>, background_image:"https://media.rawg.io/media/games/81b/81b138691f027ed1f8720758daa0d895.jpg" },
    {name: "GTA V" , id: 3498, score: "150", cover: <img className= "leaderboard cover" src='https://media.rawg.io/media/games/b11/b115b2bc6a5957a917bc7601f4abdda2.jpg' alt="img"/>, background_image:'https://media.rawg.io/media/games/b11/b115b2bc6a5957a917bc7601f4abdda2.jpg' }
  ]

const initialState = {
    storeGames: [], 
    cartGames: JSON.parse(localStorage.getItem("cartGames")) || [],
    wishlistGames: JSON.parse(localStorage.getItem("wishlistGames")) || [],
    selectedGames: [],
    customLists: JSON.parse(localStorage.getItem("customLists")) || [],
    topList: JSON.parse(localStorage.getItem("topList")) || leaderboardGames,
    heading: "Popular Games"
};

export const StoreContext = createContext(initialState);


const StoreContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)


    const randomNumber = () => Math.floor(Math.random() * (60 - 10 + 1) + 10);


    useEffect(() => {
        axios
            .get(`${API_URL}`)
            .then(res => {
                // console.log(res.data);
                 const newGames = res.data.results.map(game => (
                   {...{price: randomNumber()}, ...game}
                ));
                showGames(newGames);
                // const gamesTopList = newGames.slice(Math.floor(Math.random() * (5 - 0) + 0), Math.floor(Math.random() * (12 - 6) + 6));
                //  addToTopList(gamesTopList);
              })
              .catch(err => console.log(err));
    }, []);




    useEffect(() => {
        localStorage.setItem("cartGames", JSON.stringify(state.cartGames));
        localStorage.setItem("wishlistGames", JSON.stringify(state.wishlistGames));
        localStorage.setItem("lists", JSON.stringify(state.customLists));
        localStorage.setItem("topList", JSON.stringify(state.topList));
    });


    function showGames (games) {
        dispatch({
            type: 'SHOW_GAMES',
            payload: games
        });
        // console.log(games);
    }
    
    function updateHeading (text) {
        dispatch({
            type: 'UPDATE_HEADING',
            payload: text
        });
    }

    function addToCart (game) {
        dispatch({
            type: 'ADD_TO_CART',
            payload: game
        });
    }

    function removeFromCart (id) {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: id
        });
    }

    // function findGame (id) {
    //     const game = state.storeGames.find((storeGame) => storeGame.id === id);
    //     addtoCart(game);
    // }


    function addToWishlist (game) {
        dispatch({
            type: 'ADD_TO_WISHLIST',
            payload: game
        });
    }

    function removeFromWishlist (id) {
        dispatch({
            type: 'REMOVE_FROM_WISHLIST',
            payload: id
        });
    }


    function clearWishlist () {
        dispatch({
            type: 'CLEAR_WISHLIST',
            payload: []
        });
    }


    function addToTopList (game) {
        dispatch({
            type: 'ADD_TO_TOP_LIST',
            payload: game
        });
    }

    function removeFromTopList (id) {
        dispatch({
            type: 'REMOVE_FROM_TOP_LIST',
            payload: id
        });
    }

    function updateTopList (games) {
        dispatch({
            type: 'UPDATE_TOP_LIST',
            payload: games
        })
    }

    function addToSelectedGames (game) {
        // console.log(game);
        dispatch({
            type: 'ADD_TO_SELECTED_GAMES',
            payload: game
        });
    }

    function clearSelectedGames () {
        dispatch({
            type: 'CLEAR_SELECTED_GAMES',
            payload: []
        });
    }

    function findGame (id, page) {
        const game = state.storeGames.find((storeGame) => storeGame.id === id);
        if (page === 'cart') {
        addToCart(game);
       } else if (page === 'wishlist'){
        addToWishlist (game);
        }
        else if (page === 'selectedGames'){
        addToSelectedGames (game);
        }
    }



    function findList (gameId, listId) {
        const game = state.storeGames.find((storeGame) => storeGame.id === gameId);
        // const list = state.lists.find((list) => list.id === id);
        addToCustomList(game, listId);
        // console.log(game);
    }





    function addCustomList (title) {
        dispatch({
            type: 'ADD_CUSTOM_LIST',
            payload: title
        });
    }

    
    function removeCustomList (id) {
        dispatch({
            type: 'REMOVE_CUSTOM_LIST',
            payload: id
        });
    }

    function addToCustomList (game, listId) {
        dispatch({
            type: 'ADD_TO_CUSTOM_LIST',
            payload: {game, listId}
        });
    }

    function removeFromCustomList (id, listId) {
        dispatch({
            type: 'REMOVE_FROM_CUSTOM_LIST',
            payload: {id, listId}
        });
    }



    function updateOrderGames (games, id) {
        dispatch({
            type: 'UPDATE_ORDER_GAMES',
            payload: {games, id}
        })
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
        value = {{
            storeGames: state.storeGames, 
            cartGames: state.cartGames,
            customLists: state.customLists,
            topList: state.topList,
            selectedGames: state.selectedGames,
            wishlistGames: state.wishlistGames, 
            heading: state.heading,
 
            findGame, 
            removeFromCart,
            removeFromWishlist,
            clearWishlist,
            showGames,
            updateHeading,

            addCustomList,
            removeCustomList,
            addToCustomList,
            removeFromCustomList,
            updateOrderGames,

            addToTopList,
            removeFromTopList,
            updateTopList,


            addToSelectedGames,
            clearSelectedGames,
            findList,

            }}>
        {children}
    </StoreContext.Provider>
    )
}

export default StoreContextProvider;

