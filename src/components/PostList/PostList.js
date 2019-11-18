import React, { useEffect } from 'react';
import styles from './PostList.module.scss';
import PropTypes from 'prop-types';
import Text from '../Text';
import LoadingIndicator from '../LoadingIndicator';
import Button from '../Button';

// eslint-disable-next-line no-unused-vars
const PostList = ({ posts, loading, error, loadPosts }) => {
  useEffect(() => {
    loadPosts();
  }, [loadPosts]);
  return (
    <>
      <h1 style={{ color: '#ffffff' }}>Posts</h1>
      <LoadingIndicator loading={false} error={error}>
        {posts.map(post => (
          <div key={post.id}>
            <div className={styles.postsContainer}>
              <Text>{post.teaser}</Text>
              <div>
                <Button
                  label={'action'}
                  onClick={() => {
                    console.log(post);
                  }}
                  style={{ width: '80px' }}
                />
              </div>
            </div>
          </div>
        ))}
      </LoadingIndicator>
    </>
  );
};

PostList.propTypes = {
  posts: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
  loadPosts: PropTypes.func,
};

export default PostList;
