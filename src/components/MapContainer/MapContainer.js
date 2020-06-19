import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import api_key from '../../env';

const mapStyles = {
    width: "50vw",
    height: "100%"
};

export class MapContainer extends Component {

    render() {

    const { campsites, loadedList } = this.props;

    return (

            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{
                    lat: 51.330826,
                    lng: -2.720554,
                }}>

            { campsites.map((campsite, index) => (
                <Marker
                    key={ index }
                    name={ campsite.campsite_name }
                    position={{
                        lat: 51.330826,
                        lng: -2.720554
                    }} />
                ))}

            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: api_key
})(MapContainer);