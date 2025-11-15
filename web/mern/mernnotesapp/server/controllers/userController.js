import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import User from "../models/userModel.js";
import { generateOTP } from "../utils/generateOTP.js";
import { sendEmail } from "../utils/sendEmail.js";

export const allUsers = async (req, res) => {
    const users = await User.find({});
    return res.send({status: true, users})
}

export const signup =  async (req, res) => {
    const data = req.body;
    if (!data.name || !data.email || !data.password) {
        return res.send({status: false, message: "Signup fields are required"})
    }
    try {
        let user = await User.findOne({email: data.email})
        // check existing user
        if (user) {
            return res.send({status: false, message: "Email is already in use, try another"})
        }

        // encrypt password :: 12345 => $deqwd32342f25f52232f2
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(data.password, salt);
        user = {
            name: data.name,
            email: data.email,
            password: hashedPassword
        };
        const result = await User.create(user);
        if (result) {
            return res.send({status: true, message: "Registered successfully"})
        } else {
            return res.send({status: false, message: "Failed to register"})
        }
    } catch (error) {
        console.log("Error: ", error)
    }
}

export const login =  async (req, res) => {
    const data = req.body;
    if (!data.email || !data.password) {
        return res.send({status: false, message: "Login fields are required!"})
    }
    try {
        let user = await User.findOne({email: data.email})
        // check existing user
        if (!user) {
            return res.send({status: false, message: "User not found with this email"})
        }
        // matching password :: 12345 => $deqwd32342f25f52232f2
        const isMatched = await bcrypt.compare(data.password, user.password);

        // e2dfhw2hdf28dh232y3ed823y8yd239d4342/324242d423d424deryyuj734ttqrq/2343rf234r2d21
        if (isMatched) {
            const token = jwt.sign(
                {user: {id: user._id, name: user.name, email: user.email}}, 
                process.env.JWT_SECRET,
                { expiresIn: '7d' }
            )
            return res.send({status: true, message: "Login successful", token})
        } else {
            return res.send({status: false, message: "Password is not matched"})
        }
    } catch (error) {
        console.log("Error: ", error)
    }
}

export const sendOTP = async (req, res) => {
    const { email } = req.body;
    if (!email) return res.send({status: false, message: "Please provide valid email"})

    try {
        let user = await User.findOne({email})
        // check existing user
        if (!user) {
            return res.send({status: false, message: "User not found with this email"})
        }
        const otp = generateOTP();
        const content = `
        Hi ${user.name},
        This is your requested one time password (OTP):
        <h2>${otp}</h2>
        <small>
            <strong>Note: Don't share this OTP with anyone</strong>
        </small>
        `;
        sendEmail(user.email, "Reset password OTP", content);
        user.otp        = otp;
        user.isVerified = false;
        await user.save();
        return res.send({status: true, message: "OTP has been send to your email"})
    } catch (error) {
        console.log("Error: ", error)
    }

}

export const verifyOTP = async (req, res) => {
    const { email, otp } = req.body;

    if (!otp) return res.send({status: false, message: "Please provide OTP code"});

    try {
        let user = await User.findOne({ email })
        // check existing user
        if (!user) {
            return res.send({status: false, message: "User not found with this email"})
        }

        if (otp != user.otp) return res.send({status: false, message: "OTP didn't matched"});

        user.otp = null;
        user.isVerified = true;
        await user.save();
        return res.send({status: true, message: "User verified"});

    } catch (error) {
        console.log("Error: ", error)
    }
}