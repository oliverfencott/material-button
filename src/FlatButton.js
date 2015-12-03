'use strict';

import React from 'react/addons';

import ButtonBase from './ButtonBase';

const defaultStyle = {
  color: '#000000'
};

const FlatButton = React.createClass({
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

export default FlatButton;
