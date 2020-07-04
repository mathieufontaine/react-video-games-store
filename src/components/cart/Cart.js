import React, {useContext} from 'react';
import { StoreContext }  from '../../context/StoreContext'
import VideoGameCart from './VideoGameCart'
import CartTotal from './CartTotal';

const Cart = () => {

    const { cartGames } = useContext(StoreContext)

    
    return (
        <div className="cart">
            {cartGames.length >0 ? (
            <>
                <ul className="cart-list">
                    {cartGames.map((game) => (
                        <VideoGameCart game={game} key={game.id}/>
                    ))}
                </ul>
                <CartTotal cartGames={cartGames}/>
            </>
            ) 
            : (<div className="empty-cart">{"Your cart is empty"}</div>)}
        </div>
    )
}

export default Cart;