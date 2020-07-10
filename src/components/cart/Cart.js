import React, {useContext} from 'react';
import { StoreContext }  from '../../context/StoreContext'
import CartGame from './CartGame'
import CartTotal from './CartTotal';

const Cart = () => {

    const { cartGames } = useContext(StoreContext)

    
    return (
        <div className="cart">
           <h1 className="page-title">CART</h1>
            {cartGames.length >0 ? (
            <>
                <ul className="cart-list">
                    {cartGames.map((game) => (
                        <CartGame game={game} key={game.id}/>
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