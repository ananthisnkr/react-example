import React, {  useState } from "react";
import '../styles/product.css'
import { Dialog, Button, DialogContent, DialogTitle, TextField, DialogActions,  } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";

function Product({pdt}){

    const [itemqty,setItemqty] = useState(1);

    const [isAtcBtnChg,setIsAtcBtnChg] = useState(false);

    const [open,setOpen] = useState(false);

    const [currentIndex,setCurrentIndex] = useState(0);

   
    const dispatch = useDispatch();

    const increHandler = ()=>{
        setItemqty(itemqty+1);
    }
    
    const decreHandler = ()=>{
        if(itemqty!==1)
            setItemqty(itemqty-1);
    }

    const addToCartHandler = () =>{
        setIsAtcBtnChg(true);
        setTimeout(() => {
            setIsAtcBtnChg(false);
        }, 5000);
        
        
        dispatch(addToCart({pdt,itemqty}));
        console.log("Add to cart dispatch called");


    }
  


    const prevHandler = () =>{
        setCurrentIndex(currentIndex-1)
 
    }

    const nextHandler = () =>{
        
            setCurrentIndex(currentIndex+1)
    }

    return (
        <div className="productWrapper">
            <div className="productImageWrapper">
                <img src={pdt.thumbnail} className="productImage" onClick={()=>setOpen(true)} alt="na"></img>
                 <Dialog open={open} onClose={()=> setOpen(false)}>
                    <DialogTitle> hello world</DialogTitle>
                    <DialogContent>
                       <img src={pdt.images[currentIndex]} alt="na"/>
                        
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" size="small" disabled={currentIndex===0} onClick={prevHandler}>Prev</Button>
                        <Button variant="contained" size="small" disabled={currentIndex===4} onClick={nextHandler}>Next</Button>

                    </DialogActions>
                    
                </Dialog> 
            </div>
            <div className="productTitleWrapper">
                <div className="productTitle">{pdt.title}</div>
            </div>
            <div className="productBrandWrapper">
                <div className="productBrand">{pdt.brand}</div>
            </div>
            <div className="stepperWrapper">
                <Button variant="contained" size="small" color="secondary" onClick={decreHandler}>-</Button>
                <TextField variant="outlined" defaultValue={1} value={itemqty} size="small" style={{width:"40px"}}></TextField>
                <Button variant="contained" size="small" color="secondary"  className="incButton" onClick={increHandler}>+</Button>
            </div>
            <div className="productPriceWrapper">
                <div className="productPrice">{pdt.price}</div>
            </div>
            <div className="addToCartButtonWrapper">
                <Button variant="contained" color="secondary" className= {isAtcBtnChg ? "addToCartButton" : ""} onClick={addToCartHandler}> ADD TO CART</Button>
            </div>
        </div>
    );
}
export default Product;