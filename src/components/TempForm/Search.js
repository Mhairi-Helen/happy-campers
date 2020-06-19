import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Search extends Component {

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
        this.props.handleSubmit(this.state.value);
    }

    render() {

        const { regions } = this.props;

        return(
                <div className="search">
                    <form
                        className="search__container"
                        >
                        <label className="display-2 search__text">Where's your next adventure?</label>

                        <select onChange={ this.handleChange } value={ this.state.value }>
                            { regions.map((region, index) => (
                                <option
                                    key={ index }
                                    value={ region.id }>
                                        { region.region_name }
                                </option>
                            ))}
                        </select>

                    </form>

                    <Link to={`/region/${this.state.value}/campsites`}>
                        <button className="search__button">Explore</button>
                    </Link>
                </div>
        )
    }
}

export default Search;