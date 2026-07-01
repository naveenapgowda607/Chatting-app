# Professional Chat Application

A fully-featured professional chat application built with React, Firebase, and modern web technologies. Similar to WhatsApp and Signal with end-to-end encryption support.

## Features

- ✅ **User Authentication** - Email/Phone signup and login
- ✅ **Real-time Messaging** - Instant message delivery via Firestore
- ✅ **One-to-One Chat** - Direct messaging between users
- ✅ **Group Chat** - Create and manage group conversations
- ✅ **User Presence** - Online/Offline status indicators
- ✅ **Typing Indicators** - See when users are typing
- ✅ **Message Read Receipts** - Know when messages are read
- ✅ **File Sharing** - Share images, documents, and media
- ✅ **User Search** - Find and add contacts
- ✅ **Responsive Design** - Works on desktop, tablet, and mobile
- ✅ **End-to-End Encryption** - Message encryption support

## Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Firebase (Authentication, Firestore, Storage)
- **Real-time:** Firestore Real-time Database
- **Encryption:** libsignal-protocol / TweetNaCl.js
- **State Management:** Context API / Redux
- **Routing:** React Router

## Installation

```bash
npm install
```

## Configuration

Add your Firebase credentials in `src/config/firebase.js`:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

## Running the Application

```bash
npm start
```

The application will run on `http://localhost:3000`

## Project Structure

```
src/
├── config/
│   └── firebase.js
├── pages/
│   ├── Auth/
│   ├── Chat/
│   └── Dashboard.jsx
├── components/
├── services/
├── hooks/
├── utils/
├── App.jsx
└── index.js
```

## License

MIT
