import React from 'react';
import { ReactComponent as AlertIcon } from '../../assets/filled/alert_ic.svg';
import PropTypes from 'prop-types';
import styles from './ErrorCard.module.scss';

const ErrorCard = ({ message }) => (
  <div className={styles.container}>
    <AlertIcon className={styles.icon} />
    <p>{message}</p>
  </div>
);

ErrorCard.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorCard;
