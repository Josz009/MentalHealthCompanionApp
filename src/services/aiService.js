import axios from 'axios';

const AI_API_URL = 'https://api.example.com/generate-prompt';

export const getJournalingPrompt = async (userMood) => {
    try {
        const response = await axios.post(AI_API_URL, {
            mood: userMood,
        });
        return response.data.prompt;
    } catch (error) {
        console.error('Error fetching journaling prompt:', error);
        return 'Write about your day and how you feel.';
    }
};
