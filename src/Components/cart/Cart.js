import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import CartGame from "./CartGame";
import CartTotal from "./CartTotal";

const Cart = () => {
  const { cartGames } = useContext(StoreContext);

  return (
    <>
      {/* <h2 className="page-title green">CART</h2> */}
      {cartGames.length > 0 ? (
        <div className="cart">
          <ul className="cart-list">
            {cartGames.map(game => (
              <CartGame game={game} key={game.id} />
            ))}
          </ul>
        </div>
      ) : (
        <div className="empty-cart">{"Your cart is empty"}</div>
      )}
      <CartTotal cartGames={cartGames} />
    </>
  );
};

export default Cart;
