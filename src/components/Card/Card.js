import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {

    componentDidMount() {
        this.props.handleCampsitesLoad(this.props.id);
    }

    render() {

        const { loadedList, campsites } = this.props;

        return !loadedList ? <p>Loading... </p> : (

            <ul>
                {!campsites ? <p>No results found.</p> : (
                    campsites.map((campsite, index) => (
                        <li className="card" key={index}>

                            <picture className="card-img__container">
                                <img className="card-img" alt="" src={campsite.img}></img>
                            </picture>

                            <header className="card__header">
                                <h6>{campsite.campsite_name}</h6>
                                <p>Location: {campsite.town_city}</p>
                            </header>

                            <section className="card__details">

                                <p>Amenities:</p>
                                <ul className="card__list">
                                    {campsite.amenities.map((amenity, index) => (
                                        <li key={index}>
                                            {amenity}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                            <section className="card__rating">
                                <p>Rating: {campsite.rating}/5</p>
                            </section>
                            <section className="card__price">
                                <p>From {campsite.price} per night</p>
                                <button className="button button--card ">
                                    <Link className="button--card__link" to={`/region/campsites/${campsite.id}`}>More Info</Link>
                                </button>
                            </section>

                        </li>
                    ))
                )}
            </ul>
        )
    }
}

export default Card;