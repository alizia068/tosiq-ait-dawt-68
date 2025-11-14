import { customAlphabet } from 'nanoid'
export const generateOTP = () => {
    const nanoid = customAlphabet('1234567890', 6) // 657349
    const otp = nanoid();
    return otp;
}