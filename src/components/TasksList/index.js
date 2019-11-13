import TaskList from './TaskList';
import { connect } from 'react-redux';
import { pick } from 'lodash-es';
import { loadTasks } from '../../store/tasks/actions';

function mapStateToProps(state) {
  return pick(state.tasks, ['tasks', 'loading', 'error']);
}

const mapDispatchToProps = {
  loadTasks,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskList);
