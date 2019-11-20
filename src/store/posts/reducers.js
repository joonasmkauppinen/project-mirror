import { combineReducers } from 'redux';
import { LOAD_POSTS, LOADING_POSTS, ERROR_POSTS } from './actions';

export function posts(state = [], action) {
  switch (action.type) {
    case LOAD_POSTS:
      return action.posts;
    default:
      return state;
  }
}

export function loading(state = false, action) {
  switch (action.type) {
    case LOADING_POSTS:
      return true;
    case LOAD_POSTS:
    case ERROR_POSTS:
      return false;
    default:
      return state;
  }
}

export function error(state = '', action) {
  switch (action.type) {
    case ERROR_POSTS:
      return action.error;
    case LOADING_POSTS:
    case LOAD_POSTS:
      return '';
    default:
      return state;
  }
}

export default combineReducers({
  posts,
  loading,
  error,
});
