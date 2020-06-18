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



            <div className="dropdown">

                <button class="dropbtn">Filter +</button>
                < ul className="dropdown-content" >
                    <p className="dropdown-header">Pitch Type</p>

                    <li>
                        <label htmlFor="tent sites">Tent Sites</label>
                        <input type="checkbox" name="amentities" value="Tent sites" id="tent sites" onChange={this.handleChange} />
                    </li>
                    <li>
                        <label htmlFor="caravan sites">Caravan Sites</label>
                        <input type="checkbox" name="amentities" value="Caravan sites" id="caravan sites" onChange={this.handleChange} /></li>

                    <li>
                        <label htmlFor="caravan power">Caravan Power</label>
                        <input type="checkbox" name="amentities" value="Caravan power" id="caravan power" onChange={this.handleChange} /></li>

                    <p className="dropdown-header">Washing Facilities</p>
                    <li>
                        <label htmlFor="toilets">Toilets</label>
                        <input type="checkbox" name="amentities" value="Toilets" id="toilets" onChange={this.handleChange} /></li>
                    <li>
                        <label htmlFor="drinking water">Drinking Water</label>
                        <input type="checkbox" name="amentities" value="Drinking water" id="drinking water" onChange={this.handleChange} /></li>
                    <li>
                        <label htmlFor="showers">Showers</label>
                        <input type="checkbox" name="amentities" value="Showers" id="showers" onChange={this.handleChange} /></li>
                    <li>
                        <label htmlFor="laundry">Laundry</label>
                        <input type="checkbox" name="amentities" value="Laundry" id="laundry" onChange={this.handleChange} /></li>


                    <p className="dropdown-header">Power and Wifi</p>
                    <li>
                        <label htmlFor="household power">Household Power</label>
                        <input type="checkbox" name="amentities" value="Household power" id="household power" onChange={this.handleChange} /></li>
                    <li>
                        <label htmlFor="wifi">WiFi</label>
                        <input type="checkbox" name="amentities" value="wifi" id="Wifi" onChange={this.handleChange} /></li>

                    <p className="dropdown-header">Cooking Facilities</p>
                    <li>
                        <label htmlFor="kitchen">Kitchen</label>
                        <input type="checkbox" name="amentities" value="Kitchen" id="kitchen" onChange={this.handleChange} /></li>
                    <li>
                        <label htmlFor="firepit">Fire Pit</label>
                        <input type="checkbox" name="amentities" value="Firepits" id="firepit" onChange={this.handleChange} /></li>
                    <li>
                        <label htmlFor="barbeque">Barbeque</label>
                        <input type="checkbox" name="amentities" value="Barbeque" id="barbeque" onChange={this.handleChange} /></li>

                    <p className="dropdown-header">Accessibility</p>
                    <li>
                        <label htmlFor="wheelchair access">Wheelchair Access</label>
                        <input type="checkbox" name="amentities" value="Wheelchair access" id="wheelchair access" onChange={this.handleChange} />
                    </li>
                    <p className="dropdown-header">Miscellaneous</p>
                    <li>
                        <label htmlFor="swimming pool">Swimming Pool</label>
                        <input type="checkbox" name="amentities" value="Swimming pool" id="swimming pool" onChange={this.handleChange} />
                    </li> <li>
                        <label htmlFor="playground">Playground</label>
                        <input type="checkbox" name="amentities" value="Playground" id="playground" onChange={this.handleChange} />
                    </li>
                    <li>
                        <label htmlFor="pets">Pets Welcome</label>
                        <input type="checkbox" name="amentities" value="Pets welcome" id="pets" onChange={this.handleChange} />
                    </li>
                </ul >
            </div>
        )
    }
};

export default Filter;