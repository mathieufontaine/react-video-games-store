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
        case 'FILTER_GAMES':
            return {
                ...state,
                storeGames: state.storeGames.filter(game => Object.keys(game).some
                (title => game.title.toLowerCase().includes(action.payload.toLowerCase())))
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