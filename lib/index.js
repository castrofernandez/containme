/* eslint-disable require-jsdoc */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _setupme = _interopRequireDefault(require("setupme"));

var _reactRedux = require("react-redux");

var _redux = require("redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LOG_NAME = 'containme';
var DEFAULT_OPTIONS = {
  component: function component() {},
  actions: {},
  mapStateToProps: function mapStateToProps() {}
};

var areParamsValid = function areParamsValid(params) {
  return _setupme["default"].validate(DEFAULT_OPTIONS, params, {
    logName: LOG_NAME,
    strictly: true,
    deeply: false
  }).success;
};

var mapDispatchToProps = function mapDispatchToProps(actions) {
  return function (dispatch) {
    return (0, _redux.bindActionCreators)(actions, dispatch);
  };
};

var _default = function _default() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var component = params.component,
      _params$actions = params.actions,
      actions = _params$actions === void 0 ? {} : _params$actions,
      _params$mapStateToPro = params.mapStateToProps,
      mapStateToProps = _params$mapStateToPro === void 0 ? function (state) {
    return state;
  } : _params$mapStateToPro;
  return areParamsValid(params) ? (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps(actions))(component) : function () {};
};

exports["default"] = _default;