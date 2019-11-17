import React from 'react';

const ChildFactoryCreator = classNames => child =>
  React.cloneElement(child, { classNames });

export default ChildFactoryCreator;
