import React, { Component } from 'react';

class TempListItem extends Component {

    componentDidMount() {
        /**
         * axios get request goes here
         */
        this.props.handleCampsiteLoad();
    };

    render() {

        const { campsites, id } = this.props;

        console.log(campsites);

        return(
            <article>
                <header>
                    <h2>{ campsites.campsite_name } - { campsites.price }</h2>
                </header>
                <p>Rating:{ campsites.rating }</p>
                <p><em>{ campsites.address }, { campsites.town_city } { campsites.postcode }</em></p>
                <p>Amenities: { campsites.amenities }</p>
                <p>{ campsites.description }</p>
                <p>Contact details: </p>
                <p>No: { campsites.contact_no }</p>
                <p>Email: { campsites.contact_email }</p>
                <footer>
                    <button>Book</button>
                </footer>
            </article>
        )
    }
}

export default TempListItem;