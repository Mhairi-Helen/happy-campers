import React, { Component } from 'react';
class TempForm extends Component {

    constructor(props) {
        super(props);
        this.state = { value: "1" }
        this.handleSelect = this.handleSelect.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        if(!this.props.loaded) {
            this.props.handleRegionsLoad();
        };
    };

    handleChange(e) {
        this.setState({ value: e.currentTarget.value })
    }

    handleSelect(e) {
        e.preventDefault();
        // console.log(`You selected campsites near region id: ${this.state.value}`);
        this.props.handleSubmit(this.state.value);
    }

    render() {

        const { regions } = this.props;

        return(
            <>
                <form onSubmit={ this.handleSelect }>
                    <label>Where do you want to camp?</label>
                    <select onChange={ this.handleChange } value={ this.state.value }>
                        { regions.map((region, index) => (
                            <option
                                key={ index }
                                value={ region.id }>
                                    { region.region_name }
                            </option>
                        ))}
                    </select>

                <button>Search</button>

                </form>

            </>
        )
    }
}

export default TempForm;