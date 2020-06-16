import React, { Component } from 'react';
import Sidebar from "../Sidebar"

class Campsite extends Component {

    componentDidMount() {
        this.props.handleCampsiteLoad(this.props.id);
    };

    render() {

        const { loadedListItem, campsite } = this.props;

        return !loadedListItem ? <p>Loading... </p> : (
            <div>
                <header>
                    <figure>
                        <img alt="" src={ campsite.img } />
                    </figure>

                    <h2>{ campsite.campsite_name }</h2>
                    <p>{ campsite.town_city }</p>

                    <h3>from { campsite.price } per night</h3>
                </header>

                <div>
                    <h3>Overview</h3>
                    <p>{ campsite.description }</p>
                    <ul>
                        <li>
                            { campsite.amenities }
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