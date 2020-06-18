import { connect } from 'react-redux';
import { filterCampsites } from '../../data/actions/state';

import Card from './Card';

const mapStateToProps = state => {

    return {
        loadedList: state.loadedList,
        campsites: state.campsites.filter(campsite => (state.filterAmenities.every((amenity) => campsite.amenities.includes(amenity)))),
    };
};

const mapDispatchToProps = (dispatch) => ({
    handleLoad: () => dispatch(filterCampsites())
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);