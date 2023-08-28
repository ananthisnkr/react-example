import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../store/slices/productSlice";
import Product from "./Product";
function ProductsList (){

    const productlist = useSelector(state => state.productslice.products);
    const dispatch = useDispatch();

    const getProducts = async () =>{
        const response = await fetch("https://dummyjson.com/products/search?q=");
        const result = await response.json();
        console.log(result.products);
        dispatch(addProducts(result.products));
        
       
    }
   

    useEffect(()=>{
        getProducts();
    },[])

    return (

        <div className="productListWrapper">
         {productlist.map((pdt) => <Product pdt={pdt} ></Product>)}
        </div>

    );
}
export default ProductsList;