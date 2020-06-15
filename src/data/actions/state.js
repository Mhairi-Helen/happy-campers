export const findCampsites = (data) => {

    console.log(data);

    return {
        type: "SEARCH",
        campsites: data.data
    };
};
