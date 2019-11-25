import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import TabContainer from '../../../hoc/TabContainer';
import { t } from '../../../utils/translate';
import TabTitle from '../../../components/TabTitle';
import IconButton from '../../../components/IconButton';

const ChatTab = ({ visible }) => {
  return (
    <TabContainer active={visible}>
      <TabTitle>
        <Header>{t('TABS.chat')}</Header>
        <IconButton
          icon={'robot'}
          onClick={() => {}}
          style={{ marginRight: '-16px' }}
        />
      </TabTitle>
      <Text>This is the chat tab</Text>
    </TabContainer>
  );
};

ChatTab.propTypes = {
  visible: PropTypes.bool,
};

export default ChatTab;
