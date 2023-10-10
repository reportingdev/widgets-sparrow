import React from 'react';
import PropTypes from 'prop-types';
import SparrowButton from './sparrowButton'
import './button.css'


export const Button = ({ loading, onChange, label, actionValue, color, variant, isDisabled, loadingIconColor  }:Widget) => {

    const onClick = () => {
      onChange?.({
        button: actionValue
      })
    };
    
    return (
      <SparrowButton 
        disabled={isDisabled} 
        loading={loading} 
        onClick={onClick} 
        color={color} 
        variant={variant} 
      >
        {label}
      </SparrowButton>
    );
  };

  Button.propTypes = {
    loading: PropTypes.bool,
    onChange: PropTypes.func,
    label: PropTypes.string,
    color: PropTypes.string,
    variant: PropTypes.string,
    isDisabled: PropTypes.bool,
    actionValue: PropTypes.string,
  };


  Button.defaultProps = {
    loading: false,
    onChange: ()=>{},
    label: "Learn more",
    color: '#866cff',
    variant: 'primary',
    isDisabled: false,
    actionValue: "Learn more"
  };