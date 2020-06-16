import { connect } from 'react-redux';
import { getCampsites } from '../../data/actions/api';

import TempListing from './TempListing';

const mapStateToProps = state => {
    return {
        loaded: state.loaded,
        campsites: state.campsites,
        test: state.test,
    };
};

const mapDispatchToProps = (dispatch) => ({
    handleLoad: () => dispatch(getCampsites())
});

export default connect(mapStateToProps, mapDispatchToProps)(TempListing);


