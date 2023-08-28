import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./Header.css"
function ProductContainer({searchvalue}){
    
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        getProductList();
    },[searchvalue]);
    
   const getProductList = async () =>{
        const response = await fetch("https://dummyjson.com/products/search?q="+searchvalue);
        const result = await response.json();
        console.log(result.products);
        setProducts(result.products);

   }

    return (
            <div className="pdtlistdip">
           {products.map((item) => (<Product  key={item.id}  item={item} />)) }
           </div>
    );
}
export default ProductContainer;