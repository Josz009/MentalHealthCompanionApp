const initialState = {
    entries: [],
};

const journalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ENTRY':
            return {
                ...state,
                entries: [...state.entries, action.payload],
            };
        case 'CLEAR_ENTRIES':
            return {
                ...state,
                entries: [],
            };
        default:
            return state;
    }
};

export default journalReducer;
