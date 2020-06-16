import React from "react";
import Sidebar from "../Sidebar"


const Campsite = ({ campsite }) => {


    const { image, campsite_name, price, description, address, town_city, postcode, ammenities, rating, contact_no, contact_email } = campsite;

    return (
        <div>
            <header>
                <figure>
                    <img src="http://placekitten.com/500/300" />
                </figure>

                <h2>{campsite_name}</h2>
                <p>{town_city}</p>

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