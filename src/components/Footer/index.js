import React from "react";
import Socials from "../Socials"


const Footer = () => {

    return (
        <footer className="footer">

            <ul>
                <li>
                    <a href="/">
                        <img
                            className="social__icon"
                            src={require("../../assets/icons/facebook-f-brands.svg")}
                            alt="facebook"/>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img
                            className="social__icon"
                            src={require("../../assets/icons/instagram-brands.svg")}
                            alt="facebook"/>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img
                            className="social__icon"
                            src={require("../../assets/icons/twitter-brands.svg")}
                            alt="facebook"/>
                    </a>
                </li>
            </ul>

            <p>&copy; 2020 Happy Campers.</p>
        </footer>
    )
};

export default Footer;