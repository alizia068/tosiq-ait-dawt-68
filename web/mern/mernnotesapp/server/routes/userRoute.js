import express from 'express'
import { login, signup } from '../controllers/userController.js';

const userRoute = express.Router();

// http://localhost:5000/api/v1/auth/signup
userRoute.post('/auth/signup', signup)
userRoute.post('/auth/login', login)

export default userRoute