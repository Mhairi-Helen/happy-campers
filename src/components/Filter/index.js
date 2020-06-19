import { connect } from 'react-redux';
import { filterCampsites } from '../../data/actions/state';
import Filter from './Filter';
import { getAmenities } from '../../data/actions/api';

const mapStateToProps = state => {
    return {
        filterAmenities: state.filterAmenities,
        listAmenities: state.amenities,
    };
};

const mapDispatchToProps = (dispatch) => ({
    handleSaveSettings: (data) => dispatch(filterCampsites(data)),
    handleMount: () => dispatch(getAmenities())

});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);