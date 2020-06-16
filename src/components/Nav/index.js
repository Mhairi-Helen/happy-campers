import React from "react";


const Nav = () => {

    return (
        <nav className="nav-main">
            <ul className="nav-main__list">
                <li className="nav-main__item"><a className="nav-main__link" href="/">Locations</a></li>
                <li className="nav-main__item "><a className="nav-main__link" href="/settings">About</a></li>
                <li className="nav-main__item"><a className="nav-main__link" href="/settings">Contact</a></li>
            </ul>
        </nav>
    )
};

export default Nav;