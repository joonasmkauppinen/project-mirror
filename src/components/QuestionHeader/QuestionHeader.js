import React from 'react';
import PropTypes from 'prop-types';
import styles from './QuestionHeader.module.scss';

const QuestionHeader = ({ children }) => (
  <div className={styles.header}>{children}</div>
);

QuestionHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default QuestionHeader;
