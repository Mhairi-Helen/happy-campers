import { connect } from 'react-redux';
import { getRegions } from '../../data/actions/api';

import TempForm from './TempForm';

const mapStateToProps = state => {
    return {
        loadedRegions: state.loadedRegions,
        regions: state.regions,
    };
};

const mapDispatchToProps = (dispatch) => ({
    handleRegionsLoad: () => dispatch(getRegions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TempForm);


