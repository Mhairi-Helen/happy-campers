import React, { Component } from "react";
import Dropdown from 'react-bootstrap/Dropdown'



class Filter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            amenities: [],
        };
    }

    handleChange = (e) => {

        let newAmenities = [...this.state.amenities];

        if (e.currentTarget.checked) {
            newAmenities.push(e.currentTarget.value);
        } else {
            newAmenities = newAmenities.filter((amenity) => (amenity !== e.currentTarget.value))
        };


        this.setState({ amenities: newAmenities });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {

        const { loadedList, amenities } = this.props;

        return (
            <form>
                <p>Pitch Type</p>
                <label htmlFor="tent-pitches">Tent Pitches</label>
                <input type="checkbox" name="amentities" value="tent-pitches" id="tent-pitches" onChange={this.handleChange} />

                <label htmlFor="caravan-pitches">Caravan Pitches</label>
                <input type="checkbox" name="amentities" value="caravan-pitches" id="caravan-pitches" onChange={this.handleChange} />

                <label htmlFor="hard-standing">Hard Standing</label>
                <input type="checkbox" name="amentities" value="hard-standing" id="hard-standing" onChange={this.handleChange} />

                <label htmlFor="hook-up">Power Hook Up</label>
                <input type="checkbox" name="amentities" value="hook-up" id="hook-up" onChange={this.handleChange} />

                <p>Washing Facilities</p>

                <label htmlFor="toilets">Toilets</label>
                <input type="checkbox" name="amentities" value="toilets" id="toilets" onChange={this.handleChange} />

                <label htmlFor="drinking-water">Drinking Water</label>
                <input type="checkbox" name="amentities" value="drinking-water" id="drinking-water" onChange={this.handleChange} />

                <label htmlFor="showers">Showers</label>
                <input type="checkbox" name="amentities" value="showers" id="showers" onChange={this.handleChange} />

                <label htmlFor="laundry">laundry</label>
                <input type="checkbox" name="amentities" value="laundry" id="laundry" onChange={this.handleChange} />


                <p>Power and Wifi</p>

                <label htmlFor="sockets">Power sockets</label>
                <input type="checkbox" name="amentities" value="sockets" id="sockets" onChange={this.handleChange} />

                <label htmlFor="wifi">WiFi</label>
                <input type="checkbox" name="amentities" value="wifi" id="wifi" onChange={this.handleChange} />

                <p>Cooking Facilities</p>

                <label htmlFor="kitchen">Kitchen</label>
                <input type="checkbox" name="amentities" value="kitchen" id="kitchen" onChange={this.handleChange} />

                <label htmlFor="firepit">Fire Pit</label>
                <input type="checkbox" name="amentities" value="firepit" id="firepit" onChange={this.handleChange} />

                <label htmlFor="bbq">BBQ</label>
                <input type="checkbox" name="amentities" value="bbq" id="bbq" onChange={this.handleChange} />

                <p>Accessibility</p>

                <label htmlFor="wheelchair-access">Wheelchair Access</label>
                <input type="checkbox" name="amentities" value="wheelchair-access" id="wheelchair-access" onChange={this.handleChange} />

                <p>Miscellaneous</p>

                <label htmlFor="swimming-pool">Swimming Pool</label>
                <input type="checkbox" name="amentities" value="swimming-pool" id="swimming-pool" onChange={this.handleChange} />

                <label htmlFor="playground">Playground</label>
                <input type="checkbox" name="amentities" value="playground" id="playground" onChange={this.handleChange} />

                <label htmlFor="pets">Pets Welcome</label>
                <input type="checkbox" name="amentities" value="pets" id="pets" onChange={this.handleChange} />

            </form >
        )
    }
};

export default Filter;