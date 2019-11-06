import React from 'react';
import styles from './IconButton.module.scss';
import PropTypes from 'prop-types';
import Icons from '../../assets/Icons';

const iconNames = Object.keys(Icons); // for proptypes

const IconButton = ({ icon, onClick, style, id, superClass }) => {
  const classes = [styles.iconButton];
  superClass && classes.push(superClass);
  const iconClasses = [styles.icon];
  const Icon = Icons[icon];
  return (
    <div id={id} className={classes.join(' ')} onClick={onClick} style={style}>
      <div className={iconClasses}>
        <Icon />
      </div>
    </div>
  );
};

IconButton.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.oneOf(iconNames).isRequired,
  style: PropTypes.object,
  onClick: PropTypes.func.isRequired,
  superClass: PropTypes.string,
};

export default IconButton;
