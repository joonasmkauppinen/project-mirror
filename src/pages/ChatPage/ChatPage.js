import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './ChatPage.module.scss';
import Toolbar from '../../components/Toolbar';
import { t } from '../../utils/translate';
import D from '../../utils/dictionary';
import PageContainer from '../../hoc/PageContainer';
import ScrollableContent from '../../hoc/ScrollableContent';

const ChatPage = () => {
  const history = useHistory();
  const handleOnBackClick = () => history.goBack();

  return (
    <PageContainer>
      <Toolbar
        onLeftIconClick={handleOnBackClick}
        leftIcon={'back'}
        title={t(D.CHAT.title)}
      />
      <ScrollableContent>
        <div className={styles.chatPageContent}>TEEEST</div>
      </ScrollableContent>
    </PageContainer>
  );
};

export default ChatPage;
