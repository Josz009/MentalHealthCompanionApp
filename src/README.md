// README.md

# Mental Health Companion App

A feature-rich app designed to support mental health by enabling journaling, mood tracking, gamification, and personalization.

## Features

- **Mood Tracker**: Log your daily mood and view trends via dynamic charts.
- **Journal**: Write your thoughts with AI-driven journaling prompts.
- **Gamification**: Track streaks and earn badges to stay motivated.
- **Localization**: Multi-language support (English and Spanish).
- **Offline Mode**: Access key features without an internet connection.
- **Professional Help**: Schedule appointments and access resources.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Josz009/MentalHealthCompanionApp.git
   cd MentalHealthCompanionApp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the app:
   ```bash
   expo start
   ```

## Usage

1. **Running on Web**:
   ```bash
   expo start --web
   ```
2. **Running on Android**:
   ```bash
   expo start --android
   ```
3. **Running on iOS**:
   ```bash
   expo start --ios
   ```

## File Structure

```
MentalHealthCompanionApp/
├── src/
│   ├── components/          # Reusable UI components
│   ├── screens/             # App screens (Home, MoodTracker, Journal, etc.)
│   ├── redux/               # Redux store and reducers
│   ├── services/            # External services (Firebase, AI integration)
│   ├── utils/               # Utility functions (themes, localization)
├── assets/                  # Static assets (images, icons, animations)
├── App.js                   # App entry point
├── package.json             # Dependency management
└── README.md                # Documentation
```

## Dependencies

- **React Navigation**: For app navigation.
- **Redux**: State management.
- **Victory Native**: Dynamic charting.
- **Firebase**: Backend for authentication and storage.
- **Expo**: Cross-platform development.

## Contribution

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request for review.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
