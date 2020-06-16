import React from "react";


const Card = ({ name, location, rating, ammenities, price }) => {

    return (

        <div>
            <div>
                <figure>
                    <img src="http://placekitten.com/200/300" />
                </figure>

                <header>
                    <h5>{name}</h5>
                    <p>{location}</p>
                </header>

                <div>
                    <ul>
                        <li>
                            {ammenities}
                        </li>
                    </ul>
                </div>

                <div>
                    <p>{rating} tents</p>
                    {/* tent icon needed */}
                    <p>{price}</p>
                    <button><a>Book here</a></button>
                </div>
            </div>
        </div>
    )
}

export default Card;