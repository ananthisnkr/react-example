import './App.css';
import React, { createContext, useState } from 'react';
import HeaderBar from './Components/Header';
import CartItems from './Components/CartItems';

export const CartHolderContext = createContext([]);
function App() {

const [cart,setCart] = useState([]);

  return (

    <CartHolderContext.Provider value={{cart,setCart}} >
     <HeaderBar />
    
    </CartHolderContext.Provider>
      
    
  );
}

export default App;
