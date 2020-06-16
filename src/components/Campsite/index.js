import { connect } from 'react-redux';
import { getCampsiteDetails } from '../../data/actions/api'

import Campsite from './Campsite';

const mapStateToProps = state => {

    return {
        loadedListItem: state.loadedListItem,
        campsite: state.currentCampsite,
    };
};

const mapDispatchToProps = (dispatch) => ({
    handleCampsiteLoad: id => dispatch(getCampsiteDetails(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Campsite);


