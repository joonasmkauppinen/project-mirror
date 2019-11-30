import { combineReducers } from 'redux';
import { LOAD_HISTORY, LOADING_HISTORY, ERROR_HISTORY } from './actions';

export function history(state = [], action) {
  switch (action.type) {
    case LOAD_HISTORY:
      return action.history;
    default:
      return state;
  }
}

export function loading(state = false, action) {
  switch (action.type) {
    case LOADING_HISTORY:
      return true;
    case LOAD_HISTORY:
    case ERROR_HISTORY:
      return false;
    default:
      return state;
  }
}

export function error(state = '', action) {
  switch (action.type) {
    case ERROR_HISTORY:
      return action.error;
    case LOADING_HISTORY:
    case LOAD_HISTORY:
      return '';
    default:
      return state;
  }
}

export default combineReducers({
  history,
  loading,
  error,
});
