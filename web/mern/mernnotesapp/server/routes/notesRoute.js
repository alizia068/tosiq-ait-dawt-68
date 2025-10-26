import express from 'express'
import { createNote, getAllNotes } from '../controllers/notesController.js';

const notesRoute = express.Router();

// http://localhost:5000/api/v1/notes/create
notesRoute.get("/notes", getAllNotes);
notesRoute.post("/notes/create", createNote);


export default notesRoute