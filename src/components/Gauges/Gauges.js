import React, { useEffect } from 'react';
import styles from './Gauges.module.scss';
import PropTypes from 'prop-types';
import LoadingIndicator from '../LoadingIndicator';

const Gauges = ({ gauges, loading, error, loadGauges }) => {
  useEffect(() => {
    loadGauges();
  }, [loadGauges]);
  return (
    <>
      <LoadingIndicator loading={loading} error={error}>
        <div className={styles.gaugesContainer}>
          {gauges.map(
            gauge =>
              gauge.id /* TODO: Remove id check */ && (
                <div key={gauge.id}>
                  <div className={styles.gaugeContainer}>
                    <div className={styles.gaugeTitle}>{gauge.name}</div>
                    <div className={styles.gauge}>
                      <div
                        className={styles.filler}
                        style={{ width: `${gauge.value}%` }}
                      >
                        <div className={styles.gaugeValue}>{gauge.value}%</div>
                      </div>
                    </div>
                  </div>
                </div>
              ),
          )}
        </div>
      </LoadingIndicator>
    </>
  );
};

Gauges.propTypes = {
  gauges: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
  loadGauges: PropTypes.func,
};

export default Gauges;
