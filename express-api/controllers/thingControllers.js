import mongoose from 'mongoose';
import { ThingSchema } from '../models/thingModel';

const Thing = mongoose.model('Thing', ThingSchema);

// C (create):
export const createThing = (req, res) => {
  const newThing = new Thing(req.body);
  newThing.save((err, thing) =>
    err ? res.send(err) : res.json(thing));
}

// R (read):
export const readThings = (req, res, next) => 
  Thing.find({}, (err, things) =>
    err ? res.send(err) : res.status(200).json(things));

// U (update):
export const updateThing = (req, res) => {
  console.dir(req.body);
  Thing.findOneAndUpdate({_id: req.params.thingId}, req.body, {new: true, useFindAndModify: false}, (err, thing) =>
    err ? res.send(err) : res.json(thing));
}

// D (delete):
export const deleteThing = (req, res) => {
  const thingId = req.params.thingId;
  Thing.deleteOne({_id: thingId}, (err, things) =>
    err ? res.send(err) : res.json({msg: `Deleted Mongo document ID: ${thingId}`}));
}
