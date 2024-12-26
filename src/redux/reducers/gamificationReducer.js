const initialState = {
    streak: 0,
    badges: [],
};

const gamificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT_STREAK':
            return {
                ...state,
                streak: state.streak + 1,
            };
        case 'RESET_STREAK':
            return {
                ...state,
                streak: 0,
            };
        case 'ADD_BADGE':
            return {
                ...state,
                badges: [...state.badges, action.payload],
            };
        default:
            return state;
    }
};

export default gamificationReducer;
