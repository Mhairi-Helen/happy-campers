import { connect } from 'react-redux';
import Campsite from './Campsite';
//import { campsite } from '../../data/actions';


const mapStateToProps = (state, ownProps) => {

    return {
        campsite: state.campsites.find((site) => {
            return site.id === +ownProps.campsite_id;
        })
    }
};



const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps)(Campsite);