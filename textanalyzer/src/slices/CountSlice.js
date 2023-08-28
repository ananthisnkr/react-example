import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({

    name : 'countreducer',
    initialState : {
        content : "",
    },
    reducers : {

        addContent : (state, action) =>{
            console.log("in add content reducer ", action.payload);
            state.content = action.payload;
            console.log("state value ",state.content);
            console.log("words count",state.content.split(" ").length);
            console.log( "characters count ",state.content.match(/[a-zA-Z]/gi).length);
            console.log("Sentence count ", state.content.split(/[.?!]/).length-1);
            console.log("Paragraph count ",state.content.split(/[\t\n]/g).length);
        },
        countWords :  (state, action) =>{
           console.log(state.content.split(" ").length);
        },
        countCharacter : (state, action) =>{

        },
        countSentences: (state, action) =>{

        },
        countParagraphs : (state, action) =>{

        },
        countPronouns : (state, action) =>{

        },

    },

})

export const {countCharacter,countWords,countSentences,countParagraphs,countPronouns,addContent} = countSlice.actions;
export default countSlice.reducer;