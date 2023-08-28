import React, { useContext, useState } from "react";
import { CartContext } from "./Header";
import { CartHolderContext } from "../App";

function Product({item}){
     const {noOfItems,setNoOfItems,total,setTotal,isAdded,setIsAdded} = useContext(CartContext);;
     const [quantity,setQuantity] = useState(1);
    const {cart,setCart} = useContext(CartHolderContext);
    const decHandle = (e) =>{
        e.preventDefault();
        (quantity===1) ? setQuantity(quantity) : setQuantity(quantity-1);

    }
    const incHandle = (e) =>{
        e.preventDefault();
        setQuantity(quantity+1);
    }

    const addtoCartHandler = ()=>{
        let res =[];
        if(cart.some((ele) =>  ele.product.id === item.id)){
            res = cart.map ((pdt) => {
                if(pdt.product.id===item.id){
                    pdt.quantity +=quantity;
                }
                return pdt;
            });
         }
         else{
            res = [...cart ,{product:item,quantity:quantity}];

         }
        setCart(res);
}

    const cartHandler = (e)=>{
        e.preventDefault();
        setIsAdded(true);
        setTimeout(()=>{setIsAdded(false);},5000);
        setIsAdded(true);
         setNoOfItems(noOfItems+quantity);
         setTotal(total+ (quantity*item.price));
       addtoCartHandler();
    }
    
    return (
        <div className="productstyling">
             <div className="productimage">
                 <img className ="imagestyling" src={item.thumbnail} style={{width:"200" ,height:"200"}} alt = "na"/>
            </div> 
            <div style={{display:'inline-block'}}>
          <h4 className="productTitle">{item.title}</h4>
          <h6 className="productBrand">{item.brand}</h6>
          <div className="quantitygrp">
            <button className= "stepperbutton"   onClick={decHandle}>-</button>
            <input type="text"  name={quantity} value={quantity} className="quantitybox"/>
            <button className="stepperbutton" onClick={incHandle}>+</button>
          </div>
          <h3 className="productPrice"> ${item.price}</h3>
          <button className="cartButton" onClick={cartHandler}> {! isAdded ? "Add to Cart" : "Added!!" }</button>
          </div>
       </div>
       
    );
}
export default Product;