import React from 'react';
import styles from './PostList.module.scss';
import PropTypes from 'prop-types';
import Text from '../Text';
import LoadingIndicator from '../LoadingIndicator';
import Button from '../Button';
import Subheader from '../Subheader';

// eslint-disable-next-line no-unused-vars
const PostList = ({ posts, loading, error }) => {
  return (
    <>
      <Subheader>Posts</Subheader>
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
};

export default PostList;
