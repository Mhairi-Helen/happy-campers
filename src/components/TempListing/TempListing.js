import React, { Component } from 'react';

class TempListing extends Component {

    componentDidMount() {
        if(!this.props.loaded) {
            this.props.handleLoad();
        };
    };

    render() {

        const { loaded } = this.props;

        return !loaded ? <p>Loading... </p> : (
            <ul>
                <li>{ this.props.test }</li>
                <li>Campsite 2</li>
                <li>Campsite 3</li>
                <li>Campsite 4</li>
            </ul>
        )
    }
}

export default TempListing;