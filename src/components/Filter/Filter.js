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

    componentDidMount() {
        this.props.handleMount()
    };

    render() {

        const { loadedList, listAmenities } = this.props;



        return (

            <div className="dropdown">

                <button class="dropbtn">Filter +</button>
                < ul className="dropdown-content" >

                    {listAmenities.map((amenity) => (
                        <li>
                            <label
                                htmlFor={amenity.amenity_name.toLowerCase().replace(" ", "-")}>{amenity.amenity_name}
                            </label>

                            <input
                                type="checkbox"
                                name="amentities"
                                value={amenity.amenity_name}
                                id={amenity.amenity_name.toLowerCase().replace(" ", "-")}
                                onChange={this.handleChange}
                            />
                        </li>
                    )
                    )}
                </ul >
            </div>
        )
    }
};

export default Filter;