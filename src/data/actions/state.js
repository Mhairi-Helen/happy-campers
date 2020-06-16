export const findCampsites = (data) => {
    return {
        type: "SEARCH",
        campsites: data.data
    };
};

export const findCampsite = (data) => {

    console.log(data);
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
