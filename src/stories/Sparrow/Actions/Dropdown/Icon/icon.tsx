import React from "react"
import Icon from "."
import PropTypes from 'prop-types';

export const SparrowIcon = ({ variant, color, cutomSize }:Widget) => {
    return <Icon variant={variant} color={color} className={cutomSize ? 'Icon--customSize':''}/>
}


SparrowIcon.propTypes = {
    variant: PropTypes.string,
    color:PropTypes.string,
    cutomSize:PropTypes.bool,
};
  
SparrowIcon.defaultProps = {
    variant: 'arrow',
    color:'purple',
    cutomSize:false,
};