import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import TabContainer from '../../../hoc/TabContainer';
import { t } from '../../../utils/translate';

const ChatTab = ({ visible }) => (
  <TabContainer active={visible}>
    <Header>{t('TABS.chat')}</Header>
    <Text>This is the chat tab</Text>
  </TabContainer>
);

ChatTab.propTypes = {
  visible: PropTypes.bool,
};

export default ChatTab;
