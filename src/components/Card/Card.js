import React, { Component } from 'react';

/* routing */
import { Link } from 'react-router-dom';

class Card extends Component {

    render() {

        const { loadedList, campsites } = this.props;

        return !loadedList ? <p>Loading... </p> : (

            <ul className="card__container">
                {!campsites ? <p>No results found.</p> : (
                    campsites.map((campsite, index) => (
                        <li className="card" key={index}>

                            <picture className="card-img">
                                <img className="card__img" alt="" src={campsite.img}></img>
                            </picture>

                            <header className="card__header">
                                <h4>{campsite.campsite_name}</h4>
                                <p>Location: {campsite.town_city}</p>
                            </header>

                            <section className="card__details">

                                <p><b>Amenities:</b> {campsite.amenities}</p>
                            </section>
                            <section className="card__rating">
                                <p>Rating: {campsite.rating}/5</p>
                            </section>
                            <section className="card__price">
                                <p>From {campsite.price} per night</p>
                                <button className="button button--card">
                                    <a href={`/campsites/${campsite.id}`}>Check Availability</a>
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