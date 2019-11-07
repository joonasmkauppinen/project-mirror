import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import TabContainer from '../../../hoc/TabContainer';

const ChatTab = ({ visible }) => (
  <TabContainer active={visible}>
    <Header>Chat tab</Header>
    <Text>This is the chat tab</Text>
  </TabContainer>
);

ChatTab.propTypes = {
  visible: PropTypes.bool,
};

export default ChatTab;
