import React, { Component } from 'react';

/* routing */
import { Link } from 'react-router-dom';

class TempListing extends Component {

    render() {

        const { loaded, campsites } = this.props;

        return(
            <ul>
                { !campsites ? <p>No results found.</p> : (
                    campsites.map((campsite, index) => (
                        <li key={ index }>
                            <Link to={`/campsites/${ campsite.id }`}>
                                <h1>{ campsite.campsite_name }</h1>
                            </Link>
                            <p>{ campsite.price }</p>
                            <p>Location: { campsite.town_city }</p>
                            <p>Amenities: { campsite.amenities }</p>
                            <p>Rating: { campsite.rating }/5</p>
                        </li>
                    ))
                )}
            </ul>
        )
    }
}

export default TempListing;