import React, { createContext, useReducer, useEffect} from 'react';
import { AppReducer } from './AppReducer';
import axios from "axios";

// const API_KEY = process.env.RAWG_API_KEY;
const API_URL = 'https://api.rawg.io/api/games';



const initialState = {
    storeGames: [], 
    cartGames: JSON.parse(localStorage.getItem("cartGames")) || [],
    heading: "Popular Games"
    // page: false
};

export const StoreContext = createContext(initialState);



const StoreContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)


    const randomNumber = () => Math.floor(Math.random() * (60 - 10 + 1) + 10);


    useEffect(() => {
        axios
            .get(`${API_URL}`)
            .then(res => {
                console.log(res.data);
                 const newGames = res.data.results.map(game => (
                   {...{price: randomNumber()}, ...game}
                ));
                console.log(newGames);   
                showGames(newGames);
              })
              .catch(err => console.log(err));
    }, []);




    useEffect(() => {
        localStorage.setItem("cartGames", JSON.stringify(state.cartGames))
    });


    function showGames (games) {
        dispatch({
            type: 'SHOW_GAMES',
            payload: games
        });
        console.log(games);
    }
    
    function updateHeading (text) {
        dispatch({
            type: 'UPDATE_HEADING',
            payload: text
        });
    }

    function addtoCart (game) {
        dispatch({
            type: 'ADD_TO_CART',
            payload: game
        });
    }

    function removeGame (id) {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: id
        });
    }

    function findGame (id) {
        const game = state.storeGames.find((storeGame) => storeGame.id === id);
        addtoCart(game);
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
            heading: state.heading,
            page: state.page, 
            findGame, 
            removeGame,
            showGames,
            updateHeading

            }}>
        {children}
    </StoreContext.Provider>
    )
}

export default StoreContextProvider;

