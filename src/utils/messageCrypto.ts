import CommonUtils, * as commonUtils from "./commonUtils"
import AESUtil from './ase';

export default class MessageCrypto {
    public static encrypt(value: string): string {

        const key: string = AESUtil.getRandomAesKey();
        const random: number = CommonUtils.getRandomNumber(5, 9);
        const salt: string = CommonUtils.generateRandomString(random);

        if (key !== '' && salt !== '') {
            const k1: string = this.buildKeyWithSalt(key, salt);
            const k2: string = AESUtil.encrypt(value, key, salt);
            const map: { [key: string]: string } = {
                'k1': k1,
                'k2': k2
            };
            return JSON.stringify(map);
        }

        return '';
    }

    public static decrypt(value: string): string {
        const parsedObject: { k1?: string, k2?: string } = JSON.parse(value);

        const { k1, k2 } = parsedObject;

        if (k1 !== undefined && k2 !== undefined) {
            const val: string[] | null = this.extractOriginalValues(k1);

            if (val !== null && val.length >= 2) {
                return AESUtil.decrypt(k2, val[0], val[1]);
            }
        }

        return value;
    }

    private static buildKeyWithSalt(pwd: string, salt: string): string {
        const random: number = salt.length;
        return pwd.substring(0, random) + salt + pwd.substring(random) + String(random);
    }

    private static extractOriginalValues(key: string): string[] | null {
        if (key === '') {
            return null;
        }

        const random: number = parseInt(key.charAt(key.length - 1));
        const base64Key: string = key.substring(0, key.length - 1);

        const pwd: string = base64Key.substring(0, random) + base64Key.substring(random + random);
        const salt: string = base64Key.substring(random, random + random);

        return [pwd, salt];
    }
}