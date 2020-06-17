export const findCampsites = (data) => {
    return {
        type: "FIND_CAMPSITES",
        campsites: data.data
    };
};

export const findCampsite = (data) => {
    return {
        type: "FIND_CAMPSITE",
        currentCampsite: data.data
    };
};

export const updateRegions = (data) => {
    return {
        type: "REGIONS",
        regions: data.data
    };
};

export const findReviews = (data) => {
    return {
        type: "FIND_REVIEWS",
        reviews: data.data
    };
};
