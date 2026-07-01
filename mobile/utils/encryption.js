import nacl from 'tweetnacl';

export const generateKeyPair = () => {
  const keyPair = nacl.box.keyPair();
  return {
    publicKey: Buffer.from(keyPair.publicKey).toString('base64'),
    secretKey: Buffer.from(keyPair.secretKey).toString('base64'),
  };
};

export const encryptMessage = (message, recipientPublicKey, senderSecretKey) => {
  try {
    const nonce = nacl.randomBytes(24);
    const messageBuffer = Buffer.from(message, 'utf-8');
    const publicKeyBuffer = Buffer.from(recipientPublicKey, 'base64');
    const secretKeyBuffer = Buffer.from(senderSecretKey, 'base64');

    const encrypted = nacl.box(
      messageBuffer,
      nonce,
      publicKeyBuffer,
      secretKeyBuffer
    );

    return {
      nonce: Buffer.from(nonce).toString('base64'),
      ciphertext: Buffer.from(encrypted).toString('base64'),
    };
  } catch (error) {
    console.error('Encryption error:', error);
    throw error;
  }
};

export const decryptMessage = (encryptedData, senderPublicKey, recipientSecretKey) => {
  try {
    const nonce = Buffer.from(encryptedData.nonce, 'base64');
    const ciphertext = Buffer.from(encryptedData.ciphertext, 'base64');
    const publicKeyBuffer = Buffer.from(senderPublicKey, 'base64');
    const secretKeyBuffer = Buffer.from(recipientSecretKey, 'base64');

    const decrypted = nacl.box.open(
      ciphertext,
      nonce,
      publicKeyBuffer,
      secretKeyBuffer
    );

    if (!decrypted) {
      throw new Error('Failed to decrypt message');
    }

    return Buffer.from(decrypted).toString('utf-8');
  } catch (error) {
    console.error('Decryption error:', error);
    throw error;
  }
};
