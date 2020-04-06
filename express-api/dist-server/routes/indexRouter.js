"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* GET index.html from the public directory
 * 
 * Could be used for a docs page for the API
 *
 * */
var _default = _express["default"].Router().get('/', function (req, res) {
  return res.json({
    message: 'Nothing at root'
  });
});

exports["default"] = _default;