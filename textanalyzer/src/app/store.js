import { configureStore } from "@reduxjs/toolkit";
import countreducer from '../slices/CountSlice.js'
export default configureStore({
    reducer : {
        countreducer : countreducer
    },
}

)