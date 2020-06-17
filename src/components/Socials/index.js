import React, { Fragment } from "react";



const Socials = () => {

    return (
        <Fragment>
            <nav className="socials">
                <a className="iconbtn" href="/"><img className="icon" src={require("../../assets/icons/instagram.png")} alt="Instagram" /></a>

                <a className="iconbtn" href="https://en-gb.facebook.com/"><img className="icon" src={require("../../assets/icons/FB.png")} alt="Facebook" /></a>

                <a className="iconbtn" href="/"><img className="icon" src={require("../../assets/icons/Twitter.png")} alt="Twitter" /></a>

                <a className="iconbtn" href="/"><img className="icon" src={require("../../assets/icons/YouTube.png")} alt="YouTube" /></a>
            </nav>
        </Fragment>
    )
};

export default Socials;