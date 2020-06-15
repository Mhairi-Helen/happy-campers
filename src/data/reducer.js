

const loadCampsites = (state, { campsites }) => ({
    ...state,
    campsites: campsites,
    loaded: true
})



const reducer = (state, action) => {
    switch(action.type) {
        case "SEARCH": return loadCampsites(state, action);
        default: return state;
    }
}



export default reducer;