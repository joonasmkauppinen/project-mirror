import { apiCall } from '../../utils/apicall';

export const LOAD_POSTS = 'LOAD_POSTS';
export const LOADING_POSTS = 'LOADING_POSTS';
export const ERROR_POSTS = 'ERROR_POSTS';

export const loadPosts = () => async dispatch => {
  dispatch({ type: LOADING_POSTS });
  try {
    const { posts } = await apiCall('posts');
    dispatch({
      type: LOAD_POSTS,
      posts: posts,
    });
  } catch (e) {
    console.log(e);
    dispatch({ type: ERROR_POSTS, error: e });
  }
};
