import React from "react";
import Nav from "../Nav"


const Header = () => {

    return (
        <header className="header flex">
                <h1 className="logo primaryColor">Happy Campers</h1>

                <nav className="nav__container">
                    <ul className="nav__list">
                        <li className="flex">
                            <img
                            className="nav__icon"
                            src={require("../../assets/icons/globe-solid.svg")}
                            alt="localisation"/>
                            <img
                            className="nav__icon"
                            src={require("../../assets/icons/angle-down-solid.svg")}
                            alt="localisation"/>
                        </li>
                        <li>
                            <a className="nav__links" href="/">Destinations</a>
                        </li>
                        <li >
                            <a className="nav__links" href="/">About</a>
                        </li>
                        <li>
                            <a className="nav__links" href="/">Contact</a>
                        </li>
                        <li >
                            <a className="nav__links" href="/">Log in</a>
                        </li>
                    </ul>
                </nav>
        </header>
    )
};

export default Header;