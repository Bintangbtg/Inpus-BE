import express from 'express';
import { registerUser, loginUser } from '../controllers/auth.controller';

export const auth = express.Router();

auth.post('/register', registerUser);
auth.post('/login', loginUser);

export default auth;