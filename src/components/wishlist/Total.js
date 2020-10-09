import React from "react";

const Total = ({ games }) => {
  const prices = games.map(game => game.price);
  const total = prices.reduce((acc, item) => (acc += item), 0);

  return (
    <div className="total">
      <div className="nb-articles">Number of Games: {games.length}</div>
      <div className="total-price">Total: ${total}</div>
    </div>
  );
};

export default Total;
