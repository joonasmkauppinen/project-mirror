import { combineReducers } from 'redux';
import { LOAD_GAUGES, LOADING_GAUGES, ERROR_GAUGES } from './actions';

export function gauges(state = [], action) {
  switch (action.type) {
    case LOAD_GAUGES:
      return action.gauges;
    default:
      return state;
  }
}

export function loading(state = false, action) {
  switch (action.type) {
    case LOADING_GAUGES:
      return true;
    case LOAD_GAUGES:
    case ERROR_GAUGES:
      return false;
    default:
      return state;
  }
}

export function error(state = '', action) {
  switch (action.type) {
    case ERROR_GAUGES:
      return action.error;
    case LOADING_GAUGES:
    case LOAD_GAUGES:
      return '';
    default:
      return state;
  }
}

export default combineReducers({
  gauges,
  loading,
  error,
});
