import React from 'react';
import styles from './IconButton.module.scss';
import PropTypes from 'prop-types';

import { ReactComponent as InfoIcon } from '../../assets/svg/info.svg';
import { ReactComponent as CloseIcon } from '../../assets/svg/cross.svg';
import { ReactComponent as BackIcon } from '../../assets/svg/back.svg';
import { ReactComponent as SearchIcon } from '../../assets/svg/search_ic.svg';
import { ReactComponent as SettingsIcon } from '../../assets/svg/settings_ic.svg';

const ICONS = {
  info: InfoIcon,
  close: CloseIcon,
  back: BackIcon,
  search: SearchIcon,
  settings: SettingsIcon,
};
const iconNames = Object.keys(ICONS); // for proptypes

const IconButton = ({ icon, onClick, style, id, superClass }) => {
  const classes = [styles.iconButton];
  superClass && classes.push(superClass);
  const iconClasses = [styles.icon];
  const Icon = ICONS[icon];
  return (
    <div id={id} className={classes.join(' ')} onClick={onClick} style={style}>
      <div className={iconClasses}>{Icon && <Icon />}</div>
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
