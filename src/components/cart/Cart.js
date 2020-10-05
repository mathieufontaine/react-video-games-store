import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import CartGame from "./CartGame";
import CartTotal from "./CartTotal";

const Cart = () => {
  const { cartGames } = useContext(StoreContext);

  return (
    <>
      <h2 className="page-title green">CART</h2>
      <div className="cart">
        {cartGames.length > 0 ? (
          <ul className="cart-list">
            {cartGames.map(game => (
              <CartGame game={game} key={game.id} />
            ))}
          </ul>
        ) : (
          <div className="empty-cart">{"Your cart is empty"}</div>
        )}
      </div>
      <CartTotal cartGames={cartGames} />
    </>
  );
};

export default Cart;
