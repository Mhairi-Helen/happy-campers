import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import api_key from '../../env';

const mapStyles = {
  width: "50vw",
  height: "100%"
};

export class MapContainer extends Component {
  render() {
    return (
        <Map
        google={this.props.google}
        zoom={8}

        style={mapStyles}
        initialCenter={{
            lat: 51.330826,
            lng: -2.720554,
        }}
        >

        <Marker
            name={'place1'}
            position={{lat: 51.530826, lng: -2.920554}} />

        <Marker
            name={'place2'}
            position={{lat: 51.130826, lng: -2.620554}} />

        <Marker
            name={'place3'}
            position={{lat: 51.330826, lng: -2.820554}} />

        <Marker
            name={'place4'}
            position={{lat: 51.430826, lng: -2.720554}} />

        <Marker
            name={'place5'}
            position={{lat: 51.430826, lng: -2.520554}} />


        </Map>


    );
  }
}

export default GoogleApiWrapper({
  apiKey: api_key
})(MapContainer);