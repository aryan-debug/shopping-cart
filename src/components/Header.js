import React from "react";
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBagShopping} from "@fortawesome/free-solid-svg-icons"


function Header(props){
    return (
        <div className={props.className}>
            <div className="left">
                <Link to = "/"><h3>RIZT</h3></Link>
            </div>
            <div className= "right">
                <Link to = "/"><h3>Home</h3></Link>
                <Link to = "/shop"><h3>Shop</h3></Link>
                <Link to = "/cart"> <FontAwesomeIcon icon = {faBagShopping} fontSize = "1.5em"></FontAwesomeIcon></Link>
            </div>
        </div>
    )
}

export default Header;