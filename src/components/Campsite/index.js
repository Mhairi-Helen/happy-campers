import { connect } from 'react-redux';
import Campsite from './Campsite';
//import { campsite } from '../../data/actions';


const mapStateToProps = (state) => {

    return {
        name: state.campsite_name,
        location: state.town_city,
        rating: state.rating,
        ammenities: state.ammenities,
        price: state.price,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps)(Campsite);