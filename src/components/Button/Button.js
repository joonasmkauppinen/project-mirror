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
  type,
}) => {
  const classes = [styles.button];
  secondary ? classes.push(styles.secondary) : classes.push(styles.primary);
  disabled && classes.push(styles.disabled);
  superClass && classes.push(superClass);

  return (
    <button
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      id={id}
      className={classes.join(' ')}
      style={style}
      type={type ? type : 'button'}
    >
      <p>{label}</p>
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  style: PropTypes.object,
  secondary: PropTypes.bool,
  superClass: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit']),
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
