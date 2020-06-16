import { connect } from 'react-redux';
import { getReviews } from '../../data/actions/api'

import Review from './Review';

const mapStateToProps = state => {
    return {
        name: "bob",
    };
};

const mapDispatchToProps = (dispatch) => ({
    handleReviewLoad: id => dispatch(getReviewDetails(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Review);


