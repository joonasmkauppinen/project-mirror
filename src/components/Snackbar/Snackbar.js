import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Snackbar.module.scss';

// eslint-disable-next-line no-unused-vars
const Snackbar = ({ type, message, length }) => {
  const [isActive, setIsActive] = useState(true);
  let timeoutRef = useRef(null);
  const classes = [styles.snackbar, styles[type]];
  classes.push(type);
  isActive && classes.push(styles.show);
  useEffect(() => {
    if (timeoutRef) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsActive(false);
    }, 300000);
  }, []);
  return (
    <div className={classes.join(' ')}>
      <div className={styles.text}>{message}</div>
    </div>
  );
};

Snackbar.propTypes = {
  type: PropTypes.oneOf(['error', 'info', 'success', 'warning']),
  message: PropTypes.string,
  // TODO: set animation length using this prop
  length: PropTypes.number,
};

export default Snackbar;
