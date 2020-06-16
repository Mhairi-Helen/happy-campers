

const loadRegions = (state, { regions }) => ({
    ...state,
    regions: regions,
    loadedRegions: true
})

const loadCampsites = (state, { campsites }) => ({
    ...state,
    campsites: campsites,
    loadedList: true,
})


const loadCampsite = (state, action) => ({
    ...state,
    currentCampsite: action.currentCampsite,
    loadedListItem: true
})

const reducer = (state, action) => {
    switch(action.type) {
        case "FIND_CAMPSITE": return loadCampsite(state, action);
        case "FIND_CAMPSITES": return loadCampsites(state, action);
        case "REGIONS": return loadRegions(state, action);
        default: return state;
    }
}

export default reducer;