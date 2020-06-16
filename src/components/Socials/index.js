import React, { Fragment } from "react";



const Socials = () => {

    return (
        <Fragment>
            <nav className="socials">
                <a className="iconbtn" href="/"><img className="icon" src="../../../public/icons/Instagram.png" alt="Instagram" /></a>

                <a className="iconbtn" href="https://en-gb.facebook.com/"><img className="icon" src="../../../public/icons/FB.png" alt="Facebook" /></a>

                <a className="iconbtn" href="/"><img className="icon" src="../../../public/icons/Twitter.png" alt="Twitter" /></a>

                <a className="iconbtn" href="/"><img className="icon" src="../../../public/icons/YouTube.png" alt="YouTube" /></a>
            </nav>
        </Fragment>
    )
};

export default Socials;