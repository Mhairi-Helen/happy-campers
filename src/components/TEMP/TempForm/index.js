import { connect } from 'react-redux';
import { getRegions, getCampsites } from '../../data/actions/api';
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
            handleSubmit: id => { dispatch(getCampsites(id));
            history.push('/campsites')
        },

});

export default connect(mapStateToProps, mapDispatchToProps)(TempForm);


