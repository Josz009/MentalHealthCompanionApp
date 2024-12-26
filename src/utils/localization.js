const translations = {
    en: {
        welcome: 'Welcome Back!',
        moodTracker: 'Mood Tracker',
        journal: 'Journal',
        settings: 'Settings',
        darkMode: 'Dark Mode',
        language: 'Language',
    },
    es: {
        welcome: '¡Bienvenido de nuevo!',
        moodTracker: 'Rastreador de estado de ánimo',
        journal: 'Diario',
        settings: 'Configuración',
        darkMode: 'Modo oscuro',
        language: 'Idioma',
    },
};

export const translate = (key, language = 'en') => {
    return translations[language][key] || key;
};
