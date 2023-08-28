import React, { useState } from "react";
import "./TicTacToe.css"
function Square({value,onSquareClick}){
    
   
    return (
        <button className="squarebtn" onClick={onSquareClick}>{value}</button>
    );
}
export default Square;