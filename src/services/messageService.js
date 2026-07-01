import { db } from '../config/firebase';
import {
  collection,
  addDoc,
  query,
  where,
  orderBy,
  onSnapshot,
  updateDoc,
  doc,
  Timestamp,
  getDocs,
} from 'firebase/firestore';

export const getOrCreateChatRoom = async (userId1, userId2) => {
  const sortedIds = [userId1, userId2].sort();
  const chatRoomId = sortedIds.join('_');
  return chatRoomId;
};

export const sendMessage = async (chatRoomId, senderId, receiverId, messageContent, isEncrypted = false) => {
  try {
    const messagesRef = collection(db, 'chatRooms', chatRoomId, 'messages');
    
    const docRef = await addDoc(messagesRef, {
      senderId,
      receiverId,
      content: messageContent.content || messageContent,
      nonce: messageContent.nonce || null,
      ciphertext: messageContent.ciphertext || null,
      isEncrypted,
      timestamp: Timestamp.now(),
      read: false,
      readAt: null,
      edited: false,
      editedAt: null,
    });

    return docRef.id;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};

export const subscribeToMessages = (chatRoomId, callback) => {
  try {
    const messagesRef = collection(db, 'chatRooms', chatRoomId, 'messages');
    const q = query(messagesRef, orderBy('timestamp', 'asc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messages = [];
      snapshot.forEach((doc) => {
        messages.push({
          id: doc.id,
          ...doc.data(),
          timestamp: doc.data().timestamp?.toDate(),
        });
      });
      callback(messages);
    });

    return unsubscribe;
  } catch (error) {
    console.error('Error subscribing to messages:', error);
    throw error;
  }
};

export const markMessageAsRead = async (chatRoomId, messageId) => {
  try {
    const messageRef = doc(db, 'chatRooms', chatRoomId, 'messages', messageId);
    await updateDoc(messageRef, {
      read: true,
      readAt: Timestamp.now(),
    });
  } catch (error) {
    console.error('Error marking message as read:', error);
    throw error;
  }
};

export const getUserChats = async (userId) => {
  try {
    const chatsRef = collection(db, 'users', userId, 'chats');
    const q = query(chatsRef, orderBy('lastMessageTime', 'desc'));
    const snapshot = await getDocs(q);
    
    const chats = [];
    snapshot.forEach((doc) => {
      chats.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return chats;
  } catch (error) {
    console.error('Error getting user chats:', error);
    throw error;
  }
};

export const createGroupChat = async (groupName, members, createdBy) => {
  try {
    const groupRef = collection(db, 'groups');
    const docRef = await addDoc(groupRef, {
      name: groupName,
      members,
      createdBy,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });
    return docRef.id;
  } catch (error) {
    console.error('Error creating group chat:', error);
    throw error;
  }
};