import express from 'express'
import { createNote, deleteNote, getAllNotes, getSingleNote, updateNode } from '../controllers/notesController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const notesRoute = express.Router();

// http://localhost:5000/api/v1/notes/create
notesRoute.get("/notes", authMiddleware, getAllNotes);
notesRoute.get("/notes/:id", authMiddleware, getSingleNote);
notesRoute.post("/notes/create", authMiddleware, createNote);
notesRoute.delete("/notes/delete/:id", authMiddleware, deleteNote);
notesRoute.patch("/notes/update/:id", authMiddleware, updateNode);


export default notesRoute