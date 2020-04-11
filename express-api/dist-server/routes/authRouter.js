"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userControllers = require("../controllers/userControllers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _express["default"].Router().post('/register', _userControllers.register).post('/login', _userControllers.login);

exports["default"] = _default;