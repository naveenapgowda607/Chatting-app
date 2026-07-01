import { auth, db } from '../config/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { generateKeyPair } from '../utils/encryption';

export const createUserProfile = async (userId, email, displayName) => {
  try {
    const keyPair = generateKeyPair();
    
    await setDoc(doc(db, 'users', userId), {
      email,
      displayName: displayName || email.split('@')[0],
      photoURL: `https://ui-avatars.com/api/?name=${displayName || email}&background=random`,
      publicKey: keyPair.publicKey,
      secretKey: keyPair.secretKey,
      createdAt: new Date(),
      updatedAt: new Date(),
      status: 'offline',
      lastSeen: new Date(),
    });

    return keyPair;
  } catch (error) {
    console.error('Error creating user profile:', error);
    throw error;
  }
};

export const getUserProfile = async (userId) => {
  try {
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (userDoc.exists()) {
      return userDoc.data();
    }
    return null;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

export const updateUserStatus = async (userId, status) => {
  try {
    await setDoc(
      doc(db, 'users', userId),
      {
        status,
        lastSeen: new Date(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error('Error updating user status:', error);
    throw error;
  }
};