import express from 'express';
import {
  createThing,
  readThings,
  updateThing,
  deleteThing,
} from '../controllers/thingsControllers';

export default express.Router()
  .post('/', createThing) 
  .get('/', readThings) 
  .put('/:thingId', updateThing) 
  .delete('/:thingId', deleteThing); 
