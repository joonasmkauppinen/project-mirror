import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Header from '../../../components/Header';
import TabContainer from '../../../hoc/TabContainer';
import { t } from '../../../utils/translate';
import TabTitle from '../../../components/TabTitle';
import IconButton from '../../../components/IconButton';
import MessageList from '../../../components/MessageList';

const ChatTab = ({ visible }) => {
  const history = useHistory();
  const handleChatClick = () => history.push('/chatbot');
  return (
    <TabContainer active={visible}>
      <TabTitle>
        <Header>{t('TABS.chat')}</Header>
        <IconButton
          icon={'robot'}
          onClick={handleChatClick}
          style={{ marginRight: '-16px' }}
        />
      </TabTitle>
      <MessageList />
    </TabContainer>
  );
};

ChatTab.propTypes = {
  visible: PropTypes.bool,
};

export default ChatTab;
