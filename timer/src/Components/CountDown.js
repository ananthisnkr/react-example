import React, { useEffect, useState } from "react";

function CountDown(){

    const [dtime,setDtime] = useState("");
    console.log("date time ",dtime);
    useEffect(()=>{
        const today = new Date();
        console.log(today);
        console.log(today.getDate());
        console.log(today.getMonth());
        console.log(today.getFullYear());
        console.log(today.getTime());
        //console.log(dtime.getTime());


    },[]);

    return(
        <>
        <input type="datetime-local" value={dtime} onChange={(e)=>setDtime(new Date(e.target.value))}></input>

        </>
    );
}
export default CountDown;