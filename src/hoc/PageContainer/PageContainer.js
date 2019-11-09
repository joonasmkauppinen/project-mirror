import React from 'react';
import PropTypes from 'prop-types';
import styles from './PageContainer.module.scss';

const PageContainer = ({ children }) => (
  <div className={styles.pageContainer}>{children}</div>
);

PageContainer.propTypes = {
  children: PropTypes.node,
};

export default PageContainer;
