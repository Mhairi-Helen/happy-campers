import React, { Component } from 'react';

class TempListing extends Component {

    // componentDidMount() {
    //     if(!this.props.loaded) {
    //         this.props.handleLoad();
    //     };
    // };

    render() {

        const { loaded, campsites } = this.props;

        return !loaded ? <p>Loading... </p> : (
            <ul>
                { !campsites ? <p>No results found.</p> : (
                    campsites.map((campsite, index) => (
                        <li key={ index }>
                            <h1>{ campsite.campsite_name }</h1>
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