import React from 'react';
import styles from './Toggle.module.scss';
import PropTypes from 'prop-types';

const Toggle = ({ isOn, handleToggle }) => {
  return (
    <div className={styles.toggle}>
      <input
        checked={isOn}
        onChange={handleToggle}
        className={styles.checkbox}
        id={`toggle`}
        type="checkbox"
      />
      <label
        className={styles.toggleLabel + ' ' + (isOn ? styles.active : '')}
        htmlFor={`toggle`}
      >
        <span className={styles.toggleButton} />
      </label>
    </div>
  );
};

Toggle.propTypes = {
  isOn: PropTypes.bool,
  handleToggle: PropTypes.func,
};

export default Toggle;
