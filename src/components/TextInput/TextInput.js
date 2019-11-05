import React from 'react';
import styles from './TextInput.module.scss';
import ErrorCard from '../../components/ErrorCard';
import PropTypes from 'prop-types';

const TextInput = ({ value, label, placeholder, onChange, type }) => {
  return (
    <div className={styles.container}>
      {label && <p>{label}</p>}
      <input
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
      />
      <ErrorCard />
    </div>
  );
};

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
