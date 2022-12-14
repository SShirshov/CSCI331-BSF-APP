import React from "react";
import {NavLink} from "react-router-dom";
import "./NavBar.css";
import logoBSF from '../components/BSF_simple.PNG';

export const NavBar = () => {
    return (
        <header>
            <div id ="head-box">
            <NavLink to={"/entries"}><img class = "small-logo" src={logoBSF} alt="BSF"/></NavLink>
            <li id="head" className={"navLink"}>
                <ul><NavLink to={"/entries"}>Entries</NavLink></ul>
                <ul><NavLink to={"/contactinfo"}>Contact Info</NavLink></ul>
                <ul><NavLink to={"/messages"}>Messages</NavLink></ul>
            </li>
            </div>
        </header>
    )
 }