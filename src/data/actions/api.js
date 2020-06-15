import { findCampsites } from './state';
// import below when we have API routes
// import axios from '../../axios';

import data from '../../components/campsites.json';

export const getCampsites = () => {

    console.log(data);

    return (dispatch) => {
        // input axios GET request here when we have API routes
        console.log(data);
        dispatch(findCampsites(data));
    };
};
