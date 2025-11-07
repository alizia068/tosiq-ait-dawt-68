import bcrypt from "bcryptjs";
import User from "../models/userModel.js";

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

        // encrypt password
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