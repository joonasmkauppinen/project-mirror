import React from 'react';
import PropTypes from 'prop-types';
import styles from './RadioButton.module.scss';

const RadioButton = ({ onChange, name, value, id }) => {
  return (
    <label htmlFor={id} className={styles.container}>
      <input
        onChange={onChange}
        id={id}
        type="radio"
        name={name}
        value={value}
      />
      <span className={styles.circle} />
      <p className={styles.text}>{value}</p>
    </label>
  );
};

RadioButton.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
};

export default RadioButton;
