import React, { Component } from 'react';

import { connect } from 'react-redux';


class TempForm extends Component {

    componentDidMount() {
        if(!this.props.loaded) {
            this.props.handleRegionsLoad();
        };
    };


    render() {

        const { regions } = this.props;

        return(
            <>
                <form>
                    <label>Where do you want to camp?</label>
                    <select>
                        { regions.map((region, index) => (
                            <option key={ index }>{ region.region_name }</option>
                        ))}
                    </select>
                </form>

                <button>Search</button>
            </>
        )
    }
}

export default TempForm;