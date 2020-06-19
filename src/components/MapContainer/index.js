import { connect } from 'react-redux';
import { getCampsiteCoords } from '../../data/actions/api'
import MapContainer from './MapContainer';

const mapStateToProps = state => {
    return {
        loadedList: state.loadedList,
        campsite: state.campsites,
    };
};

export default connect(mapStateToProps)(MapContainer);


