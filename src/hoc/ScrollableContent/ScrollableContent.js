import React from 'react';
import PropTypes from 'prop-types';
import styles from './ScrollableContent.module.scss';

const ScrollableContent = ({ children, superClass }) => {
  const classes = [styles.scrollableContent];
  superClass && classes.push(superClass);
  return <div className={classes.join(' ')}>{children}</div>;
};

ScrollableContent.propTypes = {
  children: PropTypes.node.isRequired,
  superClass: PropTypes.string,
};

export default ScrollableContent;
