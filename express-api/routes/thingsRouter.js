import express from 'express';
import {
  createThing,
  readThings,
  updateThing,
  deleteThing,
} from '../controllers/thingControllers';
import { login, register, loginRequired } from '../controllers/userControllers';

export default express.Router()
  .post('/', createThing) 
  .get('/', readThings) 
  .put('/:thingId', updateThing) 
  .delete('/:thingId', loginRequired, deleteThing); 
