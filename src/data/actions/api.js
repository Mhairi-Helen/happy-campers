import { findCampsites } from './state';
import { updateRegions } from './state';
// import below when we have API routes
// import axios from '../../axios';

import campsites from '../../components/campsites.json';
import regions from '../../components/regions.json';

export const getCampsites = () => {
    return (dispatch) => {
        // input axios GET request here when we have API routes
        dispatch(findCampsites(campsites));
    };
};

export const getRegions = () => {
    return (dispatch) => {
        // input axios GET request here when we have API routes
        dispatch(updateRegions(regions));
    };
};
