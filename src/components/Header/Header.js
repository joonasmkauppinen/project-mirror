import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const Header = ({ children }) => <p className={styles.header}>{children}</p>;

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Header;
