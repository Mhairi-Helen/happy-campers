import React from "react";



const Header = ({ children }) => {

    return (
        <main className="hero__img">
            { children}
        </main>
        // <picture className="hero">
        //     <img className="hero-img" src={require("../../assets/images/campAtNight.png")} alt="Picture of a tent under the stars at night">{ children }</img>
        // </picture>
    )
};

export default Header;