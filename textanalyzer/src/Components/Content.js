import React from "react";
import TopArea from "./TopArea";
import BottomArea from "./BottomArea";
import ContentArea from "./ContentArea";
import "../ContentArea.css";
function Content(){

    return (
        
       <div className="ContentWrapper">
            <div className="TopAreaWrapper">
                <TopArea />
            </div>
            <div className="ContentAreaWrapper">
                <ContentArea />
            </div>
            <div className="BottomAreaWrapper">
                <BottomArea />
            </div>

       </div>

    );
}
export default Content;