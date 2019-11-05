import React from 'react';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = ({ label, superClass, onClick, secondary, style, id }) => {
  const classes = [styles.button];
  secondary ? classes.push(styles.secondary) : classes.push(styles.primary);
  superClass && classes.push(superClass);

  return (
    <div id={id} className={classes.join(' ')} onClick={onClick} style={style}>
      <p>{label}</p>
    </div>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  style: PropTypes.object,
  secondary: PropTypes.bool,
  superClass: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
