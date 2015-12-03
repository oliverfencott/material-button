'use strict';

import React from 'react/addons';

import ButtonBase from './ButtonBase';

const defaultStyle = {
  color: '#000000',
  shadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  hoveredShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
};

const RaisedButton = React.createClass({
  getDefaultProps: function() {
    return {
      style: {}
    };
  },

  render: function() {
    const {style, label, onClick} = this.props;
    return (
      <ButtonBase
        label={label}
        style={Object.assign({}, defaultStyle, style)}
        onClick={onClick}
      />
    );
  }
});

export default RaisedButton;
