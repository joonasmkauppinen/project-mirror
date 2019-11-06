import React from 'react';
import styles from './TextInput.module.scss';
import ErrorCard from '../../components/ErrorCard';
import PropTypes from 'prop-types';

const TextInput = ({
  type,
  label,
  value,
  style,
  onChange,
  autoFocus,
  superClass,
  placeholder,
  errorMessage,
}) => {
  const classes = [styles.container];
  superClass && classes.push(superClass);
  return (
    <div className={classes.join(' ')} style={style}>
      {label && <p>{label}</p>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        autoFocus={autoFocus}
        placeholder={placeholder}
      />
      {errorMessage && <ErrorCard message={errorMessage} />}
    </div>
  );
};

TextInput.propTypes = {
  type: PropTypes.oneOf([
    'tel',
    'text',
    'time',
    'date',
    'email',
    'password',
    'datetime-local',
  ]).isRequired,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  style: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  autoFocus: PropTypes.bool,
  superClass: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
};

export default TextInput;
