"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MongoAtlasClient = /*#__PURE__*/function () {
  function MongoAtlasClient(dbName) {
    _classCallCheck(this, MongoAtlasClient);

    this.atlasUrl = process.env.ATLAS_URL;
    this.credentials = process.env.ATLAS_CREDENTIALS;
    this.dbName = dbName;
    this.connectionString = "mongodb+srv://".concat(this.credentials, "@").concat(this.atlasUrl + this.dbName, "?retryWrites=true&w=majority");
  }

  _createClass(MongoAtlasClient, [{
    key: "connect",
    value: function connect() {
      _mongoose["default"].Promise = global.Promise;

      _mongoose["default"].connect(this.connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

      console.log('Connected to Mongo Atlas');
    }
  }]);

  return MongoAtlasClient;
}();

exports["default"] = MongoAtlasClient;