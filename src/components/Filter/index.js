import { connect } from 'react-redux';
import { filterCampsites } from '../../data/actions/state';
import Filter from './Filter';

const mapStateToProps = state => {
    return {
        filterAmenities: state.filterAmenities,
    };
};

const mapDispatchToProps = (dispatch) => ({
    handleSaveSettings: (data) => dispatch(filterCampsites(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);