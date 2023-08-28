import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {addContent} from "../slices/CountSlice.js";
function ContentArea(){
    const dispatch = useDispatch();
   

    const changeHandler = (e) =>{
        dispatch(addContent(e.target.value));
     //  console.log("result is ", contentValue);
    }
    return (
            <textarea autoFocus className="textArea" placeholder="Type something..." onChange={changeHandler}></textarea>
    );
}
export default ContentArea;