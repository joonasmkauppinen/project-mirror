import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MessageDetailPage.module.scss';
import Toolbar from '../../components/Toolbar';
import PageContainer from '../../hoc/PageContainer';
import ScrollableContent from '../../hoc/ScrollableContent';
import { t } from '../../utils/translate';
import D from '../../utils/dictionary';
import moment from 'moment';
import Button from '../../components/Button';

// eslint-disable-next-line no-unused-vars
const MessageDetailPage = ({ loadPosts, posts }) => {
  const history = useHistory();
  const location = useLocation();
  const handleOnBackClick = () => history.goBack();
  const message = location.state;
  return (
    <PageContainer>
      <Toolbar
        onLeftIconClick={handleOnBackClick}
        leftIcon={'back'}
        title={message.from.name}
      />
      <ScrollableContent>
        <div className={styles.postPageContent}>
          <div className={styles.postItem}>
            <div className={styles.postTextContainer}>
              <div className={styles.header}>
                {t(D.POST_DETAILS.by_organization)}
              </div>
              <div className={styles.sender + ' ' + styles.description}>
                <div className={styles.icon}>
                  {message.organization.name[0]}
                </div>
                <div className={styles.sendContainer}>
                  {message.organization.name} - {message.from.name}
                  <div
                    className={styles.body}
                    style={{ textTransform: 'capitalize' }}
                  >
                    {moment(message.time.iso8601).format('MMM D HH:MM')}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.postItem}>
            <div className={styles.postTextContainer}>
              <div className={styles.header}>{t(D.CHAT.content)}</div>
              <div className={styles.body + ' ' + styles.description}>
                {message.message}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.postItem} style={{ paddingTop: '10px' }}>
          <Button label={t(D.CHAT.respond)} disabled />
        </div>
      </ScrollableContent>
    </PageContainer>
  );
};

MessageDetailPage.propTypes = {
  loadPosts: PropTypes.func,
  posts: PropTypes.array,
  likeOrg: PropTypes.func,
};

export default MessageDetailPage;
