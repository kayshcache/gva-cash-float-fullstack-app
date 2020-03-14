import express from 'express';
import {
  createThing,
  readThings,
  updateThing,
  deleteThing,
} from '../controllers/thingControllers';
import { login, register, loginRequired } from '../controllers/userControllers';

export default express.Router()
// curl -X POST localhost:8888/things -H 'Content-Type: application/json' -d '{"thingName": "thingy"}'
  .post('/', createThing) 
  .get('/', readThings) 
  .put('/:thingId', updateThing) 
// curl -X DELETE localhost:8888/things/<mongodb_id_for_thing_to_delete> -H 'Content-Type: application/x-www-form-urlencoded, Authorization: JWT <that lengthy string of a jwt token you get back from auth route>'
  .delete('/:thingId', deleteThing); 
