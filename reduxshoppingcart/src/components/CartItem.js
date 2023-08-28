import React,{useState} from "react";
import deleteicon from "../assets/deleteicon.png"
import { useDispatch } from "react-redux";
import { addToCart,removeItemAll,removeSingleItem } from "../store/slices/cartSlice";
import "../styles/Cart.css"
function CartItem({prod}){

        
        const [counterQty,setCounterQty] =useState(prod.quantity);

        const [itemnodisp,setItemnodisp] = useState(prod.quantity);
        
        const dispatch = useDispatch();

        const increHandle= ()=>{
            setCounterQty(counterQty+1);
            dispatch(addToCart({ pdt:prod.product,itemqty :1}));

            setItemnodisp(itemnodisp+1);
        }
        const decreHandle = ()=>{
            if(counterQty>1){
                setCounterQty(counterQty-1)
            setItemnodisp(itemnodisp-1);
            }
            dispatch(removeSingleItem({pdt:prod.product,itemqty : prod.quantity}));
        }
        const removeAllHandler = ()=>{

            dispatch(removeItemAll({pdt :prod.product,itemqty:itemnodisp}));
        }

    return (
        <>
      <div className="CartTable">
        <div className="CartRow">
            <div className="CartCol1">
            <img src={prod.product.thumbnail} alt="na" width={50} height={50}/> 
            </div>
        </div>
        <div className="CartRow textdisplay">
            <div className="CartCol"> <strong>{prod.product.title}</strong></div>
            <div className="CartCol">{prod.product.brand}</div>
        </div>   
                
        <div className="CartRow">
            <div className="CartCol">
                <button className= "stepperbutton"   onClick={decreHandle}>-</button>
                <input type="text"  value={counterQty} className="quantitybox"/>
                <button className="stepperbutton" onClick={increHandle}>+</button>
            </div>
        </div>
        <div className="CartRow qtyprice">
             <div className="CartCol">No:{itemnodisp}</div>
             <div className="CartCol">${prod.product.price * itemnodisp}</div>   
        </div> 

        <div className="CartRow xbutton">

            <div className="CartCol delbtn">       
            <img src={deleteicon} alt="na" width={20} height={20} onClick={removeAllHandler}/> 
            </div>                        
             
        </div>

      

       
    </div>
        </>
    );

}
export default CartItem;