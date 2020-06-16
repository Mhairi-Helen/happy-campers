import React, { Component } from 'react';

class Review extends Component {

    componentDidMount() {
       this.props.handleCommentsLoad();
    }

    render() {



        const { name } = this.props;

        return(
            <>
                <h1>Reviews</h1>

                <div>
                    <p>{ name }</p>
                    <p>16/06/2020</p>
                    <p>Adipisicing nulla incididunt in voluptate ad. Duis sint reprehenderit velit sint et laboris irure eiusmod amet nostrud nulla cillum do ea. Magna mollit nisi aute ut exercitation eu labore nostrud. Laborum ullamco deserunt est aliquip.</p>
                </div>
            </>
        )
    }

}


export default Review;