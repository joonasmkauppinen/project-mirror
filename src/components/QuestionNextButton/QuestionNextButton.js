import React from 'react';
import Icons from '../../assets/Icons';
import PropTypes from 'prop-types';
import styles from './QuestionNextButton.module.scss';

const QuestionNextButton = ({ label, onClick }) => (
  <div onClick={onClick} className={styles.container}>
    <text className={styles.text}>{label}</text>
    <Icons.arrowLongRight className={styles.arrow} />
  </div>
);

QuestionNextButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default QuestionNextButton;
