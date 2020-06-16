import { connect } from 'react-redux';
// import { getReviews } from '../../data/actions/api'

import Review from './Review';

const mapStateToProps = state => {
    return {
        name: "bob",
    };
};

const mapDispatchToProps = (dispatch) => ({
    handleCommentsLoad: () => console.log("loaded")
});

export default connect(mapStateToProps, mapDispatchToProps)(Review);


