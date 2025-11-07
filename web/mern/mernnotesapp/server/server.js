// express, mongoose, dotenv, nodemon
import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import cors from 'cors'
import notesRoute from './routes/notesRoute.js';
import userRoute from './routes/userRoute.js';

dotenv.config();
const PORT  = process.env.PORT || 5000;

// middleware
const app   = express();
app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
    return res.send("Hello from server")
});

app.use('/api/v1', userRoute)
app.use('/api/v1', notesRoute)

connectDB().then( () => {
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`)
    })
});