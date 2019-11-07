import React from 'react';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = ({
  label,
  superClass,
  onClick,
  secondary,
  style,
  id,
  disabled,
}) => {
  const classes = [styles.button];
  secondary ? classes.push(styles.secondary) : classes.push(styles.primary);
  disabled && classes.push(styles.disabled);
  superClass && classes.push(superClass);

  return (
    <div
      id={id}
      className={classes.join(' ')}
      onClick={!disabled ? onClick : undefined}
      style={style}
    >
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
  disabled: PropTypes.bool,
};

export default Button;
