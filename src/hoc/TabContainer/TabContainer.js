import React, { useRef } from 'react';
import classes from './TabContainer.module.scss';
import PropTypes from 'prop-types';
import handleScroll from '../../utils/scrollHandler';

const TabContainer = ({ active, children }) => {
  const ref = useRef(null);
  const style = active ? { display: 'block' } : { display: 'none' };
  return (
    <div
      ref={ref}
      onScroll={() => handleScroll(ref)}
      className={classes.tab}
      style={style}
    >
      {children}
    </div>
  );
};

TabContainer.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default TabContainer;
