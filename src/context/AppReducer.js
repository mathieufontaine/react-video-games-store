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
        case 'CLEAR_WISHLIST':
            return {...state,
                wishlistGames: action.payload
            }
        case 'FILTER_GAMES':
            return {
                ...state,
                storeGames: state.storeGames.filter(game => Object.keys(game).some
                (title => game.title.toLowerCase().includes(action.payload.toLowerCase())))
            }
        case 'ADD_CUSTOM_LIST':
            return {
                ...state,
                customLists: [...state.customLists, {title: action.payload, id: uuid(), games: []}]
            }
        case 'REMOVE_CUSTOM_LIST':
            return {
                ...state,
                customLists: state.customLists.filter(list => list.id !== action.payload)
            }
        case 'ADD_TO_TOP_LIST':
            return {
                ...state,
                topList: action.payload.length > 0 ? [...state.topList, ...action.payload] : [...state.topList, action.payload]
            }
        case 'REMOVE_FROM_TOP_LIST':
            return {
                ...state,
                topList: state.topList.filter(game => game.id !== action.payload)
            } 
        case  'UPDATE_TOP_LIST':
            return {
                ...state,
                topList: [...action.payload]
            }
        case 'ADD_TO_SELECTED_GAMES':
            return {
                ...state,
                selectedGames: [...state.selectedGames, {...action.payload}]
                }
        case 'CLEAR_SELECTED_GAMES':
                return {...state,
                    selectedGames: action.payload
                }
        case 'ADD_TO_CUSTOM_LIST':
            return {
                ...state,
                customLists: state.customLists.map(list => 
                    (list.id === action.payload.listId ? 
                        list.games && list.games.length > 0 ?
                        {...list, games: [...list.games, ...action.payload.game]} : {...list, games: action.payload.game}
                    : list
                ))
            }
        case  'UPDATE_ORDER_GAMES':
                return {
                    ...state,
                    customLists: state.customLists.map(list => 
                        (list.id === action.payload.id ? {...list, games: action.payload.games} : list
                    ))
                }
        case 'REMOVE_FROM_CUSTOM_LIST':
            return {
                ...state,
                customLists: state.customLists.map(list => 
                    (list.id === action.payload.listId) ? {...list, games: list.games.filter(game => game.id !== action.payload.id)} 
                    : list)
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