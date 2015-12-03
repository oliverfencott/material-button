'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _ButtonBase = require('./ButtonBase');

var _ButtonBase2 = _interopRequireDefault(_ButtonBase);

var defaultStyle = {
  color: '#000000'
};

var FlatButton = _reactAddons2['default'].createClass({
  displayName: 'FlatButton',

  getDefaultProps: function getDefaultProps() {
    return {
      style: {}
    };
  },

  render: function render() {
    var _props = this.props;
    var style = _props.style;
    var label = _props.label;
    var onClick = _props.onClick;

    return _reactAddons2['default'].createElement(_ButtonBase2['default'], {
      label: label,
      style: Object.assign({}, defaultStyle, style),
      onClick: onClick
    });
  }
});

exports['default'] = FlatButton;
module.exports = exports['default'];