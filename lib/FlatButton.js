'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodashMerge = require('lodash.merge');

var _lodashMerge2 = _interopRequireDefault(_lodashMerge);

var _ButtonBase = require('./ButtonBase');

var _ButtonBase2 = _interopRequireDefault(_ButtonBase);

var defaultStyle = {
  color: '#000000'
};

var FlatButton = _react2['default'].createClass({
  displayName: 'FlatButton',

  getDefaultProps: function getDefaultProps() {
    return {
      style: {},
      label: '',
      name: '',
      value: '',
      onClick: function onClick() {}
    };
  },

  render: function render() {
    var _props = this.props;
    var style = _props.style;
    var label = _props.label;
    var onClick = _props.onClick;
    var name = _props.name;
    var value = _props.value;

    return _react2['default'].createElement(_ButtonBase2['default'], {
      label: label,
      style: (0, _lodashMerge2['default'])({}, defaultStyle, style),
      onClick: onClick,
      name: name,
      value: value
    });
  }
});

exports['default'] = FlatButton;
module.exports = exports['default'];