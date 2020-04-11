"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThingSchema = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var ThingSchema = new Schema({
  thingName: {
    type: String,
    required: true
  },
  isTrue: {
    type: Boolean,
    "default": false
  },
  createdDate: {
    type: Date,
    "default": Date.now
  }
});
exports.ThingSchema = ThingSchema;