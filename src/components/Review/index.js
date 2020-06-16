import { connect } from 'react-redux';
import { getReviews } from '../../data/actions/api'

import Review from './Review';

const mapStateToProps = state => {
    return {
        loadedReviews: state.loadedReviews,
        reviews: state.reviews,
    };
};

const mapDispatchToProps = (dispatch) => ({
    handleReviewsLoad: () => dispatch(getReviews()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Review);


