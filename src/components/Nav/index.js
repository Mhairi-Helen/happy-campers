import React from "react";


const Nav = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
                <li className="nav-link active"><a className="nav-link" href="/">Locations</a></li>
                <li className="nav-link "><a className="nav-link" href="/settings">About</a></li>
                <li className="nav-link "><a className="nav-link" href="/settings">Contact</a></li>
            </ul>
        </nav>
    )
};

export default Nav;