import React from 'react';
import styles from './Toolbar.module.scss';
import IconButton from '../IconButton';
import { ReactComponent as GoBackIcon } from '../../assets/outlined/back.svg';
import { ReactComponent as InfoIcon } from '../../assets/outlined/info.svg';
import PropTypes from 'prop-types';

const todo = () => {
  alert('todo!');
};

const goBack = () => {
  window.history.back();
};

const Toolbar = ({ title, back = true, info = false }) => {
  return (
    <div className={styles.toolbar}>
      <div className={styles.start}>
        {back === true && <IconButton Icon={GoBackIcon} onClick={goBack} />}
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.end}>
        {info === true && (
          <IconButton
            Icon={InfoIcon}
            onClick={todo}
            className={styles.toRight}
          />
        )}
      </div>
    </div>
  );
};

Toolbar.propTypes = {
  title: PropTypes.string,
  back: PropTypes.bool,
  info: PropTypes.bool,
};

export default Toolbar;
