import React, { createContext, useReducer, useEffect} from 'react';
import { AppReducer } from './AppReducer';




const initialState = {
    storeGames: [
        {id: 1, title: "Red Dead Redemption", price: 19, cover:"https://media.senscritique.com/media/000009641373/source_big/Red_Dead_Redemption.png"},
        {id: 2, title: "Red Dead Redemption 2", price: 49, cover:"https://gpstatic.com/acache/43/16/1/fr/packshot-8b248fe2ff0297b19c04d3e41ea00a04.jpg"},
        {id: 3, title: "GTA IV", price: 29, cover:"https://i1.wp.com/www.gta69.com/wp-content/uploads/2011/04/GTA_4-cover.jpg"},
        {id: 4, title: "GTA V", price: 39, cover:"https://s1.gaming-cdn.com/images/products/186/orig/grand-theft-auto-v-cover.jpg"},
        {id: 5, title: "The Last of Us", price: 19, cover:"https://www.gbposters.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/t/h/the-last-of-us-key-art-maxi-poster-1.16.jpg"},
        {id: 6, title: "The Last of Us II", price: 59, cover:"https://images-na.ssl-images-amazon.com/images/I/71UDXCGb8cL._AC_SY679_.jpg"},
        {id: 7, title: "Far Cry 5", price: 35, cover:"https://gpstatic.com/acache/32/85/1/fr/packshot-69f2cb6986f16bde26d2689b9cf5001d.jpg"},
    ], 
    cartGames: JSON.parse(localStorage.getItem("cartGames")) || [],
    query:'',
    // page: false
};


export const StoreContext = createContext(initialState);


const StoreContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    useEffect(() => {
        localStorage.setItem("cartGames", JSON.stringify(state.cartGames))
    });

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



    function filterGames (query) {
        dispatch({
            type: 'FILTER_GAMES',
            payload: query
        });
    }


    function getAllGames(){
        state.storeGames =  initialState.storeGames;
    };

    const search = (query) => {
        if (query){
            filterGames(query);
        } else {
            getAllGames();
        };
    }

    // useEffect((search),[]);

    function showAllGames(){
        getAllGames();
    }
    
    return (
    <StoreContext.Provider  
        value = {{
            storeGames: state.storeGames, 
            cartGames: state.cartGames, 
            page: state.page, 
            findGame, 
            removeGame,
            search,
            showAllGames
            }}>
        {children}
    </StoreContext.Provider>
    )
}

export default StoreContextProvider;

