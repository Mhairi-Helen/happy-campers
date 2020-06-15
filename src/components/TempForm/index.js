import { connect } from 'react-redux';
import { getRegions } from '../../data/actions/api';
import history from '../../history';

import TempForm from './TempForm';

const mapStateToProps = state => {
    return {
        loadedRegions: state.loadedRegions,
        regions: state.regions,
    };
};

const mapDispatchToProps = (dispatch) => ({

            handleRegionsLoad: () => dispatch(getRegions()),
            handleSubmit: () => { console.log("submitting data for GET request");
            history.push('/campsites')
        },

});

export default connect(mapStateToProps, mapDispatchToProps)(TempForm);


