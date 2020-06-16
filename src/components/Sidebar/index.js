import { connect } from 'react-redux';
import Sidebar from './SideBar';
//import { card } from '../../data/actions';


const mapStateToProps = state => {
    return {


        /** causing errors so commented out
         *
         * name: state.campsites.find((site) => {
            return site.id === +ownProps.campsite_id;
        })
         */

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);