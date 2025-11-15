import express from 'express'
import { allUsers, login, sendOTP, signup, verifyOTP } from '../controllers/userController.js';

const userRoute = express.Router();

// http://localhost:5000/api/v1/auth/signup
userRoute.get('/auth/users', allUsers)
userRoute.post('/auth/signup', signup)
userRoute.post('/auth/login', login)
userRoute.post('/auth/forgot-password', sendOTP)
userRoute.post('/auth/verify-otp', verifyOTP)
// userRoute.post('/auth/forgot-password', sendOTP)

export default userRoute