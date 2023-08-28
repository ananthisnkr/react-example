import React, { useEffect, useState } from "react";
import Square from "./Square";
function TicTacToeCPU (){

    const [board,setBoard] = useState(Array(9).fill(null));
    const [isCPU,setIsCPU] = useState(false);
    const [winr,setWinr] = useState("");
    const [hist,setHist] = useState([Array(9).fill(null)]);

    const findEmpty = ()=>{
        let esq =[];
        board.forEach((ele,i) =>{
            if(ele===null){
                esq.push(i)
            }
        });
        return esq;

    }
    const CPUMove = ()=>{

        console.log("in cpu move ", board);
        let emptySq = findEmpty();
        console.log("empty square ",emptySq);
        let cpupos = emptySq[Math.floor(Math.random()*emptySq.length)];
        console.log("random ",emptySq[Math.floor(Math.random()*emptySq.length)]);
        let arr = board.slice();
        arr[cpupos] = "O";
        setBoard(arr);
        setHist([...hist,arr]);
        setIsCPU(false);

    }
    const winPos = () =>{
        const winningMove = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        for(let i=0;i<winningMove.length;i++){
           
                let [a,b,c] = winningMove[i];
                if(board[a] && board[a]===board[b] && board[a]===board[c]){
                    console.log("winner");
                    setWinr(board[a]);
                    return board[a];
                }
                    
            
        }
        return null;
    }
   useEffect(()=>{
    winPos();
    if(winr!==""){
        setIsCPU(false);
    }
    if(isCPU && winr==="")
        setTimeout(()=>{
            CPUMove();
        },1000);
   },[isCPU])
   
   
   const resetGame=()=>{
    setBoard(Array(9).fill(null));
    setIsCPU(false);
    setWinr("");
   }
   
   
   const moveTo = (i)=>{
    console.log("in reset move i ",i )
    if(i===0){
        setBoard(Array(9).fill(null));
        setIsCPU(false);
        setWinr("");
        setHist([Array(9).fill(null)]);
    }
    else{
        setBoard(hist[i]);
        setIsCPU(false);
        setWinr("");
    }
   }
    const handleClick = (i)=>{
        if(board[i]){
            return;
         }
         if(winr!==""){
         setIsCPU(false);
         return;
         }
        if (!isCPU){
            console.log("in handleclick");
            let arr = board.slice();
            arr[i]="X";
            setBoard(arr);
           
            setHist([...hist,arr]);
            console.log("history ",hist);
           setIsCPU(true);
                  
        }
    //     else{
    //    CPUMove();   
    //     }   
       
    }
    return (
        <>
        <div className="board">
            <div className="row">
                <Square value={board[0]} onSquareClick={()=>{handleClick(0)}}></Square>
                <Square value={board[1]} onSquareClick={()=>{handleClick(1)}}></Square>
                <Square value={board[2]} onSquareClick={()=>{handleClick(2)}}></Square>
            </div>
            <div className="row">
                <Square value={board[3]} onSquareClick={()=>{handleClick(3)}}></Square>
                <Square value={board[4]} onSquareClick={()=>{handleClick(4)}}></Square>
                <Square value={board[5]} onSquareClick={()=>{handleClick(5)}}></Square>
            </div>
            <div className="row">
                <Square value={board[6]} onSquareClick={()=>{handleClick(6)}}></Square>
                <Square value={board[7]} onSquareClick={()=>{handleClick(7)}}></Square>
                <Square value={board[8]} onSquareClick={()=>{handleClick(8)}}></Square>
            </div>
        </div>
        {winr && <h2>Winner: {winr}</h2>}
        {hist.map((ele,i) =>
            <li key={i}><button onClick={()=>moveTo(i)}> {i===0? "Restart" :"Goto Move "+i}</button></li>
        )}
        </>
    );
}
export default TicTacToeCPU;