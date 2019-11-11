import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

const Header = ({ children }) => <div className={styles.header}>{children}</div>;

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Header;
