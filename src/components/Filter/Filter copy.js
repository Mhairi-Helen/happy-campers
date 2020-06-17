import React, { Component } from "react";
import { Dropdown } from 'react-bootstrap';



class Filter extends Component {

    handleChange = () => {

        return console.log("hello")
    };

    render() {
        console.log("hello")

        const { loadedList, amenities } = this.props;

        return (
            <Dropdown.Menu show>
                <h6>Pitch Type</h6>
                <Dropdown.Item eventKey="1"><input type="checkbox" name="amentities" value="tent-pitches" onChange={this.handleChange} />Tent Pitches</Dropdown.Item>
                <Dropdown.Item eventKey="2"><input type="checkbox" name="amentities" value="caravan pitches" onChange={this.handleChange} />Caravan Pitches</Dropdown.Item>
                <Dropdown.Item eventKey="3"><input type="checkbox" name="amentities" value="hard-standing" onChange={this.handleChange} />Hard Standing</Dropdown.Item>
                <Dropdown.Item eventKey="4"><input type="checkbox" name="amentities" value="caravan-power-point" onChange={this.handleChange} />Caravan Power Point</Dropdown.Item>
                <Dropdown.Divider onChange={this.handleChange} />
                <h6>Washing Facilities</h6>
                <Dropdown.Item eventKey="5"><input type="checkbox" name="amentities" value="toilets" onChange={this.handleChange} />Toilets</Dropdown.Item>
                <Dropdown.Item eventKey="6"><input type="checkbox" name="amentities" value="drinking-water" onChange={this.handleChange} />Drinking Water</Dropdown.Item>
                <Dropdown.Item eventKey="7"><input type="checkbox" name="amentities" value="showers" onChange={this.handleChange} />Showers</Dropdown.Item>
                <Dropdown.Item eventKey="8"><input type="checkbox" name="amentities" value="laundry" onChange={this.handleChange} />Laundry</Dropdown.Item>
                <Dropdown.Divider onChange={this.handleChange} />
                <h6>Power and Wifi</h6>
                <Dropdown.Item eventKey="9"><input type="checkbox" name="amentities" value="sockets" onChange={this.handleChange} />Power Sockets</Dropdown.Item>
                <Dropdown.Item eventKey="10"><input type="checkbox" name="amentities" value="wifi" onChange={this.handleChange} />WiFi</Dropdown.Item>
                <Dropdown.Divider onChange={this.handleChange} />
                <h6>Cooking Facilities</h6>
                <Dropdown.Item eventKey="11"><input type="checkbox" name="amentities" value="kitchen" onChange={this.handleChange} />Kitchen</Dropdown.Item>
                <Dropdown.Item eventKey="12"><input type="checkbox" name="amentities" value="bbq" onChange={this.handleChange} />BBQ</Dropdown.Item>
                <Dropdown.Item eventKey="13"><input type="checkbox" name="amentities" value="firepits" onChange={this.handleChange} />Fire Pits</Dropdown.Item>
                <Dropdown.Divider onChange={this.handleChange} />
                <h6>Accessibility</h6>
                <Dropdown.Item eventKey="14"><input type="checkbox" name="amentities" value="wheelchair-access" onChange={this.handleChange} />Wheelchair Access</Dropdown.Item>
                <Dropdown.Divider onChange={this.handleChange} />
                <h6>Miscellaneous</h6>
                <Dropdown.Item eventKey="15"><input type="checkbox" name="amentities" value="swimming-pool" onChange={this.handleChange} />Swimming Pool</Dropdown.Item>
                <Dropdown.Item eventKey="16"><input type="checkbox" name="amentities" value="playground" onChange={this.handleChange} />Playground</Dropdown.Item>
                <Dropdown.Item eventKey="17"><input type="checkbox" name="amentities" value="pets-welcome" onChange={this.handleChange} />Pets Welcome</Dropdown.Item>
            </Dropdown.Menu>
        )
    }
}

export default Filter;