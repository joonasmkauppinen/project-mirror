import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import IconButton from '../../../components/IconButton';
import TabContainer from '../../../hoc/TabContainer';

const test = () => {
  console.log('Test');
};

const DiscoverTab = ({ visible }) => (
  <TabContainer active={visible}>
    <Header>Discover</Header>
    <Text>This is the discover tab</Text>
    <IconButton onClick={test} icon={'info'} />
  </TabContainer>
);

DiscoverTab.propTypes = {
  visible: PropTypes.bool,
};

export default DiscoverTab;
