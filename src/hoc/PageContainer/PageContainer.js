import React from 'react';
import PropTypes from 'prop-types';
import styles from './PageContainer.module.scss';

const PageContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

PageContainer.propTypes = {
  children: PropTypes.node,
};

export default PageContainer;
