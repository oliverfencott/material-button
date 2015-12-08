'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodashMerge = require('lodash.merge');

var _lodashMerge2 = _interopRequireDefault(_lodashMerge);

function mergeStyles() {
  var defaultStyle = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var userStyle = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  return (0, _lodashMerge2['default'])({}, defaultStyle, userStyle);
}

var transition = 'all 100ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 0ms';

var ButtonBase = _react2['default'].createClass({
  displayName: 'ButtonBase',

  getInitialState: function getInitialState() {
    return {
      mouseDown: false,
      hovered: false
    };
  },

  getDefaultProps: function getDefaultProps() {
    return {
      onClick: function onClick() {},
      label: '',
      style: {},
      name: '',
      value: ''
    };
  },

  getStyle: function getStyle() {
    var _state = this.state;
    var mouseDown = _state.mouseDown;
    var hovered = _state.hovered;
    var style = this.props.style;

    return {
      container: {
        display: 'inline-block',
        position: 'relative',
        padding: '0 8px',
        height: 36,
        minWidth: 63,
        borderRadius: 2,
        cursor: 'pointer',
        outline: 'none',
        border: 'none',
        backgroundColor: style.backgroundColor,
        boxShadow: mouseDown ? style.hoveredShadow : style.shadow,
        transition: transition
      },
      content: {
        textTransform: 'uppercase',
        textAlign: 'center',
        position: 'relative',
        top: '50%',
        transform: 'translateY(-50%)',
        fontSize: 15,
        color: style.color
      },
      overlay: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
        backgroundColor: style.overlayColor || style.color,
        opacity: hovered ? 0.3 : 0,
        borderRadius: 2,
        transition: transition
      }
    };
  },

  render: function render() {
    var styles = this.getStyle();
    var _props = this.props;
    var label = _props.label;
    var style = _props.style;

    return _react2['default'].createElement(
      'div',
      {
        style: mergeStyles(styles.container, style.container),
        onClick: this.handleClick,
        onMouseDown: this.handleMouseDown,
        onMouseUp: this.handleMouseUp,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave },
      _react2['default'].createElement(
        'div',
        { style: mergeStyles(styles.content, style.content) },
        label
      ),
      _react2['default'].createElement('div', { style: mergeStyles(styles.overlay, style.overlay) })
    );
  },

  handleClick: function handleClick() {
    var _props2 = this.props;
    var name = _props2.name;
    var value = _props2.value;
    var onClick = _props2.onClick;

    onClick(name, value);
  },

  handleMouseDown: function handleMouseDown() {
    this.setState({
      mouseDown: true
    });
  },

  handleMouseUp: function handleMouseUp() {
    this.setState({
      mouseDown: false
    });
  },

  handleMouseEnter: function handleMouseEnter() {
    this.setState({
      hovered: true
    });
  },

  handleMouseLeave: function handleMouseLeave() {
    this.setState({
      hovered: false,
      mouseDown: false
    });
  }
});

exports['default'] = ButtonBase;
module.exports = exports['default'];