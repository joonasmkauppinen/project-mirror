import React from 'react';
import styles from './MessageList.module.scss';
import PropTypes from 'prop-types';
import LoadingIndicator from '../LoadingIndicator';
import Icons from '../../assets/Icons';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import D from '../../utils/dictionary';
import { t } from '../../utils/translate';

const MessageList = ({ messages, error }) => {
  const history = useHistory();
  // eslint-disable-next-line no-unused-vars
  const openMessage = message => {
    history.push({
      pathname: `/message/${message.id}`,
      state: message,
    });
  };

  return (
    <>
      <LoadingIndicator loading={false} error={error}>
        <div className={styles.messagesContainer}>
          {messages.map(message => (
            <div
              key={message.organization}
              className={styles.message}
              onClick={() => {
                openMessage(message);
              }}
            >
              <div className={styles.icon}>{message.organization.name[0]}</div>
              <div className={styles.text}>
                <div className={styles.messageTitle}>
                  {message.organization.name}
                </div>
                <div className={styles.messageContent}>{message.from.name}</div>
              </div>
              <div style={{ flex: 1 }} />
              <div className={styles.endIcon}>
                <div>{moment(message.time.iso8601).format('MMM D')}</div>
                <Icons.back />
              </div>
            </div>
          ))}
          {messages.length === 0 && (
            <div className={styles.noMessages}>{t(D.CHAT.noMessages)}</div>
          )}
        </div>
      </LoadingIndicator>
    </>
  );
};

MessageList.propTypes = {
  messages: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default MessageList;
