import React from 'react';
import styles from './PostList.module.scss';
import PropTypes from 'prop-types';
import LoadingIndicator from '../LoadingIndicator';
import Subheader from '../Subheader';
import Card from '../Card';
import Icons from '../../assets/Icons';
import moment from 'moment';

// eslint-disable-next-line no-unused-vars
const PostList = ({ posts, loading, error, orgs }) => {
  return (
    <>
      <Subheader>Posts</Subheader>
      <LoadingIndicator loading={false} error={error}>
        <div className={styles.postsContainer}>
          {posts.map(post => (
            <div
              key={post.id}
              className={styles.post}
              onClick={() => {
                console.log('clicc');
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
  if (org.image) {
    return (
      <img src={org.image} alt="organization" className={styles.orgImage} />
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
