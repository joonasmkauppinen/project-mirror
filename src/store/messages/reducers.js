import { combineReducers } from 'redux';
import { LOAD_MESSAGES, LOADING_MESSAGES, ERROR_MESSAGES } from './actions';

export function messages(state = [], action) {
  switch (action.type) {
    case LOAD_MESSAGES:
      return action.messages;
    default:
      return state;
  }
}

export function loading(state = false, action) {
  switch (action.type) {
    case LOADING_MESSAGES:
      return true;
    case LOAD_MESSAGES:
    case ERROR_MESSAGES:
      return false;
    default:
      return state;
  }
}

export function error(state = '', action) {
  switch (action.type) {
    case ERROR_MESSAGES:
      return action.error;
    case LOADING_MESSAGES:
    case LOAD_MESSAGES:
      return '';
    default:
      return state;
  }
}

export default combineReducers({
  messages,
  loading,
  error,
});
