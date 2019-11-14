import { combineReducers } from 'redux';
import { LOAD_TASKS, LOADING_TASKS, ERROR_TASKS } from './actions';

export function tasks(state = [], action) {
  switch (action.type) {
    case LOAD_TASKS:
      return action.tasks;
    default:
      return state;
  }
}

export function loading(state = false, action) {
  switch (action.type) {
    case LOADING_TASKS:
      return true;
    case LOAD_TASKS:
    case ERROR_TASKS:
      return false;
    default:
      return state;
  }
}

export function error(state = '', action) {
  switch (action.type) {
    case ERROR_TASKS:
      return action.error;
    case LOADING_TASKS:
    case LOAD_TASKS:
      return '';
    default:
      return state;
  }
}

export default combineReducers({
  tasks,
  loading,
  error,
});
