import React from 'react';
import Icons from '../../assets/Icons';
import PropTypes from 'prop-types';
import styles from './ErrorCard.module.scss';

const ErrorCard = ({ message }) => (
  <div className={styles.container}>
    <Icons.alert className={styles.icon} />
    <p>{message}</p>
  </div>
);

ErrorCard.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorCard;
