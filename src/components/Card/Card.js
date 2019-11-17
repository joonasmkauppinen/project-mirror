import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';

const Card = ({ children, id, style, superClass }) => {
  const classes = [styles.card];
  superClass && classes.push(superClass);
  return (
    <div id={id} style={style} className={classes.join(' ')}>
      {children}
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  superClass: PropTypes.string,
};

export default Card;
