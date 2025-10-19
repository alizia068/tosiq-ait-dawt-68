// express, mongoose, dotenv, nodemon
import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import Notes from './models/notesModel.js';

dotenv.config();
const app   = express();
const PORT  = process.env.PORT || 5000;

app.get('/', (req, res) => {
    return res.send("Hello from server")
});

// fetching notes
app.get("/notes", async (req, res) => {
    const mynotes = await Notes.find({})
    return res.send({status: true, data: mynotes})
})

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running at http://localhost:${PORT}`)
})