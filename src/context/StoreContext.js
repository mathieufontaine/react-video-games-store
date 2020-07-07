import React, { createContext, useReducer, useEffect} from 'react';
import { AppReducer } from './AppReducer';
import axios from "axios";

// const API_KEY = process.env.RAWG_API_KEY;
const API_URL = 'https://api.rawg.io/api/games';



const initialState = {
    storeGames: [], 
    cartGames: JSON.parse(localStorage.getItem("cartGames")) || [],
    wishlistGames: JSON.parse(localStorage.getItem("wishlistGames")) || [],
    lists: JSON.parse(localStorage.getItem("lists")) || [],
    selectedGames: [],
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
                // console.log(newGames);   
                showGames(newGames);
              })
              .catch(err => console.log(err));
    }, []);




    useEffect(() => {
        localStorage.setItem("cartGames", JSON.stringify(state.cartGames));
        localStorage.setItem("wishlistGames", JSON.stringify(state.wishlistGames));
        localStorage.setItem("lists", JSON.stringify(state.lists));
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


    function addToList (game, listId) {
        // console.log(game);
        console.log(listId);

        dispatch({
            type: 'ADD_TO_LIST',
            payload: {game, listId}
        });
    }

    function removeFromList (id, listId) {
        dispatch({
            type: 'REMOVE_FROM_LIST',
            payload: {id, listId}
        });
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
        addToList (game, listId);
        // console.log(game);
    }


    function addList (title) {
        dispatch({
            type: 'ADD_LIST',
            payload: title
        });
    }

    
    function removeList (id) {
        dispatch({
            type: 'REMOVE_LIST',
            payload: id
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
        value = {{
            storeGames: state.storeGames, 
            cartGames: state.cartGames,
            lists: state.lists,
            selectedGames: state.selectedGames,
            wishlistGames: state.wishlistGames, 
            heading: state.heading,
 
            findGame, 
            removeFromCart,
            removeFromWishlist,
            showGames,
            updateHeading,

            addList,
            removeList,
            addToSelectedGames,
            clearSelectedGames,
            findList,
            addToList,
            removeFromList,
            }}>
        {children}
    </StoreContext.Provider>
    )
}

export default StoreContextProvider;

