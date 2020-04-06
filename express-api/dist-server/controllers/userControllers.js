"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = exports.register = exports.loginRequired = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _userModel = require("../models/userModel");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var User = _mongoose["default"].model('User', _userModel.UserSchema);

var loginRequired = function loginRequired(req, res, next) {
  if (req.user) next();
  console.log('WARNING: Unauthorized user attempted to access API');
  return res.status(401).json({
    msg: 'Unauthorized user'
  });
};

exports.loginRequired = loginRequired;

var register = function register(req, res) {
  var newUser = new User(req.body);
  newUser.hashPassword = _bcrypt["default"].hashSync(req.body.password, 10);
  newUser.save(function (err, user) {
    if (err) return res.status(400).send({
      msg: err
    });
    user.hashPassword = '************';
    return res.json(user);
  });
};

exports.register = register;

var login = function login(req, res) {
  User.findOne({
    email: req.body.email
  }, function (err, user) {
    if (err) throw err;
    if (!user) res.status(401).json({
      msg: 'No such user'
    });

    if (!user.comparePassword(req.body.password, user.hashPassword)) {
      res.status(401).json({
        msg: 'Bad password'
      });
    } else {
      return res.json({
        token: _jsonwebtoken["default"].sign({
          email: user.email,
          username: user.username,
          _id: user.id
        }, process.env.JWT_KEY)
      });
    }
  });
};

exports.login = login;