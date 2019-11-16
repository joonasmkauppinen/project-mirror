import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Icons from '../../assets/Icons';
import styles from './Snackbar.module.scss';
import IconButton from '../IconButton';

const Snackbar = ({ type, message, length }) => {
  const [isActive, setIsActive] = useState(true);
  const classes = [styles.snackbar, styles[type]];
  classes.push(type);
  isActive && classes.push(styles.show);
  let Icon = Icons.infoFilled;
  if (type === 'success') {
    Icon = Icons.check;
  }
  useEffect(() => {
    let timer = setTimeout(() => {
      setIsActive(false);
    }, length * 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [length]);
  return (
    <div className={classes.join(' ')}>
      <div className={styles.icon}>
        <Icon />
      </div>
      <div className={styles.text}>{message}</div>
      <IconButton
        onClick={() => setIsActive(false)}
        icon="close"
        superClass={styles.btn}
      />
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
