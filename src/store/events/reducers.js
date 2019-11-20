import { combineReducers } from 'redux';
import { LOAD_EVENTS, LOADING_EVENTS, ERROR_EVENTS } from './actions';

export function events(state = [], action) {
  switch (action.type) {
    case LOAD_EVENTS:
      return action.events;
    default:
      return state;
  }
}

export function loading(state = false, action) {
  switch (action.type) {
    case LOADING_EVENTS:
      return true;
    case LOAD_EVENTS:
    case ERROR_EVENTS:
      return false;
    default:
      return state;
  }
}

export function error(state = '', action) {
  switch (action.type) {
    case ERROR_EVENTS:
      return action.error;
    case LOADING_EVENTS:
    case LOAD_EVENTS:
      return '';
    default:
      return state;
  }
}

export default combineReducers({
  events,
  loading,
  error,
});
