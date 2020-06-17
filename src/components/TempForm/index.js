import { connect } from 'react-redux';
import { getRegions, getCampsites } from '../../data/actions/api';
import history from '../../history';

import Search from './Search';

const mapStateToProps = state => {
    return {
        loadedRegions: state.loadedRegions,
        regions: state.regions,
    };
};

const mapDispatchToProps = (dispatch) => ({

    /**
     *  refactor this and move getCampsites to the component that receives the data on componentDidMount
     */

            handleRegionsLoad: () => dispatch(getRegions()),
            handleSubmit: id => { dispatch(getCampsites(id));
            history.push('/campsites')
        },

});

export default connect(mapStateToProps, mapDispatchToProps)(Search);


