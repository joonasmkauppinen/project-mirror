import { combineReducers } from 'redux';
import organizations from './organizations/reducers';
import tasks from './tasks/reducers';
import posts from './posts/reducers';
import gauges from './gauges/reducers';

export default combineReducers({
  organizations,
  tasks,
  posts,
  gauges,
});
