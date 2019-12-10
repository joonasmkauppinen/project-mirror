import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Header from '../../../components/Header';
import TabContainer from '../../../hoc/TabContainer';
import { t } from '../../../utils/translate';
import D from '../../../utils/dictionary';
import TabTitle from '../../../components/TabTitle';
import IconButton from '../../../components/IconButton';
import MessageList from '../../../components/MessageList';
import styles from './ChatTab.module.scss';

// eslint-disable-next-line no-unused-vars
const ChatTab = ({ visible, loadMessages, messages }) => {
  const history = useHistory();
  const handleChatClick = () => history.push('/chatbot');
  useEffect(() => {
    if (visible) {
      loadMessages();
    }
  }, [visible, loadMessages]);
  return (
    <TabContainer active={visible}>
      <TabTitle>
        <Header>{t(D.TABS.chat)}</Header>
        <IconButton
          icon={'robot'}
          onClick={handleChatClick}
          style={{ marginRight: '-16px' }}
        />
      </TabTitle>
      <ChatbotInfo />
      <MessageList messages={messages} />
    </TabContainer>
  );
};

ChatTab.propTypes = {
  visible: PropTypes.bool,
  loadMessages: PropTypes.func,
  messages: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

const ChatbotInfo = () => {
  const [hidden, setHidden] = useState(false);
  const init = localStorage.getItem('infobox');
  let showInfo = true;
  if (init) {
    showInfo = init === 'true';
  }
  const [show, setShow] = useState(showInfo);
  const classes = [styles.infoBox];
  hidden ? classes.push(styles.hidden) : classes.push(styles.visible);
  const hide = () => {
    setHidden(!hidden);
    localStorage.setItem('infobox', false);
    const timer = setTimeout(() => {
      setShow(!show);
    }, 500);
    return () => clearTimeout(timer);
  };

  return (
    <>
      {show && (
        <div className={classes.join(' ')}>
          <div className={styles.content}>
            {t(D.CHAT.info)}
            <div className={styles.confirm} onClick={hide}>
              {t(D.CHAT.confirm)}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatTab;
