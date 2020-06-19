import { connect } from 'react-redux';
import { filterCampsites } from '../../data/actions/state';
import { getCampsites } from '../../data/actions/api';

import Card from './Card';

const mapStateToProps = state => {

    return {
        loadedList: state.loadedList,
        campsites: (state.campsites.filter(campsite => {
            return (state.filterAmenities.every((amenity) => {
                return campsite.amenities.includes(amenity)
            }))
        })),

    };
};

const mapDispatchToProps = (dispatch) => ({
    handleLoad: () => dispatch(filterCampsites()),
    handleCampsitesLoad: id => dispatch(getCampsites(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);