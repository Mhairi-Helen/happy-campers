

const loadRegions = (state, { regions }) => ({
    ...state,
    regions: regions,
    loadedRegions: true
})

const loadCampsites = (state, { campsites }) => ({
    ...state,
    campsites: campsites,
    loadedList: true
})

const loadCampsite = (state, { campsites }) => ({

    ...state,
    campsites: campsites,
    loadedListItem: true
})

const reducer = (state, action) => {
    switch(action.type) {
        case "UPDATE": return loadCampsite(state, action);
        case "SEARCH": return loadCampsites(state, action);
        case "REGIONS": return loadRegions(state, action);
        default: return state;
    }
}

export default reducer;