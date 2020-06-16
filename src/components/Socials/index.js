import React, { Fragment } from "react";


const Socials = () => {

    return (
        <Fragment>
            <nav className="socials">
                <a className="iconbtn" href=""><img className="icon" src="../../assets/style/icons/Instagram.png" alt="Instagram" /></a>

                <a className="iconbtn" href="https://en-gb.facebook.com/"><img className="icon" src="../../assets/icons/FB.png" alt="Facebook" /></a>

                <a className="iconbtn" href=""><img className="icon" src="../../assets/style/icons/Twitter.png" alt="Twitter" /></a>

                <a className="iconbtn" href=""><img className="icon" src="../../assets/style/icons/YouTube.png" alt="YouTube" /></a>
            </nav>
        </Fragment>
    )
};

export default Socials;