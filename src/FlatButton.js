'use strict';

import React from 'react';
import merge from 'lodash.merge';

import ButtonBase from './ButtonBase';

const defaultStyle = {
  color: '#000000'
};

const FlatButton = React.createClass({
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

export default FlatButton;
