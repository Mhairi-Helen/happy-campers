import { connect } from 'react-redux';
import { getCampsiteDetails } from '../../data/actions/api'

import TempListItem from './TempListItem';

const mapStateToProps = state => {
    return {
        campsites: state.campsites,
    };
};

const mapDispatchToProps = (dispatch) => ({
    handleCampsiteLoad: () => dispatch(getCampsiteDetails()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TempListItem);


