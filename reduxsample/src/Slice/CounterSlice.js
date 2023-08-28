import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({

    name: 'counter',
    initialState: {
        value:0
    },
    reducers : {
        incremented : state => {
            state.value +=1;

        },
        decremented : state => {
            state.value -=1;
        },
        incrementByAmount : (state,action) =>{
            state.value = state.value + action.payload;
        }
    }
})
export const {incremented,decremented,incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;