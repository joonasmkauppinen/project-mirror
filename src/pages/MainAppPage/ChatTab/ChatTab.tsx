import React, { FC } from 'react';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import styles from '../../PageContainer.module.css';

const ChatTab: FC = () => (
  <div className={styles.container}>
    <Header>Chat tab</Header>
    <Text>This is the chat tab</Text>
  </div>
);

export default ChatTab;