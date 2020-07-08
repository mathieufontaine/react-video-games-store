import Leaderboard from 'react-leaderboard';
import React, {useState, useContext, useEffect} from 'react';
import { StoreContext }  from '../../context/StoreContext';


const LeaderBoard = () => {

const { storeGames, wishlistGames, selectedGames, lists} = useContext(StoreContext);

    // wishlistGames.length > 0 ? 


    const topList = lists.filter(list => list.title.toLowerCase().includes('top list'.toLowerCase()));


    useEffect(() => {
      console.log(topList);
  }, [topList.length]);



    const initialValue = topList[0].games.map(game => (
        // game.background_image !== null || game.name !== null ?
        {name: game.name, cover: <img className= "leaderboard cover" src={`${game.background_image}`}/>, score: game.price, key: game.id}
    ))
    // : ""

    // const images = wishlistGames.map(game => (
    //   {...initialValue, cover: }
    // ));

    

    // console.log(wishlistGames);


    const [users, setUsers] = useState(initialValue);
    const [paginate, setPaginate] = useState(40)


    useEffect(() => {
      setUsers(topList);
  }, [topList.length]);
  


    return (
      <div className="leaderboard">
        <Leaderboard users={users} paginate={paginate}/>
      </div>
    );
}

export default LeaderBoard;