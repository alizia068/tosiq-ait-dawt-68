import express from 'express'
import { createNote, deleteNote, getAllNotes, getSingleNote, updateNode } from '../controllers/notesController.js';

const notesRoute = express.Router();

// http://localhost:5000/api/v1/notes/create
notesRoute.get("/notes", getAllNotes);
notesRoute.get("/notes/:id", getSingleNote);
notesRoute.post("/notes/create", createNote);
notesRoute.delete("/notes/delete/:id", deleteNote);
notesRoute.patch("/notes/update/:id", updateNode);


export default notesRoute