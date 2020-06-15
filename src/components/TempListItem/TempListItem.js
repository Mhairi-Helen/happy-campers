import React, { Component } from 'react';

class TempListItem extends Component {

    componentDidMount() {

        const { id } = this.props;


    };

    render() {

        const { loaded, campsites } = this.props;

        return !loaded ? <p>Loading... </p> : (
            <article>
                <header>Campsite 1</header>
                <p>Subheading here</p>
                <p>Description of campsite here... </p>
                <footer>
                    <button>Action button</button>
                </footer>
            </article>
        )
    }
}

export default TempListItem;