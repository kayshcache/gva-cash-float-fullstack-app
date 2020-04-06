"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _helmet = _interopRequireDefault(require("helmet"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _indexRouter = _interopRequireDefault(require("./routes/indexRouter"));

var _thingsRouter = _interopRequireDefault(require("./routes/thingsRouter"));

var _authRouter = _interopRequireDefault(require("./routes/authRouter"));

var _mongoAtlas = _interopRequireDefault(require("./mongoAtlas"));

var _redisLabs = _interopRequireDefault(require("./redisLabs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (process.env.NODE_ENV === 'development') require('dotenv').config(); // Express App instantiate

var app = (0, _express["default"])(); // Security orientated middleware

// Set up data-store
var databaseName = 'mern-template-v1';
var mongo = new _mongoAtlas["default"](databaseName);
var redis = new _redisLabs["default"]();
mongo.connect();
redis.connect(); // Set up middleware

app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.use((0, _helmet["default"])());
app.set('view engine', 'json'); // Set up JWT
// Check for headers and required elements for JWT

app.use(function (req, res, next) {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    _jsonwebtoken["default"].verify(req.headers.authorization.split(' ')[1], process.env.JWT_KEY, function (err, decode) {
      if (err) req.user = undefined;
      req.user = decode;
      next();
    });
  } else {
    req.user = undefined;
    next();
  }
}); // Use bespoke routers - as many as you like

app.use('/', _indexRouter["default"]);
app.use('/things', _thingsRouter["default"]);
app.use('/auth', _authRouter["default"]); // Must keep the ES5 syntax for now

module.exports = app; // The app is launched from a different file you will find here: ./bin/www
// This is the way Express-Generator does it. Alternatively you can put the 
// listening code here.