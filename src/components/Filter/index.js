import { connect } from 'react-redux';
// import { getCampsites } from '../../data/actions/api';
import Filter from './Filter';

const mapStateToProps = state => {
    return {
        // loadedList: state.loadedList,
        campsites: state.campsites,

        //write a function here to filter out the campsites
    };
};

// const mapDispatchToProps = (dispatch) => ({
//     handleLoad: () => dispatch(getCampsites())
// });

export default connect(mapStateToProps)(Filter);