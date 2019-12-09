import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './PostDetailPage.module.scss';
import Toolbar from '../../components/Toolbar';
import PageContainer from '../../hoc/PageContainer';
import ScrollableContent from '../../hoc/ScrollableContent';
import { t } from '../../utils/translate';
import D from '../../utils/dictionary';

// eslint-disable-next-line no-unused-vars
const PostDetailPage = ({ loadPosts, posts }) => {
  const history = useHistory();
  const location = useLocation();
  const handleOnBackClick = () => history.goBack();
  const post = location.state;

  useEffect(() => {
    loadPosts(post.id);
  }, [loadPosts, post.id]);

  return (
    <PageContainer>
      <Toolbar
        onLeftIconClick={handleOnBackClick}
        leftIcon={'back'}
        title={post.title}
      />
      <ScrollableContent>
        {post.image && (
          <img
            src={post.image}
            alt="organization"
            className={styles.postImage}
          />
        )}
        <div className={styles.postPageContent}>
          <div className={styles.postItem}>
            <div className={styles.postTextContainer}>
              <div className={styles.header}>{t(D.POST_DETAILS.in_short)}</div>
              <div className={styles.body + ' ' + styles.description}>
                {post.teaser}
              </div>
            </div>
          </div>
          <div className={styles.postItem}>
            <div className={styles.postTextContainer}>
              <div className={styles.header}>
                {t(D.POST_DETAILS.by_organization)}
              </div>
              <div className={styles.body + ' ' + styles.description}>
                {post.organization}
              </div>
            </div>
          </div>
          <div className={styles.postItem}>
            <div className={styles.postTextContainer}>
              <div className={styles.header}>
                {t(D.EVENT_DETAILS.full_description)}
              </div>
              <div
                className={styles.body + ' ' + styles.description}
                dangerouslySetInnerHTML={{ __html: post.text }}
              />
            </div>
          </div>
        </div>
      </ScrollableContent>
    </PageContainer>
  );
};

PostDetailPage.propTypes = {
  loadPosts: PropTypes.func,
  posts: PropTypes.array,
  likeOrg: PropTypes.func,
};

export default PostDetailPage;
