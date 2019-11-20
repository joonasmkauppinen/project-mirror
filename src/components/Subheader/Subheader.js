import React from 'react';
import PropTypes from 'prop-types';
import styles from './Subheader.module.scss';

const Subheader = ({ children }) => (
  <div className={styles.header}>{children}</div>
);

Subheader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Subheader;
