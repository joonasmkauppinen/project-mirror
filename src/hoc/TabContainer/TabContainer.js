import React from 'react';
import PropTypes from 'prop-types';

const TabContainer = ({ active, children }) => {
  const style = active ? { display: 'block' } : { display: 'none' };
  return <div style={style}>{children}</div>;
};

TabContainer.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default TabContainer;
