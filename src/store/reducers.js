import { combineReducers } from 'redux';
import organizations from './organizations/reducers';
import tasks from './tasks/reducers';

export default combineReducers({
  organizations,
  tasks,
});
