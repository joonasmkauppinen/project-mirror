import React from 'react';
import styles from './IconButton.module.scss';
import PropTypes from 'prop-types';

const IconButton = ({ Icon, onClick, style, id, superClass }) => {
  const classes = [styles.iconButton];
  superClass && classes.push(superClass);
  const iconClasses = [styles.icon];
  return (
    <div id={id} className={classes.join(' ')} onClick={onClick} style={style}>
      <div className={iconClasses}>
        <Icon />
      </div>
    </div>
  );
};

IconButton.propTypes = {
  Icon: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
  id: PropTypes.string,
  superClass: PropTypes.string,
};

export default IconButton;
