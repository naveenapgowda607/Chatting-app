# React Native Mobile Chat App Setup Guide 📱

## Quick Start

### Step 1: Install Expo CLI
```bash
npm install -g expo-cli
```

### Step 2: Create New React Native Project
```bash
cd mobile
npm install
```

### Step 3: Start Development Server
```bash
npm start
```

### Step 4: Run on Device/Emulator
- Press `i` for iOS Simulator
- Press `a` for Android Emulator
- Press `w` for Web

---

## 📂 Mobile App Structure

```
mobile/
├── app.json                 # Expo configuration
├── App.jsx                  # Root application
├── package.json             # Dependencies
├── config/
│   └── firebase.js         # Firebase setup
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

---

## 📦 Dependencies

```json
{
  "react": "18.2.0",
  "react-native": "0.73.4",
  "expo": "~50.0.0",
  "react-navigation": "^6.0.0",
  "@react-native-async-storage/async-storage": "^1.21.0",
  "firebase": "^10.5.0",
  "date-fns": "^2.30.0"
}
```

---

## 🔑 Key Features

### Authentication
- Email/Password signup
- Login with Firebase Auth
- User profile creation
- Session persistence

### Real-time Messaging
- Live chat with Firestore
- Message timestamps
- Read receipts
- Typing indicators (optional)

### User Presence
- Online/Offline status
- Last seen timestamp
- Real-time updates

### Encryption
- End-to-end message encryption
- TweetNaCl.js library
- Secure key exchange

---

## 🚀 Running on Different Platforms

### iOS Simulator
```bash
npm start
# Press 'i'
```

### Android Emulator
```bash
npm start
# Press 'a'
```

### Web Browser
```bash
npm start
# Press 'w'
```

### Physical Device (Expo Go)
1. Install **Expo Go** app from App Store/Google Play
2. Run `npm start`
3. Scan QR code with your phone

---

## 🔐 Firebase Integration

Same Firebase project as web app:
- **Project ID:** chatapp-81c13
- **Authentication:** Email/Password
- **Database:** Firestore
- **Storage:** Cloud Storage

All data syncs between web and mobile apps!

---

## 📱 Screen Flows

### Authentication Flow
```
SplashScreen
    ↓
LoginScreen ← → RegisterScreen
    ↓
ChatListScreen (after login)
```

### Chat Flow
```
ChatListScreen (User list)
    ↓
ChatScreen (Individual chat)
    ↓
Message display & input
```

---

## 🛠️ Building for Production

### iOS
```bash
eas build --platform ios
```

### Android
```bash
eas build --platform android
```

### Submit to App Store
```bash
eas submit --platform ios
```

### Submit to Google Play
```bash
eas submit --platform android
```

---

## 🐛 Troubleshooting

### Clear Cache
```bash
npm start -- --clear
```

### Reset Modules
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port Already in Use
```bash
lsof -i :19000
kill -9 <PID>
```

---

## 📚 Additional Resources

- [React Native Docs](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [Firebase for React Native](https://rnfirebase.io/)
- [React Navigation](https://reactnavigation.org/)

---

## ✨ Next Steps

1. Run `npm install` to install dependencies
2. Run `npm start` to start development
3. Use Expo Go app or emulator to test
4. Create test accounts and start chatting!

**Happy coding! 🚀**
