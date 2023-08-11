import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Frame = ({ loading, url }:Widget) => {

  return (
    <iframe src={url}>
    </iframe>
  );
};

Frame.propTypes = {
  loading: PropTypes.bool,
  url: PropTypes.string,
};

Frame.defaultProps = {
  loading: false,
  url: PropTypes.string,
};



