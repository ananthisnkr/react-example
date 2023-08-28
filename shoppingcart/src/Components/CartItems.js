import React, { useContext } from "react";
import { CartHolderContext } from "../App";
import { CartContext } from "./Header";
import CartItem from "./CartItem";
function CartItems(){

    const {cart} = useContext(CartHolderContext);
    const {isCartOpen} = React.useContext(CartContext);



    return (
        isCartOpen ?
        (<div className="displaySlide">
            <div className="listwrapper">
            <ul style={{listStyle:'none'}}>
                {cart.map((pdt) => (<li key={pdt.key}> <CartItem pdt= {pdt}/> </li>))}
            </ul> 
            </div>
            <div className="checkOutw">
                 <button className="checkoutBtn">PROCEED TO CHECKOUT</button>
            </div>
        </div>) : (<p> cart is empty</p>)
    
    );
}
export default CartItems;