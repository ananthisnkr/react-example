import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import { incremented,decremented } from "./Slice/CounterSlice";
function Counter(){

        const count= useSelector(state => state.counter1.value);
        const dispatch = useDispatch();

        return (
            <div>
                <button name="increment" onClick={()=>dispatch(incremented())}>increment</button>
                <button name="decrement" onClick={()=> dispatch(decremented())}>decrement</button>
                <div>{count}</div>
            </div>

        );
}
export default Counter;