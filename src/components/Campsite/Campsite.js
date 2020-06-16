import React, { Component } from 'react';
import Sidebar from "../Sidebar"

class Campsite extends Component {

    componentDidMount() {
        this.props.handleCampsiteLoad(this.props.id);
    };

    render() {

        const { loadedListItem, campsites, id } = this.props;

        return !loadedListItem ? <p>Loading... </p> : (
            <div>
                <header>
                    <figure>
                        <img src={ campsites.img } />
                    </figure>

                    <h2>{ campsites.campsite_name }</h2>
                    <p>{ campsites.town_city }</p>

                    <h3>from { campsites.price } per night</h3>
                </header>

                <div>
                    <h3>Overview</h3>
                    <p>{ campsites.description }</p>
                    <ul>
                        <li>
                            { campsites.amenities }
                        </li>
                    </ul>
                </div>

                <div>
                    <Sidebar />
                </div>
            </div>
        )
    }
}

export default Campsite;