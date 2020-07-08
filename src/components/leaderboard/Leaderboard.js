import Leaderboard from 'react-leaderboard';
import React, {useState, useContext, useEffect} from 'react';
import { StoreContext }  from '../../context/StoreContext';


const LeaderBoard = () => {

const { lists} = useContext(StoreContext);

    // wishlistGames.length > 0 ? 

    const topLists = lists.filter(list => list.title.toLowerCase().includes('top list'.toLowerCase()));

  //   useEffect(() => {
  //     console.log(topLists);
  // }, [topLists.length]);


  const getScore = (rank) => {
    switch(rank) {
      case 1:
        return 50;
      case 2:
          return 30;
      case 3:
          return 15;
      case 4:
          return 5;
      case 5:
          return 3;
      case 6:
          return 2;
      case 7||8||9||10:
          return 1;
      default: 
        return 0;
    }
  }

      // console.log(topLists);
  

  const gamesArray = [];
  topLists.forEach(list => {
    list.games.forEach((game, index) => {
      const item = {name: game.name, score: getScore(index+1), cover: <img className= "leaderboard cover" src={`${game.background_image}`}/>, key: game.id};
    gamesArray.push(item);
    });
  });


let scores = gamesArray.reduce((prev, curr) => {
  let count = prev.get(curr.key) || 0;
  prev.set(curr.key, curr.score + count);
  return prev;
}, new Map());

let rankedGames = [...scores].map(([key, score]) => {
  return {key, score}
})

      rankedGames.forEach(game =>{ 
        const name = gamesArray.find(item => item.key === game.key).name;
        const cover = gamesArray.find(item => item.key === game.key).cover;
          game.name = name;
          game.cover = cover;
        });
 
      console.log(rankedGames);


    const [users, setUsers] = useState(rankedGames);
    const [paginate, setPaginate] = useState(40)


    useEffect(() => {
      setUsers(rankedGames);
  }, [topLists.length]);
  


    return (
      <div className="leaderboard">
        <Leaderboard users={users} paginate={paginate}/>
      </div>
    );
}

export default LeaderBoard;