import React from 'react';
import styles from './MessageList.module.scss';
import PropTypes from 'prop-types';
import LoadingIndicator from '../LoadingIndicator';
import Icons from '../../assets/Icons';

const messages = [
  {
    organization: 'Vamos',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum odio dolor, vitae feugiat lorem. ',
  },
  {
    organization: 'Espoon Kaupungin Nuorisotoiminta',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum odio dolor, vitae feugiat lorem. ',
  },
];

const MessageList = () => {
  //TODO: implement navigation to message page
  // eslint-disable-next-line no-unused-vars
  const openMessage = message => {};

  return (
    <>
      <LoadingIndicator loading={false} error={''}>
        <div className={styles.messagesContainer}>
          {messages.map(message => (
            <div
              key={message.organization}
              className={styles.message}
              onClick={() => {
                openMessage(message);
              }}
            >
              <div className={styles.icon}>{message.organization[0]}</div>
              <div className={styles.text}>
                <div className={styles.messageTitle}>
                  {message.organization}
                </div>
                <div className={styles.messageContent}>{message.content}</div>
              </div>
              <div className={styles.endIcon}>
                <Icons.back />
              </div>
            </div>
          ))}
        </div>
      </LoadingIndicator>
    </>
  );
};

MessageList.propTypes = {
  messages: PropTypes.array,
  error: PropTypes.bool,
  loading: PropTypes.string,
};

export default MessageList;
