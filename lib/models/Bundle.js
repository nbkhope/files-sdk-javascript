"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Api = _interopRequireDefault(require("../Api"));

var _Logger = _interopRequireDefault(require("../Logger"));

var _utils = require("../utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Class Bundle
 */
var Bundle = function Bundle() {
  var _this = this;

  var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  (0, _classCallCheck2.default)(this, Bundle);
  (0, _defineProperty2.default)(this, "attributes", {});
  (0, _defineProperty2.default)(this, "options", {});
  (0, _defineProperty2.default)(this, "isLoaded", function () {
    return !!_this.attributes.id;
  });
  (0, _defineProperty2.default)(this, "getCode", function () {
    return _this.attributes.code;
  });
  (0, _defineProperty2.default)(this, "setCode", function (value) {
    _this.attributes.code = value;
  });
  (0, _defineProperty2.default)(this, "getUrl", function () {
    return _this.attributes.url;
  });
  (0, _defineProperty2.default)(this, "setUrl", function (value) {
    _this.attributes.url = value;
  });
  (0, _defineProperty2.default)(this, "getDescription", function () {
    return _this.attributes.description;
  });
  (0, _defineProperty2.default)(this, "setDescription", function (value) {
    _this.attributes.description = value;
  });
  (0, _defineProperty2.default)(this, "getPasswordProtected", function () {
    return _this.attributes.password_protected;
  });
  (0, _defineProperty2.default)(this, "setPasswordProtected", function (value) {
    _this.attributes.password_protected = value;
  });
  (0, _defineProperty2.default)(this, "getRequireRegistration", function () {
    return _this.attributes.require_registration;
  });
  (0, _defineProperty2.default)(this, "setRequireRegistration", function (value) {
    _this.attributes.require_registration = value;
  });
  (0, _defineProperty2.default)(this, "getClickwrapBody", function () {
    return _this.attributes.clickwrap_body;
  });
  (0, _defineProperty2.default)(this, "setClickwrapBody", function (value) {
    _this.attributes.clickwrap_body = value;
  });
  (0, _defineProperty2.default)(this, "getId", function () {
    return _this.attributes.id;
  });
  (0, _defineProperty2.default)(this, "setId", function (value) {
    _this.attributes.id = value;
  });
  (0, _defineProperty2.default)(this, "getCreatedAt", function () {
    return _this.attributes.created_at;
  });
  (0, _defineProperty2.default)(this, "getExpiresAt", function () {
    return _this.attributes.expires_at;
  });
  (0, _defineProperty2.default)(this, "setExpiresAt", function (value) {
    _this.attributes.expires_at = value;
  });
  (0, _defineProperty2.default)(this, "getMaxUses", function () {
    return _this.attributes.max_uses;
  });
  (0, _defineProperty2.default)(this, "setMaxUses", function (value) {
    _this.attributes.max_uses = value;
  });
  (0, _defineProperty2.default)(this, "getNote", function () {
    return _this.attributes.note;
  });
  (0, _defineProperty2.default)(this, "setNote", function (value) {
    _this.attributes.note = value;
  });
  (0, _defineProperty2.default)(this, "getUserId", function () {
    return _this.attributes.user_id;
  });
  (0, _defineProperty2.default)(this, "setUserId", function (value) {
    _this.attributes.user_id = value;
  });
  (0, _defineProperty2.default)(this, "getUsername", function () {
    return _this.attributes.username;
  });
  (0, _defineProperty2.default)(this, "setUsername", function (value) {
    _this.attributes.username = value;
  });
  (0, _defineProperty2.default)(this, "getClickwrapId", function () {
    return _this.attributes.clickwrap_id;
  });
  (0, _defineProperty2.default)(this, "setClickwrapId", function (value) {
    _this.attributes.clickwrap_id = value;
  });
  (0, _defineProperty2.default)(this, "getInboxId", function () {
    return _this.attributes.inbox_id;
  });
  (0, _defineProperty2.default)(this, "setInboxId", function (value) {
    _this.attributes.inbox_id = value;
  });
  (0, _defineProperty2.default)(this, "getPaths", function () {
    return _this.attributes.paths;
  });
  (0, _defineProperty2.default)(this, "setPaths", function (value) {
    _this.attributes.paths = value;
  });
  (0, _defineProperty2.default)(this, "getPassword", function () {
    return _this.attributes.password;
  });
  (0, _defineProperty2.default)(this, "setPassword", function (value) {
    _this.attributes.password = value;
  });
  (0, _defineProperty2.default)(this, "share", /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var params,
        _args = arguments;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};

            if (_this.attributes.id) {
              _context.next = 3;
              break;
            }

            throw new Error('Current object has no ID');

          case 3:
            if ((0, _utils.isObject)(params)) {
              _context.next = 5;
              break;
            }

            throw new Error("Bad parameter: params must be of type object, received ".concat((0, _utils.getType)(params)));

          case 5:
            params.id = _this.attributes.id;

            if (!(params['id'] && !(0, _utils.isInt)(params['id']))) {
              _context.next = 8;
              break;
            }

            throw new Error("Bad parameter: id must be of type Int, received ".concat((0, _utils.getType)(id)));

          case 8:
            if (!(params['to'] && !(0, _utils.isArray)(params['to']))) {
              _context.next = 10;
              break;
            }

            throw new Error("Bad parameter: to must be of type Array, received ".concat((0, _utils.getType)(to)));

          case 10:
            if (!(params['note'] && !(0, _utils.isString)(params['note']))) {
              _context.next = 12;
              break;
            }

            throw new Error("Bad parameter: note must be of type String, received ".concat((0, _utils.getType)(note)));

          case 12:
            if (params['id']) {
              _context.next = 18;
              break;
            }

            if (!_this.attributes.id) {
              _context.next = 17;
              break;
            }

            params['id'] = _this.id;
            _context.next = 18;
            break;

          case 17:
            throw new Error('Parameter missing: id');

          case 18:
            if (params['to']) {
              _context.next = 24;
              break;
            }

            if (!_this.attributes.to) {
              _context.next = 23;
              break;
            }

            params['to'] = _this.to;
            _context.next = 24;
            break;

          case 23:
            throw new Error('Parameter missing: to');

          case 24:
            return _context.abrupt("return", _Api.default.sendRequest("/bundles/' . params['id'] . '/share", 'POST', params, _this.options));

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  (0, _defineProperty2.default)(this, "update", /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
    var params,
        _args2 = arguments;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            params = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};

            if (_this.attributes.id) {
              _context2.next = 3;
              break;
            }

            throw new Error('Current object has no ID');

          case 3:
            if ((0, _utils.isObject)(params)) {
              _context2.next = 5;
              break;
            }

            throw new Error("Bad parameter: params must be of type object, received ".concat((0, _utils.getType)(params)));

          case 5:
            params.id = _this.attributes.id;

            if (!(params['id'] && !(0, _utils.isInt)(params['id']))) {
              _context2.next = 8;
              break;
            }

            throw new Error("Bad parameter: id must be of type Int, received ".concat((0, _utils.getType)(id)));

          case 8:
            if (!(params['password'] && !(0, _utils.isString)(params['password']))) {
              _context2.next = 10;
              break;
            }

            throw new Error("Bad parameter: password must be of type String, received ".concat((0, _utils.getType)(password)));

          case 10:
            if (!(params['expires_at'] && !(0, _utils.isString)(params['expires_at']))) {
              _context2.next = 12;
              break;
            }

            throw new Error("Bad parameter: expires_at must be of type String, received ".concat((0, _utils.getType)(expires_at)));

          case 12:
            if (!(params['max_uses'] && !(0, _utils.isInt)(params['max_uses']))) {
              _context2.next = 14;
              break;
            }

            throw new Error("Bad parameter: max_uses must be of type Int, received ".concat((0, _utils.getType)(max_uses)));

          case 14:
            if (!(params['description'] && !(0, _utils.isString)(params['description']))) {
              _context2.next = 16;
              break;
            }

            throw new Error("Bad parameter: description must be of type String, received ".concat((0, _utils.getType)(description)));

          case 16:
            if (!(params['note'] && !(0, _utils.isString)(params['note']))) {
              _context2.next = 18;
              break;
            }

            throw new Error("Bad parameter: note must be of type String, received ".concat((0, _utils.getType)(note)));

          case 18:
            if (!(params['code'] && !(0, _utils.isString)(params['code']))) {
              _context2.next = 20;
              break;
            }

            throw new Error("Bad parameter: code must be of type String, received ".concat((0, _utils.getType)(code)));

          case 20:
            if (!(params['clickwrap_id'] && !(0, _utils.isInt)(params['clickwrap_id']))) {
              _context2.next = 22;
              break;
            }

            throw new Error("Bad parameter: clickwrap_id must be of type Int, received ".concat((0, _utils.getType)(clickwrap_id)));

          case 22:
            if (!(params['inbox_id'] && !(0, _utils.isInt)(params['inbox_id']))) {
              _context2.next = 24;
              break;
            }

            throw new Error("Bad parameter: inbox_id must be of type Int, received ".concat((0, _utils.getType)(inbox_id)));

          case 24:
            if (params['id']) {
              _context2.next = 30;
              break;
            }

            if (!_this.attributes.id) {
              _context2.next = 29;
              break;
            }

            params['id'] = _this.id;
            _context2.next = 30;
            break;

          case 29:
            throw new Error('Parameter missing: id');

          case 30:
            return _context2.abrupt("return", _Api.default.sendRequest("/bundles/' . params['id'] . '", 'PATCH', params, _this.options));

          case 31:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  (0, _defineProperty2.default)(this, "delete", /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
    var params,
        _args3 = arguments;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            params = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {};

            if (_this.attributes.id) {
              _context3.next = 3;
              break;
            }

            throw new Error('Current object has no ID');

          case 3:
            if ((0, _utils.isObject)(params)) {
              _context3.next = 5;
              break;
            }

            throw new Error("Bad parameter: params must be of type object, received ".concat((0, _utils.getType)(params)));

          case 5:
            params.id = _this.attributes.id;

            if (!(params['id'] && !(0, _utils.isInt)(params['id']))) {
              _context3.next = 8;
              break;
            }

            throw new Error("Bad parameter: id must be of type Int, received ".concat((0, _utils.getType)(id)));

          case 8:
            if (params['id']) {
              _context3.next = 14;
              break;
            }

            if (!_this.attributes.id) {
              _context3.next = 13;
              break;
            }

            params['id'] = _this.id;
            _context3.next = 14;
            break;

          case 13:
            throw new Error('Parameter missing: id');

          case 14:
            return _context3.abrupt("return", _Api.default.sendRequest("/bundles/' . params['id'] . '", 'DELETE', params, _this.options));

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  (0, _defineProperty2.default)(this, "destroy", function () {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _this.delete(params);
  });
  (0, _defineProperty2.default)(this, "save", function () {
    if (_this.attributes['id']) {
      return _this.update(_this.attributes);
    } else {
      var newObject = Bundle.create(_this.attributes, _this.options);
      _this.attributes = _objectSpread({}, newObject.attributes);
      return true;
    }
  });
  Object.entries(attributes).forEach(function (_ref4) {
    var _ref5 = (0, _slicedToArray2.default)(_ref4, 2),
        key = _ref5[0],
        value = _ref5[1];

    var normalizedKey = key.replace('?', '');
    _this.attributes[normalizedKey] = value;
    Object.defineProperty(_this, normalizedKey, {
      value: value,
      writable: false
    });
  });
  this.options = _objectSpread({}, options);
};

(0, _defineProperty2.default)(Bundle, "list", /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
  var _response$data;

  var params,
      options,
      response,
      _args4 = arguments;
  return _regenerator.default.wrap(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          params = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {};
          options = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};

          if (!(params['user_id'] && !(0, _utils.isInt)(params['user_id']))) {
            _context4.next = 4;
            break;
          }

          throw new Error("Bad parameter: user_id must be of type Int, received ".concat((0, _utils.getType)(user_id)));

        case 4:
          if (!(params['page'] && !(0, _utils.isInt)(params['page']))) {
            _context4.next = 6;
            break;
          }

          throw new Error("Bad parameter: page must be of type Int, received ".concat((0, _utils.getType)(page)));

        case 6:
          if (!(params['per_page'] && !(0, _utils.isInt)(params['per_page']))) {
            _context4.next = 8;
            break;
          }

          throw new Error("Bad parameter: per_page must be of type Int, received ".concat((0, _utils.getType)(per_page)));

        case 8:
          if (!(params['action'] && !(0, _utils.isString)(params['action']))) {
            _context4.next = 10;
            break;
          }

          throw new Error("Bad parameter: action must be of type String, received ".concat((0, _utils.getType)(action)));

        case 10:
          _context4.next = 12;
          return _Api.default.sendRequest("/bundles", 'GET', params, options);

        case 12:
          response = _context4.sent;
          return _context4.abrupt("return", (response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.map(function (obj) {
            return new Bundle(obj, options);
          })) || []);

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, _callee4);
})));
(0, _defineProperty2.default)(Bundle, "all", function () {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Bundle.list(params, options);
});
(0, _defineProperty2.default)(Bundle, "find", /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(id) {
    var params,
        options,
        response,
        _args5 = arguments;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            params = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {};
            options = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : {};

            if ((0, _utils.isObject)(params)) {
              _context5.next = 4;
              break;
            }

            throw new Error("Bad parameter: params must be of type object, received ".concat((0, _utils.getType)(params)));

          case 4:
            params['id'] = id;

            if (params['id']) {
              _context5.next = 7;
              break;
            }

            throw new Error('Parameter missing: id');

          case 7:
            if (!(params['id'] && !(0, _utils.isInt)(params['id']))) {
              _context5.next = 9;
              break;
            }

            throw new Error("Bad parameter: id must be of type Int, received ".concat((0, _utils.getType)(id)));

          case 9:
            _context5.next = 11;
            return _Api.default.sendRequest("/bundles/' . params['id'] . '", 'GET', params, options);

          case 11:
            response = _context5.sent;
            return _context5.abrupt("return", new Bundle(response === null || response === void 0 ? void 0 : response.data, options));

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x) {
    return _ref7.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(Bundle, "get", function (id) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return Bundle.find(id, params, options);
});
(0, _defineProperty2.default)(Bundle, "create", /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
  var params,
      options,
      response,
      _args6 = arguments;
  return _regenerator.default.wrap(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          params = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {};
          options = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : {};

          if (params['paths']) {
            _context6.next = 4;
            break;
          }

          throw new Error('Parameter missing: paths');

        case 4:
          if (!(params['user_id'] && !(0, _utils.isInt)(params['user_id']))) {
            _context6.next = 6;
            break;
          }

          throw new Error("Bad parameter: user_id must be of type Int, received ".concat((0, _utils.getType)(user_id)));

        case 6:
          if (!(params['paths'] && !(0, _utils.isArray)(params['paths']))) {
            _context6.next = 8;
            break;
          }

          throw new Error("Bad parameter: paths must be of type Array, received ".concat((0, _utils.getType)(paths)));

        case 8:
          if (!(params['password'] && !(0, _utils.isString)(params['password']))) {
            _context6.next = 10;
            break;
          }

          throw new Error("Bad parameter: password must be of type String, received ".concat((0, _utils.getType)(password)));

        case 10:
          if (!(params['expires_at'] && !(0, _utils.isString)(params['expires_at']))) {
            _context6.next = 12;
            break;
          }

          throw new Error("Bad parameter: expires_at must be of type String, received ".concat((0, _utils.getType)(expires_at)));

        case 12:
          if (!(params['max_uses'] && !(0, _utils.isInt)(params['max_uses']))) {
            _context6.next = 14;
            break;
          }

          throw new Error("Bad parameter: max_uses must be of type Int, received ".concat((0, _utils.getType)(max_uses)));

        case 14:
          if (!(params['description'] && !(0, _utils.isString)(params['description']))) {
            _context6.next = 16;
            break;
          }

          throw new Error("Bad parameter: description must be of type String, received ".concat((0, _utils.getType)(description)));

        case 16:
          if (!(params['note'] && !(0, _utils.isString)(params['note']))) {
            _context6.next = 18;
            break;
          }

          throw new Error("Bad parameter: note must be of type String, received ".concat((0, _utils.getType)(note)));

        case 18:
          if (!(params['code'] && !(0, _utils.isString)(params['code']))) {
            _context6.next = 20;
            break;
          }

          throw new Error("Bad parameter: code must be of type String, received ".concat((0, _utils.getType)(code)));

        case 20:
          if (!(params['clickwrap_id'] && !(0, _utils.isInt)(params['clickwrap_id']))) {
            _context6.next = 22;
            break;
          }

          throw new Error("Bad parameter: clickwrap_id must be of type Int, received ".concat((0, _utils.getType)(clickwrap_id)));

        case 22:
          if (!(params['inbox_id'] && !(0, _utils.isInt)(params['inbox_id']))) {
            _context6.next = 24;
            break;
          }

          throw new Error("Bad parameter: inbox_id must be of type Int, received ".concat((0, _utils.getType)(inbox_id)));

        case 24:
          _context6.next = 26;
          return _Api.default.sendRequest("/bundles", 'POST', params, options);

        case 26:
          response = _context6.sent;
          return _context6.abrupt("return", new Bundle(response === null || response === void 0 ? void 0 : response.data, options));

        case 28:
        case "end":
          return _context6.stop();
      }
    }
  }, _callee6);
})));
var _default = Bundle;
exports.default = _default;