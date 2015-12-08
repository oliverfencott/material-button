'use strict';

import React from 'react';
import merge from 'lodash.merge';

import ButtonBase from './ButtonBase';

const defaultStyle = {
  color: '#000000',
  shadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  hoveredShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
};

const RaisedButton = React.createClass({
  getDefaultProps: function() {
    return {
      style: {},
      label: '',
      name: '',
      value: '',
      onClick: () => {}
    };
  },

  render: function() {
    const {style, label, onClick, name, value} = this.props;
    return (
      <ButtonBase
        label={label}
        style={merge({}, defaultStyle, style)}
        onClick={onClick}
        name={name}
        value={value}
      />
    );
  }
});

export default RaisedButton;
