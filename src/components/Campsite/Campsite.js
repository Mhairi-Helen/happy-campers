import React from "react";
import Sidebar from "../Sidebar"


const Campsite = ({ name, location, price, description, ammenities }) => {

    return (
        <div>
            <header>
                <figure>
                    <img src="http://placekitten.com/500/300" />
                </figure>

                <h2>{name}</h2>
                <p>{location}</p>

                <h3>from {price} per night</h3>
            </header>

            <div>
                <h3>Overview</h3>
                <p>{description}</p>
                <ul>
                    <li>
                        {ammenities}
                    </li>
                </ul>
            </div>

            <div>
                <Sidebar />
            </div>
        </div>
    )
}

export default Campsite;