import React, { useEffect, useState } from "react";
import Square from "./Square";
import "../src/TicTacToe.css"
function TicTacToe(){

    const [squares,setSquares] = useState(Array(9).fill(null));
    const [XisNext,setXisNext] = useState(true);
    const [player,setPlayer] = useState("X");
    const [winner,setWinner] = useState("");
    const [history,setHistory] = useState([Array(9).fill(null)]);
    let resetname ="";

    const handleClick = (i)=>{
        console.log("is next ", XisNext);
        if(squares[i] || winner){
            return;
        }
       
        let nextSquares = squares.slice();
        if(XisNext){
            nextSquares[i] = "X"
        }
        else{
            nextSquares[i] = "O"
        }

        setSquares(nextSquares)
        setHistory([...history,nextSquares]);
        console.log("history ",history);
       // let nextplayer = !XisNext;
        setXisNext(!XisNext);
        setPlayer(player==="X" ? "O" : "X");
        //console.log("player changed" , nextplayer);
    }
    const calculateWinner = () => {
        const winningPosition = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for(let i =0;i<winningPosition.length;i++){
            const [a,b,c] = winningPosition[i];
            if(squares[a] && squares[a]=== squares[b] && squares[a]===squares[c]){
                setWinner(squares[a]);
                return squares[a];
            }
        }
        return null;
    };
    
    useEffect(()=>{
        calculateWinner();
    }, [squares]);   

    const resetMove = (i) =>{
        if(i===0){
            resetname = "Restart";
            setSquares(Array(9).fill(null));
            setHistory([]);
        }
        else{

            setSquares(history[i]);
            resetname = "Goto Move"+i;
        }
       
    }
   // const historyItems = history.map((ele,i)=><li key={i}>Goto {i}</li>);
    return (
        <>
        <h2> Next Player : {player}</h2>
        <div className="board">
            <div className="rowsquare">
                <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
                <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
                <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
            </div>
            <div className="rowsquare">
                <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
                <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
                <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
            </div>
            <div className="rowsquare">
                <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
                <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
                <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
            </div>


        </div>
        <h2> winner is  {winner}</h2>
        <h5>Undo Moves</h5>
        {history.map((ele,i)=>
            <li key={i} ><button onClick={()=>resetMove(i)}> {i===0? "Restart" :"Goto Move "+i}</button></li>
            
        )}
      
        </>
    );

}
export default TicTacToe;