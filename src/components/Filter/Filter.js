import React, { Component } from "react";
import Dropdown from 'react-bootstrap/Dropdown'

class Filter extends Component {


    handleChange = (e) => {

        let newAmenities = [...this.props.filterAmenities];

        if (e.currentTarget.checked) {
            newAmenities.push(e.currentTarget.value);
        } else {
            newAmenities = newAmenities.filter((amenity) => (amenity !== e.currentTarget.value))
        };

        this.props.handleSaveSettings(newAmenities);
    }

    render() {

        const { loadedList, amenities } = this.props;

        // { ammenities.map(amenity => (
        //     <div key={ amenity.id }>
        //       <label>
        //       <input>
        //     </div>
        //  )) }

        return (






            < form >
                <p>Pitch Type</p>

                <label htmlFor="tent-sites">Tent Sites</label>
                <input type="checkbox" name="amentities" value="tent-sites" id="tent-sites" onChange={this.handleChange} />

                <label htmlFor="caravan-sites">Caravan Sites</label>
                <input type="checkbox" name="amentities" value="caravan-sites" id="caravan-sites" onChange={this.handleChange} />

                <label htmlFor="hard-standing">Hard Standing</label>
                <input type="checkbox" name="amentities" value="hard-standing" id="hard-standing" onChange={this.handleChange} />

                <label htmlFor="caravan-power">Caravan Power</label>
                <input type="checkbox" name="amentities" value="caravan-power" id="caravan-power" onChange={this.handleChange} />

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

                <label htmlFor="household-power">Household Power</label>
                <input type="checkbox" name="amentities" value="household-power" id="household-power" onChange={this.handleChange} />

                <label htmlFor="wifi">WiFi</label>
                <input type="checkbox" name="amentities" value="wifi" id="wifi" onChange={this.handleChange} />

                <p>Cooking Facilities</p>

                <label htmlFor="kitchen">Kitchen</label>
                <input type="checkbox" name="amentities" value="kitchen" id="kitchen" onChange={this.handleChange} />

                <label htmlFor="firepit">Fire Pit</label>
                <input type="checkbox" name="amentities" value="firepit" id="firepit" onChange={this.handleChange} />

                <label htmlFor="barbeque">Barbeque</label>
                <input type="checkbox" name="amentities" value="barbeque" id="barbeque" onChange={this.handleChange} />

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