import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({

    name : 'cartSlice',
    initialState :{ 
        products: [ ],
         totalItems: 0,
         subTotal : 0
 },
    reducers: {
        addToCart : (state,action) => {
            let res =[];

            if(state.products.some ( (ele) => ele.product.id===action.payload.pdt.id)){
                res = state.products.map( (itm) => {
                    if(itm.product.id===action.payload.pdt.id){
                        itm.quantity += action.payload.itemqty;
                    }
                    return itm;

                });
            }
            else{
                res = [...state.products, {product:action.payload.pdt, quantity: action.payload.itemqty}]
            }
            state.products = res;
            
            state.totalItems +=action.payload.itemqty;
            state.subTotal += (action.payload.itemqty*action.payload.pdt.price);


    },
           
        removeItemAll : (state,action) => {
            let res =[];
            res = state.products.filter ((item) => item.product.id!==action.payload.pdt.id);   
            state.products=res;
            state.totalItems -= action.payload.itemqty;
            state.subTotal -= (action.payload.pdt.price * action.payload.itemqty);
        },
        removeSingleItem : (state,action) =>{

            let res =[];

            console.log("payload removesingleitem ", action.payload );
           if(action.payload.itemqty>1){
                res = state.products.map( (itm) => {
                if(action.payload.pdt.id === itm.product.id){
                    if(itm.quantity >1){
                        itm.quantity--;
                    }
                }  
                return itm;
            })
            
        }
        else{
                console.log(" quantity is 1, in remove single item");
                res = state.products.filter((item) => item.product.id !== action.payload.pdt.id);
                console.log("quantity is 1, in remove single item ",res);

            }
                state.products=res;
                
                state.totalItems--;
                state.subTotal -= action.payload.pdt.price;
        }
    }

})
export const {addToCart, removeItemAll,removeSingleItem} = cartSlice.actions;
export default cartSlice.reducer;