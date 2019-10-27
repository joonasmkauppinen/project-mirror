import React, { FC } from 'react';
import PropTypes from 'prop-types';
import styles from './Text.module.css';

const Text: FC = ({ children }) => <p className={styles.text}>{children}</p>;

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Text;
