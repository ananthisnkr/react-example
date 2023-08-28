import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { pronouns } from "../data/pronouns";

function TopArea(){


    const contentValue = useSelector((state) => state.countreducer.content);
    console.log("useSElector ",contentValue);
   let countRef = useRef(0);
    useEffect(()=>{
        console.log("in useEffect");
        let count =0;
        contentValue?.trim()?.toLowerCase().split(" ").forEach(word => {
            console.log("in foreach ",word);
            if (pronouns.includes(word)){
              count = count + 1;
                console.log("inside if loop ",word ," ", count);
            }


        })
        countRef.current = count;
    },[contentValue])

 //   let procount = 0;
    return (
       
        
      <div className="TopAreaContentWrapper">
        <div className="rowta wordsWrapper">
            Words
            {contentValue ? contentValue?.trim()?.split(/\s+/)?.length : 0} 
        </div>
        <div className="rowta CharacterWrapper">
            Characters
            {contentValue ? contentValue?.match(/[a-zA-Z,.?!\s\d]/gi)?.length : 0} 
        </div>
        <div className="rowta SentenceWrapper">
            Sentences
            {contentValue ? contentValue?.trim()?.match(/[.?!]/g)?.length : 0} 
        </div>
        <div className="rowta ParagraphWrapper">
            Paragraphs
            {contentValue? contentValue?.split(/\n\s*\n/)?.length : 0}
        </div>
        <div className="rowta PronounWrapper">
            Pronouns
            {countRef.current}
        </div>
      </div>
    );
}
export default TopArea;