import React from 'react';
import styles from './Task.module.scss';
import PropTypes from 'prop-types';
import Icons from '../../assets/Icons';

const Task = ({ title, description, completed, points }) => {
  const classes = [styles.task];
  let icon = <Icons.doubleNext />;

  if (completed) {
    classes.push(styles.completed);
    icon = <Icons.checkCircle />;
  }
  return (
    <div className={classes.join(' ')}>
      <div className={styles.completedIndicator} />
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <div className={styles.title}>{title}</div>
          <div className={styles.teaser}>{description}</div>
        </div>
        <div className={styles.endContainer}>
          {icon}
          <div className={styles.points}>+{points}</div>
        </div>
      </div>
    </div>
  );
};

Task.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  completed: PropTypes.bool,
  points: PropTypes.number,
};

export default Task;
