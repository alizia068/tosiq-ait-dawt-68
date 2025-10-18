import express from  'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Note from './models/notesModel.js';
dotenv.config();
const app = express();
// 3000, 5000, 7000, 8000, 8080
const PORT = process.env.PORT || 5000;

const userRoles = [
    { id: 101, username: "usmanhaider242", role: "Main Admin" },
    { id: 102, username: "john.doe", role: "Admin" },
    { id: 103, username: "aliwarsi111", role: "Vendor" },
    { id: 104, username: "umaima980", role: "User" },
    { id: 105, username: "alice123", role: "Visitor" },
]

app.get('/', (req, res) => {
    res.send(userRoles)
})

app.get('/notes', async (req, res) => {
    const notes = await Note.find({});
    res.send(notes)
})

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running at http://localhost:${PORT}`)
})