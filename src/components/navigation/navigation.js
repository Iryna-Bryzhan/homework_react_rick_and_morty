import React from "react"
import NavItem from "./nav-item"


import "./navigation.css"

function Navigation({click}){
    return(
    <header >
    <div className="header">
        <NavItem click={click} title="Home"></NavItem>
        <ul className="menu-list">
            <NavItem click={click} title="Character"></NavItem>
            <NavItem click={click} title="Location"></NavItem>
            <NavItem click={click} title="Episode"></NavItem>
        </ul>
    </div>
    </header>
    )
}

export default Navigation

