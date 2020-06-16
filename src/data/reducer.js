

const loadRegions = (state, { regions }) => ({
    ...state,
    regions: regions,
    loadedRegions: true
})

const loadCampsites = (state, { campsites }) => ({
    ...state,
    campsites: campsites,
    loaded: true
})

const reducer = (state, action) => {
    switch(action.type) {
        case "SEARCH": return loadCampsites(state, action);
        case "REGIONS": return loadRegions(state, action);
        default: return state;
    }
}

export default reducer;