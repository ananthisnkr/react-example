import React, { useEffect, useState } from "react";
 
function StopWatch(){
    const [time,setTime] = useState(0);
    
    const [isRunning,setIsRunning] = useState(false);

    useEffect(()=>{
        let tid;
        if(isRunning){
           tid= setInterval(()=>
           {
                
                setTime(time+1);
            },1000 );
            console.log(time);
        }
        return ()=>clearInterval(tid);
    });
    const startHandler = ()=>{
        setIsRunning(!isRunning);
    }
    const resetHandler = ()=>{
        setIsRunning(false);
        setTime(0);
    }
    
     const hours = Math.floor(time/(60*60)).toString().padStart(2,'0');
     const minutes =Math.floor(time/60).toString().padStart(2,'0');
     const seconds = (time%60).toString().padStart(2,'0');
    //const milliseconds = time%100;
    // let seconds =time;
    // let minutes =0;
    // let hours =0;
    // if(seconds>=60){
    //     minutes++;
    //     setTime(0);
    //     if(minutes>=60){
    //         hours++;
            
    //     }
    // }
    
    
    return (
        <>
       <h1>{hours}:{minutes}:{seconds}</h1>
        <div className="splitGroup">
            <button className="startBtn" onClick={startHandler}>{isRunning? "Pause" :"Start"}</button>
            <button className="resetBtn" onClick={resetHandler}>Reset</button>

        </div>    
            </>

    );

}
export default StopWatch;