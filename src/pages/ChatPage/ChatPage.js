import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './ChatPage.module.scss';
import Toolbar from '../../components/Toolbar';
import { t } from '../../utils/translate';
import D from '../../utils/dictionary';
import PageContainer from '../../hoc/PageContainer';
import ScrollableContent from '../../hoc/ScrollableContent';
import TextInput from '../../components/TextInput';
import { Formik, Form } from 'formik';
import Button from '../../components/Button';
import { apiCall } from '../../utils/apicall';
import { uniqueId } from 'lodash-es';

const ChatPage = () => {
  const history = useHistory();
  const [messages, setMessages] = useState([]);
  const [typingSpinner, setTypingSpinner] = useState(false);

  const handleOnBackClick = () => history.goBack();
  const handleSubmit = ({ chat }, { resetForm }) => {
    if (chat === '') return;
    const msg = {
      text: chat,
      mine: true,
      id: uniqueId(),
    };
    resetForm({ chat: '' });
    setMessages([...messages, msg]);
    const message = document.getElementById(msg.id);

    message.scrollIntoView({ behavior: 'smooth' });
    apiCall('message-send-chatbot', { chat_id: 1, message: chat })
      .then(res => {
        const response = {
          text: res.answer,
          mine: false,
          id: uniqueId(),
        };
        setTypingSpinner(true);
        message.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          setTypingSpinner(false);
          const message = document.getElementById(msg.id);
          setMessages([...messages, msg, response]);
          message.scrollIntoView({ behavior: 'smooth' });
        }, Math.random() * 3000 + 1);
      })
      .catch(err => console.log(err));
  };
  return (
    <PageContainer>
      <Toolbar
        onLeftIconClick={handleOnBackClick}
        leftIcon={'back'}
        title={t(D.CHAT.title)}
      />
      <ScrollableContent>
        <div className={styles.chatPageContent}>
          {messages.map(message => (
            <div key={message.id} id={message.id}>
              {message.mine ? (
                <div className={styles.chatItem + ' ' + styles.right}>
                  <div className={styles.chatBubble + ' ' + styles.mine}>
                    {message.text}
                  </div>
                </div>
              ) : (
                <div className={styles.chatItem + ' ' + styles.left}>
                  <div className={styles.chatBubble + ' ' + styles.theirs}>
                    {message.text}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        {typingSpinner && (
          <div className={styles.lds}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </ScrollableContent>
      <div className={styles.bottomInput}>
        <Formik
          onSubmit={handleSubmit}
          initialValues={{ chat: '' }}
          enableReinitialize={false}
        >
          <Form>
            <TextInput
              type={'text'}
              placeholder={t(D.CHAT.send)}
              autoFocus={true}
              name={'chat'}
            />
            <Button
              superClass={styles.hide}
              type="submit"
              label={''}
              disabled={typingSpinner}
            />
          </Form>
        </Formik>
      </div>
    </PageContainer>
  );
};

export default ChatPage;
