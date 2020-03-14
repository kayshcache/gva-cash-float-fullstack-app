import express from 'express';
import { login, register, loginRequired } from '../controllers/userControllers';

export default express.Router()
  .post('/register', register) 
  .post('/login', login); 
