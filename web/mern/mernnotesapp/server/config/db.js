import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGOdb_LOCAL);

        if (db) {
            console.log(`Database is connected: ${db.connection.host}`)
        } else {
            console.log("Database is not connected")
        }

    } catch (error) {
        console.log(`Something went wrong! \n ${error}`)
    }
}