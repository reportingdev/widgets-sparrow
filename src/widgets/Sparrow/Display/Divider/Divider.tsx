import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Divider = ({ loading, type, height, color }:Widget) => {

  let isRounded = false;
  if(type === 'rounded') {
    isRounded = true;
    type = 'solid';
  }
  const dividerStyle:any = {
    border: 0,
    borderTop: `${height ?? '3px'} ${type ?? 'solid'} ${color}`,
  };

  if(isRounded) {
    dividerStyle.borderRadius = height;
  }

  return (
    <hr style={dividerStyle}>
    </hr>
  );
};

Divider.propTypes = {
  loading: PropTypes.bool,
  type: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};

Divider.defaultProps = {
  loading: false,
  type: 'solid',
  height: '3px',
  color: '#7E8B9D'
};



