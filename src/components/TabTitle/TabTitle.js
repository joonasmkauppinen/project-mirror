import React from 'react';
import PropTypes from 'prop-types';
import styles from './TabTitle.module.scss';

const TabTitle = ({ children }) => {
  return <div className={styles.tabTitle}>{children}</div>;
};

TabTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default TabTitle;
