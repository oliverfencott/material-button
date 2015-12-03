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
  color: '#000000',
  shadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  hoveredShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
};

var RaisedButton = _reactAddons2['default'].createClass({
  displayName: 'RaisedButton',

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

exports['default'] = RaisedButton;
module.exports = exports['default'];