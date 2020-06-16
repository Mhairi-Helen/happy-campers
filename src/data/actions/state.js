export const findCampsites = (data) => {

    console.log(data);

    return {
        type: "SEARCH",
        campsites: data.data
    };
};

export const findCampsite = (data) => {
    return {
        type: "SEARCH",
        campsites: data.data
    };
};

export const updateRegions = (data) => {

    console.log(data);
    return {
        type: "REGIONS",
        regions: data.data

    };
};
