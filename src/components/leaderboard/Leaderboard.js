import Leaderboard from "react-leaderboard";
import React, { useState, useContext, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import ScrollArrow from "../layout/ScrollArrow";

const LeaderBoard = () => {
  const { topList } = useContext(StoreContext);

  const getScore = rank => {
    switch (rank) {
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
      case 7 || 8 || 9 || 10:
        return 1;
      default:
        return 0;
    }
  };

  // console.log(topList);

  // if (topList !== null && topList.forEach(game=> game !== undefined)){
  const leaderboardGames = topList.map((game, index) => {
    const item = {
      name: game.name,
      score: getScore(index + 1),
      cover: (
        <img className="leaderboard cover" src={`${game.background_image}`} />
      ),
      key: game.id
    };
    // console.log(item);
    return item;
  });

  const [users, setUsers] = useState(leaderboardGames);
  const [paginate, setPaginate] = useState(30);
  console.log(leaderboardGames);

  useEffect(() => {
    setUsers(leaderboardGames);
  }, [topList.length]);

  //*// IF MANY TOP LISTS CALCULATION LOGIC //*//

  // const topLists = lists.filter(list => list.title.toLowerCase().includes('top list'.toLowerCase()));
  // console.log(topLists);

  // const gamesArray = [];
  // let rankedGames = [];

  // if (topLists !== null && topLists !== undefined ){
  // if(topLists.length > 1 && topLists.forEach(list => list.games.length >0)){
  // topList.forEach(list => {
  // topList.games.forEach((game, index) => {
  //   const item = {name: game.name, score: getScore(index+1), cover: <img className= "leaderboard cover" src={`${game.background_image}`}/>, key: game.id};
  //   gamesArray.push(item);
  // });
  // });

  // }
  // else if (lists.length === 0 && lists[0].games) {
  // lists[0].games.forEach((game, index) => {
  //   const item = {name: game.name, score: getScore(index+1), cover: <img className= "leaderboard cover" src={`${game.background_image}`}/>, key: game.id};
  //   gamesArray.push(item);
  // });}

  // let scores = gamesArray.reduce((prev, curr) => {
  //   let count = prev.get(curr.key) || 0;
  //   prev.set(curr.key, curr.score + count);
  //   return prev;
  // }, new Map());

  // rankedGames = [...scores].map(([key, score]) => {
  //   return {key, score}
  // })

  // rankedGames.forEach(game =>{
  //   const name = gamesArray.find(item => item.key === game.key).name;
  //   const cover = gamesArray.find(item => item.key === game.key).cover;
  //     game.name = name;
  //     game.cover = cover;
  //   return game;
  //   });

  //  console.log(rankedGames);

  //*// END IF MANY TOP LISTS CALCULATION LOGIC //*//

  return (
    // topList !== null || topList !== undefined && topList.length > 0 ?

    <div className="leaderboard">
      <h2 className="page-title">LEADERBOARD</h2>
      <Leaderboard users={users} paginate={paginate} />
      <ScrollArrow />
    </div>

    //  : (<div className="empty-library">No games in the Leaderboard yet.. Come back here after creating your first lists 😉</div>)
    /*: (<div className="empty-library">No games in the Leaderboard yet.. Come back here after creating your first lists 😉</div>)*/
    /*: (<div className="empty-library">No games in the Leaderboard yet.. Come back here after creating your first lists 😉</div>)*/
    /*: (<div className="empty-library">No games in the Leaderboard yet.. Come back here after creating your first lists 😉</div>)*/
    /*: (<div className="empty-library">No games in the Leaderboard yet.. Come back here after creating your first lists 😉</div>)*/
   /*: (<div className="empty-library">No games in the Leaderboard yet.. Come back here after creating your first lists 😉</div>)*/);
};

export default LeaderBoard;
