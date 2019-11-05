import React from 'react';
import styles from './TextInput.module.scss';
import ErrorCard from '../../components/ErrorCard';
import PropTypes from 'prop-types';

const TextInput = ({
  value,
  label,
  placeholder,
  onChange,
  type,
  errorMessage,
  superClass,
  style,
}) => {
  const classes = [styles.container];
  superClass && classes.push(superClass);
  return (
    <div className={classes.join(' ')} style={style}>
      {label && <p>{label}</p>}
      <input
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
      />
      {errorMessage && <ErrorCard message={errorMessage} />}
    </div>
  );
};

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  superClass: PropTypes.string,
  style: PropTypes.object,
};

export default TextInput;
