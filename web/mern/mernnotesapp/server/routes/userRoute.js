import express from 'express'
import { signup } from '../controllers/userController.js';

const userRoute = express.Router();

// http://localhost:5000/api/v1/auth/signup
userRoute.post('/auth/signup', signup)

export default userRoute