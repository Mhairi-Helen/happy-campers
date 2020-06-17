import React, { Component } from 'react';

/* routing */
import { Link } from 'react-router-dom';

class Card extends Component {

    render() {

        const { loadedList, campsites } = this.props;

        return !loadedList ? <p>Loading... </p> : (
            <ul >
                {!campsites ? <p>No results found.</p> : (
                    campsites.map((campsite, index) => (
                        <li className="card" key={index}>

                            <picture className="card-img">
                                <img alt="" src={campsite.img}></img>
                            </picture>
                            <Link to={`/campsites/${campsite.id}`}>
                                <h3>{campsite.campsite_name}</h3>
                            </Link>
                            <p>{campsite.price}</p>
                            <p>Location: {campsite.town_city}</p>
                            <p>Amenities: {campsite.amenities}</p>
                            <p>Rating: {campsite.rating}/5</p>
                        </li>
                    ))
                )}
            </ul>
        )
    }
}

export default Card;