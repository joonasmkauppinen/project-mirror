import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import IconButton from '../../../components/IconButton';
import TabContainer from '../../../hoc/TabContainer';
import Toggle from '../../../components/Toggle';

const test = () => {
  console.log('Test');
};

const DiscoverTab = ({ visible }) => {
  const [value, setValue] = useState(false);
  return (
    <TabContainer active={visible}>
      <Header>Discover</Header>
      <Text>This is the discover tab</Text>
      <IconButton onClick={test} icon={'info'} />
      <Toggle isOn={value} handleToggle={() => setValue(!value)} />
    </TabContainer>
  );
};

DiscoverTab.propTypes = {
  visible: PropTypes.bool,
};

export default DiscoverTab;
