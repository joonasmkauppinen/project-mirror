import React, { useRef, useEffect } from 'react';
import styles from './Toolbar.module.scss';
import IconButton from '../IconButton';
import PropTypes from 'prop-types';
import Gauge from '../Gauges';

const Toolbar = ({
  title,
  leftIcon,
  rightIcon,
  taskProgress,
  onLeftIconClick,
  onRightIconClick,
}) => {
  const toolbar = useRef(null);
  useEffect(() => {
    toolbar.current.addEventListener('touchmove', e => {
      e.preventDefault();
    });
  }, []);

  return (
    <div className={styles.toolbar} ref={toolbar}>
      {leftIcon && (
        <IconButton
          icon={leftIcon}
          onClick={onLeftIconClick}
          superClass={styles.toolbarIcon}
        />
      )}
      {taskProgress !== undefined && (
        <Gauge percentage={taskProgress} gaugeBackground="#323338" />
      )}
      {title && <div className={styles.title}>{title}</div>}
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
  leftIcon: PropTypes.string.isRequired,
  rightIcon: PropTypes.string,
  taskProgress: PropTypes.number,
  onLeftIconClick: PropTypes.func.isRequired,
  onRightIconClick: PropTypes.func,
};

export default Toolbar;
