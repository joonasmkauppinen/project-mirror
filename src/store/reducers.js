import { combineReducers } from 'redux';
import organizations from './organizations/reducers';
import tasks from './tasks/reducers';
import posts from './posts/reducers';
import gauges from './gauges/reducers';
import user from './user/reducers';
import events from './events/reducers';
import history from './history/reducers';

export default combineReducers({
  organizations,
  tasks,
  posts,
  gauges,
  user,
  events,
  history,
});
