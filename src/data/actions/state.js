export const findCampsites = (data) => {
    return {
        type: "SEARCH",
        campsites: data.data
    };
};


/**
 *  temporarily altered to SEARCH but should be UPDATE
 * @param {*} data
 */
export const findCampsite = (data) => {
    return {
        type: "SEARCH",
        campsites: data.data
    };
};

export const updateRegions = (data) => {
    return {
        type: "REGIONS",
        regions: data.data

    };
};
