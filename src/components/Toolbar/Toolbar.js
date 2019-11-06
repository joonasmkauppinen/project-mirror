import React from 'react';
import styles from './Toolbar.module.scss';
import IconButton from '../IconButton';
import PropTypes from 'prop-types';

const Toolbar = ({
  title,
  leftIcon,
  rightIcon,
  onLeftIconClick,
  onRightIconClick,
}) => {
  return (
    <div className={styles.toolbar}>
      {leftIcon && (
        <IconButton
          icon={leftIcon}
          onClick={onLeftIconClick}
          superClass={styles.toolbarIcon}
        />
      )}
      <div className={styles.title}>{title}</div>
      {rightIcon && (
        <IconButton
          icon={rightIcon}
          onClick={onRightIconClick}
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
  onLeftIconClick: PropTypes.func,
  onRightIconClick: PropTypes.func,
};

export default Toolbar;
