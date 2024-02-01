// AESUtil.ts

import * as crypto from 'crypto';

export default class AESUtil {
    private static AES_ALGORITHM = 'aes-256-cbc';
    private static ITERATION_COUNT = 256;
    private static KEY_LENGTH = 32;
    private static GCM_NONCE_LENGTH = 16;

    static encrypt(plaintext: string, password: string, salt: string = '0'): string {
        const secretKey = this.generateKey(password, salt);
        const iv = this.generateIV();
        const cipher = crypto.createCipheriv(this.AES_ALGORITHM, secretKey, iv);
        const encryptedBuffer = Buffer.concat([iv, cipher.update(plaintext, 'utf8'), cipher.final()]);
        return encryptedBuffer.toString('base64');
    }

    static decrypt(ciphertext: string, password: string, salt: string = '0'): string {
        const secretKey = this.generateKey(password, salt);
        const combinedBuffer = Buffer.from(ciphertext, 'base64');
        const iv = combinedBuffer.slice(0, this.GCM_NONCE_LENGTH);
        const decipher = crypto.createDecipheriv(this.AES_ALGORITHM, secretKey, iv);
        const decryptedBuffer = Buffer.concat([decipher.update(combinedBuffer.slice(this.GCM_NONCE_LENGTH)), decipher.final()]);
        return decryptedBuffer.toString('utf-8');
    }

    static getRandomAesKey(): string {
        const secretKey = crypto.randomBytes(this.KEY_LENGTH);
        return secretKey.toString('base64');
    }

    private static generateIV(): Buffer {
        const iv = crypto.randomBytes(this.GCM_NONCE_LENGTH);
        return iv;
    }

    private static generateKey(password: string, salt: string): Buffer {
        const key = crypto.pbkdf2Sync(password, salt, this.ITERATION_COUNT, this.KEY_LENGTH, 'sha256');
        return key;
    }
}
