import React from 'react';
import styles from './PostList.module.scss';
import PropTypes from 'prop-types';
import LoadingIndicator from '../LoadingIndicator';
import Subheader from '../Subheader';
import Card from '../Card';
import Icons from '../../assets/Icons';

// eslint-disable-next-line no-unused-vars
const PostList = ({ posts, loading, error }) => {
  console.log(posts);
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
                    <Icons.peili />
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
                  <div className={styles.time}>7 Years ago</div>
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
};

export default PostList;
