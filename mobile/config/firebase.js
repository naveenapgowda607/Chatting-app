import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBKdjX2DAcgT_yklBZdTe9D6hIbQAiE-vc",
  authDomain: "chatapp-81c13.firebaseapp.com",
  projectId: "chatapp-81c13",
  storageBucket: "chatapp-81c13.firebasestorage.app",
  messagingSenderId: "907954904111",
  appId: "1:907954904111:web:f4245d78b8d46b898fbada"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
