import { combineReducers } from 'redux';
import { LIKE_ORG, STORE_ORGS, START_LOADING, RECORD_ERROR } from './actions';

export function organizations(state = [], action) {
  switch (action.type) {
    case LIKE_ORG:
      return state;
    case STORE_ORGS:
      return action.organizations;
    default:
      return state;
  }
}

export function loading(state = false, action) {
  switch (action.type) {
    case START_LOADING:
      return true;
    case STORE_ORGS:
    case RECORD_ERROR:
      return false;
    default:
      return state;
  }
}

export function error(state = false, action) {
  switch (action.type) {
    case RECORD_ERROR:
      return true;
    case START_LOADING:
    case STORE_ORGS:
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
