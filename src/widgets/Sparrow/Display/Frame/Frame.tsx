import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Frame = ({ loading, url }:Widget) => {

  // use simple hash for unique title for iFrame
  const simpleHash = (str:string):string => {
    let hash = 0;
    if (str.length === 0) return hash+'';
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash |= 0; // Convert to a 32-bit integer
    }
    return hash+'';
}

const frameStyle = {
  width: '100%',
  height: '100%',
  border: 'none',
}

const iFrame = (
  <iframe 
    src={url} 
    title={simpleHash(url)} 
    style={frameStyle} 
    frameBorder="0"
    scrolling="no"
    referrerPolicy="no-referrer"
    sandbox="allow-scripts"
  >
  </iframe>
  );

const loadingPlaceholder = (
  <div style={{...frameStyle, backgroundColor: '#7e8b9d', opacity: 0.1}}></div>
)


  return loading ? loadingPlaceholder : iFrame;
};

Frame.propTypes = {
  loading: PropTypes.bool,
  url: PropTypes.string,
};

Frame.defaultProps = {
  loading: false,
  url: 'https://sparrowch.art/charts/3fc5a62c-bfd2-42a0-999f-caf97e1f95f2/0a92aa70-569b-4fe5-a478-9f297d4c3e6e',
};



