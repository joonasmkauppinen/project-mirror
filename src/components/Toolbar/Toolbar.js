import React from 'react';
import styles from './Toolbar.module.scss';
import IconButton from '../IconButton';
import PropTypes from 'prop-types';

const Toolbar = ({
  title,
  leftIcon,
  rightIcon,
  leftIconClick,
  rightIconClick,
}) => {
  return (
    <div className={styles.toolbar}>
      {leftIcon && (
        <IconButton
          icon={leftIcon}
          onClick={leftIconClick}
          superClass={styles.toolbarIcon}
        />
      )}
      <div className={styles.title}>{title}</div>
      {rightIcon && (
        <IconButton
          icon={rightIcon}
          onClick={rightIconClick}
          superClass={styles.toolbarIcon}
        />
      )}
    </div>
  );
};

Toolbar.propTypes = {
  title: PropTypes.string,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  leftIconClick: PropTypes.func,
  rightIconClick: PropTypes.func,
};

export default Toolbar;
