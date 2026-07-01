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
- **Encryption:** TweetNaCl.js
- **State Management:** Context API
- **Routing:** React Router

## Installation

```bash
npm install
```

## Running the Application

```bash
npm run dev
```

The application will run on `http://localhost:3000`

## Project Structure

```
src/
├── config/
│   └── firebase.js
├── pages/
│   ├── Auth/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── auth.css
│   ├── Chat/
│   │   ├── ChatWindow.jsx
│   │   ├── MessageList.jsx
│   │   ├── UserList.jsx
│   │   └── chat.css
│   └── Dashboard.jsx
├── components/
│   ├── MessageInput.jsx
│   ├── UserProfile.jsx
│   └── components.css
├── services/
│   ├── authService.js
│   ├── messageService.js
│   └── userService.js
├── hooks/
│   └── useAuth.js
├── utils/
│   └── encryption.js
├── App.jsx
├── App.css
├── index.jsx
└── index.css
```

## Configuration

Firebase configuration is already set up in `src/config/firebase.js` with your credentials.

## Key Features

### Authentication
- Sign up with email and password
- Sign in with email and password
- Automatic user profile creation
- User presence tracking

### Messaging
- Real-time message delivery
- Message encryption support (TweetNaCl.js)
- Read receipts
- Timestamps for all messages
- Message editing support (foundation)

### User Management
- Search for users by display name
- View user online status
- User profile information
- Contact list

## Security Features

- ✅ End-to-end encryption utilities
- ✅ Secure authentication with Firebase
- ✅ Real-time presence tracking
- ✅ Message encryption support

## Future Enhancements

- [ ] Group chat support
- [ ] File and media sharing
- [ ] Voice and video calling
- [ ] Message search
- [ ] User typing indicators
- [ ] Message reactions
- [ ] User blocking
- [ ] Message forwarding

## License

MIT