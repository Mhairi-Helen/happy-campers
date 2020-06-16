

const loadRegions = (state, { regions }) => ({
    ...state,
    regions: regions,
    loadedRegions: true
})

const loadCampsites = (state, { campsites }) => ({
    ...state,
    campsites: campsites,
    loadedList: true,
    loadedListItem: true // temporary addition for changes below
})

/**
 *
 * @param {*} state
 * @param {*} campsite
 *
 *  checkCampsiteExists and loadCampsite need work
 *  need to identify if campsite exists in state already and what index its in then push additional data to that object
 */
const checkCampsiteExists = (state, campsite) => (
    this.state.campsites.some(site => site.id === campsite.id ) ? this.state.campsites.indexOf(this.state.campsites.site) : 0
)

const loadCampsite = (state, { campsite }) => ({

    ...state,
    campsites: [...state.campsite, ...state[checkCampsiteExists(state, campsite)][campsite]],
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