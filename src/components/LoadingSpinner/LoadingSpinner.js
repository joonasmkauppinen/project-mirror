import React from 'react';
import styles from './LoadingSpinner.module.scss';
import PropTypes from 'prop-types';

const LoadingSpinner = ({ style }) => (
  <div style={style} className={styles.spinner}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

LoadingSpinner.propTypes = {
  style: PropTypes.object,
};

export default LoadingSpinner;
