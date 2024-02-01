import * as crypto from 'crypto';

export default class CommonUtils{
    static getRandomNumber(min: number, max: number): number {
        if (max < min) {
            return 0;
        }
    
        const range = max - min + 1;
        const byteCount = Math.ceil(Math.log2(range) / 8);
    
        let randomValue: number;
    
        do {
            const randomBytes = crypto.randomBytes(byteCount);
            randomValue = randomBytes.readUIntBE(0, byteCount);
        } while (randomValue > range);
    
        return randomValue + min;
    }
    
    static generateRandomString(length: number): string {
        const characters: string = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let randomString: string = "";
    
        for (let i = 0; i < length; i++) {
            const randomIndex: number = Math.floor(Math.random() * characters.length);
            randomString += characters.charAt(randomIndex);
        }
    
        return randomString;
    }
}