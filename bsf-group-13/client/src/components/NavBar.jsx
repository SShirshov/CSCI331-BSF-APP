import React from "react";
import {NavLink} from "react-router-dom";
import "./NavBar.css"

export const NavBar = () => {
    return (
        <header>
            <li id="head" className={"navLink"}>
                <ul><NavLink to={"/entries"}>Entries</NavLink></ul>
                <ul><NavLink to={"/contactinfo"}>Contact Info</NavLink></ul>
            </li>
        </header>
    )
 }