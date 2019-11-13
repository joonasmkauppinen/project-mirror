import { combineReducers } from 'redux';
import { LIKE_ORG, LOAD_ORGS, LOADING_ORGS, ERROR_ORGS } from './actions';

export function organizations(state = [], action) {
  switch (action.type) {
    case LIKE_ORG:
      return state;
    case LOAD_ORGS:
      return action.organizations;
    default:
      return state;
  }
}

export function loading(state = false, action) {
  switch (action.type) {
    case LOADING_ORGS:
      return true;
    case LOAD_ORGS:
    case ERROR_ORGS:
      return false;
    default:
      return state;
  }
}

export function error(state = false, action) {
  switch (action.type) {
    case ERROR_ORGS:
      return true;
    case LOADING_ORGS:
    case LOAD_ORGS:
      return false;
    default:
      return state;
  }
}

export default combineReducers({
  organizations,
  loading,
  error,
});
