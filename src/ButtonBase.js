'use strict';

import React from 'react';

function mergeStyles(defaultStyle = {}, userStyle = {}) {
  return Object.assign({}, defaultStyle, userStyle);
}

const transition = 'all 100ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 0ms';

const ButtonBase = React.createClass({
  getInitialState: function() {
    return {
      mouseDown: false,
      hovered: false
    };
  },

  getDefaultProps: function() {
    return {
      onClick: () => {},
      label: '',
      style: {}
    };
  },

  getStyle: function() {
    const {mouseDown, hovered} = this.state;
    const {style} = this.props;

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
        transition
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
        transition
      }
    };
  },

  render: function() {
    const styles = this.getStyle();
    const {label, onClick, style} = this.props;

    return (
      <div
        style={mergeStyles(styles.container, style.container)}
        onClick={onClick}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>
        <div style={mergeStyles(styles.content, style.content)}>
          {label}
        </div>
        <div style={mergeStyles(styles.overlay, style.overlay)} />
      </div>
    );
  },

  handleMouseDown: function() {
    this.setState({
      mouseDown: true
    });
  },

  handleMouseUp: function() {
    this.setState({
      mouseDown: false
    });
  },

  handleMouseEnter: function() {
    this.setState({
      hovered: true
    });
  },

  handleMouseLeave: function() {
    this.setState({
      hovered: false,
      mouseDown: false
    });
  }
});

export default ButtonBase;
