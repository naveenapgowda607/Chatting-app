# Chat App - React Native Mobile 📱

A fully-featured professional chat application built with React Native, Expo, and Firebase.

## ✨ Features

- ✅ **Cross-Platform:** iOS and Android
- ✅ **User Authentication:** Email/Password login and registration
- ✅ **Real-time Messaging:** Firestore real-time database
- ✅ **User Presence:** Online/Offline status indicators
- ✅ **Message Encryption:** End-to-end encryption support
- ✅ **User Search:** Find and add contacts easily
- ✅ **Read Receipts:** Message delivery confirmation
- ✅ **Responsive Design:** Works on all screen sizes
- ✅ **Offline Support:** Local message caching

## 🛠️ Prerequisites

- Node.js (v16 or higher)
- Expo CLI: `npm install -g expo-cli`
- iOS: Xcode (for iOS testing)
- Android: Android Studio (for Android testing)

## 📦 Installation

```bash
# 1. Navigate to mobile directory
cd mobile

# 2. Install dependencies
npm install

# 3. Start development server
npm start
```

## 🚀 Running on Device/Emulator

### iOS Simulator
```bash
npm run ios
```

### Android Emulator
```bash
npm run android
```

### Web (Browser Testing)
```bash
npm run web
```

## 📱 Using Expo Go App

1. Download **Expo Go** from App Store or Google Play
2. Run `npm start`
3. Scan QR code with your phone

## 📂 Project Structure

```
mobile/
├── app.json                    # Expo configuration
├── App.jsx                     # Root component
├── package.json                # Dependencies
├── config/
│   └── firebase.js            # Firebase setup
├── screens/
│   ├── Auth/
│   │   ├── LoginScreen.jsx
│   │   └── RegisterScreen.jsx
│   ├── Chat/
│   │   ├── ChatListScreen.jsx
│   │   └── ChatScreen.jsx
│   └── SplashScreen.jsx
├── services/
│   ├── authService.js
│   ├── messageService.js
│   └── userService.js
├── hooks/
│   └── useAuth.js
├── navigation/
│   ├── AuthNavigator.jsx
│   └── ChatNavigator.jsx
└── utils/
    └── encryption.js
```

## 📚 Tech Stack

| Component | Technology |
|-----------|-----------|
| **Framework** | React Native + Expo |
| **Navigation** | React Navigation |
| **Backend** | Firebase (same as web) |
| **Storage** | AsyncStorage |
| **Encryption** | TweetNaCl.js |
| **Dates** | date-fns |

## 🔧 Building for Production

### iOS Build
```bash
npm run build-ios
```

### Android Build
```bash
npm run build-android
```

## 🔐 Configuration

Firebase credentials are in `config/firebase.js`. They're shared with the web app for seamless sync.

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Port already in use | `npm start -- --clear` |
| Module not found | `rm -rf node_modules && npm install` |
| Firebase not working | Check Firestore rules and API keys |
| Build fails | Clear cache: `expo start -c` |

## 📄 License

MIT
