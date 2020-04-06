import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ThingSchema = new Schema({
  thingName: {
    type: String,
    required: true,
  },
  isTrue: {
    type: Boolean,
    default: false,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});
