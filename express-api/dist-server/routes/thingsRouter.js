"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _thingControllers = require("../controllers/thingControllers");

var _userControllers = require("../controllers/userControllers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _express["default"].Router() // curl -X POST localhost:8888/things -H 'Content-Type: application/json' -d '{"thingName": "thingy"}'
.post('/', _thingControllers.createThing).get('/', _thingControllers.readThings).put('/:thingId', _thingControllers.updateThing) // curl -X DELETE localhost:8888/things/<mongodb_id_for_thing_to_delete> -H 'Content-Type: application/x-www-form-urlencoded, Authorization: JWT <that lengthy string of a jwt token you get back from auth route>'
["delete"]('/:thingId', _thingControllers.deleteThing);

exports["default"] = _default;