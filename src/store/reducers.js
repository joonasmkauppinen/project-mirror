import { combineReducers } from 'redux';
import organizations from './organizations/reducers';
import tasks from './tasks/reducers';
import posts from './posts/reducers';

export default combineReducers({
  organizations,
  tasks,
  posts,
});
