import {v1 as uuid} from "uuid"; 

export const AppReducer = (state, action) => {
    switch(action.type){
        case 'SHOW_GAMES':
            return {
                ...state,
                storeGames: [...action.payload]
            }
        case 'UPDATE_HEADING':
            return {
                ...state,
                heading: `Search Results for: "${action.payload}"`
            }
        case 'ADD_TO_CART':
            return {
              ...state,
              cartGames: [...state.cartGames, {...action.payload}]
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartGames: state.cartGames.filter(game => game.id !== action.payload)
            }
        case 'ADD_TO_WISHLIST':
            return {
                ...state,
                wishlistGames: [...state.wishlistGames, {...action.payload}]
            }
        case 'REMOVE_FROM_WISHLIST':
            return {
                ...state,
                wishlistGames: state.wishlistGames.filter(game => game.id !== action.payload)
            }
        case 'FILTER_GAMES':
            return {
                ...state,
                storeGames: state.storeGames.filter(game => Object.keys(game).some
                (title => game.title.toLowerCase().includes(action.payload.toLowerCase())))
            }
        case 'ADD_LIST':
            return {
                ...state,
                lists: [...state.lists, {title: action.payload, id: uuid(), games: []}]
            }
        case 'REMOVE_LIST':
            return {
                ...state,
                lists: state.lists.filter(list => list.id !== action.payload)
            }
        case 'ADD_TO_LIST':
            return {
                ...state,
                lists: state.lists.map(list => 
                    (list.id === action.payload.listId ? {...list, games: [...list.games, action.payload.game]} : list
                ))
                // {...{price: randomNumber()}, ...game}
            }
        case 'REMOVE_FROM_LIST':
            return {
                ...state,
                lists: state.lists.filter(game => game.id !== action.payload)
            }
        case 'CLEAR_STATE':
            return {
                ...state,
                storeGames: [...state.storeGames]
            }
            
        // case 'CHANGE_PAGE':
        //     return {
        //         ...state,
        //         page: action.payload
        //     }
        default: return state;
    }
}