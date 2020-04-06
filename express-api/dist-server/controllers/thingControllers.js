"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteThing = exports.updateThing = exports.readThings = exports.createThing = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _thingModel = require("../models/thingModel");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Thing = _mongoose["default"].model('Thing', _thingModel.ThingSchema); // C (create):


var createThing = function createThing(req, res) {
  var newThing = new Thing(req.body);
  newThing.save(function (err, thing) {
    return err ? res.send(err) : res.json(thing);
  });
}; // R (read):


exports.createThing = createThing;

var readThings = function readThings(req, res, next) {
  return Thing.find({}, function (err, things) {
    return err ? res.send(err) : res.status(200).json(things);
  });
}; // U (update):


exports.readThings = readThings;

var updateThing = function updateThing(req, res) {
  console.dir(req.body);
  Thing.findOneAndUpdate({
    _id: req.params.thingId
  }, req.body, {
    "new": true,
    useFindAndModify: false
  }, function (err, thing) {
    return err ? res.send(err) : res.json(thing);
  });
}; // D (delete):


exports.updateThing = updateThing;

var deleteThing = function deleteThing(req, res) {
  var thingId = req.params.thingId;
  Thing.deleteOne({
    _id: thingId
  }, function (err, things) {
    return err ? res.send(err) : res.json({
      _id: thingId
    });
  });
};

exports.deleteThing = deleteThing;