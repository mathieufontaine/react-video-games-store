import Leaderboard from 'react-leaderboard';
import React, {useState, useContext, useEffect} from 'react';
import { StoreContext }  from '../../context/StoreContext'


const LeaderBoard = () => {

const { storeGames, selectedGames, lists} = useContext(StoreContext);

    
    const initialValue = lists[0].games.map(game => (
        // game.background_image !== null || game.name !== null ?
        {name: game.name,  cover: game.background_image, score: game.price}
    ));

    const test = [{name:'mathieu 23 hhh', score:4}, {name:'yann', score:6}];

    console.log(initialValue);
    console.log(test);


    const [users, setUsers] = useState(initialValue);
    const [paginate, setPaginate] = useState(40)



    return (
      <div className="leaderboard blue">
        <Leaderboard users={users} paginate={paginate}/>
      </div>
    );
}

export default LeaderBoard;