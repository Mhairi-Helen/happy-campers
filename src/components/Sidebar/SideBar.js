import React from "react";


const Campsite = ({ price, rating }) => {

    return (
        <div>
            <header>
                <h3>Book this Site</h3>
                <h3>Price: {price} per night</h3>
            </header>
            <form>
                <label for="adults">Number of Adults:</label>
                <select id="adults">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
                <label for="children">Number of Children:</label>
                <select id="children" >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
                <div>
                    <button>Check Availability</button>
                </div>
            </form>
        </div>
    )
}

export default Campsite;