import React from 'react';
import styles from './Toggle.module.scss';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash-es';

const Toggle = ({ isOn, handleToggle }) => {
  const id = uniqueId('toggle');
  return (
    <div className={styles.toggle}>
      <input
        checked={isOn}
        onChange={handleToggle}
        className={styles.checkbox}
        id={id}
        type="checkbox"
      />
      <label
        className={styles.toggleLabel + ' ' + (isOn ? styles.active : '')}
        htmlFor={id}
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
