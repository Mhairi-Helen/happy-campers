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

const loadCampsite = (state, { currentCampsite }) => ({
    ...state,
    currentCampsite: currentCampsite,
    loadedListItem: true
})

const loadReviews = (state, { reviews }) => ({
    ...state,
    reviews: reviews,
    loadedReviews: true
})

const reducer = (state, action) => {
    switch(action.type) {
        case "FIND_REVIEWS": return loadReviews(state, action);
        case "FIND_CAMPSITE": return loadCampsite(state, action);
        case "FIND_CAMPSITES": return loadCampsites(state, action);
        case "REGIONS": return loadRegions(state, action);
        default: return state;
    }
}

export default reducer;