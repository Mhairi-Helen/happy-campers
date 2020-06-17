import React, { Component } from 'react';

class Review extends Component {

    componentDidMount() {
       this.props.handleReviewsLoad(this.props.id);
    }

    render() {

        const { reviews, loadedReviews } = this.props;

        return !loadedReviews ? <p>Loading...</p> : (
            <>
                <h1>Reviews</h1>
                { reviews.length === 0 ? <p>No reviews found. Be the first to leave a review.</p> : (
                    reviews.map((review, index) => (
                        <div key={ index }>
                            <p>
                                <strong>
                                    User: { review.username }
                                </strong>
                            </p>
                            <p>
                                <em>
                                    { review.date_posted }
                                </em>
                            </p>
                            <p>Rating: { review.rating }</p>
                            <p>{ review.review_description }</p>
                        </div>
                    ))
                )}
            </>
        )
    }

}


export default Review;