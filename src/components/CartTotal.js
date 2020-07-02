import React, { useContext } from 'react'
// import { StoreContext } from '../context/StoreContext';

const CartTotal = ({ cartGames }) => {

    // const { cartGames } = useContext(StoreContext);

    const prices = cartGames.map(game => game.price)
    const total = prices.reduce((acc, item) => acc += item, 0);

    return (
        <div className="cart-total">
            <div className="nb-articles">Number of articles: {cartGames.length}</div>
            <div className="total-price">Total: ${total}</div>
        </div>
    )
}

export default CartTotal;
