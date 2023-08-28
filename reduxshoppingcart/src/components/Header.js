import React, { useEffect, useState } from "react";
import search from "../assets/search.png";
import bag from "../assets/bag.png"
import ProductsList from "./ProductsList";
import { useSelector } from "react-redux";
import "../styles/Header.css"
import { Dialog, DialogContent } from "@mui/material";
import CartList from "./CartList";
function Header(){

    const [searchItem,setSearchItem] = useState("");
    const [open,setOpen] = useState(false);
    const cartItems = useSelector(state => state.cartSlice.products);
    const totalitem = useSelector(state => state.cartSlice.totalItems)
    const subtotal =useSelector(state => state.cartSlice.subTotal);

    useEffect(()=>{
        console.log(" in header cart items",cartItems);
        
      const {qty,total} =  cartItems.reduce( (acc,curitem)=> { 
            return ({qty:acc.qty + curitem.quantity , 
                total: acc.total + (curitem.quantity *curitem.product.price) })
        },{qty:0,total:0});
       console.log("quantity ", qty);
       console.log("total ", total);
    },[cartItems])

    return (
        <>
        <div className="pageWrapper">
        <div className="headerWrapper">
            <div className="headerrow logoWrapper">
                <h2>Shoppy</h2>
            </div>
            <div className="headerrow searchboxWrapper">
                <input type="text" name={searchItem} onChange={(e) =>setSearchItem(e.target.value)}></input>
                <button className="searchButton" onClick={(e)=>e.preventDefault()}><img src={search} alt="" width={25} height={20}></img></button>
            </div>
            <div className="headerrow itemCountTotalWrapper">
                <div className="itemCount">No of items: {totalitem}</div>
                <div className="totalPrice">Sub Total: ${subtotal}</div>
            </div>
            <div className="headerrow cartLogoWrapper">
                <div className="cartLogo" onClick={()=>setOpen(true)}>
                    <div className=""> {totalitem}</div>
                    <img src={bag} width={30} height={30} alt="na"/>
                    <Dialog open={open} onClose={()=>setOpen(false)}>
                        <DialogContent>
                          <CartList />
                        </DialogContent>
                    </Dialog>
                </div>
                
            </div>
        </div>
        <ProductsList />
        </div>
        </>
    
    );
}

export default Header;