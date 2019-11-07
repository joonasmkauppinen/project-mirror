import React from 'react';
import PropTypes from 'prop-types';
import styles from './PageContainer.module.scss';

const PageContainer = ({ children }) => {
  const classes = [styles.container];
  const hasToolbar = children[0].type.name === 'Toolbar';
  hasToolbar && classes.push(styles.accountForToolbar);
  return <div className={classes.join(' ')}>{children}</div>;
};

PageContainer.propTypes = {
  children: PropTypes.node,
};

export default PageContainer;
