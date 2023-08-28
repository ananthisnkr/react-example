import React,{ createContext,useContext,useEffect,useState } from "react";
import "./Header.css"
import bag from "./bag.png"
import ProductContainer from "./ProductList";
import CartItems from "./CartItems";
import { CartHolderContext } from "../App";

export const CartContext = createContext();

function HeaderBar(){
    const [searchvalue,setSearchvalue] = useState("");
    
    const [noOfItems,setNoOfItems] = useState(0);
    const [total,setTotal] = useState(0);
    
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isAdded,setIsAdded] = useState(false);
    const [isCartChanged,setIsCartChanged] = useState(false);
    
    const {cart} = useContext(CartHolderContext);
    const submitHandler =(e) =>{
        e.preventDefault();

    }
 
    const cartClickHandler = (e) =>{
        e.preventDefault();
        setIsCartOpen(true);

        if(noOfItems===0)
            setIsCartOpen(false);
    }
    useEffect(()=>{
        setIsCartChanged(true);
        setTimeout(() => {
            setIsCartChanged(false);
        }, 1000);

    },[cart])
    
    return (
        
          <CartContext.Provider value={{ noOfItems,setNoOfItems, total,setTotal,isCartOpen, setIsCartOpen,isAdded,setIsAdded}}>
        
        <div className="headerBar">
            <div className="headerAppName">
                <h2>Shoppy</h2>
            </div>
            <div className="SearchForm">
                <form onSubmit={submitHandler}>
                    <input type = "search" placeholder="Enter the product" name={searchvalue} onChange={(e)=>setSearchvalue(e.target.value)}/>
                    <input type="submit" value="search"/>
                </form>
            </div>
          
            <div className="cartDetails">
                <div className="noitems">
                    No of items: {noOfItems}
                </div>
                <div className="subtotal">
                    Sub total: {total}
                </div>
               
            </div>
            <div className="cartCountatag" >
            
            <img src={bag} className=  {isCartChanged ?  "cartLogo" : ""} onClick={cartClickHandler} alt="../logo.svg"/>
            {isAdded ? <div className="cartCount"><strong> {noOfItems}</strong></div> : <div></div>}
            
           </div>
            
        </div>
        
      
         <ProductContainer searchvalue={searchvalue} /> 
        {isCartOpen && <CartItems/>}
        </CartContext.Provider>
        
        
    );
}
export default HeaderBar;