import React from "react";
import Navigation from "../navigation/navigation";
import "./header.css"

function Header({click}){
    return(
        <>
        <header >
            <Navigation click={click}></Navigation>
        </header>
        </>
    )
}

export default Header