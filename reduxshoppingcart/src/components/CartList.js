import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import {useNavigate} from "react-router-dom";

function CartList(){

    const cartItems = useSelector(state => state.cartSlice.products);
    const totalitems = useSelector(state =>state.cartSlice.totalitems);
    const navigate = useNavigate();
    
    const checkoutHandler = () => {

        navigate("/successpage");
     }

    return (
        <>
        { totalitems !==0 ? (cartItems.map( (item) => <CartItem prod={item}/>)) : <h2> Your Cart is empty!!</h2>}

        <div className="checkoutWrapper">
            <button className="checkoutbtn" onClick={checkoutHandler}>PROCEED TO CHECKOUT</button>                

        </div>
        </>
    );
}
export default CartList;