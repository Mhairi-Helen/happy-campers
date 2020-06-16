import { findCampsite, findCampsites, updateRegions, findReviews } from './state';

// import below when we have API routes
import axios from '../../axios';

// import campsites from '../../components/campsites.json';
// import campsite from '../../components/campsite.json';
// import regions from '../../components/regions.json';
import reviews from '../../reviews.json';

export const getCampsites = (id) => { // pass id into GET url
    return (dispatch) => {
        /**
         *  GET /regions/<id>
         */
        axios.get(`/regions/${id}`).then(({ data }) => {
            dispatch(findCampsites(data));
        })
    };
};

export const getCampsiteDetails = (id) => {
    return (dispatch) => {
        /**
         *  GET /campsites/<id>
         */
        axios.get(`/campsites/${id}`).then(({ data }) => {
            console.log(data);
            dispatch(findCampsite(data));
        })
    };
};

export const getRegions = () => {
    return (dispatch) => {
        /**
         *  GET /regions
         */
        axios.get('/regions').then(({ data }) => {
            dispatch(updateRegions(data));
        });
    };
};

export const getReviews = () => {
    return (dispatch) => {
        /** create new axios GET request here
         *  GET /campsites/<id>/reviews
         */
            dispatch(findReviews(reviews));
    };
};
