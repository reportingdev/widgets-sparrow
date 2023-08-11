import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Header = ({ loading, text, fontSize, fontColor, isBold }:Widget) => {

  const headerStyle = {
    fontFamily: "'Cera Pro', 'Nunito Sans', 'Helvetica Neue', Helvetica,  Arial, sans-serif",
    color: fontColor,
    fontSize,
    fontWeight: isBold ? 'bold' : 'normal'
  }

  return (
    <span style={headerStyle}>
      {text}
    </span>
  );
};

Header.propTypes = {
  loading: PropTypes.bool,
  text: PropTypes.string,
  fontSize: PropTypes.string,
  fontColor: PropTypes.string,
  isBold: PropTypes.bool
};

Header.defaultProps = {
  loading: false,
  text: 'Title',
  fontSize: '24px',
  fontColor: '#2C3039',
  isBold: true
};



