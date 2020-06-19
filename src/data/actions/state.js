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

export const filterCampsites = (data) => {
    return {
        type: "FILTER_CAMPSITES",
        filter: data
    };
};


export const listAmenities = (data) => {
    return {
        type: "LIST_AMENITIES",
        amenities: data.data
    };
};
