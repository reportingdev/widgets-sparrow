import React from 'react';
import PropTypes from 'prop-types';
import Image from '.';



export const SparrowImage = ({ variant, alt }:Widget) => {
    let src;
    let placeholder;
    if(variant==='WithError'){
        src='invalid/path'
        placeholder= require('./images/placeholder.svg').default
    }else{
        src=require('../../Actions/Dropdown/images/facebook.svg').default
    }
    return <Image src={src} placeholder={placeholder} alt={alt}/>
  };
  
  SparrowImage.propTypes = {
    variant: PropTypes.string,
    alt:PropTypes.string,
  };
  
  SparrowImage.defaultProps = {
    variant: 'Default',
    alt:'Facebook',
  };