import React from "react";
import gmail from '../assets/gmail.png';
import facebook from '../assets/Facebook.png';

import twitter from '../assets/twitter.png';
import '../../src/Header.css';
import { Link } from "react-router-dom";

function Header(){

    return (
        <div className="HeaderWrapper">
            
            <div className="LogoWrapper">
            <Link to='/'style={{textDecoration:'none'}}>
                 <h2 className="logo" >Text Analyzer</h2>
            </Link>
            </div>
        <div className="iconGroup">
            <div className="gmailIcon">
                <Link to="https://www.gmail.com"  target="_blank">
                <img src={gmail} width={25} height={25} alt="gmail"/>
                </Link>
            </div>
            <div className="facebookIcon">
                <Link to="https://www.facebook.com"  target="_blank"> 
                <img src={facebook} width={25} height={25} alt="facebook"/>
                </Link>
            </div>
            <div className="twitterIcon">
                <Link to="https://www.twitter.com" target="_blank">
                <img src={twitter} width={25} height={25} alt="twitter"/>
                </Link>
            </div>

        </div>
        
        </div>

    );
}
export default Header;