import React,{useContext, useState} from "react";
import { CartHolderContext } from "../App";
import { CartContext } from "./Header";
import deleteicon from "./deleteicon.png";

function CartItem({pdt}){
    const {cart,setCart} = useContext(CartHolderContext);
    const [itemQty,setItemQty] = useState(pdt.quantity);

    const {noOfItems,setNoOfItems, total,setTotal} =useContext(CartContext);

    const decreHandle = (e) =>{
        e.preventDefault();
        let res =[];
        if(pdt.quantity===1){
            res = cart.filter((item) => item.product.id !==pdt.product.id);
                    setNoOfItems(noOfItems - 1);
                    setTotal(total- pdt.product.price);
                    setItemQty(pdt.quantity);
        
        }
        else{  
             res = cart.map ((itm) =>{
            if(itm.product.id===pdt.product.id){
                    
                    itm.quantity--;
                    setNoOfItems(noOfItems - 1);
                    setTotal(total- itm.product.price);
                    setItemQty(itm.quantity);
                  
                }
            return itm;
        });
    }
        setCart(res);


    }
    const increHandle = (e) =>{
        e.preventDefault();
        let res= [];
        res = cart.map((itm) => {
            console.log("increment map")
            if(itm.product.id===pdt.product.id){
                itm.quantity ++;
                setNoOfItems(noOfItems + 1);
                setTotal(total+ pdt.product.price);
                setItemQty(itm.quantity);
            }
            return itm;
        });
        setCart(res);
    }

    const deleteItemFromCart = (e) =>{
        e.preventDefault();
        let res =[];
        res = cart.filter((item) => item.product.id!==pdt.product.id);
        setNoOfItems(noOfItems - pdt.quantity);
        setTotal(total- (pdt.quantity * pdt.product.price));
        setCart(res);
    }

    return (
    <div className="CartTable">
        <div className="CartRow">
            <div className="CartCol1">
            <img src={pdt.product.thumbnail} alt="na" width={50} height={50}/> 
            </div>
        </div>
        <div className="CartRow textdisplay">
            <div className="CartCol"> <strong>{pdt.product.title}</strong></div>
            <div className="CartCol">{pdt.product.brand}</div>
        </div>   
                
        <div className="CartRow">
            <div className="CartCol">
                <button className= "stepperbutton"   onClick={decreHandle}>-</button>
                <input type="text"  name={itemQty} value={pdt.quantity} className="quantitybox"/>
                <button className="stepperbutton" onClick={increHandle}>+</button>
            </div>
        </div>
        <div className="CartRow qtyprice">
             <div className="CartCol">{pdt.quantity}</div>
             <div className="CartCol">${pdt.product.price * pdt.quantity}</div>   
        </div> 

        <div className="CartRow xbutton">

            <div className="CartCol delbtn">       
            <img src={deleteicon} alt="na" width={20} height={20} onClick={deleteItemFromCart}/> 
            </div>                        
             
        </div>

       
    </div>
    

    );
}
export default CartItem;