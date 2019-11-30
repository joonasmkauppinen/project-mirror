import React from 'react';
import styles from './Gauge.module.scss';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const Gauge = ({ percentage, title, gaugeBackground }) => {
  return (
    <div className={styles.gaugeContainer}>
      {title && <div className={styles.gaugeTitle}>{title}</div>}
      <div
        className={styles.gauge}
        style={{ backgroundColor: gaugeBackground }}
      >
        <div className={styles.filler} style={{ width: `${percentage}%` }}>
          <div className={styles.gaugeValue}>{percentage}%</div>
        </div>
      </div>
    </div>
  );
};

Gauge.propTypes = {
  percentage: PropTypes.number,
  gaugeBackground: PropTypes.string,
  title: PropTypes.string,
};

export default Gauge;
