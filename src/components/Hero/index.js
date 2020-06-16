import React from "react";



const Header = () => {

    return (
        <picture className="hero">
            <img className="hero-img" src={require("../../assets/images/campAtNight.png")} alt="Picture of a tent under the stars at night" />
        </picture>
    )
};

export default Header;