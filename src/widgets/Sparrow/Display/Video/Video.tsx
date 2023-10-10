import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from './videoPlayer';

/**
 * Primary UI component for user interaction
 */
export const Video = ({ loading, videoUrl, altText }:Widget) => {

  return (
    <VideoPlayer videoUrl={videoUrl} loading={loading} altText={altText} />
  );
};

Video.propTypes = {
  loading: PropTypes.bool,
  imageUrl: PropTypes.string,
  altText: PropTypes.string,
};

Video.defaultProps = {
  loading: false,
  imageUrl: PropTypes.string,
  altText: '',
};



