import React from 'react';
import styles from './PostList.module.scss';
import PropTypes from 'prop-types';
import LoadingIndicator from '../LoadingIndicator';
import Subheader from '../Subheader';
import Card from '../Card';
import Icons from '../../assets/Icons';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { t } from '../../utils/translate';
import D from '../../utils/dictionary';

// eslint-disable-next-line no-unused-vars
const PostList = ({ posts, loading, error, orgs }) => {
  const history = useHistory();
  const handlePostClick = event => {
    history.push({
      pathname: `/posts/${event.id}`,
      state: event,
    });
  };
  return (
    <>
      <Subheader>{t(D.HOME.posts)}</Subheader>
      <LoadingIndicator loading={false} error={error}>
        <div className={styles.postsContainer}>
          {posts.map(post => (
            <div
              key={post.id}
              className={styles.post}
              onClick={() => {
                handlePostClick(post);
              }}
            >
              <Card>
                <div className={styles.postHeader}>
                  <div className={styles.postTitle}>
                    <OrgImage orgs={orgs} post={post} />
                    <p>{post.organization}</p>
                    <Icons.peiliFilled />
                  </div>
                </div>
                {post.image && (
                  <img
                    className={styles.postImage}
                    src={post.image}
                    alt="post"
                  />
                )}
                <div className={styles.postContent}>
                  <div className={styles.time}>
                    {moment(post.published).fromNow()}
                  </div>
                  <div className={styles.teaser}>{post.teaser}</div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </LoadingIndicator>
    </>
  );
};

PostList.propTypes = {
  posts: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
  orgs: PropTypes.array,
};

const OrgImage = ({ orgs, post }) => {
  const org = orgs.find(x => x.id === post.organization_id);
  if (org && org.image) {
    return (
      <div className={styles.orgImageContainer}>
        <img src={org.image} alt="organization" className={styles.orgImage} />
      </div>
    );
  } else {
    // TODO: replace with placeholder icon
    return <Icons.peili className={styles.orgImage} />;
  }
};

OrgImage.propTypes = {
  orgs: PropTypes.array,
  post: PropTypes.object,
};

export default PostList;
