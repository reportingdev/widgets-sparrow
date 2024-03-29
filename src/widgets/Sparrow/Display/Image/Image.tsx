import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Image = ({ loading, imageUrl, altText }:Widget) => {

  const imageStyle = {
    opacity: loading ? 0.5 : 1
  }

  return (
    <img src={imageUrl} alt={altText} style={imageStyle}>
    </img>
  );
};

Image.propTypes = {
  loading: PropTypes.bool,
  imageUrl: PropTypes.string,
  altText: PropTypes.string,
};

Image.defaultProps = {
  loading: false,
  imageUrl: PropTypes.string,
  altText: '',
};



