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

// const mapStateToProps = (state, ownProps) => {
//     return {
//         name: state.campsites.find((site) => {
//             return site.id === +ownProps.campsite_id;
//         })
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps)(Campsite);