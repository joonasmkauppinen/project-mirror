import React from 'react';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const Button = ({ label, handleClick, primary, secondary }) => {
  let classes = styles.button + ' ';
  classes += secondary ? styles.secondary : styles.primary;

  return (
    <div className={classes} onClick={handleClick}>
      <p>{label}</p>
    </div>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  handleClick: PropTypes.func,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
};

export default Button;
