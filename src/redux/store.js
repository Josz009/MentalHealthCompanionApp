import { configureStore } from '@reduxjs/toolkit';
import moodReducer from './reducers/moodReducer';
import journalReducer from './reducers/journalReducer';
import gamificationReducer from './reducers/gamificationReducer';

const store = configureStore({
    reducer: {
        mood: moodReducer,
        journal: journalReducer,
        gamification: gamificationReducer,
    },
});

export default store;
