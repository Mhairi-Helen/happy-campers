export const findCampsites = (data) => {
    return {
        type: "SEARCH",
        campsites: data.data
    };
};

export const findCampsite = (data) => {
    return {
        type: "UPDATE",
        campsites: data.data
    };
};

export const updateRegions = (data) => {
    return {
        type: "REGIONS",
        regions: data.data

    };
};
