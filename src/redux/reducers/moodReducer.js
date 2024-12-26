const initialState = {
    moods: [],
};

const moodReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MOOD':
            return {
                ...state,
                moods: [...state.moods, action.payload],
            };
        case 'CLEAR_MOODS':
            return {
                ...state,
                moods: [],
            };
        default:
            return state;
    }
};

export default moodReducer;
