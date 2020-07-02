import React, {useState, useContext, useEffect} from 'react';
import { StoreContext } from '../context/StoreContext';

function Search(){

const { search, showAllGames } = useContext(StoreContext);




// useEffect({search});

    return (
        <div className ="search-box">
            <input type='text'
            className="search-bar"
            placeholder ="Search for any game"
            // onChange={e => setQuery(e.target.value)}
            // value={query}
            onChange={e => search(e.target.value)}
            />
            {/* <button onClick={showAllGames}>Show all Games</button> */}
        </div>
)

}

export default Search;
