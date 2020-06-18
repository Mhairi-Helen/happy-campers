import React, { Component } from 'react';

class Review extends Component {

    componentDidMount() {
       this.props.handleReviewsLoad(this.props.id);
    }

    render() {

        const { reviews, loadedReviews } = this.props;

        return !loadedReviews ? <p>Loading...</p> : (
            <div className="review-container">
                <h1>Reviews</h1>
                { reviews.length === 0 ? <p>No reviews found. Be the first to leave a review.</p> : (
                    reviews.map((review, index) => (
                        <div key={ index } className="review-card">
                            <div className="review-header">
                                <img src={require("../../assets/icons/user.svg")} alt="user"/>
                                <div>
                                    <p>
                                        <strong>
                                            User: { review.username }
                                        </strong>
                                    </p>
                                    <p className="review-date">
                                        <em>
                                            { review.date_posted }
                                        </em>
                                    </p>
                                </div>
                            </div>
                            <p>Rating: { review.rating }</p>
                            <p>{ review.review_description }</p>
                        </div>
                    ))
                )}
            </div>
        )
    }

}


export default Review;