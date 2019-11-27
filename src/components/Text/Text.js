import React from 'react';
import PropTypes from 'prop-types';
import styles from './Text.module.scss';

const Text = ({ children, style }) => (
  <p style={style} className={styles.text}>
    {children}
  </p>
);

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  style: PropTypes.object,
};

export default Text;
