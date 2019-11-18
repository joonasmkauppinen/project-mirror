import { combineReducers } from 'redux';
import { LOAD_USER, LOADING_USER, ERROR_USER } from './actions';

export function user(state = [], action) {
  switch (action.type) {
    case LOAD_USER:
      return action.user;
    default:
      return state;
  }
}

export function loading(state = false, action) {
  switch (action.type) {
    case LOADING_USER:
      return true;
    case LOAD_USER:
    case ERROR_USER:
      return false;
    default:
      return state;
  }
}

export function error(state = '', action) {
  switch (action.type) {
    case ERROR_USER:
      return action.error;
    case LOADING_USER:
    case LOAD_USER:
      return '';
    default:
      return state;
  }
}

export default combineReducers({
  user,
  loading,
  error,
});
