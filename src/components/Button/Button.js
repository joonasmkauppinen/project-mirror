import React from 'react';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const Button = ({ label, handleClick, primary, secondary, style, id }) => {
  let classes = styles.button + ' ';
  classes += secondary ? styles.secondary : styles.primary;

  return (
    <div id={id} className={classes} onClick={handleClick} style={style}>
      <p>{label}</p>
    </div>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  handleClick: PropTypes.func,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  style: PropTypes.object,
  id: PropTypes.string,
};

export default Button;
