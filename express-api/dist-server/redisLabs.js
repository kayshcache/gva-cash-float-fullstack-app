"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redis = _interopRequireDefault(require("redis"));

var _request = _interopRequireDefault(require("request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RedisLabsClient = /*#__PURE__*/function () {
  function RedisLabsClient() {
    _classCallCheck(this, RedisLabsClient);

    this.client = _redis["default"].createClient({
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      password: process.env.REDIS_PASSWORD
    });
  }

  _createClass(RedisLabsClient, [{
    key: "connect",
    value: function connect() {
      this.client.on('connect', function () {
        console.time('redis');
        console.log('Connected to RedisLabs Enterprise Cloud');
      });
    }
  }, {
    key: "insert",
    value: function insert(data, callback) {
      var values = ['values'];
      Object.keys(data).map(function (key) {
        values.push(data[key]);
        values.push(key);
      });
      this.client.zadd(values, callback);
    }
  }, {
    key: "fetchFromApi",
    value: function fetchFromApi(apiUri, callback) {
      _request["default"].get(apiUri, function (err, raw, body) {
        return callback(err, JSON.parse(body));
      });
    }
  }]);

  return RedisLabsClient;
}(); // No longer used
//
//
//
//


exports["default"] = RedisLabsClient;

function connectRedis() {
  var redisClient = _redis["default"].createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD
  });
  /*
    redisClient.on('connect', () => {
      console.time('redis');
      console.log('Connected to Redis Enterprise Cloud');
      fetchFromAPI((err, data) => {
        insertRedis(redisClient, data.bpi, (err, results) => {
  	if (err) throw err;
  	console.log(`Successfully inserted ${results} in REC`);
  	redisClient.zrange('values', -1, -1, 'withscores', (err, results) => {
  	  if (err) throw err;
  	  console.log(`Redis: the one month max value is ${results[1]} and it was reached on ${results[0]}`);
  	  console.timeEnd('redis');
  	  // Set flush to true
  	  redisClient.end(true);
  	});
        });
      });
    });
  
  */


  function insertRedis(client, data, callback) {
    var values = ['values'];
    Object.keys(data).map(function (key) {
      values.push(data[key]);
      values.push(key);
    });
    client.zadd(values, callback);
  }

  function fetchFromAPI(callback) {
    _request["default"].get('https://api.coindesk.com/v1/bpi/historical/close.json', function (err, raw, body) {
      return callback(err, JSON.parse(body));
    });
  }
}